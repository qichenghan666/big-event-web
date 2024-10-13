//导入request.js请求工具
import request from '@/utils/request.js'
export const userRegisterService = (registerData)=>{
    const params = new URLSearchParams()
    for(let key in registerData){
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}

export const userLoginService = (loginData)=>{
    const params = new URLSearchParams()
    for(let key in loginData){
        params.append(key, loginData[key])
    }
    return request.post('/user/login', params)
}

//获取个人信息
export const userInfoGetService = ()=>{
    return request.get('/user/userInfo');
}
//修改个人信息
export const userInfoUpdateService = (userInfo)=>{
    return request.put('/user/update',userInfo)
}
//修改头像
export const userAvatarUpdateService=(avatarUrl)=>{
    let params = new URLSearchParams();
    params.append('avatarUrl',avatarUrl)
    return request.patch('/user/updateAvatar',params)
}