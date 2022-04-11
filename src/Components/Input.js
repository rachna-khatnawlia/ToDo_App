import React from "react";
import styles from "../styles/styles";
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

export const Input = ({ navigation, placeholderText, valueText, onChangeTxt }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholderText}
                value={valueText}
                onChangeText={onChangeTxt}
            />
        </View>
    )
}