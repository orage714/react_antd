import React from "react";
import {Link} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class NavLeft extends React.Component{
    componentWillMount(){
       const menuTreeNode= this.renderMenu(MenuConfig);
       this.setState({
           menuTreeNode
       })
    }
    //渲染菜单
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
               return  (
                   <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                   </SubMenu>
               )
            }
            return <Menu.Item title={item.title} key={item.key}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
        })
    }
    render(){
        return(
            <div className="nav-left">
                <div className="logo">
                    <img src="/assets/logo-ant.svg"/>
                    <h1>Imooc Mc</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}