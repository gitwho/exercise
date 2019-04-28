import axios from './http.js';
// const axios = new Axios;

console.log(axios)
const login =(data)=>{//账号密码登陆
  return axios.post('/user/login',data)
}
const codeLogin = (data)=>{//手机号登陆
  return axios.post('/user/loginSMS',data)
}
const register =(data)=>{//注册账号
  return axios.post('/user/register',data)
}
const setCode = (data)=>{//获取验证码
  return axios.get('/user/fetchCode/'+data)
}
const upPassword = (data)=>{//修改密码
  return axios.post('/user/editPassword',data)
}
const getMyMsg = (data)=>{//获取自己的信息
  return axios.get('/user/'+data)
}
const getAdress = (data)=>{//获取通讯录
  return axios.get('/userAddress/'+data)
}
const upMyMsg = (data)=>{//编辑用户自己资料
  return axios.post('/user/editUser',data)
}

const addAdress = (data)=>{//添加好友（目前接口有问题，下次调整）
  return axios.post('/userAddress/add',data)
}

export {
  login,
  register,
  setCode,
  codeLogin,
  getMyMsg,
  getAdress,
  addAdress,
  upMyMsg,
  upPassword
}
