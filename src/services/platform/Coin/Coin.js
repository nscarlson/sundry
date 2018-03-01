class Coin {
    constructor ({
        bech32,
        bip32Private,
        bip32Public,
        displayName,
        messagePrefix,
        pubKeyHash,
        scriptHash,
        symbol,
        wif,
    }) {
        Object.assign(this, {
            bech32,
            bip32: {
                private: bip32Private,
                public: bip32Public,
            },
            displayName,
            messagePrefix,
            pubKeyHash,
            scriptHash,
            symbol,
            wif,
        })
    }

    get displayName () {
        return this.displayName
    }

    get messagePrefix () {
        return this.messagePrefix
    }

    get pubKeyHash () {
        return this.pubKeyHash
    }

    get scriptHash () {
        return this.scriptHash
    }

    get symbol () {
        return this.symbol
    }

    get wif () {
        return this.wif
    }
}

export default Coin
