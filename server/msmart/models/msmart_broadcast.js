module.exports = (sequelize, DataTypes) => {
    const msmart_broadcast = sequelize.define("msmart_broadcast", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lid: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
    })

    return msmart_broadcast
   };