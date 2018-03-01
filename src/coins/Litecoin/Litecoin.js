import Coin from 'services/platform/Coin'

const Litecoin = new Coin({
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32Public: 0x019da462,
    bip32Private: 0x019d9cfe,
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
})

export default Litecoin
