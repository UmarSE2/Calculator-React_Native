import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const LoginForm = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [agree, setAgree] = useState(false)

    const submit = () => {
        // if (userName === "umar" && password === "saeed") {
        //     Alert.alert(`Thank You ${userName}`);
        //     navigation.navigate("Home")
        // }
        // else {
        //     Alert.alert(`Username and Password is not correct`)
        // }
        navigation.navigate("Home")
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={userName}
                    onChange={(actualdata) => setUserName(actualdata)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Password</Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChange={(actualdata) => setPassword(actualdata)}
                />
            </View>
            <View style={styles.wrapper}>
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                />
                <Text style={styles.wrapperText}>I have read and Agreed with it</Text>
            </View>
            <TouchableOpacity style={[styles.btn, { backgroundColor: agree ? "#2196F3" : "grey" }]}
                disabled={!agree}
                onPress={() => submit()}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
    },
    mainHeader: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
        marginTop: '15%',
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 18,
        marginTop: 10,
        lineHeight: 25,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontSize: 18,
    },
    wrapper: {
        flexDirection: "row",
        marginTop: 20,
    },
    wrapperText: {
        fontSize: 16,
        marginTop: 5,
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
})

export default LoginForm;