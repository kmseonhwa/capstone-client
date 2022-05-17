import React, { useEffect, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { createKakaoLatLngInstance, getMarkerImage } from '../utils/kakaomap';
import CreatingMarker from './CreatingMarker';

const StyledMap = styled.div`
    height: 100%;
    width: 100%;
    transition: all 1s;
`;

const MapComponent = ({
    currentService,
    creatingMarker,
    onUpdateCreatingMarker,
}) => {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setMap((map) => {
            map &&
                map.setCenter(
                    createKakaoLatLngInstance({
                        lat: 35.267342474237104,
                        lng: 129.08901354232913,
                    })
                );
            return map;
        });
    }, [map]);

    return (
        <StyledMap>
            <Map
                center={{
                    lat: 35.267342474237104,
                    lng: 129.08901354232913,
                }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                level={5}
                onCreate={(map: kakao.maps.Map) => {
                    setMap(map);
                }}
                onClick={(
                    map: kakao.maps.Map,
                    mouseEvent: kakao.maps.event.MouseEvent
                ) => {
                    const latlng = mouseEvent.latLng;
                    console.log(
                        `lat: ${latlng?.getLat()}, lng: ${latlng?.getLng()}`
                    );
                }}
            >
                {currentService.currentMarkers.length !== 0 &&
                    // <MarkerClusterer
                    //     averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                    //     minLevel={2} // 클러스터 할 최소 지도 레벨
                    // >
                    currentService.currentMarkers.map(
                        ({
                            lat,
                            lng,
                            userId,
                            name,
                            type,
                            state,
                            isCurrent,
                        }) => {
                            const { url, size } = getMarkerImage({
                                type,
                                state: state != null ? state : null,
                                isCurrent: isCurrent != null ? isCurrent : null,
                            });
                            return (
                                <MapMarker
                                    key={lat - lng + crypto.randomUUID()}
                                    position={{ lat, lng }}
                                    title={`${userId} ${name}`}
                                    image={{
                                        src: url,
                                        size,
                                    }}
                                />
                            );
                        }
                    )}
                {/* </MarkerClusterer> */}
                {currentService.subMarkers &&
                    Object.keys(currentService.subMarkers).map((sub) => {
                        const subMarkers = currentService.subMarkers[sub];
                        // stationId => id
                        return (
                            subMarkers.length !== 0 &&
                            subMarkers.map(
                                ({
                                    lat,
                                    lng,
                                    name,
                                    stationId,
                                    type,
                                    state,
                                    isCurrent,
                                }) => {
                                    const { url, size } = getMarkerImage({
                                        type,
                                        state: state != null ? state : null,
                                        isCurrent:
                                            isCurrent != null
                                                ? isCurrent
                                                : null,
                                    });
                                    return (
                                        <MapMarker
                                            key={lat - lng}
                                            position={{ lat, lng }}
                                            title={`${stationId} ${name}`}
                                            image={{
                                                src: url,
                                                size,
                                            }}
                                        />
                                    );
                                }
                            )
                        );
                    })}
                <CreatingMarker
                    creatingMarker={creatingMarker}
                    onUpdateCreatingMarker={onUpdateCreatingMarker}
                />
            </Map>
        </StyledMap>
    );
};

export default MapComponent;
