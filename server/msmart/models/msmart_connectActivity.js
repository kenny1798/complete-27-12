module.exports = (sequelize, DataTypes) => {
    const msmart_connectActivity = sequelize.define("msmart_connectActivity", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        addFB: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        followTT: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        saveNumber: {
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

    return msmart_connectActivity
   };