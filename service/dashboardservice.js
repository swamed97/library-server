const db = require('./db')
const addbook = (Bookname,Authorname,Type,AccessCode)=>{
    return db.Admin.findOne({AccessCode}).then((Book)=>{
        console.log("gt",Book)
        if(Book){
        const newbook = new db.Book({
           
            Bookname,
            Authorname,
            Type,
            AccessCode
        })
        newbook.save()
        console.log("hd",newbook)
        return{
            statusCode:200,
            status:true,
            messsage:"book added"

        }
        }
        else{
            return{
                statusCode:400,
                status:false,
                messsage:"failed"
            }
        }
        
    })
       
} 

const show = (AccessCode)=>{
    return db.Book.find({AccessCode}).then((item)=>{
        if(item){
            console.log("oi",item)
            return{
                status:true,
            statusCode:200,
            messsage:"book are",
            books:item,
          

            }
        }
        else{
            return{
                status:false,
                statusCode:400,
                messsage:"not found"

            }
        }
    })
}

const usershow = (AccessCode)=>{
    return db.Book.findOne({AccessCode}).then((item)=>{
        if(item){
            return{
                status:true,
            statusCode:200,
            messsage:"book are",
            books:item,
            
            }
        }
        else{
            return{
                status:false,
                statusCode:400,
                messsage:"not found"

            }
        }
    })
}



const deleted = (Bookname,Authorname)=>{
    return db.Book.deleteOne({Bookname,Authorname}).then((book)=>{
        if(book){
            console.log("bbb",book)
             return{
                status:true,
            statusCode:200,
            messsage:"deleted",
           
             }
               
        }
       

    })
}
const purchase = (Bookname,Authorname)=>{
    return db.Book.deleteOne({Bookname,Authorname}).then((item)=>{
        if(item){
                return{
                    status:true,
                    statusCode:200,
                    messsage:"purchased"
                }
        }else{
            return{
                status:false,
                statusCode:400,
                messsage:"failed"
            }
        }
    })
}

const purchaseitem = (Bookname,Authorname,Type,AccessCode)=>{
    return db.Purchase.findOne({Bookname,Authorname}).then((item)=>{
        if(!item){
            const newpur = new db.Purchase({
                    
                Bookname,
                Authorname,
                Type,
                AccessCode
           })
           newpur.save()
            return{
                status:true,
                statusCode:200,
                messsage:"success"
            }
        }
        else{
            const newpur = new db.Purchase({
                    
                Bookname,
                Authorname,
                Type,
                AccessCode
           })
           newpur.save()
            
               
                return{
                    status:true,
                statusCode:200,
                messsage:"success"

                }
            
        }
    })
}

const itemshow = (AccessCode)=>{
  return db.Purchase.find({AccessCode}).then((item)=>{
    if(item){
        return {
            item:item
        }
    }
  })
}

const itemreturn = (Bookname,Authorname)=>{
    return db.Purchase.deleteOne({Bookname,Authorname}).then((item)=>{
        if(item){
            return{
                status:true,
                statusCode:200,
                messsage:"success",
                item
                
            }
        }
        else{
            return{
                status:true,
                statusCode:200,
                
            }
        }
    })
}

const returnitem = (Bookname,Authorname,Type,AccessCode)=>{
    return db.Book.findOne({Bookname,Authorname}).then((item)=>{
        if(item){
            const newitem = new db.Book({
                Bookname,
                Authorname,
                Type,
                AccessCode
            })
            newitem.save()
            return{
                status:true,
                statusCode:200,
                messsage:"Book returned"
            }
        }
        else{
            const newitem = new db.Book({
                Bookname,
                Authorname,
                Type,
                AccessCode
            })
            newitem.save()
            return{
                status:true,
                statusCode:200,
                messsage:"Book returned"
            }

        }
    })
}
const returns = (AccessCode)=>{
    return db.Book.find({AccessCode}).then((items)=>{
        if(items){
            return{
                item:items
            }
        }
    })
}



module.exports = {addbook,deleted,show,usershow,purchase,purchaseitem,itemshow,itemreturn,returnitem,returns}