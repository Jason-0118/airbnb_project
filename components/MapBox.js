import React from 'react'
import { useState, useMemo } from 'react';
import Pin from "./Pin"
// https://github.com/visgl/react-map-gl
import Map, { Marker, Popup } from 'react-map-gl';
//https://github.com/manuelbieh/geolib
// import getCenter from "geolib/es/getCenter"
import * as geolib from 'geolib';
import Image from 'next/image';


function MapBox({ searchResults }) {
    //transform search result into the format of { latitude: 52.516272, longitude: 13.377722 }
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    // console.log(coordinates)
    const center = geolib.getCenter(coordinates);
    // console.log(center)
    const [viewState, setViewState] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    // get pin marker on the map
    const pins = searchResults.map((result, index) => (
        <Marker
            key={`marker-${index}`}
            longitude={result.long}
            latitude={result.lat}
            anchor="bottom"
            onClick={e => {
                e.originalEvent.stopPropagation();
                setPopupInfo(result);
            }}
        >
            <p className="text-2xl cursor-pointer animate-bounce">📍</p>
        </Marker>
    ))

    //pop up info
    const [popupInfo, setPopupInfo] = useState(null);



    return (
        <>
            <Map
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxAccessToken={process.env.mapbox_key}
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
            >
                {pins}

                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={popupInfo.long}
                        latitude={popupInfo.lat}
                        onClose={() => setPopupInfo(null)}
                    >
                        <div>
                            {popupInfo.price}
                        </div>
                        <div className='relative h-20 w-20'>
                            <Image
                                className='rounded-lg'
                                src={popupInfo.img}
                                fill
                                alt=''
                            />
                        </div>

                    </Popup>
                )}
            </ Map >
        </>

    )
}

export default MapBox