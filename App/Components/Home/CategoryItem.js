import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CategoryItem({category}) {


  return (
    <View style={{padding:5,alignItems:'center',
    margin:.5,width:125,height:125,justifyContent:'center',
    borderRadius:15,
    backgroundColor:'#E8E4EF'}}>
        <Image source={category.icon}
            style={{width:90,height:90,borderRadius:10
            }}
        />
      <Text style={{fontSize:13,fontFamily:'Dosis-Regular'}}>
        {category.name}</Text>
    </View>
  )
}