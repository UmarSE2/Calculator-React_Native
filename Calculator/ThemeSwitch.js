import { Switch } from 'react-native';
import React from 'react';

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
