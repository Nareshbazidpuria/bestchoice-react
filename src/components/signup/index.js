import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUpApi } from '../../api/auth';
import './style.css'

const Signup = () => {
    useEffect(() => {
        const fetchData = async () => {
            const user = localStorage.getItem('user')
            if (user) {
                navigate('/')
            }
        }
        fetchData()
    }, [])
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoading, setLoading] = useState(false);
    const onFinish = async (values) => {
        setLoading(true)
        if (values.password !== values.confirmPassword) {
            messageApi.info('Password and confirm password does not match');
            setLoading(false)
        }
        else {
            delete values.confirmPassword
            const response = await signUpApi(values)
            if (response?.success) {
                messageApi.info(response?.res?.data?.message);
                setTimeout(() => {
                    setLoading(false)
                    navigate('/login')
                }, 500);
            }
            else {
                messageApi.info('Something went wrong!');
                setLoading(false)
            }
        }
    };
    return (
        <>
            {contextHolder}
            <div className="box df jcc aic">
                <div className="signUpCard df jcc aic fdc py-3">
                    <h3 className='mx-1'>SIGNUP</h3>
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="on"
                    >
                        <Form.Item label="Name" tooltip="Name is required" name='name' rules={[{ required: true, message: 'Please enter name!' }]} >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item label="Email" tooltip="Email is required" name='email' rules={[{ required: true, message: 'Please enter email!' }]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item label="Password" tooltip="Password is required" name='password' rules={[{ required: true, message: 'Please enter password!' }]}>
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Form.Item label="Confirm Password" tooltip="Confirm Password is required" name='confirmPassword' rules={[{ required: true, message: 'Please enter password!' }]}>
                            <Input.Password placeholder="Confirm Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType='submit' className='registerBtn' loading={isLoading}>SIGNUP</Button>
                        </Form.Item>
                    </Form>
                    <div style={{ color: '#9e9e9e', fontSize: 'small', marginBottom: '1rem' }}>
                        Already have an account ? <Link style={{ color: 'var(--primary)', textDecoration: 'none' }} to='/login'>LOGIN</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup