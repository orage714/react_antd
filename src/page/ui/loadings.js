import React from 'react'
import {Card,Button,Icon,Alert, Spin} from 'antd'
import './ui.less'
export default class Loading extends React.Component{
    render(){
        const icon=<Icon type="loading" style={{fontSize:20}}/>
        return(
            <div>
                <Card title="spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin:"0 10px"}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程！"
                        type="info"
                        style={{ marginBottom: 10 }}
                    />
                    <Spin tip="努力加载中……">
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程！"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin tip="努力加载中……" indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程！"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
