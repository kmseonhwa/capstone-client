import React from 'react';
import List from '@mui/material/List';
import MarkerItem from './MarkerItem';

const profiles = [
    {
        userId: '2dsfji5r44356j',
        name: '선화',
        iamgeUrl: '',
        state: 'ready',
        isAuthorized: true,
    },

    {
        userId: '1235',
        name: 'abc',
        state: 'running',
        imageUrl: '',
        isAuthorized: false,
    },
    {
        userId: '1237',
        name: 'def',
        state: 'ready',
        imageUrl: '',
        isAuthorized: true,
    },
    {
        userId: '1238',
        name: 'uuu',
        state: 'running',
        imageUrl: '',
        isAuthorized: false,
    },
    {
        userId: '1239',
        name: 'lili',
        state: 'ready',
        imageUrl: '',
        isAuthorized: true,
    },
    {
        userId: '1240',
        name: 'fa',
        state: 'ready',
        imageUrl: '',
        isAuthorized: false,
    },
    {
        userId: '1241',
        name: 'k',
        state: 'ready',
        imageUrl: '',
        isAuthorized: true,
    },
];

const MarkerList = ({ markers, handleListItemClick }) => (
    <List
        sx={{ width: '100%', height: '100%' }}
        style={{ overflowY: 'scroll' }}
    >
        {markers.map((marker, idx) => (
            <MarkerItem
                key={idx}
                markerInfo={marker}
                handleListItemClick={handleListItemClick}
            />
        ))}
    </List>
);

export default MarkerList;