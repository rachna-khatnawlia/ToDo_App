import React, { useState } from "react";
import styles from "../styles/styles";

import { addToDo, EditToDo, EditToDoData } from "../redux/actions/auth";

import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

import PhoneInput from "react-native-phone-number-input";
import { Input } from "./Input";
import navigationStrings from "../navigation/navigationStrings";
import { useDispatch } from "react-redux";


export const AddTask = ({ navigation, route }) => {
    const Dispatch = useDispatch();
    const allData = route?.params?.paramData
    const allIndex = route?.params?.paramIndex

    // console.log(allData,allIndex, "all dat")

    const [InputMobile, setInputMobile] = useState(allData?.mobile ? allData?.mobile : '');
    const [InputName, setInputName] = useState(allData?.name ? allData?.name : '');
    const [InputAge, setInputAge] = useState(allData?.age ? allData?.age : '');
    const [InputAddress, setInputAddress] = useState(allData?.address ? allData?.address : '');

    const data = { InputMobile, InputName, InputAge, InputAddress }
    function addTask() {
        // console.log(data);
        Dispatch(addToDo(data))
        navigation.navigate(navigationStrings.HOME)
    }
    const idForEdit= allData?.id;
    const edittask = () => {
        // alert("123");
        // console.log(idForEdit)
        Dispatch(EditToDoData(idForEdit,data, allIndex));
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

                <Text>{InputMobile} your name is {InputName}, your age is {InputAge}, your address is {InputAddress}</Text>

                <TouchableOpacity onPress={allData ? () => edittask() : () => addTask()}>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>{allData ? 'EDIT' : 'SUBMIT'}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}