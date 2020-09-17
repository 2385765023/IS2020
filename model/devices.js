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
/*
Device.create({
    model:'TS085-SZ',
    name:'轨道检测车',
    amount:1,
    unit:'台',
    capacity:'600W',
    description:'双人乘坐使用，遥控控制行走，检测项目：轨枕不平顺、波磨',
    type:'轨检设备',
    img:'1'
}).then((doc)=>console.log(doc,'设备创建成功'))
.catch((err)=>{console.log(err,'设备创建失败')})

Device.create({
    model:'010211',
    name:'双轨检测机器人',
    amount:2,
    unit:'台',
    capacity:'60W',
    description:'单人使用，遥控式智能行走、智能检测，自主检测项目：垂磨、波磨、扣件退镗',
    type:'轨检设备',
    img:'1'
}).then((doc)=>console.log(doc,'设备创建成功'))
.catch((err)=>{console.log(err,'设备创建失败')})

Device.create({
    model:'T010211',
    name:'坐式轨检车',
    amount:1,
    unit:'台',
    capacity:'60W',
    description:'双人乘坐使用，遥控控制行走，检测项目：弹条脱落、轨面不平顺',
    type:'轨检设备',
    img:'1'
}).then((doc)=>console.log(doc,'设备创建成功'))
.catch((err)=>{console.log(err,'设备创建失败')})

Device.create({
    model:'T010212',
    name:'轨道检测尺',
    amount:5,
    unit:'台',
    capacity:'600W',
    description:'单人使用，测量轨距、查照间隔和护背距离；垂向高度测量，包括钢轨水平和超高，作为线路的静态几何参数',
    type:'轨检设备',
    img:'1'
}).then((doc)=>console.log(doc,'设备创建成功'))
.catch((err)=>{console.log(err,'设备创建失败')})

Device.create({
    model:'basic-SZ1',
    name:'基础设备1',
    amount:1,
    unit:'台',
    capacity:'600W',
    description:'双人乘坐使用，遥控控制行走，检测项目：轨枕不平顺、波磨',
    type:'基础设备',
    img:'1'
}).then((doc)=>console.log(doc,'设备创建成功'))
.catch((err)=>{console.log(err,'设备创建失败')})

Device.create({
    model:'gongyi-SZ1',
    name:'工艺设备1',
    amount:1,
    unit:'台',
    capacity:'600W',
    description:'双人乘坐使用，遥控控制行走，检测项目：轨枕不平顺、波磨',
    type:'工艺设备',
    img:'1'
}).then((doc)=>console.log(doc,'设备创建成功'))
.catch((err)=>{console.log(err,'设备创建失败')})

Device.create({
    model:'jidian-SZ1',
    name:'机电设备1',
    amount:1,
    unit:'台',
    capacity:'600W',
    description:'双人乘坐使用，遥控控制行走，检测项目：轨枕不平顺、波磨',
    type:'机电设备',
    img:'1'
}).then((doc)=>console.log(doc,'设备创建成功'))
.catch((err)=>{console.log(err,'设备创建失败')})

*/

//  导出
module.exports = {
    Device // 相当于Device：Device
}