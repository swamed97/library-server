const db = require('./db')

const register = (UserId,UserName,Email,Password,AccessCode)=>{
    return db.Admin.findOne({UserId}).then((user)=>{
        console.log("uu",user)
        if(user){
            return{
                status:false,
                statusCode:400,
                message:"Already existing"
            }
        }
        else{
            const newuser = new db.Admin({
                UserId,
                UserName,
                Email,
                Password,
                AccessCode
            })
            newuser.save()
            return{
                status:true,
                statusCode:200,
                message:"Added"

            }
            
        }
    })
}




const login = (UserId,Password)=>{
    return db.Admin.findOne({UserId,Password}).then((user)=>{
        if(user){
                return{
                    status:true,
                    statusCode:200,
                    message:"Login successfull",
                    code:user.AccessCode
                }
        }
        else{
            return{
            status:false,
            statusCode:400,
            message:"Does not exist"
            }

        }
    })

}


module.exports = {register,login}