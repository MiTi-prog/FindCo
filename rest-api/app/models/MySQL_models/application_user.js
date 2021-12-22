const Sequelize = require('sequelize');
const {getDataType} = require("sequelize-automate/src/util/definition");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application_user', {
    idApplication_user: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true,
      get() {
        const bit = getDataValue();
        return this.getDataValue(Buffer.from(uuidV4Bytes(16).replace('-', ''), 'hex'));
      },
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    date_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin','contractor','user'),
      allowNull: false
    },
    api_key: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    application_usercol: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    contraction_idContraction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'application_user',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idApplication_user" },
          { name: "contraction_idContraction" },
        ]
      },
    ]
  });
};
