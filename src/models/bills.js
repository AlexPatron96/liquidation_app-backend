const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bills.init(sequelize, DataTypes);
}

class bills extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    num_Fact: {
      type: DataTypes.STRING(17),
      allowNull: false,
      unique: "bills_num_Fact_key"
    },
    isWhite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    status: {
      type: DataTypes.ENUM("abonada","pendiente","pagada"),
      allowNull: true,
      defaultValue: "pendiente"
    },
    fecha_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total_fact: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    detalle_adt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clients',
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
    }
  }, {
    sequelize,
    tableName: 'bills',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bills_num_Fact_key",
        unique: true,
        fields: [
          { name: "num_Fact" },
        ]
      },
      {
        name: "bills_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
