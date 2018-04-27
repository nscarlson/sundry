import bip44 from 'services/bip44'
import Coin from 'services/platform/Coin'

const Bitcoin = new Coin({
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32Public: 0x0488b21e,
    bip32Private: 0x0488ade4,
    bip44: bip44.BTC,
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
})

export default Bitcoin
