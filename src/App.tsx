import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import { User } from './types/map';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const App = ({ socket }) => {
    const [user, setUser] = useState<null | User>({
        userId: 'seonhwa123',
        name: '선화',
    });
    const [stomp, setStomp] = useState<any>({
        client: null,
        diactivate: null,
    });

    useEffect(() => {
        if (!user) return;
        const client = new socket('https://2022bufscapstone.kr:8080/webSocket');
        const deactivate = client.activate();
        setStomp({
            client,
            deactivate,
        });

        return () => {
            // 연결된 상태 && deactivate()
        };
    }, [user]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    return (
        <>
            <Wrapper>
                <Home stomp={stomp} />
            </Wrapper>
        </>
    );
};

export default App;
