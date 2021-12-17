import React from 'react'
import { Modal, Button, Image, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css'
import { doc, onSnapshot } from "firebase/firestore";

import { db } from '../../firebase/Config';
import { useState } from 'react';

const { TextArea } = Input;

const Home = () => {
    let userobj = localStorage.getItem('currentuser');
    userobj = JSON.parse(userobj)
    const [url, seturl] = useState('');
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);



    const un = onSnapshot(doc(db, "users", userobj.uid), (doc) => {
        console.log(un)
        const imageurl = doc.data().url;
        seturl(imageurl)
        console.log(imageurl)
    })




    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
 
    const onFinish = (values) => [
        console.log(values)
    ]


    return (
        <>
            <Link to='/home' >home</Link> &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to='/setting'>Setting</Link> <hr />

            <Image src={url || "http://via.placeholder.com/50x50"} width='50px' height='50px' alt='image' />

            <Button className='modal-home' type="primary" onClick={showModal}>
                Create
            </Button>
            <Form >
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                onFinish={onFinish}
            >
               
                    <Image src={url || "http://via.placeholder.com/50x50"} width='50px' height='50px' alt='image' />
               
                    <input type="file" accept='Image/*' />
                
                    <Form.Item>
                    <Input placeholder='Title' required /> <br />
                    </Form.Item>

                    <Form.Item>
                    
                    <TextArea placeholder="Description" autoSize={{ minRows: 1, maxRows: 3 }} />
                    </Form.Item>

                
            </Modal>
            </Form>

        </>
    );
}
export default Home;