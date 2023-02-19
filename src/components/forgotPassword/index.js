import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProfileApi, loginApi } from '../../api/auth';
import './style.css'

const ForgotPassword = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = localStorage.getItem('user')
  //     if (user) {
  //       navigate('/')
  //     }
  //   }
  //   fetchData()
  // }, [])
  const navigate = useNavigate();
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
      messageApi.info('Something went wrong!');
      setLoading(false)
    }
  };
  return (
    <>
      {contextHolder}
      <div className="box df jcc aic">
        <div className="signUpCard df jcc aic fdc" style={{
          padding: '2rem 3rem'
        }}>
          <h3 className='mx-2'>FORGOT PASSWORD</h3>
          <Form
            layout="vertical"
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item label="Email" tooltip="Email is required" name='email' rules={[{ required: true, message: 'Please enter email!' }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType='submit' className='registerBtn' loading={isLoading}>SEND OTP</Button>
            </Form.Item>
          </Form>
          <div style={{ color: '#9e9e9e', fontSize: 'small', marginBottom: '1rem' }}>
            <Link style={{ color: 'var(--primary)', textDecoration: 'none' }} to='/login'>LOGIN</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword