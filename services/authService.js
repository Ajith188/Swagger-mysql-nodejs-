const jwt = require('jsonwebtoken');


const authService = {
    async verifyUser(req){
        const username = req.body.email;
        const password = req.body.password;
        let response;
        try{
            if(username === "user@root.com" && password === "root"){
                response = {
                    data: {
                        username: username
                    }
                }
            };
        } catch(error){
            console.log(error);
        }
        return jwt.sign({user: response}, "Ajith188", {expiresIn: '1h'} );
    }
};
module.exports = authService;