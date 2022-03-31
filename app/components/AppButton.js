import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import colors from '../config/colors'

export default function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: "100%",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
    },
    text: {
        color: colors.white,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
    }
})
