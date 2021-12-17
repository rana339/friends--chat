// import React, { useState } from 'react'
// import Logout from '../../compoents/logout/Logout';
// import { Form, Button, Select, Input } from 'antd';
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from '../../firebase/Config';
// // import Qulafication from '../../compoents/addqulafication/Qulafication';
// import Contactinfo from '../../compoents/contactinfo/Contactinfo';
// import './Setting.css'
// import { storage } from '../../firebase/Config';
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { setDoc } from "firebase/firestore";
// // import ImgCrop from 'antd-img-crop';

// const { Option } = Select;
// const { TextArea } = Input;


// const Setting = () => {

//     const [username, setusername] = useState('')
//     const [image, setimage] = useState('')



//     let userobj = localStorage.getItem('currentuser');
//     userobj = JSON.parse(userobj)


//     // const refContainer = useRef('');


//     const onFinish = (values) => {
//         console.log('Received values of form: ', values);

//         // const addres = refContainer.current.value;
//         // console.log('addres', addres)


//         const { address, bio, dob, gender } = values;

//         if (dob === 'undefined' || dob === ' ') {

//         }
//         else {
//             const userRef = doc(db, 'users', userobj.uid);
//             setDoc(userRef, { dob }, { merge: true })
//             console.log('dob uploaded', dob)
//         }

//         if (address === 'undefined' || address === ' ') {

//         }
//         else {
//             console.log('address uploaded', address)


//             const usersRef = doc(db, 'users', `${userobj.uid}`);
//             setDoc(usersRef, { address }, { merge: true })


//         }

//         if (bio === 'undefined' || bio === ' ') {

//         }
//         else {
//             const usersRef = doc(db, 'users', `${userobj.uid}`);
//             setDoc(usersRef, { bio }, { merge: true })
//             console.log('bio uploaded', bio)
//         }

//         if (gender === 'undefined' || gender === ' ') {

//         }
//         else {
//             const usersRef = doc(db, 'users', `${userobj.uid}`);
//             setDoc(usersRef, { gender }, { merge: true })
//             console.log('gender uploaded', gender)
//         }


//         console.log('image : ', image)
//         if (image.size <= 1000000) {
//             const storageRef = ref(storage, `images/${image.name}`);
//             uploadBytes(storageRef, image).then((snapshot) => {
//                 console.log('Uploaded a blob or file!');
//             });


//             const timer = setTimeout(() => {
//                 console.log('This will run after 2 second!')
//                 getDownloadURL(ref(storage, `images/${image.name}`)).then((url) => {
//                     console.log(url)
//                     const usersRef = doc(db, 'users', `${userobj.uid}`);
//                     setDoc(usersRef, { url }, { merge: true })
//                     console.log('gender uploaded', gender)
//                 }).catch((error) => {
//                     console.log(error)
//                 })
//             }, 2000);
//             return () => clearTimeout(timer);

//         }
//         else {
//             alert('no')
//         }

//     };


//     const unsub = onSnapshot(doc(db, "users", userobj.uid), (doc) => {
//         console.log('unsub', unsub)
//         const name = doc.data().username;
//         setusername(name)
//         console.log("Current data: ", doc.data());
//     });

//     const uploadimage = (e) => {
//         if (e.target.files[0]) {
//             setimage(e.target.files[0])
//         }
//     }

//     return (
//         <>
//             <h1>Personal Information</h1>
//             <div className='setting'>

//                 <Form name="validate_other" onFinish={onFinish}>

//                     <Form.Item>
//                         <input type="file" onChange={uploadimage} accept='Image/*' />
//                     </Form.Item>

//                     <Form.Item label='Name'>
//                         <input type="text" value={username} disabled />
//                     </Form.Item>

//                     <Form.Item label='Date Of Birth' name='dob'>
//                         <Input type='date' />
//                     </Form.Item>

//                     <Form.Item label='Address' name='address'>
//                         <TextArea placeholder="Enter Address" autoSize={{ minRows: 1, maxRows: 3 }} />
//                     </Form.Item>

//                     <Form.Item name="gender" label='Gender'>
//                         <Select placeholder="Select Gender" >
//                             <Option value="male">male</Option>
//                             <Option value="female">female</Option>
//                             <Option value="other">other</Option>
//                         </Select>
//                     </Form.Item>

//                     <Form.Item label='Bio' name='bio'>
//                         <TextArea
//                             placeholder="Enter Bio"
//                             autoSize={{ minRows: 3, maxRows: 5 }}
//                         />
//                     </Form.Item>

//                     <Form.Item >
//                         <Button type="primary" htmlType="submit" >
//                             Save
//                         </Button>
//                     </Form.Item>

//                 </Form>

//             </div>

//             <Contactinfo />
//             {/* <Qulafication /> */}
//             <Logout />

//         </>
//     )
// }


// export default Setting;
import React, { useState } from 'react'
import Logout from '../../compoents/logout/Logout';
import { Form, Button, Select, Input } from 'antd';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/Config';
// import Qulafication from '../../compoents/addqulafication/Qulafication';
import Contactinfo from '../../compoents/contactinfo/Contactinfo';
import './Setting.css'
import { storage } from '../../firebase/Config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc } from "firebase/firestore";
// import ImgCrop from 'antd-img-crop';

const { Option } = Select;
const { TextArea } = Input;


const Setting = () => {

    const [username, setusername] = useState('')
    const [image, setimage] = useState('')



    let userobj = localStorage.getItem('currentuser');
    userobj = JSON.parse(userobj)


    // const refContainer = useRef('');


    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        // const addres = refContainer.current.value;
        // console.log('addres', addres)


        const { address, bio, dob, gender } = values;

        if (dob === 'undefined' || dob === ' ') {

        }
        else {
            const userRef = doc(db, 'users', userobj.uid);
            setDoc(userRef, { dob }, { merge: true })
            console.log('dob uploaded', dob)
        }

        if (address === 'undefined' || address === ' ') {

        }
        else {
            console.log('address uploaded', address)


            const usersRef = doc(db, 'users', `${userobj.uid}`);
            setDoc(usersRef, { address }, { merge: true })


        }

        if (bio === 'undefined' || bio === ' ') {

        }
        else {
            const usersRef = doc(db, 'users', `${userobj.uid}`);
            setDoc(usersRef, { bio }, { merge: true })
            console.log('bio uploaded', bio)
        }

        if (gender === 'undefined' || gender === ' ') {

        }
        else {
            const usersRef = doc(db, 'users', `${userobj.uid}`);
            setDoc(usersRef, { gender }, { merge: true })
            console.log('gender uploaded', gender)
        }


        console.log('image : ', image)
        if (image.size <= 1000000) {
            const storageRef = ref(storage, `images/${image.name}`);
            uploadBytes(storageRef, image).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });


            const timer = setTimeout(() => {
                console.log('This will run after 2 second!')
                getDownloadURL(ref(storage, `images/${image.name}`)).then((url) => {
                    console.log(url)
                    const usersRef = doc(db, 'users', `${userobj.uid}`);
                    setDoc(usersRef, { url }, { merge: true })
                    console.log('gender uploaded', gender)
                }).catch((error) => {
                    console.log(error)
                })
            }, 2000);
            return () => clearTimeout(timer);

        }
        else {
            alert('no')
        }

    };


    const unsub = onSnapshot(doc(db, "users", userobj.uid), (doc) => {
        console.log('unsub', unsub)
        const name = doc.data().username;
        setusername(name)
        console.log("Current data: ", doc.data());
    });

    const uploadimage = (e) => {
        if (e.target.files[0]) {
            setimage(e.target.files[0])
        }
    }

    return (
        <>
            <h1>Personal Information</h1>
            <div className='setting'>

                <Form name="validate_other" onFinish={onFinish}>

                    <Form.Item>
                        <input type="file" onChange={uploadimage} accept='Image/*' />
                    </Form.Item>

                    <Form.Item label='Name'>
                        <input type="text" value={username} disabled />
                    </Form.Item>

                    <Form.Item label='Date Of Birth' name='dob'>
                        <Input type='date' />
                    </Form.Item>

                    <Form.Item label='Address' name='address'>
                        <TextArea placeholder="Enter Address" autoSize={{ minRows: 1, maxRows: 3 }} />
                    </Form.Item>

                    <Form.Item name="gender" label='Gender'>
                        <Select placeholder="Select Gender" >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label='Bio' name='bio'>
                        <TextArea
                            placeholder="Enter Bio"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" >
                            Save
                        </Button>
                    </Form.Item>

                </Form>

            </div>

            <Contactinfo />
            {/* <Qulafication /> */}
            <Logout />

        </>
    )
}


export default Setting;