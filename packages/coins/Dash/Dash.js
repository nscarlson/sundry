import bip44 from 'services/bip44'
import Coin from 'services/platform/Coin'

const Dash = new Coin({
    messagePrefix: 'unused',
    bip32Public: 0x0488b21e,
    bip32Private: 0x0488ade4,
    bip44: bip44.DASH,
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc,
})

export default Dash
