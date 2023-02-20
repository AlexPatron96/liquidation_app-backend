const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cuadre_veh.init(sequelize, DataTypes);
}

class cuadre_veh extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_veh: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vehicles',
        key: 'id'
      }
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuadre_veh',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cuadre_veh_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
