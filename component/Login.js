import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Linking, TouchableOpacity } from 'react-native'

const LoginBasics = () => {
    return (
        <SafeAreaView>
            <Text style={styles.head}> Login </Text>
            <TextInput style={styles.input} placeholder="Email or Phone No" placeholderTextColor="#e6e6e6"></TextInput>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#e6e6e6"></TextInput>
            <Text style={styles.pass}>Forgot password?</Text>
            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Login</Text></TouchableOpacity >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.line} />
                <View>
                    <Text style={styles.lineText}>or</Text>
                </View>
                <View style={styles.line} />
            </View>
            <View style={styles.join}>
                <Text style={styles.footer}>Not a Member? </Text>
                <TouchableOpacity>
                    <Text style={styles.log} onpress={() => Linking.openURL('https://www.google.com')} >
                        Sign Up
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
        fontSize: 30,
        marginTop: "30%",
        color: "black",
    },
    input: {
        fontWeight: "bold",
        fontSize: 17,
        padding: 20,
        marginTop: 22,
        height: 60,
        margin: 12,
        borderWidth: 4,
        borderRadius: 27,
        borderColor: "#FAFAFA",
    },
    pass: {
        textAlign: "right",
        color: "#d9d9d9",
        fontWeight: "bold",
        fontSize: 17,
        marginRight: 15,
    },
    btn: {
        color: "green",
        alignItems: 'center',
        paddingVertical: 17,
        margin: "7%",
        borderRadius: 25,
        backgroundColor: "#2196F3",
    },
    btnText: {
        color: "white",
        fontSize: 17,
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
        marginTop: 100,
        marginLeft: 110,
    },
    footer: {
        fontWeight: "bold",
        fontSize: 19,
    },
    log: {
        color: "#0099cc",
        textDecorationLine: 'underline',
        fontSize: 17,
        fontWeight: "900",
        marginTop: 1,
    }
})

export default LoginBasics;
