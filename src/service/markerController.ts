import { getUsers, getShuttleStops } from './../api/marker';
import { Marker, UserMarker, StationMarker } from './map';

interface MarkerController {
    add(): void;
    edit(): void;
    delete(): void;
}

export type StationTypes = 'shuttlebus' | 'bus';
export type UserStates = 'ready' | 'running' | 'blocked';
type MarkerType<T> = T extends UserMarker
    ? UserStates
    : T extends StationMarker
    ? StationTypes
    : Marker;

class BaseMarkerController {
    constructor(private map: any) {}

    protected setAll(markers: Array<Marker>) {
        // 이전 배열과 비교해서 달라진 부분만 렌더링함

        markers.forEach((marker) => {
            this.map.addMarker(marker);
        });
    }

    protected update() {
        // Socket.broadcast('update markers for user')
    }

    // private getMarkerImages<T extends Marker>(marker: T): ImageUrl
    private getMarkerImages<MarkerType extends Marker>(marker: MarkerType) {
        //    switch(MarkerType) {
        //        case MarkerType extends UserMarker:
        //            break;
        //    }
    }
}

export class User extends BaseMarkerController implements MarkerController {
    public async setAll() {
        const users = await getUsers();
        users
            ? super.setAll(users)
            : console.error('사용자 마커를 가져오지 못했습니다.');
    }

    protected update() {
        super.update();
        this.setAll();
    }

    public add() {
        // postUser
        this.update();
    }

    public edit() {
        // putUser
        this.update();
    }

    public delete() {
        // deleteUser
        this.update();
    }
}

export class Station extends BaseMarkerController implements MarkerController {
    public async setAllShuttlestops() {
        const shuttleStops = await getShuttleStops();
        shuttleStops
            ? super.setAll(shuttleStops)
            : console.error('셔틀 정류장 마커를 가져오지 못했습니다.');
    }

    public async setAllBusstops() {
        // const busStops: Array<StationMarker> = await getBusStops();
        // busStops
        //     ? super.setAll(busStops)
        //     : console.error('버스 정류장 마커를 가져오지 못했습니다.');
    }

    // for Admin
    public add() {
        // addStation
        this.update();
    }

    public edit() {
        // postStation
        this.update();
    }

    public delete() {
        // deleteStation
        this.update();
    }
}