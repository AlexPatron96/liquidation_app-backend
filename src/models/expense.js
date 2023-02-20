const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return expense.init(sequelize, DataTypes);
}

class expense extends Sequelize.Model {
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
      unique: "expense_id_tabla_liq_key"
    },
    alimentacion: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    combustible: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vehiculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    peaje: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    detalle_adt: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expense',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "expense_id_tabla_liq_key",
        unique: true,
        fields: [
          { name: "id_tabla_liq" },
        ]
      },
      {
        name: "expense_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
