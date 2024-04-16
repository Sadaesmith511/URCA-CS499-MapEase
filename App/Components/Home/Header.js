import { View, Text, Image, StyleSheet,TextInput, Dimensions } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={{display:'flex', flexDirection:'row',justifyContent:'space-evenly', gap:190,
    alignItems:'center'}}>
       <Image source ={require('./../../../assets/title.png')}
        style={styles.logo3}
        resizeMode="contain"
        />
        <View>
            <Image source={require('./../../../assets/DSC00239.jpg')}
                style={styles.userimage}
            />
        </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    logo:{
        width:75,
        height:75
    },
    searchbar:{
        borderWidth:2,
        borderColor:'#9882AC',
        padding:4,
        borderRadius:10,
        paddingLeft:10,
        width:Dimensions.get('screen').width*0.6
        
    },
    userimage:{
        width:50,
        height:50,
        borderRadius:100
    },
    logo3: {
        width: 120, 
        height: 120, 

      }
   

    })