import Coin from 'services/platform/Coin'

const Clam = new Coin({
    messagePrefix: 'unused',
    bip32Public: 0xa8c26d64,
    bip32Private: 0xa8c17826,
    pubKeyHash: 0x89,
    scriptHash: 0x00,
    wif: 0x85,
})

export default Clam
