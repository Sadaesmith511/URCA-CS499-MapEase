import React, { useState, Text, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import * as Location from 'expo-location';
import UserLocationContext from './App/Context/UserLocationContext';
import LoginScreen from './App/Screens/LoginScreen';
import { ClerkProvider,SignedIn, SignedOut } from "@clerk/clerk-expo";


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSplashReady, setIsSplashReady] = useState(false); // State to track if splash screen is ready
  const [isLoginVisible, setIsLoginVisible] = useState(true); // State to track whether the login screen is visible

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load any necessary data here
        // For example, you can load location data
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setIsSplashReady(true); // Set splash screen ready after loading necessary data
      } catch (e) {
        console.error(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    
    prepare();
  }, []);

  useEffect(() => {
    if (isSplashReady) {
      // Hide login screen after a certain delay or condition
      setTimeout(() => {
        setIsLoginVisible(false);
      }, 10000000); // 5000 milliseconds delay (5 seconds), adjust as needed
    }
  }, [isSplashReady]);

  if (!isSplashReady || isLoginVisible) {
    return (
      <ClerkProvider publishableKey={'pk_test_Y2FzdWFsLWRhbmUtMTguY2xlcmsuYWNjb3VudHMuZGV2JA'}>
      <View style={styles.loadingContainer}>
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
      </View>
      </ClerkProvider>
    );
  }

  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
