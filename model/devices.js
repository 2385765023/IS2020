const mongoose = require('mongoose')

//  创建集合规则
const deviceSchema = new mongoose.Schema({
    //  型号规格
    model: {
        type: String,
        unique:true,  // 整个集合中唯一
        required: true
    },
    //  设备名称  
    name:{
        type:String
    },
    //  设备数量
    amount:{
        type:Number
    },
    //  计量单位    
    unit:{
        type:String
    },
    //  功率
    capacity:{
        type:String
    },
    //  说明
    description:{
        type:String
    },
    //  设备类型
    type:{
        type:String,
        required: true
    },
    //  设备图片    
    img:{
        type:String
    }
})

//  创建集合对象
const Device = new mongoose.model('Device',deviceSchema)

//  创建测试设备
// Device.create({
//     model:'others-SZ1',
//     name:'其他设备',
//     amount:1,
//     unit:'台',
//     capacity:'600W',
//     description:'双人乘坐使用，遥控控制行走，检测项目：轨枕不平顺、波磨',
//     type:'其他设备',
//     img:'1'
// }).then((doc)=>console.log(doc,'设备创建成功'))
// .catch((err)=>{console.log(err,'设备创建失败')})

//  导出
module.exports = {
    Device // 相当于Device：Device
}