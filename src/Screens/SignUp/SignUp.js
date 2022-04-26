import React, { useState } from 'react';

import loginStyles from '../Login/styles';
import commonStyle from '../../styles/commonStyle';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import strings from '../../constants/lang';

import { Input } from '../../Components/Input';

import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import navigationStrings from '../../navigation/navigationStrings';

export default function SignUp({navigation}) {
  //-------------------------------Field Value Usestate----------------------------

  //--------------------Handle Password Visibility using Eye Button----------------
  const [passwordVisible, setPasswordVisible] = useState(true)
  function handlePasswordEye() {
    if (passwordVisible) {
      setPasswordVisible(false)
    } else {
      setPasswordVisible(true)
    }
  }

  //-------------------------------SignUp data-------------------------------------
  const [signUpData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCode: '',
    countryCode: '',
    deviceToken: '',
    deviceType: '',
    password: ''
  })

  const { firstName, lastName, email, phone, phoneCode, countryCode, deviceToken, deviceType, password } = signUpData;
  const updateState = (data) => setSignupData(() => ({ ...signUpData, ...data }))

  //-------------------------------Handle Login Function---------------------------
  // const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  // const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


  const onSignUp = async() => {
    let signUpAPIData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      phone_code: '91',
      country_code: 'IN',
      device_token: 'dtLFa9OM6UEbsHD1Cv_S-O:APA91bEO2rU_o3T5DkrZ32zzQwpbATBOf4kw0ASjzVmiKRDaDcOfrtv_fQVmF24Z7OLILBehOJob9V43i4og7LgPwrWE0TuECQaiDHRT3GBp9rMwbfya51vgbn8BovWFo4wiuY0KB6Cw',
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password
    }
    console.log("Signup data : ", signUpAPIData)
    try {
      const res = await actions.SignUp(signUpAPIData)
      console.log("singnup api res_+++++", res)
      navigation.navigate(navigationStrings.LOGIN)
      alert("User signup successfully....!!!")
    } catch (error) {
      console.log("error raised", error)
      alert(error?.message)
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <View>
      </View>
      <View style={commonStyle.loginBox}>
        <View style={commonStyle.loginFormBg}>
          <Text style={commonStyle.loginHeading}>{strings.SIGNUP_SCREEN}</Text>

          <View>
            {/* --------------------------------FirstName Input----------------------------- */}
            <Input
              placeholderText="First Name"
              // value={firstName}
              onChangeTxt={(firstName) => updateState({ firstName })}
              secureTextEntry={false}
            />

            {/* --------------------------------LastName Input----------------------------- */}
            <Input
              placeholderText="Last Name"
              // value={lastName}
              onChangeTxt={(lastName) => updateState({ lastName })}
              secureTextEntry={false}
            />

            {/* --------------------------------E-mail Input----------------------------- */}
            <Input
              placeholderText="E-mail"
              // value={email}
              onChangeTxt={(email) => updateState({ email })}
              secureTextEntry={false}
            />

            {/* --------------------------------Mobile Input----------------------------- */}
            <Input
              placeholderText="Mobile Number"
              // value={phone}
              onChangeTxt={(phone)=>updateState({phone})}
              secureTextEntry={false}
            />
          </View>
          <View>
            {/* --------------------------------Password Input----------------------------- */}
            <Input
              placeholderText="Password"
              // value={password}
              onChangeTxt={(password) => updateState({ password })}
              secureTextEntry={passwordVisible}
            />

            {/* -----------------------Password Input Eye------------------- */}
            <TouchableOpacity onPress={handlePasswordEye} style={loginStyles.eyeBox}>
              <Image
                source={(passwordVisible) ? imagePath.hidePass : imagePath.showPass}
                style={loginStyles.eyeImg}
              />
            </TouchableOpacity>
            {/* {
              passError ? <Text style={commonStyle.errorStyle}>Password should have atleast 8 digits, 1 capital letter,    1 lowerCase Letter and 1 special digit.</Text> : null
            } */}
          </View>

          {/* --------------------------------Signup Button----------------------------- */}
          <TouchableOpacity onPress={onSignUp}>
            <View style={commonStyle.logSignBtn}>
              <Text style={commonStyle.logBtntxt}>{strings.SIGNUP}</Text>
            </View>
          </TouchableOpacity>


        </View>

      </View>
    </View>

  );
}
