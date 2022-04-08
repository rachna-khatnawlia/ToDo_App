import React from "react";
import styles from "../styles/styles";
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

import PhoneInput from "react-native-phone-number-input";
import { Input } from "./Input";
import navigationStrings from "../navigation/navigationStrings";


export const AddTask = ({ navigation }) => {
    return (
        <View style={styles.loginBox}>
            <View style={styles.loginFormBg}>
                <Text style={styles.loginHeading}>Login Screen</Text>

                {/* Mobile Input */}
                <PhoneInput
                    placeholder={"Mobile No.*"}
                    containerStyle={styles.phoneInput}
                    onChangeText={(value) => setMob(value)}
                />
                <Input placeholderText="Name"/>

                <Input placeholderText="Age"/>
                
                <Input placeholderText="Address"/>



                <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.HOME)}>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>SUBMIT</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}
                // <View>
                //     <TextInput
                //         style={styles.input}
                //         placeholder={"Name"}
                //         onChangeText={(value) => setPass(value)}
                //     />
                // </View>
                // <View>
                //     <TextInput
                //         style={styles.input}
                //         placeholder={"Age"}
                //         onChangeText={(value) => setPass(value)}
                //     />
                // </View>
                // <View>
                //     <TextInput
                //         style={styles.input}
                //         placeholder={"Address"}
                //         onChangeText={(value) => setPass(value)}
                //     />
                // </View>