const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    idCompany: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tax_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street_address: {
      type: DataTypes.STRING(45),
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
    logo_image: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    'region(location)': {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    line_of_work: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    application_user_idApplication_user: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'application_user',
        key: 'idApplication_user'
      }
    }
  }, {
    sequelize,
    tableName: 'company',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCompany" },
          { name: "application_user_idApplication_user" },
        ]
      },
      {
        name: "fk_company_application_user1_idx",
        using: "BTREE",
        fields: [
          { name: "application_user_idApplication_user" },
        ]
      },
    ]
  });
};
