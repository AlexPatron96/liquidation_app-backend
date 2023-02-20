const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return transaction.init(sequelize, DataTypes);
}

class transaction extends Sequelize.Model {
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
      allowNull: false
    },
    fecha_abono: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    abono: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    id_users: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id_bills: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bills',
        key: 'id'
      }
    },
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clients',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'transaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "transaction_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
