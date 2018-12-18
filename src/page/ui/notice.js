import React from 'react'
import {notification,Button,Card} from 'antd'
import './ui.less'
export default class Loading extends React.Component{
    openNotification=(type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            })
        }
          notification[type]({
              message:"发工资了",
              description:"详细的描述信息"
          })
    }
    render(){
     
        return(
            <div>
                <Card title="通知提醒框" className="card-wrap">
                   <Button type="primary" onClick={()=>{this.openNotification('success')}}>success</Button>
                   <Button type="primary" onClick={()=>{this.openNotification('info')}}>info</Button>
                   <Button type="primary" onClick={()=>{this.openNotification('warning')}}>warning</Button>
                   <Button type="primary" onClick={()=>{this.openNotification('error')}}>error</Button>
                   <Button type="primary" onClick={()=>{this.openNotification('success',"bottomRight")}}>success bottom-right</Button>
                </Card>
            </div>
        )
    }
}
