import Coin from 'services/platform/Coin'

const Doge = new Coin({
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32Public: 0x02facafd,
    bip32Private: 0x02fac398,
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e
})

export default Doge
