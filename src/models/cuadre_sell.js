const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cuadre_sell.init(sequelize, DataTypes);
}

class cuadre_sell extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_sellers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sellers',
        key: 'id'
      }
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuadre_sell',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cuadre_sell_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
