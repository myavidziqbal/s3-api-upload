module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        name: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        image: DataTypes.STRING(255)
    })
}