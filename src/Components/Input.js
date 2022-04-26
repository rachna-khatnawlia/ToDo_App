import React from "react";
import commonStyle from "../styles/commonStyle";
import { View, TextInput } from 'react-native';

export const Input = ({ 
    placeholderText, 
    valueText, 
    onChangeTxt, 
    secureTextEntry 
}) => {
    return (
        <View>
            <TextInput
                style={commonStyle.input}
                placeholder={placeholderText}
                value={valueText}
                onChangeText={onChangeTxt}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}