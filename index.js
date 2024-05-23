global.foodData = require('./db')(function call(err, data, CatData) {
    // console.log(data)
    if(err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
  })
  
  const express = require('express')
  const cors=require('cors');
  const app = express()
  const port = 5000
  app.use(express.json())

  app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(cors({
    origin: ["*"],
    methods:["POST","GET"],
    credentials:true
  }))
  
  app.get('/', (req, res) => {
    res.json({message:'Backend working fine',
      success:true,
      error:false
    })
  })
  
  app.use('/api/auth', require('./Routes/Auth'));
  
  app.listen(port, () => {
    console.log(`Server started and is running on http://localhost:${port}`)
  })