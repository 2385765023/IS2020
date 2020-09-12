//  获取设备数据列表

//  引入devices集合
const { Device } = require('../../model/devices')

module.exports = async (req,res)=> {
    //  获得查询参数
    //  query:搜索关键字，可以为空
    //  pagenum:当前正在显示的页码，不能为空
    //  pagesize:每页显示条数，不能为空
    //  type:设备类型，可以为空
    const {query,pagenum,pagesize,type} = req.query

    //  检验pagenum和pagesize是否合法
    if (!pagenum || pagenum <= 0 ) return res.sendResult(null,400,'pagenum不合法')
    //  检验pagenum和pagesize是否合法
    if (!pagesize || pagesize <= 0 ) return res.sendResult(null,400,'pagesize不合法')
    
    //  构造条件查询参数,如果直接在find括号内些，当有些条件值为空时，会导致没有结果，因此需要手动判断，添加对应的查询条件
    var conditions = {};
    //  检查查询关键字query是否传入
    if (query.trim()) conditions["name"]=new RegExp(query.trim()) //通过正则实现模糊查询（非关系型），关系型数据库有like关键词
    //  检查设备类型type是否传入
    if (type.trim()) conditions["type"]=type.trim()

    //  返回的结果
    var result ={}
    //  当前页结果
    result['deviceList']  = await Device.find(conditions).skip((pagenum-1)*pagesize).limit(parseInt(pagesize))
    //  统计符合条件的结果个数
    result['total'] = await Device.find(conditions).countDocuments();
    //  返回当前页数
    result['pagenum'] = pagenum;
    res.sendResult(result,200,'获取设备列表成功')
}