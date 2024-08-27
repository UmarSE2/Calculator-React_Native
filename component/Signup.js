import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native'

const SignupBasics = () => {
    return (
        <SafeAreaView>
            <Text style={styles.head}> Sign Up </Text>
            <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#e6e6e6"></TextInput>
            <TextInput style={styles.input} placeholder="Phone No." placeholderTextColor="#e6e6e6"></TextInput>
            <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#e6e6e6"></TextInput>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#e6e6e6"></TextInput>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.line} />
                <View>
                    <Text style={styles.lineText}>or</Text>
                </View>
                <View style={styles.line} />
            </View>
            <View style={styles.join}>
                <Text style={styles.footer}>Already a member? </Text>
                <TouchableOpacity>
                    <Text style={styles.log} onpress={() => Linking.openURL('https://www.google.com')} >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 27,
        marginTop: "17%",
        marginBottom: "3%",
        color: "black",
    },
    input: {
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 20,
        height: 54,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 6,
        borderWidth: 4,
        borderRadius: 27,
        borderColor: "#FAFAFA",
    },
    btn: {
        color: "green",
        alignItems: 'center',
        paddingVertical: 15,
        margin: "7%",
        borderRadius: 25,
        backgroundColor: "#2196F3",
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    lineText: {
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center",
        width: 18,
        color: "#e6e6e6",
    },
    line: {
        flex: 1,
        height: 3,
        backgroundColor: "#e6e6e6",
        marginLeft: 10,
        marginRight: 10,
    },
    join: {
        flexDirection: "row",
        marginTop: 60,
        marginLeft: 100,
    },
    footer: {
        fontWeight: "bold",
        fontSize: 18,
    },
    log: {
        color: "#0099cc",
        textDecorationLine: 'underline',
        fontSize: 17,
        fontWeight: "900",
        marginTop: 1,
    }
})

export default SignupBasics;