// import React from 'react'
// import { Form, Input, Button, message } from 'antd';
// import { MailOutlined, LockOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import { auth } from '../../firebase/Config';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import './Login.css'

// export const Login = () => {

//     const navigate = useNavigate();

//     const onFinish = (values) => {
//         const loginEmail = values.email;
//         const loginPassword = values.password;
//         signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//             .then((userCredential) => {
//                 message.success('Successfully login');
//                 // Signed in 
//                 const user = userCredential.user;
//                 localStorage.setItem('currentuser', JSON.stringify(user))
//                 navigate('/home')
//                 console.log(user)
//                 // ...
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 message.error(errorMessage);
//                 console.log(errorMessage)
//                 alert(errorMessage)
//             });
//         console.log('hi', values);
//     };
//     return (
//         <div className='login'>
//             <h1 className='heading-login' id='friend-chat-login'> <b>FRIENDS APPLICATION</b></h1>
//             <Form name="normal_login" className="login-form" onFinish={onFinish} >
//                 <h1 className='heading-login' id='sign-heading-login'> Login </h1>
//                 <Form.Item name="email"
//                     rules={[
//                         {
//                             type: 'email',
//                             message: 'The input is not valid E-mail!',
//                         },
//                         {
//                             required: true,
//                             message: 'Please input your E-mail!',
//                         },
//                     ]}
//                 >
//                     <Input className='input-here' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
//                 </Form.Item>

//                 <Form.Item name="password" className='input-login'
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your Password!',
//                         },
//                     ]}
//                 >
//                     <Input.Password className='input-here' prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
//                 </Form.Item>

//                 <Form.Item>
//                     <Link className="login-form-forgot link" to="/forget">
//                         Forgot password
//                     </Link>
//                 </Form.Item>

//                 <Form.Item>
//                     <Button type="danger" htmlType="submit" className="login-form-button">
//                         Login
//                     </Button>
//                     <br /> <br />
//                     Or <Link to="/signup" className='link' >register now!</Link>
//                 </Form.Item>
//             </Form>
//         </div>
//     )
// }
// export default Login;
import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/Config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css'

export const Login = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        const loginEmail = values.email;
        const loginPassword = values.password;
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                message.success('Successfully login');
                // Signed in 
                const user = userCredential.user;
                localStorage.setItem('currentuser', JSON.stringify(user))
                navigate('/home')
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                message.error(errorMessage);
                console.log(errorMessage)
                alert(errorMessage)
            });
        console.log('hi', values);
    };
    return (
        <div className='login'>
            <h1 className='heading-login' id='friend-chat-login'> <b> Friends Chat</b></h1>
            <Form name="normal_login" className="login-form" onFinish={onFinish} >
                <h1 className='heading-login' id='sign-heading-login'> Sign in </h1>
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
                    <Input className='input-here' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item name="password" className='input-login'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password className='input-here' prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Link className="login-form-forgot link" to="/forget">
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type="danger" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                    <br /> <br />
                    Or <Link to="/signup" className='link' >register now!</Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;