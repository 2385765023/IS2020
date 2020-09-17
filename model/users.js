const mongoose = require('mongoose')

//  创建集合规则
const userSchema = new mongoose.Schema({
    //  工号
    id: {
        type: Number,
        unique:true,  // 整个集合中唯一
        required: true
    },
    //  姓名  
    name:{
        type:String
    },
    //  部门
    department:{
        type:String
    },
    //  职级
    rank:{
        type:String
    },
    //  班组
    group:{
        type:String
    },
    //  密码
    password:{
        type:String,
        required: true
    }
})

//  创建集合对象
const User = new mongoose.model('User',userSchema)

//  创建测试用户
// User.create({
//     id:2020692573,
//     name:'王胜',
//     department:'机电维修部',
//     rank:'一级检修工',
//     group:'机电维修1班',
//     password:'123'
// }).then((doc)=>console.log(doc,'用户创建成功'))
// .catch((err)=>{console.log(err,'用户创建失败')})

// User.create({
//     id:123,
//     name:'王胜123',
//     department:'机电维修部',
//     rank:'一级检修工',
//     group:'机电维修1班',
//     password:'123'
// }).then((doc)=>console.log(doc,'用户创建成功'))
// .catch((err)=>{console.log(err,'用户创建失败')})

//  导出
module.exports = {
    User // 相当于User：User
}