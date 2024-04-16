import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function VerticalSeparator() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('./../../assets/Line3.png')}
                style={styles.logo3}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // Add more styling as needed for the container
    },
    logo3: {
        marginTop: -10, // Adjust this value as needed to move the image up
    },
});
