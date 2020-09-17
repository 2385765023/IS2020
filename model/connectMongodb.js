const mongoose = require('mongoose')

mongoose.connect('mongodb://106.54.91.105/api',{ useNewUrlParser: true } )
    .then(()=>{console.log('数据库连接成功')})
    .catch((err)=>{console.log(err,'数据库连接失败')})