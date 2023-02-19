import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProfileApi, loginApi } from '../../api/auth';
import './style.css'

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('user')
      if (user) {
        navigate('/')
      }
    }
    fetchData()
  }, [navigate])
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true)
    const response = await loginApi(values)
    if (response?.success) {
      messageApi.info(response?.res?.data?.message);
      localStorage.setItem('accessToken', JSON.stringify(response?.res?.data?.data?.accessToken))
      await getProfileApi(response?.res?.data?.data?.accessToken)
      setLoading(false)
      navigate('/')
    } else {
      messageApi.info(response?.res?.data?.message);
      setLoading(false)
    }
  };
  return (
    <>
      {contextHolder}
      <div className="box df jcc aic">
        <div className="signUpCard df jcc aic fdc" style={{
          padding: '4rem 3rem'
        }}>
          <h3 className='mx-1'>LOGIN</h3>
          <Form
            layout="vertical"
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item label="Email" tooltip="Email is required" name='email' rules={[{ required: true, message: 'Please enter email!' }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" tooltip="Password is required" name='password' rules={[{ required: true, message: 'Please enter password!' }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Link style={{ color: 'var(--primary)', position: 'relative', bottom: '1.4rem', left: '13rem' }} className="login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
            <Form.Item>
              <Button type="primary" htmlType='submit' className='registerBtn' loading={isLoading}>LOGIN</Button>
            </Form.Item>
          </Form>
          <div style={{ color: '#9e9e9e', fontSize: 'small', marginBottom: '1rem' }}>
            Don't have an account ? <Link style={{ color: 'var(--primary)', textDecoration: 'none' }} to='/signup'>SIGNUP</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login