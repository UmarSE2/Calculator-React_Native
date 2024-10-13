import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

export default function Button({ title, type, colors, calculate }) {
    const btnColor = type === 'top'
        ? '#35FBD6'
        : type === 'right'
            ? '#EB6363'
            : colors.dark;

    return (
        <TouchableOpacity
            onPress={() => calculate(title)}
            style={[
                styles.btn,
                {
                    backgroundColor: darkTheme
                        ? colors.dark2
                        : colors.light1,
                },
            ]}
        >
            <Text style={[styles.btnTxt, { color: btnColor }]}>{title}</Text>
        </TouchableOpacity>
    );
}