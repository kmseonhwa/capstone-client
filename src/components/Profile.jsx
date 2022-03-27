import React from 'react';
import Account from './Account';

const Profile = ({ userInfo }) => (
    <div
        style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(246,246,246, 0.9)',
            zIndex: '99',
        }}
    >
        <div
            style={{
                position: 'relative',
                top: '0px',
                // left: '50%',
                // transform: 'translate(-50%, 0)',
                width: '100%',
                height: '60vh',
                padding: '20px',
            }}
        >
            <Account />
        </div>
    </div>
);

export default Profile;