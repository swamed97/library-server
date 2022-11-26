const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/LIBRARY",{
    useNewUrlParser:true,
})

const Admin = mongoose.model("Admins",{
    UserId:Number,
    UserName:String,
    Email:String,
    Password:Number,
    AccessCode:Number

})
const Book = mongoose.model("Books",{
    
    Bookname:String,
    Authorname:String,
    Type:String,
    AccessCode:Number
})

const Purchase = mongoose.model("Purchases",{
    Bookname:String,
    Authorname:String,
    Type:String,
    AccessCode:Number
})



module.exports = {Admin,Book,Purchase}