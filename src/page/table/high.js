import React from 'react'
import { Card, Table, message, Modal, Badge,Button } from 'antd'
import axios from './../../axios'
import Utils from './../../utils/utils'
import './table.less'
export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    }
    params = {
        page: 1
    }
    //删除操作
    handleDelete=(item)=>{
        debugger
        Modal.confirm({
            title:'确认',
            content:'你确定要删除这条数据码?',
            onOk:()=>{
                message.success('删除成功!')
                this.require();
            }
        })
    }
    //sorter排序操作
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sorterOrder: sorter.order
        })
    }
    require = () => {
        let _this = this;
        axios.ajax({
            url: "/table/high",
            method: 'get',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            res.result.list.map((item) => {
                item.key = item.id
            })
            this.setState({
                dataSource2: res.result.list,
                selectedRowKeys: [],
                selectedRows: null,
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    this.require();
                })
            })
        }).catch((rej) => {
            message.error(rej)
        })
    }
    componentDidMount() {
        this.require();
    }

    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',

                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',

                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',

                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',

                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',

                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
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
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                dataIndex: 'time'
            }
        ]
        const columns2 = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                fixed: 'left',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                fixed: 'left',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
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
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                fixed: 'right',
                dataIndex: 'time'
            }
        ]
        const columns3 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
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
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sorterOrder: this.state.sorterOrder
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': <Badge status='success' text='成功' />,
                        '2': <Badge status='error' text='异常' />,
                        '3': <Badge status='default' text='正常' />,
                        '4': <Badge status='processing' text='处理中' />,
                        '5': <Badge status='warning' text='警告' />
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
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sorterOrder: this.state.sorterOrder
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': <Badge status='success' text='成功' />,
                        '2': <Badge status='error' text='异常' />,
                        '3': <Badge status='default' text='正常' />,
                        '4': <Badge status='processing' text='处理中' />,
                        '5': <Badge status='warning' text='警告' />
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
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
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render:(text,item) =>{
                    return <Button  onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                    
                }
            }
        ]

        return (
            <div>
                <Card title="头部固定mock" className="slider-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        scroll={{ y: 240 }}
                    />

                </Card>
                <Card title="左侧固定-mock" className="slider-wrap">
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        scroll={{ x: 1450 }}
                    />
                </Card>
                <Card title="表格排序" className="slider-wrap">
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="表格操作" className="slider-wrap">
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        );
    }
}