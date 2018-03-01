import Coin from 'platform/Coin'

const BitcoinGold = new Coin({
    messagePrefix: 'unused',
    bip32Public: 0x0488b21e,
    bip32Private: 0x0488ade4,
    pubKeyHash: 38,
    scriptHash: 23,
    wif: 128
})

export default BitcoinGold
