module.exports = (sequelize, DataTypes) => {
    const msmartleads = sequelize.define("msmartleads", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        leadName: {
            type: DataTypes.STRING,
        },
        leadPhoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        leadTag: {
            type: DataTypes.STRING,
        },
        leadSource: {
            type: DataTypes.STRING,
        },
        leadStatus: {
            type: DataTypes.STRING,
            defaultValue: 'Prospecting',
        },
        prospectingRemark: {
            type: DataTypes.STRING(1000),
        },
        leadPresent: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        presentRemark: {
            type: DataTypes.STRING(1000),
        },
        con_addFB: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        con_followTT: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        con_savePhone: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        eng_facebook: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        eng_tiktok: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        eng_wsStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        closingStatus: {
            type: DataTypes.STRING,
        },
        rejectionType: {
            type: DataTypes.STRING,
        },
        rejectionRemark: {
            type: DataTypes.STRING(1000),
        },
        followUpDate: {
            type: DataTypes.DATE,
        },
        followUpRemark: {
            type: DataTypes.STRING(1000),
        },
        lastUpdate: {
            type: DataTypes.DATE,
          },
    });


    return msmartleads;

    };