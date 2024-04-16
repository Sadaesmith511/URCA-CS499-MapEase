import { View, Text, Dimensions } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 
import UserLocationContext  from '../../Context/UserLocationContext';

export default function GoogleMapView() {
    const [mapRegion, setMapRegion] = useState(null);
    const { location, setLocation } = useContext(UserLocationContext);

    useEffect(() => {
        if (location) {
            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0300,
                longitudeDelta: 0.0300,
            });
        }
    }, [location]);

    return (
        <View style={{ marginTop: 10, borderRadius: 20, overflow: 'hidden'}}>
            <Text style={{ fontSize: 20, marginLeft: 15, marginBottom: 10, fontWeight: "600", color: "#9882AC", fontFamily: 'Quicksand-Bold' }}>
                Dashboard
            </Text>
            <MapView 
                style={{
                    width: Dimensions.get('screen').width * 0.9,
                    height: Dimensions.get('screen').height * 0.28,
                    borderRadius: 20
                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={mapRegion}
            >
                {location && (
                    <Marker 
                        title="You"
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                    />
                )}
            </MapView>
        </View>
    );
}
