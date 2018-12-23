import React from 'react'
import {Card,Table,message,Button, Modal} from 'antd'
import axios from './../../axios'
import Utils from './../../utils/utils'
import './table.less'
export default class BasicTable extends React.Component{
    state={
        dataSource2:[]
    }
    params={
        page:1
    }
    //多选删除
    handleDelete=()=>{
        let rows=this.state.selectedRows,
            ids=[];
            rows.map((item)=>{
                ids.push(item.id)
            })
            Modal.confirm({
                title:'删除提示',
                content:`您确定要删除数据吗？${ids.join(',')}`,
                onOk:()=>{
                    message.success('删除成功');
                    this.require()
                }
            })
    }
    onRowClick=(record,index)=>{
        this.setState({
            selectedRowKeys:[index],
            selectedItem:record
        })
    }
    require=()=>{
        let _this=this;
        axios.ajax({
            url:"/table/list",
            method:'get',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            res.result.list.map((item)=>{
                item.key=item.id
            })
            this.setState({
                dataSource2:res.result.list,
                selectedRowKeys:[],
                selectedRows:null,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page=current;
                    this.require();
                })
            })
        }).catch((rej)=>{
            message.error(rej)
        })
    }
    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ]
        data.map((item,index)=>{
            item.key=index;
        })
        this.setState({
            dataSource:data
        })
        this.require();
    }

    render(){
        const rowSelection={
            type:'radio',
            selectedRowKeys:this.state.selectedRowKeys
        }

        const rowCheckSelection={
            type:'checkbox',
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        const columns = [
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        return (
            <div>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>
                <Card title="动态数据渲染表格-mock" className="slider-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                    />
                    
                </Card>
                <Card title="radio单选表格-mock" className="slider-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        rowSelection={rowSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                    />
                </Card>
                <Card title="checkbox多选表格-mock" className="slider-wrap">
                   <Button onClick={this.handleDelete}>删除</Button>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        rowSelection={rowCheckSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                    />
                </Card>
                <Card title="分页-mock" className="slider-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                       pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}