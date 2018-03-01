import Coin from 'services/platform/Coin'

const Namecoin = new Coin({
    messagePrefix: 'unused',
    bip32Public: 0x0488b21e,
    bip32Private: 0x0488ade4,
    pubKeyHash: 0x34,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0x80
})

export default Namecoin
