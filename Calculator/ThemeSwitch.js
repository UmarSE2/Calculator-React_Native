import React from 'react';
import { Switch } from 'react-native';

export default function ThemeSwitch({ darkTheme, setDarkTheme, colors }) {
    return (
        <Switch
            value={darkTheme}
            onValueChange={() => setDarkTheme(!darkTheme)}
            trackColor={{ true: colors.light2, false: colors.dark2 }}
            thumbColor={darkTheme ? colors.dark : colors.light}
        />
    );
}