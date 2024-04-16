import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function PlaceItemBig({ place }) {
  return (
    <View style={{marginTop:20}}>
     {place?.photos?  <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" +
            place?.photos[0]?.photo_reference +
            "&key=AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0",
        }}
        style={{ width: "100%", height: 130, borderRadius: 15 }}
      />:null}
      <Text
        numberOfLines={2}
        style={{ fontSize: 18, marginBottom: 2, fontFamily: "Dosis-Regular" }}
      >
        {place.name}
      </Text>
      <Text
        style={{ fontSize: 16, marginBottom: 5, color:"#423F36"}}
        numberOfLines={2}
      >
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
  );
}