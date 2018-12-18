import React from 'react'
import {Card,Button,Modal} from 'antd'
import './ui.less'
export default class Modals extends React.Component{
    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    }
    handleOpen=(type)=>{
        this.setState({
            [type]:true
        })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:"确认",
            content:"这是一个信息模态框",
            onOk(){
                console.log("ok")
            },
            onCancel(){
                console.log("cancel")
            }
        })
    }
    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>{this.handleOpen("showModal1")}}>OPEN</Button>
                    <Button type="primary" onClick={()=>{this.handleOpen("showModal2")}}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>{this.handleOpen("showModal3")}}>顶部20px</Button>
                    <Button type="primary" onClick={()=>{this.handleOpen("showModal4")}}>水平垂直居中</Button>
                </Card>
                <Card title="信息模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>{this.handleConfirm("confirm")}}>confirm</Button>
                    <Button type="primary" onClick={()=>{this.handleConfirm("info")}}>info </Button>
                    <Button type="primary" onClick={()=>{this.handleConfirm("success")}}>success</Button>
                    <Button type="primary" onClick={()=>{this.handleConfirm("warning")}}>warning</Button>
                </Card>
                <Modal 
                title="ANTD"
                visible={this.state.showModal1}
                onCancel={()=>this.setState({
                    showModal1:false
                })}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal 
                title="ANTD"
                okText="好的"
                cancelText="算了"
                visible={this.state.showModal2}
                onCancel={()=>this.setState({
                    showModal2:false
                })}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal 
                title="ANTD"
                style={{top:20}}
                visible={this.state.showModal3}
                onCancel={()=>this.setState({
                    showModal3:false
                })}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal 
                title="ANTD"
                wrapClassName="vertical-center-modal"
                visible={this.state.showModal4}
                onCancel={()=>this.setState({
                    showModal4:false
                })}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
            </div>
        )
    }
}