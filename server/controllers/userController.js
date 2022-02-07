const ApiError = require('../error/ApiError')
class UserController {
    async registration (request, response) {

    }


    async login (request, response) {

}

    async check (request, response, next) {
const {id} = request.query
        if (!id){
           return next(ApiError.badRequest('не задан ID'))
        }
        response.json(id)
}
}
 module.exports = new UserController()