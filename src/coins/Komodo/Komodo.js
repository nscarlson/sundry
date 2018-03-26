import bip44 from 'service/bip44'
import Coin from 'services/platform/Coin'

const Bitcoin = new Coin({
    messagePrefix: '\x18Komodo Signed Message:\n',
    bip32Public: 0x0488B21E,
    bip32Private: 0x0488ADE4,
    bip44: bip44.KMD,
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc
})

export default Bitcoin
