const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return liquidation_sellers.init(sequelize, DataTypes);
}

class liquidation_sellers extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id_sellers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sellers',
        key: 'id'
      }
    },
    id_route: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'route',
        key: 'id'
      }
    },
    fecha_liqui: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_liq: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "liquidation_sellers_cod_liq_key"
    },
    total_fact_cob: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_enviado: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_cob: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_no_cob: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_recibido: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cuadre: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    detalle_ad: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'liquidation_sellers',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "liquidation_sellers_cod_liq_key",
        unique: true,
        fields: [
          { name: "cod_liq" },
        ]
      },
      {
        name: "liquidation_sellers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
