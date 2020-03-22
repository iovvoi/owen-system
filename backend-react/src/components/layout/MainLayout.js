import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import '../less/layout.less';
import RouterLayout from './RouterLayout'
const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="main-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
    <div className="logo">{this.state.collapsed ? '鱼鹿' : '鱼鹿后台管理'}</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="header-wrap">
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <div className="header-right">
                <Badge className="badge" count={10} dot>
                  <NotificationOutlined />
                </Badge>
                <div className="header-user">admin</div>
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <RouterLayout></RouterLayout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout