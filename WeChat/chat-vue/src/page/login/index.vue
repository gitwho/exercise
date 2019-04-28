<template>
    <div class="login">
        <div class="login_title">
          华云信息科技
        </div>
        <div v-show="isShow===0">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="pass">
              <el-input  v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <div class="login_tophone" @click="isShowFirst()">用手机号登陆</div>
            <div class="login_remember">
              <div>
                <input class="forget" type="checkbox" id="one" value="1" v-model="remember">
                <label for="one">记住密码</label>
              <!--<input class="forget" type="radio"><span>记住密码</span>-->
              </div>
              <div>
              <span>忘记密码？</span>
              </div>
            </div>
            <el-form-item>
              <el-button class="login_commit" type="primary" @click="toLogin('ruleForm2')">登陆</el-button>
              <el-button class="registerBtn" @click="register()">注册</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div v-show="isShow===1">
        <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phoneNum">
            <el-input  v-model="ruleForm1.phoneNum" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="codePass">
            <el-input class="codePass" v-model="ruleForm1.codePass" auto-complete="off"></el-input>
            <el-button class="codePassBtn" @click="setCodeFun()">{{codeShow=='获取验证码'?codeShow:(codeShow+'秒')}}</el-button>
          </el-form-item>
          <div class="login_tophone" @click="isShowTwo()">账号密码登陆</div>
          <el-form-item>
            <el-button class="login_commit" type="primary" @click="toLoginPhone('ruleForm1')">登陆</el-button>
            <el-button class="registerBtn" @click="register()">注册</el-button>
          </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<script>
  import {login,setCode,codeLogin} from '@/api/api'
  import {mapMutations } from 'vuex'
  import { MessageBox } from 'element-ui';
    export default {
      name: "login",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入账号'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
        var validatephoneNum = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入手机号'));
          } else {
            // if (this.ruleForm1.phoneNum !== '') {
            //   this.$refs.ruleForm1.validateField('phoneNum');
            // }
            callback();
          }
        };
        var validatecodePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请填写验证码'));
          } else {
            callback();
          }
        };
        return {
          codeShow:'获取验证码',
          remember:'',
          isShow:0,
          ruleForm1:{
            phoneNum: '',
            codePass: '',
         },
          rules1: {
            phoneNum: [
              { validator: validatephoneNum, trigger: 'blur' }
            ],
            codePass: [
              { validator: validatecodePass, trigger: 'blur' }
            ],
          },
          ruleForm2: {
            pass: '',
            checkPass: '',
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
          }
        };
      },
      computed:{

      },
      mounted(){
        if(localStorage.user){
          this.ruleForm2.pass = localStorage.user
          if(localStorage.password){
            this.ruleForm2.checkPass = localStorage.password
            this.remember = true
          }
        }
      },
      methods: {
        ...mapMutations(['SET_TOKEN']),
        register(){
          this.$router.push('./register')
        },
        codeTime(){
            const timer = setInterval(()=>{
              if(this.codeShow<1){
                clearInterval(timer);
                this.codeShow = '获取验证码'
              }else{
                this.codeShow--
              }
            },1000)


        },
        isShowFirst(){
          this.isShow=1
        },
        isShowTwo(){
          this.isShow=0
        },
        setCodeFun(){
          if(this.codeShow === '获取验证码'){
            if(this.ruleForm1.phoneNum.length === 11){
              setCode(this.ruleForm1.phoneNum).then(data=>{
                if(data.code===0){
                  this.codeShow = "60"
                  this.codeTime()
                }
              })
            }else{
              this.open('信息填写异常','请输入正确的手机号码！','error')
            }
          }

        },
        toLoginPhone(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              if(this.codeShow === '获取验证码'){
                // this.open('登陆成功','登陆成功，正在跳转 · · ·')
                this.open('错误提示','您的验证码已失效','error')
                return false
              }
              codeLogin({
                "ac":this.ruleForm1.phoneNum,
                "vc":this.ruleForm1.codePass
              }).then(data=>{
                if(data.code === 0){
                  this.SET_TOKEN({
                    token:data.data
                  })
                //   alert('基础验证通过!');
                  this.open('登陆成功','登陆成功，正在跳转 · · ·','success')
                  setTimeout(()=>{
                    this.$router.push('/')
                  },1000)
                // }else{
                //   alert(data.message)
                }
              }).then(err=>{
                console.log(err)
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        toLogin(formName){
            this.$refs[formName].validate((valid) => {
              if (valid) {
                login({
                  "ac":this.ruleForm2.pass,
                  "pwd":this.ruleForm2.checkPass
                }).then(data=>{
                  if(data.code === 0){
                    this.SET_TOKEN({
                      token:data.data
                    })
                    if(this.remember){
                      localStorage.user = this.ruleForm2.pass
                      localStorage.password = this.ruleForm2.checkPass
                    }else{
                      localStorage.removeItem('password')
                    }
                    this.open('登陆成功','登陆成功，正在跳转 · · ·','success')
                    // alert('基础验证通过!');
                    setTimeout(()=>{
                      this.$router.push('/')
                    },1000)

                  }else{
                    this.open('登陆失败',data.message,'error')
                  }
                })

              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          open(title,content,type) {
            MessageBox.alert(content,title, {
              confirmButtonText: '确认',
              type: type,//success，error，info和warning
              callback: action => {
              }
            })
            setTimeout(() => {
              MessageBox.close();
            }, 1000);
          }
        }
    }
</script>

<style scoped lang="less">
  .login{
    position: absolute;
    left: 50%;
    top:50%;
    width: 420px;
    height: 300px;
    margin: -235px 0 0 -210px;
    border: 1px solid yellow;
    box-shadow:-5px 0 10px gray, /*左边阴影*/
    5px 0 10px gray, /*右边阴影*/
    0 -5px 10px gray, /*顶部阴影*/
     0 5px 10px gray; /*底边阴影*/
    background-color:lightyellow;
  }
  .login>div:nth-child(2){
    /*width: 250px;*/
    margin:  20px auto 0 auto;
    /*border: 2px solid red;*/
  }
  .login>div:nth-child(3){
    /*width: 250px;*/
    margin:  20px auto 0 auto;
    /*border: 2px solid red;*/
  }
  .login_title{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #409EFF;
  }
  .login_msg>span{
    display: inline-block;
    width: 50px;
    height: 24px;
    line-height: 24px;
    float: left;
    /*border: 1px solid red;*/
  }
  .login_msg>input{
    float: left;
    height: 22px;
    width: 194px;
  }
  .login_isPassWord>div{
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
  .login_isPassWord>div:nth-child(1) input{
    margin-top: 2px;
  }
  .login_isPassWord>div:nth-child(2){
    float: right;
  }
  .login_remember{
    width: 250px;
    text-align: left;
    margin:10px 0 0 100px;
    .forget{
      vertical-align: top;
      margin-top: 2.5px;
    }
    div{
      display: inline-block;
    }
  }
  /*.login_remember>div{*/
   /**/
  /*}*/
  .login_remember>div:nth-child(2){
    float: right;
    cursor: pointer;
  }
  .login_commit{
    width: 120px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .registerBtn{
    width:115px;
  }
  .login_tophone{
    width: 100px;
    text-align: left;
    margin: -5px 0 0px 100px;
    color:#409EFF;
    cursor: pointer;
  }
  .codePass{
    float: left;
    width: 125px;
  }
  .codePassBtn{
    width: 115px;
    margin-left: 10px;
  }
</style>
