module.exports = (sequelize, DataTypes) => {
    const msmart_prospectingActivity = sequelize.define("msmart_prospectingActivity", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        presentation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        followup: {
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

    return msmart_prospectingActivity
   };