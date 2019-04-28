<template>
  <div class="login">
    <div class="login_title">
      修改密码
    </div>
    <div>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="当前密码" prop="account">
          <el-input  v-model="ruleForm2.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="设置密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="again">
          <el-input type="password" v-model="ruleForm2.again" auto-complete="off"></el-input>
        </el-form-item>
        <!--<el-form-item label="设置昵称" prop="nickname">-->
          <!--<el-input  v-model="ruleForm2.nickname" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="性别" prop="sex">-->
          <!--<el-radio-group v-model="ruleForm2.sex">-->
            <!--<el-radio label="1">男</el-radio>-->
            <!--<el-radio label="2">女</el-radio>-->
          <!--</el-radio-group>-->
        <!--</el-form-item>-->
        <el-form-item>
          <el-button class="register" type="primary" @click="toRegister('ruleForm2')">注册</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  import {register} from "../../api/api";
  export default {
    name: "upPassword",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if(value.length !== 11){
            callback(new Error('您的手机号码不符合规则'));
          }else{
            if (this.ruleForm2.password !== '') {
              this.$refs.ruleForm2.validateField('password');
            }
            callback();
          }

        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          if(this.ruleForm2.again !== this.ruleForm2.password){
            callback(new Error('密码不一致'));
          }else{
            callback();
          }
        }
      };
      return {
        ruleForm2: {
          account: '',
          password: '',
          again:''
        },
        rules2: {
          account: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          again: [
            { validator: validatePass3, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      toRegister(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2)
            // alert('基础验证通过!');
            register(this.ruleForm2).then(data=>{
              console.log(data)
              if(data.code === 0){
                if(data.data === 'SUCCESS'){
                  alert('注册成功！')
                  this.$router.push('/login')
                }
              }else{
                alert(data.message)
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
    }
  }
</script>

<style scoped>
  .login{
    position: absolute;
    left: 50%;
    top:50%;
    width: 435px;
    height: 360px;
    margin: -235px 0 0 -210px;
    /*margin-top: 50px;*/
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
  .register{
    width: 250px;
    margin-top: 20px;
    border-radius: 5px;
  }
</style>
