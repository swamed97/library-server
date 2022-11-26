const express = require('express')

const app = express()


const cors = require('cors')
app.use(cors({origin:"http://localhost:4200",}))


const dataservice = require('./service/dataservice')
const dashservice = require('./service/dashboardservice')



app.use(express.json())

app.get('/',(req,res)=>{
    res.send("get function checked")
})

app.post('/register',(req,res)=>{
  dataservice.register(req.body.userid,req.body.username,req.body.email,req.body.pswd,req.body.accesscode).then((result)=>{
    res.status(result.statusCode).json(result)
  })
})

app.post('/userregister',(req,res)=>{
  dataservice.userregister(req.body.userid,req.body.username,req.body.email,req.body.pswd).then((result)=>{
    res.status(result.statusCode).json(result)
  })
})

app.post('/login',(req,res)=>{
    dataservice.login(req.body.userid,req.body.pswd).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/userlogin',(req,res)=>{
  dataservice.userlogin(req.body.userid,req.body.pswd).then((result)=>{
      res.status(result.statusCode).json(result)
  })
})


app.post('/addbook',(req,res)=>{
    dashservice.addbook(req.body.bookname,req.body.authorname,req.body.type,req.body.accesscode).then((result)=>{
      res.status(result.statusCode).json(result)
    })
  })

  app.get('/show/:accesscode',(req,res)=>{
    dashservice.show(req.params.accesscode).then((result)=>{
      res.json(result)
    })
  })

  app.get('/usershow/:accesscode',(req,res)=>{
    dashservice.usershow(req.params.accesscode).then((result)=>{
      res.status(result.statusCode).json(result)
    })
  })
  
  app.delete('/deleted/:bookname/:authorname',(req,res)=>{
    dashservice.deleted(req.params.bookname,req.params.authorname).then((result)=>{
        res.json(result)
    })
  })

  app.delete('/purchase/:bookname/:authorname',(req,res)=>{
    dashservice.purchase(req.params.bookname,req.params.authorname).then((result)=>{
      res.status(result.statusCode).json(result)

    })
  })

  app.post('/purchaseitem',(req,res)=>{
    dashservice.purchaseitem(req.body.bookname,req.body.authorname,req.body.type,req.body.accesscode).then((result)=>{
      console.log("hh",result)
      res.status(result.statusCode).json(result)
    })
  })

  app.get('/itemshow/:AccessCode',(req,res)=>{
    dashservice.itemshow(req.params.AccessCode).then((result)=>{
      res.json(result)
    })
  })

  app.delete('/itemreturn/:bookname/:authorname',(req,res)=>{
    dashservice.itemreturn(req.params.bookname,req.params.authorname).then((result)=>{
      res.json(result)
    })
  })

  app.post('/returnitem',(req,res)=>{
    dashservice.returnitem(req.body.bookname,req.body.authorname,req.body.type,req.body.accesscode).then((result)=>{
      res.status(result.statusCode).json(result)

    })
  })

  app.get('/returns/:AccessCode',(req,res)=>{
    dashservice.returns(req.params.AccessCode).then((result)=>{
      res.json(result)
    })
  })


app.listen(3002, ()=>{
    console.log("port 3002 working")
})