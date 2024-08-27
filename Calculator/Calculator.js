import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import ThemeSwitch from './ThemeSwitch';

export default function Calculator({ colors }) {
    const [darkTheme, setDarkTheme] = useState(false);
    const [result, setResult] = useState('');

    const calculate = (title) => {
        if (title === 'C') {
            setResult('');
        } else if (title === 'DL') {
            setResult(result.substring(0, result.length - 1));
        } else if (title === '=') {
            const ans = Number(eval(result).toFixed(3)).toString();
            setResult(ans);
        } else {
            setResult(result + title);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: darkTheme ? colors.dark : colors.light },]}>
            <ThemeSwitch darkTheme={darkTheme} setDarkTheme={setDarkTheme} colors={colors} />
            <Text style={[styles.result, { color: darkTheme ? colors.light : colors.dark }]}>{result}</Text>
            <View style={[styles.btnContainer, { backgroundColor: darkTheme ? colors.dark1 : colors.light1 }]}>
                <Button title="C" type="top" colors={colors} calculate={calculate} />
                <Button title="DL" type="top" colors={colors} calculate={calculate} />
                <Button title="/" type="top" colors={colors} calculate={calculate} />
                <Button title="%" type="top" colors={colors} calculate={calculate} />
                <Button title="7" type="number" colors={colors} calculate={calculate} />
                <Button title="8" type="number" colors={colors} calculate={calculate} />
                <Button title="9" type="number" colors={colors} calculate={calculate} />
                <Button title="*" type="right" colors={colors} calculate={calculate} />
                <Button title="4" type="number" colors={colors} calculate={calculate} />
                <Button title="5" type="number" colors={colors} calculate={calculate} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})