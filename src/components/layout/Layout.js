import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import { Layout } from 'antd';
import LayoutSider from './layoutSider/layoutSider';
import LayoutHeader from './layoutHeader/layoutHeader';
import LayoutContent from './layoutContent/layoutContent';

class PageLayout extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <LayoutSider 
                    collapsed={this.state.collapsed}
                />
                <Layout className="site-layout">
                    <LayoutHeader
                        collapsed={this.state.collapsed}
                        toggleCollapsed={this.toggleCollapsed}
                    />
                    <LayoutContent/>
                </Layout>
            </Layout>
        );
    }
};

export default PageLayout;