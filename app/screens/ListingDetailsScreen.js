import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/mosh.jpg')}
                        title="Mosh Hamedani"
                        subTitle = "5 Listings"
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        fontSize: 20,
        fontWeight:'bold',
        color: colors.secondary,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
})
