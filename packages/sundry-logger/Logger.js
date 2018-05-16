const LogLevel = Object.freeze({
    Trace: 1,
    Debug: 2,
    Info: 3,
    Warning: 4,
    Error: 5,
    Critical: 6,
    Off: 7,
})

const DEFAULT_LOG_LEVEL = LogLevel.Info

const Logger = {
    logLevel: DEFAULT_LOG_LEVEL,
}

class Logger {
    constructor (logLevel) {
        this.logLevel = logLevel || DEFAULT_LOG_LEVEL
    }

    get logLevel () {
        return this.logLevel
    }
    set logLevel (logLevel) {
        this.logLevel = logLevel
    }

    trace () {}
    info () {}
    warning () {}
    debug () {}
    error () {}
    off () {}
    critical () {}
}

export default Logger
