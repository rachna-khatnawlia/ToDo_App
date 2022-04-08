import React from "react";
import styles from "../styles/styles";
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

export const Input = ({ navigation, placeholderText }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholderText}
                onChangeText={(value) => setPass(value)}
            />
        </View>
    )
}