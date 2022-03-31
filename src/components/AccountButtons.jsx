import React from 'react';

import Button from '@mui/material/Button';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ClearIcon from '@mui/icons-material/Clear';

const AccountButtons = ({ type, closeProfile }) => (
    <div>
        <div
            style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button
                variant="contained"
                style={{
                    color: '#0B93F6',
                    backgroundColor: 'white',
                    borderRadius: '17px',
                    marginRight: '8px',
                    padding: '6px 20px',
                    maxWidth: `${type && type === 'simple' ? '54px' : ''}`,
                    minWidth: `${type && type === 'simple' ? '54px' : ''}`,
                    maxHeight: `${type && type === 'simple' ? '32px' : ''}`,
                    minHeight: `${type && type === 'simple' ? '32px' : ''}`,
                }}
            >
                <ChatBubbleIcon />
            </Button>
            {type && type === 'full' && (
                <Button
                    variant="contained"
                    style={{
                        color: 'gray',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        maxWidth: '36px',
                        minWidth: '36px',
                        maxHeight: '36px',
                        minHeight: '36px',
                    }}
                    onClick={closeProfile}
                >
                    <ClearIcon />
                </Button>
            )}
        </div>
    </div>
);

export default AccountButtons;
