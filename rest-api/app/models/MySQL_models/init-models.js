var DataTypes = require("sequelize").DataTypes;
var _application_user = require("./application_user");
var _company = require("./company");
var _contraction = require("./contraction");

function initModels(sequelize) {
  var application_user = _application_user(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var contraction = _contraction(sequelize, DataTypes);

  application_user.belongsToMany(application_user, { as: 'application_user_contraction_idContraction_application_users', through: company, foreignKey: "application_user_idApplication_user", otherKey: "application_user_contraction_idContraction" });
  application_user.belongsToMany(application_user, { as: 'application_user_idApplication_user_application_users', through: company, foreignKey: "application_user_contraction_idContraction", otherKey: "application_user_idApplication_user" });
  application_user.belongsToMany(company, { as: 'company_idCompany_companies', through: contraction, foreignKey: "application_user_idApplication_user", otherKey: "company_idCompany" });
  company.belongsToMany(application_user, { as: 'application_user_idApplication_user_application_user_contractions', through: contraction, foreignKey: "company_idCompany", otherKey: "application_user_idApplication_user" });
  company.belongsTo(application_user, { as: "application_user_idApplication_user_application_user", foreignKey: "application_user_idApplication_user"});
  application_user.hasMany(company, { as: "companies", foreignKey: "application_user_idApplication_user"});
  company.belongsTo(application_user, { as: "application_user_contraction_idContraction_application_user", foreignKey: "application_user_contraction_idContraction"});
  application_user.hasMany(company, { as: "application_user_contraction_idContraction_companies", foreignKey: "application_user_contraction_idContraction"});
  contraction.belongsTo(application_user, { as: "application_user_idApplication_user_application_user", foreignKey: "application_user_idApplication_user"});
  application_user.hasMany(contraction, { as: "contractions", foreignKey: "application_user_idApplication_user"});
  contraction.belongsTo(company, { as: "company_idCompany_company", foreignKey: "company_idCompany"});
  company.hasMany(contraction, { as: "contractions", foreignKey: "company_idCompany"});

  return {
    application_user,
    company,
    contraction,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
