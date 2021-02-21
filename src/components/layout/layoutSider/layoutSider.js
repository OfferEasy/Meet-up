import { Layout, Menu, Image } from 'antd';
import {
    VideoCameraOutlined,
    UploadOutlined,
    CoffeeOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const LayoutSider = ({ ...props }) => {
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <Image className="logo" preview={false} src={"/img/logo.png"} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<CoffeeOutlined />}>
                    Events
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default LayoutSider;