import User from './models/user';

export const authenticate = (req,res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({username: username, password:password}).then(user => {
        if(!user){
            res.send("Enter valid credentials!")
        }
        else{
            console.log("Welcome user!")
            next();
        }
    })
}

export default authenticate;