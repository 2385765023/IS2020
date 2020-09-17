//  登录请求处理函数

//  引入users集合
const { User } = require('../model/users')

module.exports = async (req, res) => {
    //  解构出工号和密码
    const { id, password } = req.body
    //  查询用户
    const user = await User.findOne({ id })
    console.log('login函数查询用户信息完毕')
    //  查询结果为空
    if (!user) return res.send({
        meta: {
            msg: "登录失败,请检查用户名或密码是否正确",
            status: 400
        }
    })
    //  密码错误
    if(password != user.password) return res.send({
        meta: {
            msg: "登录失败,请检查用户名或密码是否正确",
            status: 400
        }
    })
    //  登录成功
    //  将sessionid存储在请求对象中
    req.session.id=id
    res.send({
        data:{
            id:user.id,// 工号
            name:user.name
        },
        meta: {
            msg: "登录成功",
            status: 200
        }
    })
}