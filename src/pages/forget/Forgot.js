import React from 'react'
import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { auth } from '../../firebase/Config';
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';
import './Forgot.css'
const Forgot = () => {

    const onFinish = (values) => {
        const email = values.email;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Check your email address')
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
        console.log('hi', values);
    };

    return (
        <div className='forgot'>
            <h1 className='heading-forgot' id='friend-chat-forgot'> <b> Friends Chat</b></h1>
            <h1 className='heading-forgot' id='heading-forgot'> Forgot Password </h1>
            <p className='paragraph-forgot'>You can reset your Password here</p>
            <Form name="normal_forget" className="forgot-form" onFinish={onFinish} >
                <Form.Item name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input className='email-input' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item>
                    <Button type="danger" htmlType="submit" className="forgot-form-button">
                        Reset Password
                    </Button>
                    <br /> <br />
                    Or <Link to="/" className='link'>Login here!</Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Forgot;