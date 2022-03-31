import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style= { styles.logo} source={require('../assets/logo-red.png')}/> 
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton title={'login'} onPress={() => console.log("Tapped")} />
            <AppButton title= {'register'} color={'secondary'}/>
            </View>
 
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',

    },
    tagline: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20,
    }
});

