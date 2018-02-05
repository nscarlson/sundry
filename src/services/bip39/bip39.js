import { Buffer } from 'safe-buffer'

import createHash from 'create-hash'
import { pbkdf2Sync as pbkdf2 } from 'pbkdf2'
import { randomBuffer } from 'secure-random'

// use unorm until String.prototype.normalize gets better browser support
import unorm from 'unorm'

import wordLists from './services/wordLists'

const INVALID_MNEMONIC = 'Invalid mnemonic'
const INVALID_ENTROPY = 'Invalid entropy'
const INVALID_CHECKSUM = 'Invalid mnemonic checksum'

const lpad = (str, padString, length) => {
    while (str.length < length) {
        str = padString + str
    }
    return str
}

const binaryToByte = (bin) => parseInt(bin, 2)

const bytesToBinary = (bytes) => bytes.map((x) =>
    lpad(x.toString(2), '0', 8)).join('')

const deriveChecksumBits = (entropyBuffer) => {
    let ENT = entropyBuffer.length * 8
    let CS = ENT / 32
    let hash = createHash('sha256').update(entropyBuffer).digest()

    console.log('deriveChecksumBits', bytesToBinary([].slice.call(hash)).slice(0, CS))
    return bytesToBinary([].slice.call(hash)).slice(0, CS)
}

const salt = (password) => password || ''

const mnemonicToSeed = (mnemonic, password) => {
    const mnemonicBuffer = Buffer.from(unorm.nfkd(mnemonic), 'utf8')
    const saltBuffer = Buffer.from(salt(unorm.nfkd(password)), 'utf8')

    return pbkdf2(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512')
}

const mnemonicToSeedHex = (mnemonic, password) =>
    mnemonicToSeed(mnemonic, password).toString('hex')

const mnemonicToEntropy = (mnemonic, language) => {
    const wordList = wordLists(language)

    let words = unorm.nfkd(mnemonic).split(' ')
    if (words.length % 3 !== 0) {
        throw new Error(INVALID_MNEMONIC)
    }

    // convert word indices to 11 bit binary strings
    const bits = words.map((word) => {
        let index = wordList.indexOf(word)
        if (index === -1) {
            throw new Error(INVALID_MNEMONIC)
        }

        return lpad(index.toString(2), '0', 11)
    }).join('')

    // split the binary string into ENT/CS
    const dividerIndex = Math.floor(bits.length / 33) * 32
    const entropyBits = bits.slice(0, dividerIndex)
    let checksumBits = bits.slice(dividerIndex)

    // calculate the checksum and compare
    const entropyBytes = entropyBits.match(/(.{1,8})/g).map(binaryToByte)
    if (entropyBytes.length < 16) {
        throw new Error(INVALID_ENTROPY)
    } else if (entropyBytes.length > 32) {
        throw new Error(INVALID_ENTROPY)
    } else if (entropyBytes.length % 4 !== 0) {
        throw new Error(INVALID_ENTROPY)
    }
    let entropy = Buffer.from(entropyBytes)
    let newChecksum = deriveChecksumBits(entropy)
    if (newChecksum !== checksumBits) throw new Error(INVALID_CHECKSUM)

    return entropy.toString('hex')
}

const entropyToMnemonic = (entropy, language) => {
    const wordList = wordLists(language)

    if (!Buffer.isBuffer(entropy)) entropy = Buffer.from(entropy, 'hex')

    // 128 <= ENT <= 256
    if (entropy.length < 16) {
        throw new TypeError(INVALID_ENTROPY)
    } else if (entropy.length > 32) {
        throw new TypeError(INVALID_ENTROPY)
    } else if (entropy.length % 4 !== 0) {
        throw new TypeError(INVALID_ENTROPY)
    }

    const entropyBits = bytesToBinary([].slice.call(entropy))
    const checksumBits = deriveChecksumBits(entropy)

    const bits = entropyBits + checksumBits
    const chunks = bits.match(/(.{1,11})/g)
    const words = chunks.map((binary) => wordList[binaryToByte(binary)])

    return language === 'japanese' ? words.join('\u3000') : words.join(' ')
}

const generateMnemonic = (strength, language) => {
    strength = strength || 256

    if (strength % 32 !== 0) {
        throw new TypeError(INVALID_ENTROPY)
    }

    return entropyToMnemonic(randomBuffer(strength / 8), language)
}

const validateMnemonic = (mnemonic, language) => {
    try {
        mnemonicToEntropy(mnemonic, language)
    } catch (e) {
        return false
    }

    return true
}

const bip39 = {
    entropyToMnemonic,
    generateMnemonic,
    mnemonicToSeed,
    mnemonicToSeedHex,
    mnemonicToEntropy,
    validateMnemonic,
}

export default bip39
