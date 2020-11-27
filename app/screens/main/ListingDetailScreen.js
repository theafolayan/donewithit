import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AppText from '../../components/AppText'
import colors from '../../config/colors'

export default function ListingDetailScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../../../assets/chair.jpg')} />
            <View style={styles.detailsContainer}> 
            <AppText style={styles.title}> Red Jacket for sale!</AppText>
            <AppText style={styles.price}> $100 </AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    detailsContainer: {
         padding: 20,      
    },
    price: {
        color: colors.secondary
    }
})
