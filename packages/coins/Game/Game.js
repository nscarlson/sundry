import bip44 from 'services/bip44'
import Coin from 'services/platform/Coin'

const Game = new Coin({
    messagePrefix: 'unused',
    bip32Public: 0x0488b21e,
    bip32Private: 0x0488ade4,
    bip44: bip44.GAME,
    pubKeyHash: 0x26,
    scriptHash: 0x05,
    wif: 0xa6
})

export default Game
