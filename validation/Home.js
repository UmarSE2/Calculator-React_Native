import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome Umar</Text>
            <Button title='Go Back'
                onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 35,
        color: "orange",
        textTransform: "capitalize",
    }
})

export default Home;