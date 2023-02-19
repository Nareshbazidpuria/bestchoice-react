import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/index';
import Login from './components/login/index';
import Signup from './components/signup/index';
import Page404 from './components/page404';
import ForgotPassword from './components/forgotPassword';




import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState, useNavigate, useEffect } from 'react';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];






function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Router>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          left: 0,
          top: 0,
          background: colorBgContainer,
        }} >
          <div className='df aic'
            style={{
              fontSize: 18,
              height: 32,
              margin: '1.5rem .9rem',
              background: colorBgContainer,
            }}
          >
            <div style={{
              padding: '0 1rem',
              fontSize: 24
            }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </div>
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              position: 'sticky',
              left: 0,
              top: 0,
              height: '5rem'
            }}
          >
            <div style={{
              letterSpacing: 3,
              fontSize: 18,
              margin: '0 1rem',
              background: colorBgContainer,
            }} className='df fdc'>
              <div style={{ height: '1.5rem' }}><span style={{ color: 'var(--primary)' }}>Best</span> Choice</div>
              <div style={{ fontSize: '11px', letterSpacing: '1px', height: '.4rem', color: '#b0b0b0' }}>Get Your Best Choice Here</div>
            </div>

          </Header>
          <Content
            style={{
              margin: '16px',
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<Home key='home' />} />
              <Route path="/bestchoice-react" element={<Home key='home' />} />
              <Route path="/login" element={<Login key='login' />} />
              <Route path="/signup" element={<Signup key='signup' />} />
              <Route path="/forgot-password" element={<ForgotPassword key='forgot-password' />} />
              <Route path="*" element={<Page404 key='404' />} />
            </Routes>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Best Choice ©{new Date().getFullYear()} All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
