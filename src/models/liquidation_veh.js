const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return liquidation_veh.init(sequelize, DataTypes);
}

class liquidation_veh extends Sequelize.Model {
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
    id_vehiculo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehicles',
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
    cod_liq: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "liquidation_veh_cod_liq_key"
    },
    fecha_liquidation: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total_fact_ent: {
      type: DataTypes.DOUBLE,
      allowNull: false
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
    total_ent: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_no_cob: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_no_ent: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_var: {
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
    tableName: 'liquidation_veh',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "liquidation_veh_cod_liq_key",
        unique: true,
        fields: [
          { name: "cod_liq" },
        ]
      },
      {
        name: "liquidation_veh_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
