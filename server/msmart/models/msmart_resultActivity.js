module.exports = (sequelize, DataTypes) => {
    const msmart_resultActivity = sequelize.define("msmart_resultActivity", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        close: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        book: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        reject: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        day:{
            type: DataTypes.STRING,
        },
        week:{
            type: DataTypes.STRING,
        },
        month:{
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.STRING,
        }


    })

    return msmart_resultActivity
   };