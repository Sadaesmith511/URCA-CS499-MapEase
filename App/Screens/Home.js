import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Home/Header';
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
import UserLocationContext  from '../Context/UserLocationContext';
import VerticalSeparator from '../Components/verticalseperator';


export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      GetNearBySearchPlace('restaurant');
    }
  }, [location]);

  const GetNearBySearchPlace = (value) => {
    GlobalApi.nearByPlace(location.coords.latitude, location.coords.longitude, value)
      .then(resp => {
        setPlaceList(resp.data.results);
      })
      .catch(error => {
        console.error('Error fetching places:', error);
      });
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: '#E8E4EF', flex: 1 }}>
      <Header />
      <VerticalSeparator/>
      <GoogleMapView />
      <CategoryList setSelectedCategory={value => GetNearBySearchPlace(value)} />
      {placeList && <PlaceList placeList={placeList} />}
    </ScrollView>
  );
}
