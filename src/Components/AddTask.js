import React, { useState } from "react";

// import styles from "../styles/styles";
import commonStyle from "../styles/commonStyle";
import actions from '../redux/actions'
import { setItemLocally } from "../utils/utils";
import navigationStrings from "../navigation/navigationStrings";

import { Input } from "./Input";

import { View, Text, TouchableOpacity, } from 'react-native';

import PhoneInput from "react-native-phone-number-input";

export const AddTask = ({ navigation, route }) => {    

    //----------------------------------------->getting data from home screen 
    const allData = route?.params?.paramData;
    const idForEdit= allData?.id;

    console.log(idForEdit,allData, "Params passed from edit button");

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
        actions.addToDo(data);
        navigation.navigate(navigationStrings.HOME)
    }

    //----------------------------------------->Edit Existing Task 
    const edittask = () => {
        // alert("123");
        // console.log(idForEdit)
        actions.EditToDoData({mobile, name, age, address, idForEdit});
        navigation.navigate(navigationStrings.HOME)
    }


    return (
        <View style={commonStyle.loginBox}>
            <View style={commonStyle.loginFormBg}>
                <Text style={commonStyle.loginHeading}>Task</Text>

                {/* ----------------------------Form Inputs ----------------------------------- */}
                {/* Mobile Input */}
                <PhoneInput
                    placeholder={"Mobile No.*"}
                    containerStyle={commonStyle.phoneInput}
                    value={mobile}
                    onChangeText={(value) => setInputMobile(value)}
                />
                <Input placeholderText="Name" valueText={name} onChangeTxt={(value) => setInputName(value)} secureTextEntry="false"/>

                <Input placeholderText="Age" valueText={age} onChangeTxt={(value) => setInputAge(value)} secureTextEntry="false"/>

                <Input placeholderText="Address" valueText={address} onChangeTxt={(value) => setInputAddress(value)} secureTextEntry="false"/>

                {/* ----------------------------show edit or submit button ----------------------------------- */}
                <TouchableOpacity onPress={allData ? () => edittask() : () => addTask()}>
                    <View style={commonStyle.logSignBtn}>
                        <Text style={commonStyle.logBtntxt}>{allData ? 'EDIT' : 'SUBMIT'}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}