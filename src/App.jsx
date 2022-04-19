import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = ({
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
}) => {
    const [userInfo, setUerInfo] = useState({
        userId: '2dsfji5r44356j',
        name: '선화',
    });
    const [currentCategory, setCurrentCategory] = useState('TAXI');

    // let navigate = useNavigate();

    // useEffect(() => {
    // navigate('home');
    // }, []);

    return (
        // <Routes>
        //     <Route
        //         path="home"
        //         element={
        //             <Services
        //                 currentService={currentService}
        //                 setCurrentService={setCurrentService}
        //             />
        //         }
        //     ></Route>
        //     <Route path="services" element={<ServiceTemplate />}>
        //         <Route
        //             path="taxi"
        //             element={<TaxiService mapService={mapService} />}
        //         />
        //         <Route path="delivery" element={<DeliveryService />} />
        //     </Route>
        //     <Route path="conversations" element={<ServiceTemplate />}>
        //         <Route
        //             path="list"
        //             element={<Conversations userInfo={userInfo} />}
        //         />
        //     </Route>
        // </Routes>

        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        userInfo={userInfo}
                        map={map}
                        taxiMarkerController={taxiMarkerController}
                        stationMarkerController={stationMarkerController}
                        shapeController={shapeController}
                        currentCategory={currentCategory}
                    />
                }
            />
        </Routes>
    );
};

export default App;
