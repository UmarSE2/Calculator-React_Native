import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const ExampleScreen = ({ label, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const labelStyle = {
        position: 'absolute',
        left: 0,
        top: isFocused || props.value.length > 0 ? -10 : 16,
        fontSize: isFocused || props.value.length > 0 ? 14 : 18,
        color: isFocused || props.value.length > 0 ? '#aaa' : '#666'
    };

    return (
        <View style={styles.container}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                {...props}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%'
    },
    input: {
        height: 40,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#666'
    }
});

export default ExampleScreen;
