import React from 'react'
import { Button } from 'antd';
import { auth } from '../../firebase/Config';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';

const Logout = () => {

    const Navigate = useNavigate();

    const logout = () => {

        signOut(auth).then(() => {
            Navigate('/login')
            // Sign-out successful.
        }).catch((error) => {
            alert(error.message)
            // An error happened.
        })

    }

    return (
        <div>
            <Button type="primary" onClick={logout}>
                Logout
            </Button>
        </div>
    )
}
export default Logout;