import React from 'react'
import {Card,Button,Radio} from 'antd'
import './ui.less'
export default class Buttons extends React.Component{
    constructor(props){
        super();
        this.state={
            loading:true,
            size:'default'
        }
    }
    changeLoading=()=>{
        this.setState({
            loading:this.state.loading?false:true
        })
    }
    handleChangeSize=(e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render(){
        return (
            <div className="container">
              <Card title="基础按钮" className="card-wrap">
                  <Button type="primary">主按钮</Button>
                  <Button >默认按钮</Button>
                  <Button type="dashed">虚线按钮</Button>
                  <Button type="danger">警示按钮</Button>
              </Card>
              <Card title="图形按钮" className="card-wrap">
                  <Button icon='plus'>创建</Button>
                  <Button  icon="edit">编辑</Button>
                  <Button  icon="delete">删除</Button>
                  <Button  shape="circle" icon="search"></Button>
                  <Button type="primary" icon="search">搜索</Button>
                  <Button type="primary" icon="download">下载</Button>
              </Card>
              <Card title="loading按钮" className="card-wrap">
                  <Button type="primary" loading={this.state.loading}>确定</Button>
                  <Button type="primary" loading={this.state.loading} shape="circle"></Button>
                  <Button  loading={this.state.loading}>确定</Button>
                  <Button  loading={this.state.loading} shape="circle"></Button>
                  <Button type="primary" onClick={this.changeLoading}>关闭</Button>
              </Card>
              <Card title="按钮组" className="card-wrap">
                  <Button.Group>
                      <Button type="primary" icon="left" style={{marginRight:0}}>后退</Button>
                      <Button type="primary" icon="right">前进</Button>
                  </Button.Group>
              </Card>
              <Card title="按钮尺寸" className="card-wrap">
                  <Radio.Group value={this.state.size} onChange={this.handleChangeSize}>
                      <Radio value="small">小</Radio>
                      <Radio value="defau">中</Radio>
                      <Radio value="large">大</Radio>
                  </Radio.Group>
                  <Button type="primary" size={this.state.size}>主按钮</Button>
                  <Button size={this.state.size}>默认按钮</Button>
                  <Button type="dashed" size={this.state.size}>虚线按钮</Button>
                  <Button type="danger" size={this.state.size}>警示按钮</Button>
              </Card>
            </div>
        )
    }
}