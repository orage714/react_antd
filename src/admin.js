import React from 'react'
import { Row,Col } from 'antd';
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
// import Home from './page/home'
import './style/common.less'
export default class Admin extends React.Component{

    render(){
        return ( 
            <Row className="contain">
                <Col span='3' >
                    <NavLeft/>
                </Col>
                <Col span='21' className='right'>
                    <Header ></Header>
                      <Row className='main'>
                        {/* <Home/> */}
                         {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}