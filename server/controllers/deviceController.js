const uuid  = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(request, response, next) {
        try {
        let {name, price, brandID, typeID, info} = request.body
        const {img} = request.files
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                DeviceInfo.create({
                    title:i.title,
                    description: i.description,
                    deviceID: device.id
                }))

            }
        const  device = await Device.create( {name, price, brandID, typeID, info, img: fileName})
        return response.json(device)
    }
    catch (e) {
            next(ApiError.badRequest(e.message))
    }
    }


    async getAll(request, response) {
        let {brandID, typeID, limit, page} = request.body
        page = page || 1
        limit = limit || 9
        let offset =page * limit - limit
        let devices
        if (!brandID && !typeID) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandID && !typeID) {
            devices = await Device.findAndCountAll({where:{brandID}, limit, offset})
        }
        if (!brandID && typeID) {
            devices = await Device.findAndCountAll({where:{typeID}, limit, offset})
        }
        if (brandID && typeID) {
            devices = await Device.findAndCountAll({where:{brandID, typeID}, limit, offset})
        }
        return response.json(devices)

    }

    async getOne(request, response) {
const {id} = request.params
        const device = await Device.findOne(
            {where:{id},
            include:[{model: DeviceInfo, as: 'info'}]}
        )
        return response.json(device  )
    }
}

module.exports = new DeviceController()