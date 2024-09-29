module.exports = (sequelize, DataTypes) => {

    const cv = sequelize.define("cv", {
  
          id: {
  
            autoIncrement: true,
  
            type: DataTypes.BIGINT,
  
            allowNull: false,
  
            primaryKey: true
  
          },  
  
         name: {
  
            type: DataTypes.STRING(50),
  
            allowNull: true
  
          },
  
          work: {
  
            autoIncrement: false,
  
            type: DataTypes.TEXT,
  
            allowNull: false,
  
            primaryKey: false
  
          },
    }, {
  
      sequelize,
  
      tableName: 'cv',
  
      timestamps: true,
  
      indexes: [
  
        {
  
          name: "PRIMARY",
  
          unique: true,
  
          using: "BTREE",
  
          fields: [
  
            { name: "id" },
  
          ]
  
        },
  
      ]
  
    });
  
  
  
    return cv;
  
  }; 
  
  //blom tau