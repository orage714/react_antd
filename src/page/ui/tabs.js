import React from 'react'
import {Card,Tabs,message,Icon} from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane;

export default class Loading extends React.Component{
    newTabIndex=0;
    handleCallback=(key)=>{
        message.info(`选择了TAB${key}`)
    }
    componentWillMount(){
        const panes=[
            {
                title:"Tab1",
                content:"content1",
                key:"1",
            },
            {
                title:"Tab2",
                content:"content2",
                key:"2",
            },
            {
                title:"Tab3",
                content:"content3",
                key:"3",
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
       
      add = () => {
       
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        })
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render(){
        return(
            <div>
                <Card title="TAB页签&&带图标页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>Tab3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                 </Card>
                 
                 <Card title="增加删除页签" className="card-wrap">
                    <Tabs 
                   activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((item)=>{
                              return  <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                            })
                        }
                     </Tabs>
                 </Card>
            </div>
        )
    }
}
