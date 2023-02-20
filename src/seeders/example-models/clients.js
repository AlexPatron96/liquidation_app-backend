const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return clients.init(sequelize, DataTypes);
}

class clients extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dni: {
      type: DataTypes.STRING(13),
      allowNull: true,
      unique: "clients_dni_key"
    },
    id_sellers: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    }
  }, {
    sequelize,
    tableName: 'clients',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "clients_dni_key",
        unique: true,
        fields: [
          { name: "dni" },
        ]
      },
      {
        name: "clients_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
