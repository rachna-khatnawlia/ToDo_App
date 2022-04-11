import React, { useState } from "react";
import styles from "../styles/styles";

import { addToDo } from "../redux/actions/auth";

import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

import PhoneInput from "react-native-phone-number-input";
import { Input } from "./Input";
import navigationStrings from "../navigation/navigationStrings";
import { useDispatch } from "react-redux";


export const AddTask = ({ navigation }) => {
    const Dispatch = useDispatch();

    const [InputMobile, setInputMobile] = useState('');
    const [InputName, setInputName] = useState('');
    const [InputAge, setInputAge] = useState('');
    const [InputAddress, setInputAddress] = useState('');

    const data = { InputMobile, InputName, InputAge, InputAddress }
    function addTask() {
        console.log(data);
        Dispatch(addToDo(data))
        navigation.navigate(navigationStrings.HOME)
    }

    return (
        <View style={styles.loginBox}>
            <View style={styles.loginFormBg}>
                <Text style={styles.loginHeading}>Login Screen</Text>

                {/* Mobile Input */}
                <PhoneInput
                    placeholder={"Mobile No.*"}
                    containerStyle={styles.phoneInput}
                    value={InputMobile}
                    onChangeText={(value) => setInputMobile(value)}
                />
                <Input placeholderText="Name" valueText={InputName} onChangeTxt={(value) => setInputName(value)} />

                <Input placeholderText="Age" valueText={InputAge} onChangeTxt={(value) => setInputAge(value)} />

                <Input placeholderText="Address" valueText={InputAddress} onChangeTxt={(value) => setInputAddress(value)} />

                <Text>
                    {InputMobile} your name is {InputName}, your age is {InputAge}, your address is {InputAddress}
                </Text>
                <TouchableOpacity onPress={() => addTask()}>
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