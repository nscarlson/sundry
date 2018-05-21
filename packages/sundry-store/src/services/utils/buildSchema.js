const buildSchema = (...args) =>
    args.reduce((schema, column) => Object.assign(schema, column), {})

export buildSchema
