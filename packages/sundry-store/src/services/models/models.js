import Sequelize from 'sequelize'

const config = {
    dialect: 'sqlite',

    pool: {
        max: 1,
        min: 0,
    },

    storage: 'db.sqlite',

    operatorsAliases: false,
}

const sequelize = new Sequelize('sundry', 'root', 'password')
