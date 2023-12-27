module.exports = (sequelize, DataTypes) => {
    const msmart_merit = sequelize.define("msmart_merit", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prospecting: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        connect: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        engagement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        result: {
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

    return msmart_merit
   };