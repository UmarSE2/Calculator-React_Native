import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ExampleScreen from './ExampleScreen';

const FloatInput = () => {
    const [text, setText] = useState('');

    const handleTextChange = (text) => {
        setText(text);
    };

    return (
        <View style={styles.container}>
            <ExampleScreen
                label="Name"
                value={text}
                onChangeText={handleTextChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    }
});

export default FloatInput;
