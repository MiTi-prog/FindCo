const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contraction', {
    idContraction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    company_idCompany: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'idCompany'
      }
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
    tableName: 'contraction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idContraction" },
          { name: "company_idCompany" },
          { name: "application_user_idApplication_user" },
        ]
      },
      {
        name: "fk_contraction_company1_idx",
        using: "BTREE",
        fields: [
          { name: "company_idCompany" },
        ]
      },
      {
        name: "fk_contraction_application_user1_idx",
        using: "BTREE",
        fields: [
          { name: "application_user_idApplication_user" },
        ]
      },
    ]
  });
};
