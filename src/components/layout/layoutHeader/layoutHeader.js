import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './layoutHeader.css';
import { Layout, Row, Col, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

class LayoutHeader extends Component {
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Row>
                    <Col span={15}>
                        {this.props.collapsed ? 
                            <MenuFoldOutlined className='trigger' onClick={() => this.props.toggleCollapsed()}/> :
                            <MenuUnfoldOutlined className='trigger' onClick={() => this.props.toggleCollapsed()}/>}
                    </Col>
                    <Col span={9} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type="primary">Login</Button>
                        <Button type="primary">Sign Up</Button>
                    </Col>
                </Row>
            </Header>
        )
    }
};

export default LayoutHeader;