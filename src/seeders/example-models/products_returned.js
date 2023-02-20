const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products_returned.init(sequelize, DataTypes);
}

class products_returned extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tabla_liq: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'liquidation_veh',
        key: 'cod_liq'
      },
      unique: "products_returned_id_tabla_liq_key"
    },
    mal_estado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rechazados: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    detalle_adt: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products_returned',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_returned_id_tabla_liq_key",
        unique: true,
        fields: [
          { name: "id_tabla_liq" },
        ]
      },
      {
        name: "products_returned_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
