import React from 'react'
import {Card, Row, Col, Modal} from 'antd'

export default class Gallery extends React.Component{
    state={
        visible:false
    }
    componentWillMount(){
        const imgs=[
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]
        ];
        this.setState({
            imgs
        })
    }
    showModal=(url)=>{
        this.setState({
            imgUrl:`/gallery/${url}.png`,
            visible:true

        })
    }
    render(){
        const imgList=this.state.imgs.map((list)=>list.map((item)=>
            <Card 
            style={{marginBottom:15}}
            cover={<img src={`/gallery/${item}.png`} alt=""/>} 
            onClick={()=>this.showModal(item)}
            key={item}
            >
                <Card.Meta
                    title="画廊标题"
                    description="画廊描述description"
                />
             </Card>
        ))
        return(
            <div>
                <Row gutter={15}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
                <Modal
                title="画廊"
                visible={this.state.visible}
                onCancel={()=>this.setState({
                    visible:false
                })}
                footer={null}
                >
                <img src={this.state.imgUrl} alt="" style={{width:"100%"}}/>
                </Modal>
            </div>
        )
    }
}