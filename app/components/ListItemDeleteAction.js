import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ListItemDeleteAction({onPress}) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" size={35} color="white"></MaterialCommunityIcons>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
    }
})
