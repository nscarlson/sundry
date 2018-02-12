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

const LogService = {
    logLevel: DEFAULT_LOG_LEVEL,
}

Object.defineProperties(LogService, {
    logLevel: {
        writable: true,
    },

    trace: {
        value: function () {
            console.log(this.logLevel)
        },
    },
    info: {
        value: function () {}
    },
    warning: { value: function () {} },
    debug: { value: function () {} },
    error: { value: function () {} },
    off: { value: function () {} },
    critical: { value: function () {} },

    setLogLevel: { value: function (logLevel) { this.logLevel = logLevel } }
})
