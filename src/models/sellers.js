const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return sellers.init(sequelize, DataTypes);
}

class sellers extends Sequelize.Model {
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
      type: DataTypes.STRING(30),
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    tableName: 'sellers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sellers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
