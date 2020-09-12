const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/api',{ useNewUrlParser: true } )
    .then(()=>{console.log('数据库连接成功')})
    .catch((err)=>{console.log(err,'数据库连接失败')})