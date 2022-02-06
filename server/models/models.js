const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})
const Backet = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const BacketDevice = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const Rating = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull:false},
})
const Device = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull:false},
    price: {type: DataTypes.INTEGER, allowNull:false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING,allowNull:false},
})
const Type = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull:false},
})
const Brand = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull:false},
})
const DeviceInfo = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull:false},
    description: {type: DataTypes.STRING, allowNull:false},
})

const TypeBrand = sequelize.define('type brand', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}
})

User.hasOne(Backet)
Backet.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Backet.hasMany(BacketDevice)
BacketDevice.belongsTo(Backet)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BacketDevice)
BacketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
BacketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through:TypeBrand})


module.exports = {
    User,
    Backet,
    BacketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}