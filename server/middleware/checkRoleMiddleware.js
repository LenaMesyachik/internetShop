const jwt = require('jsonwebtoken')
module.exports = function(role) {
   return  function (request, response, next) {
        if (request.method === 'OPTIONS') {
            next()
        }
        try {
            const token = request.headers.authorization.split('')[1]
            if (!token) {
                return response.status(401).json({message: 'Пользователь не авторизован'})
            }
            const decodes = jwt.verify(token, process.env.SECRET_KEY)
            if (decodes.role !== role) {
                response.status(403).json({message: 'Нет доступа'})
            }
            request.user = decodes
            next()
        } catch (e) {
            response.status(401).json({message: 'Пользователь не авторизован'})
        }
    }
}