let Buffer = require('safe-buffer').Buffer
let bs58check = require('bs58check')
let bscript = require('./script')
let networks = require('./networks')
let typeforce = require('typeforce')
let types = require('./types')

function fromBase58Check (address) {
    let payload = bs58check.decode(address)
    if (payload.length < 21) throw new TypeError(address + ' is too short')
    if (payload.length > 21) throw new TypeError(address + ' is too long')

    let version = payload.readUInt8(0)
    let hash = payload.slice(1)

    return { hash: hash, version: version }
}

function toBase58Check (hash, version) {
    typeforce(types.tuple(types.Hash160bit, types.UInt8), arguments)

    let payload = Buffer.allocUnsafe(21)
    payload.writeUInt8(version, 0)
    hash.copy(payload, 1)

    return bs58check.encode(payload)
}

function fromOutputScript (outputScript, network) {
    network = network || networks.bitcoin

    if (bscript.pubKeyHash.output.check(outputScript)) {
        return toBase58Check(bscript.compile(outputScript).slice(3, 23), network.pubKeyHash)
    } else if (bscript.scriptHash.output.check(outputScript)) {
        return toBase58Check(bscript.compile(outputScript).slice(2, 22), network.scriptHash)
    }

    throw new Error(bscript.toASM(outputScript) + ' has no matching Address')
}

function toOutputScript (address, network) {
    network = network || networks.bitcoin

    let decode = fromBase58Check(address)
    if (decode.version === network.pubKeyHash) {
        return bscript.pubKeyHash.output.encode(decode.hash)
    }
    if (decode.version === network.scriptHash) {
        return bscript.scriptHash.output.encode(decode.hash)
    }

    throw new Error(address + ' has no matching Script')
}

module.exports = {
    fromBase58Check: fromBase58Check,
    fromOutputScript: fromOutputScript,
    toBase58Check: toBase58Check,
    toOutputScript: toOutputScript
}
