const Wallet = (sequelize) => {
    const UserModel = sequelize.define(
        'Wallet',
        {},
        { paranoid: true, timestamps: true },
    )

    UserModel.toJson = function() {}

    return UserModel
}
