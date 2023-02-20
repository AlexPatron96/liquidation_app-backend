const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cash.init(sequelize, DataTypes);
}

class cash extends Sequelize.Model {
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
        model: 'liquidation_sellers',
        key: 'cod_liq'
      },
      unique: "cash_id_tabla_liq_key"
    },
    monedas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    efectivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    depositos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cheque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    detalle_adt: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cash',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cash_id_tabla_liq_key",
        unique: true,
        fields: [
          { name: "id_tabla_liq" },
        ]
      },
      {
        name: "cash_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
