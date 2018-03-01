import Coin from 'services/platform/Coin'

const clam = new Coin({
    messagePrefix: {
        value: 'unused',
    },
    bip32: {
        value: {
            public: 0xa8c26d64,
            private: 0xa8c17826
        },
    },
    pubKeyHash: {
        value: 0x89,
    },
    scriptHash: {
        value: 0x00,
    },
    wif: {
        value: 0x85,
    },
})

export default clam
