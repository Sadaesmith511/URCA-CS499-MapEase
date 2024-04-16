import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function PlaceItem({ place }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop:10
      }}
    >
    {place?.photos?  <Image
        source={{uri:
          "https://maps.googleapis.com/maps/api/place/photo" +
          "?maxwidth=400" +
          "&photo_reference=" +
          place?.photos[0]?.photo_reference +
          "&key=AIzaSyCHYVj5PG7qK6mvZQwCUJ0J2WIDO7hZDEE",
        }}
        style={{ width: 110, height: 110, borderRadius: 15 }}
      />:
      <Image source={require('./../../../assets/placeholder.jpg')}
      style={{ width: 110, height: 110, borderRadius: 15 }}
      />}
      <View style={{flex:1}}>
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, marginBottom: 5, 
            fontFamily: "Dosis-Regular" }}
        >
          {place.name}
        </Text>
        <Text style={{ fontSize: 16, 
        marginBottom: 5,
      color:"#423F36" }} 
        numberOfLines={2}>
          {place.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign name="star" size={20} color="#FFC700" />
          <Text>{place.rating}</Text>
        </View>

      </View>

    </View>
  );
}