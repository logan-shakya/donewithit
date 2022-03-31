import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BoxExample() {
    return (
        <View style= {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: 100,
                height: 100,
                // borderWidth: 10,
                // borderColor: 'royalblue',
                // borderRadius: 50,
                shadowColor: 'grey',
                shadowOpacity: 1,
                shadowOffset: {width: 0, height:10},
                shadowRadius: 10,
                elevation: 20,
                }}>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({})
