import React, { useState } from 'react';

import loginStyles from './styles';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import commonStyle from '../../styles/commonStyle';
import { Input } from '../../Components/Input';

export default function Login() {
  //-------------------------------Field Value Usestate----------------------------
  const [pass, setPass] = useState('')
  const [mob, setMob] = useState('')


  //--------------------Handle Password Visibility using Eye Button----------------
  const [passwordVisible, setPasswordVisible] = useState(true)
  function handlePasswordEye() {
    if (passwordVisible) {
      setPasswordVisible(false)
    } else {
      setPasswordVisible(true)
    }
  }


  const data = [{ pass, mob }];

  //-------------------------------Handle Login Function---------------------------
  const handleLogin = (data) => {
    console.log(data);
    actions.loginFunction(data);
  }


  return (
    <View style={commonStyle.loginBox}>
      <View style={commonStyle.loginFormBg}>
        <Text style={commonStyle.loginHeading}>Login Screen</Text>

        {/* --------------------------------Mobile Input----------------------------- */}
        <PhoneInput
          placeholder={"Mobile No.*"}
          containerStyle={commonStyle.phoneInput}
          onChangeText={(value) => setMob(value)}
        />

        <View>
          {/* --------------------------------Password Input----------------------------- */}
          <Input placeholderText="Password" valueText={pass} onChangeTxt={(value) => setPass(value)} secureTextEntry={passwordVisible} />

          {/* -----------------------Password Input Eye------------------- */}
          <TouchableOpacity onPress={handlePasswordEye} style={loginStyles.eyeBox}>
            <Image
              source={(passwordVisible) ? imagePath.hidePass : imagePath.showPass}
              style={loginStyles.eyeButton}
            />
          </TouchableOpacity>
        </View>

        {/* --------------------------------Login Button----------------------------- */}
        <TouchableOpacity onPress={() => handleLogin(data)}>
          <View style={commonStyle.logSignBtn}>
            <Text style={commonStyle.logBtntxt}>LOGIN</Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
  );
}
