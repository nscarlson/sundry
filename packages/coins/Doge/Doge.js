import Coin from 'services/platform/Coin'
import bip44 from 'service/bip44'

const Doge = new Coin({
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32Public: 0x02facafd,
    bip32Private: 0x02fac398,
    bip44: bip44.DOGE,
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e
})

export default Doge
