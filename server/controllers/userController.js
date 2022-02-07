class UserController {
    async registration (request, response) {

    }


    async login (request, response) {

}

    async check (request, response) {
const {id} = request.query
        response.json(id)
}
}
 module.exports = new UserController()