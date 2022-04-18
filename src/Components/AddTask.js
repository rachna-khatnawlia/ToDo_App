import React, { useState } from "react";

// import styles from "../styles/styles";
import commonStyle from "../styles/commonStyle";
import actions from '../redux/actions'
import { setItemLocally } from "../utils/utils";
import navigationStrings from "../navigation/navigationStrings";

import { Input } from "./Input";

import { View, Text, TouchableOpacity, } from 'react-native';

import PhoneInput from "react-native-phone-number-input";
import { moderateScaleVertical } from "../styles/responsiveSize";

export const AddTask = ({ navigation, route }) => {

    //----------------------------------------->getting data from home screen 
    const allData = route?.params?.paramData;
    const idForEdit = allData?.id;

    console.log(idForEdit, allData, "Params passed from edit button");

    const [mobile, setInputMobile] = useState(allData?.mobile ? allData?.mobile : '');
    const [name, setInputName] = useState(allData?.name ? allData?.name : '');
    const [age, setInputAge] = useState(allData?.age ? allData?.age : '');
    const [address, setInputAddress] = useState(allData?.address ? allData?.address : '');

    //----------------------------------------->Randomly generate id and data from input fields 
    const id = Math.floor(Math.random() * 1000);
    const data = [{ id, mobile, name, age, address }]


    const [mobError, setmobError] = useState(false)
    const [nameError, setnameError] = useState(false)
    const [ageError, setageError] = useState(false)
    const [addError, setaddError] = useState(false)

    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const nameRegex = /^[a-zA-Z]{2,40}[ ]*([a-zA-Z]{2,40})+$/;

    //----------------------------------------->Validation
    const validation = () => { }

    //----------------------------------------->Add New Task 
    const addTask = () => {
        if (phoneRegex.test(mobile)) {
            setmobError(false)

            if (nameRegex.test(name)) {
                setnameError(false)

                if (age.length != 0) {
                    setageError(false)

                    if (address.length != 0) {
                        setaddError(false)
                        console.log("good to go");

                        // console.log(data);
                        actions.addToDo(data);
                        navigation.navigate(navigationStrings.HOME);

                    } else {
                        setaddError(true)
                    }

                } else {
                    setageError(true)
                }
            }
            else {
                setnameError(true)
            }
        } else {
            setmobError(true)
        }

    }

    //----------------------------------------->Edit Existing Task 
    const edittask = () => {
        if (phoneRegex.test(mobile)) {
            setmobError(false)

            if (nameRegex.test(name)) {
                setnameError(false)

                if (age.length != 0) {
                    setageError(false)

                    if (address.length != 0) {
                        setaddError(false)
                        console.log("good to go");


                        // console.log(idForEdit)
                        actions.EditToDoData({ mobile, name, age, address, idForEdit });
                        navigation.navigate(navigationStrings.HOME)


                    } else {
                        setaddError(true)
                    }

                } else {
                    setageError(true)
                }
            }
            else {
                setnameError(true)
            }
        } else {
            setmobError(true)
        }

    }


    return (
        <View style={commonStyle.loginBox}>
            <View style={commonStyle.loginFormBg}>
                <Text style={commonStyle.loginHeading}>Task</Text>

                {/* ----------------------------Form Inputs ----------------------------------- */}
                {/* Mobile Input */}
                <View style={{ marginVertical: moderateScaleVertical(15) }}>
                    <PhoneInput
                        placeholder={"Mobile No.*"}
                        containerStyle={commonStyle.phoneInput}
                        value={mobile}
                        onChangeText={(value) => setInputMobile(value)}
                    />
                    {
                        mobError ? <Text style={commonStyle.errorStyle}>Phone Number should have exactly 10 digits</Text> : null
                    }
                </View>

                <Input placeholderText="Name" valueText={name} onChangeTxt={(value) => setInputName(value)} secureTextEntry="false" />
                {
                    nameError ? <Text style={commonStyle.errorStyle}>Name should have atleast 2 digit.</Text> : null
                }

                <Input placeholderText="Age" valueText={age} onChangeTxt={(value) => setInputAge(value)} secureTextEntry="false" />
                {
                    ageError ? <Text style={commonStyle.errorStyle}>Age should be Atleast 18.</Text> : null
                }

                <Input placeholderText="Address" valueText={address} onChangeTxt={(value) => setInputAddress(value)} secureTextEntry="false" />
                {
                    addError ? <Text style={commonStyle.errorStyle}>Address should not be null.</Text> : null
                }

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

