import React from 'react'
import {Card,Form,Input,Icon,Button,message, Checkbox} from 'antd'
import './form.less'
const FormItem=Form.Item;
 class Login extends React.Component{
    handleSubmit=()=>{
        let formValues=this.props.form.getFieldsValue()
        this.props.form.validateFields((err,valueList)=>{
            if(!err){
                message.success(`username:${formValues.username},password:${formValues.pwd}`)
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
      
        return (
            <div>
                <Card title="水平表单" className="card-wrap">
                   <Form  layout="inline">
                        <FormItem>
                            {
                                getFieldDecorator("username",{
                                    initialValue:"",
                                    rules: [
                                        { required: true, message: '用户名不能为空！' },
                                        {min:6,max:12,message:"长度不在范围内"},
                                        {pattern:new RegExp('^\\w+$','g'),message:'用户名必须为字母或者数字'}
                                    ]
                                })(<Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>)
                            }
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator("pwd",{
                                    rules: [
                                        { required: true, message: '密码不能为空！' },
                                    ]
                                })(<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输密码"/>)
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登入</Button>
                        </FormItem>
                   </Form>
                </Card>
                <Card title="垂直表单" className="card-wrap">
                   <Form style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator("username",{
                                    initialValue:"",
                                    rules: [
                                        { required: true, message: '用户名不能为空！' },
                                        {min:6,max:12,message:"长度不在范围内"},
                                        {pattern:new RegExp('^\\w+$','g'),message:'用户名必须为字母或者数字'}
                                    ]
                                })(<Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>)
                            }
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator("pwd",{
                                    initialValue:"",
                                    rules: [
                                        { required: true, message: '密码不能为空！' },
                                    ]
                                })(<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输密码"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember",{
                                    valuePropName:"checked",
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:"right"}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit} style={{width:"100%"}}>登入</Button>
                        </FormItem>
                   </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(Login);
