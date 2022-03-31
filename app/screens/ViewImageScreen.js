import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

export default function ViewImageScreen() {
    return (
            <View style={styles.container}>
                <View style={styles.closeButton}>
                    <MaterialCommunityIcons name= "close" color= "white" size= {35}/>
                </View>
                <View style={styles.deleteButton}>
                    <MaterialCommunityIcons name ="trash-can-outline" color= "white" size={35} />
                </View>
                <Image resizeMode="contain" style={styles.viewObject} source={require('../assets/chair.jpg')}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        flex: 1,
    },
    background: {
        alignItems: "center",
    },
    closeButton:{
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteButton:{
        alignSelf: "flex-end",
        position: "absolute",
        top: 40,
        right: 30
    }, 
    viewObject:{
        width: "100%",
        height: "100%",
    }
})
