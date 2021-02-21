import React, { Component } from 'react';
import { Layout } from 'antd';
import './layoutContent.css';
import EventsDashboard from '../../events/eventsDashboard';

const { Header, Sider, Content } = Layout;

class LayoutContent extends Component {
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <EventsDashboard/>
            </Content>
        )
    }
};

export default LayoutContent;