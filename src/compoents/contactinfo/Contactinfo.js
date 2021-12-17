// import React, { useState } from 'react'
// import { db } from '../../firebase/Config';
// import { doc, onSnapshot } from "firebase/firestore";
// import { Form, Button, Input } from "antd"
// import './Contactinfo.css'
// import { setDoc } from "firebase/firestore";

// const Contactinfo = () => {
//     const [email, setemail] = useState('');
//     let userobj = localStorage.getItem('currentuser');
//     userobj = JSON.parse(userobj)
    
//         const onFinish = (values) => {
//             console.log('Received values of form: ', values);
//             const phone = values.phone;

//             const usersRef = doc(db, 'users', `${userobj.uid}`);
//                 setDoc(usersRef, { phone }, { merge: true })
//                 console.log('phone number uploaded', phone)
//         };

//     const unsub = onSnapshot(doc(db, "users", userobj.uid), (doc) => {
//         console.log('unsub', unsub)
//         const email = doc.data().email;
//         setemail(email)
//         console.log('user', email);
//         console.log("Current data: ", doc.data());
//     });
//     return (
//         <>
//             <h1>Contact Information</h1>

//             <div className='contact'>
//                 <Form onFinish={onFinish}>

//                     <Form.Item label='Email '>
//                         <input type="text" disabled value={email} />
//                     </Form.Item>

//                     <Form.Item label='Phone Number' name='phone'>
//                         <Input type='number' />
//                     </Form.Item>

//                     <Form.Item >
//                         <Button type="primary" htmlType="submit">
//                             Save
//                         </Button>
//                     </Form.Item>

//                 </Form>
//             </div>
//         </>
//     )
// }
// export default Contactinfo;
