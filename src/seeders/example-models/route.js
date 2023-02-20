const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return route.init(sequelize, DataTypes);
}

class route extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    detail: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("sin_ruta","lunes","martes","miercoles","jueves","viernes","sabado","domingo"),
      allowNull: true,
      defaultValue: "sin_ruta"
    }
  }, {
    sequelize,
    tableName: 'route',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "route_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
