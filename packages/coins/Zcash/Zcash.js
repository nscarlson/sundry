import bip44 from 'services/bip44'
import Coin from 'services/platform/Coin'

const Zcash = new Coin({
    magicPrefix: '\x19Zcash Signed Message:\n',
    bip32Public: 0x0488b21e,
    bip32Private: 0x0488ade4,
    bip44: bip44.ZEC,
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 128,
})

export default Zcash
