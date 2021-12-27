const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application_user', {
    idApplication_user: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true,
      defaultValue: 2, /*We need this because sequilize cannot insert NULL primary key) */
      /*
      get() {
        return uuid.unparse(this.getDataValue('idApplication_user'));
      }
       */
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
      allowNull: false,
      unique: true
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
      allowNull: false,
      unique: true
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
    }
  }, {
    sequelize,
    tableName: 'application_user',
    hasTrigger: true,
    timestamps: false, //Disable timestamp, I have my own TRIGGER for that
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idApplication_user" },
        ]
      },
    ],
    /*
    hooks: {
      beforeValidate: (user, options) => {
        user.mood = 'happy';
      },
      afterValidate: (user, options) => {
        user.username = 'Toni';
      }
    },
     */
  });
};

//Custom hooks
/*
export async function afterCreate(instance) {
  if (!instance.get) return;
  const originalID = instance.get('id');
  const [value] = await this.sequelize.query('SELECT BIN_TO_UUID(:binary, true) as uuidString', {
    type: this.sequelize.QueryTypes.SELECT,
    replacements: { binary: originalID },
  });
  instance.uuid = value.uuidString;
}

export async function beforeValidate(instance) {
  const [value] = await this.sequelize.query('SELECT UUID_TO_BIN(UUID(), true) as uuidBinary', {
    type: this.sequelize.QueryTypes.SELECT,
  });
  instance.id = value.uuidBinary;
}

export function afterFind(instances) {
  if (Array.isArray(instances)) {
    return Promise.all(instances.map(instance => afterCreate.call(this, instance)));
  }
  return afterCreate.call(this, instances);
}
 */
