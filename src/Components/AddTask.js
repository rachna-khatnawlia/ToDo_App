import React, { useState } from "react";
import styles from "../styles/styles";

import { addToDo, EditToDoData } from "../redux/actions/auth";

import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

import PhoneInput from "react-native-phone-number-input";
import { Input } from "./Input";
import navigationStrings from "../navigation/navigationStrings";
import { useDispatch } from "react-redux";
import { setItemLocally } from "../utils/utils";


export const AddTask = ({ navigation, route }) => {
    const Dispatch = useDispatch();

    //----------------------------------------->getting data from home screen 
    const allData = route?.params?.paramData;
    const idForEdit= allData?.id;

    console.log(idForEdit,allData, "Params passed from edit button")

    const [mobile, setInputMobile] = useState(allData?.mobile ? allData?.mobile : '');
    const [name, setInputName] = useState(allData?.name ? allData?.name : '');
    const [age, setInputAge] = useState(allData?.age ? allData?.age : '');
    const [address, setInputAddress] = useState(allData?.address ? allData?.address : '');

    //----------------------------------------->Randomly generate id and data from input fields 
    const id = Math.floor(Math.random() * 1000);
    const data = [{ id, mobile, name, age, address }]

    //----------------------------------------->Add New Task 
    function addTask() {
        setItemLocally(data);
        // console.log(data);
        Dispatch(addToDo(data))
        navigation.navigate(navigationStrings.HOME)
    }

    //----------------------------------------->Edit Existing Task 
    const edittask = () => {
        // alert("123");
        // console.log(idForEdit)
        Dispatch(EditToDoData({mobile, name, age, address, idForEdit}));
        navigation.navigate(navigationStrings.HOME)
    }


    return (
        <View style={styles.loginBox}>
            <View style={styles.loginFormBg}>
                <Text style={styles.loginHeading}>Login Screen</Text>

                {/* ----------------------------Form Inputs ----------------------------------- */}
                {/* Mobile Input */}
                <PhoneInput
                    placeholder={"Mobile No.*"}
                    containerStyle={styles.phoneInput}
                    value={mobile}
                    onChangeText={(value) => setInputMobile(value)}
                />
                <Input placeholderText="Name" valueText={name} onChangeTxt={(value) => setInputName(value)} />

                <Input placeholderText="Age" valueText={age} onChangeTxt={(value) => setInputAge(value)} />

                <Input placeholderText="Address" valueText={address} onChangeTxt={(value) => setInputAddress(value)} />

                {/* ----------------------------show edit or submit button ----------------------------------- */}
                <TouchableOpacity onPress={allData ? () => edittask() : () => addTask()}>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>{allData ? 'EDIT' : 'SUBMIT'}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}