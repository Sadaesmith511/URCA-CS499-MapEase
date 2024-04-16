import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress =async()=>{
    try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
  }
  const [fontsLoaded, setFontsLoaded] = useState(false); // State to track font loading

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Quicksand-Regular': require('./../../assets/Fonts/Quicksand-Regular.ttf'),
        'Quicksand-Bold': require('./../../assets/Fonts/Quicksand-Bold.ttf'),
        'Dosis-Bold': require('./../../assets/Fonts/Dosis-Bold.ttf'),
      });
      setFontsLoaded(true); // Set fonts loaded to true after loading
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    }}>
      <Image 
        source={require('./../../assets/hehetroll2.png')}
        style={styles.logoimg}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.headertxt}>Navigate with Ease, Everywhere You Please.</Text>
        <Text style={styles.footertxt}>Start navigating today by signing in!</Text>
        <TouchableOpacity style = {styles.button} onPress={onPress}>
            <Text style={{textAlign: 'center', fontSize:17}}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoimg:{
    width:500,
    height:500,
    marginTop:-150,
    objectFit:'contain'
  },
  headertxt:{
    fontSize:30,
    textAlign:'center',
    marginTop: -70
  },
  footertxt:{
    fontSize:15,
    fontFamily:'Quicksand-Regular',
    textAlign:'center',
    marginTop: 10
  },
    button:{
        backgroundColor: '#E8E4EF',
        padding: 15,
        display: 'flex',
        borderRadius:10,
        marginTop:50

    }
});
