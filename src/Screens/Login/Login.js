import React, { useState } from 'react';

import loginStyles from './styles';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import commonStyle from '../../styles/commonStyle';
import { Input } from '../../Components/Input';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

export default function Login() {
  //-------------------------------Field Value Usestate----------------------------
  const [pass, setPass] = useState('')
  const [mob, setMob] = useState('')

  const [mobError, setmobError] = useState(false)
  const [passError, setpassError] = useState(false)

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
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const handleLogin = (data) => {
    if (phoneRegex.test(mob)) {
      setmobError(false)

      if (passRegex.test(pass)) {

        setpassError(false)

        console.log(data);
        actions.loginFunction(data);

      } else {
        setpassError(true)
        setmobError(false)
      }
    }
    else {
      setmobError(true)
      setpassError(true)
    }
  }


  return (
    <View style={commonStyle.loginBox}>
      <View style={commonStyle.loginFormBg}>
        <Text style={commonStyle.loginHeading}>Login Screen</Text>

        {/* --------------------------------Mobile Input----------------------------- */}
        <View style={{ marginVertical: moderateScaleVertical(15)}}>
          <PhoneInput
            placeholder={"Mobile No."}
            containerStyle={commonStyle.phoneInput}
            onChangeText={(value) => setMob(value)}
          />
          {
            mobError ? <Text style={commonStyle.errorStyle}>Phone Number should have exactly 10 digits</Text> : null
          }
        </View>

        <View>
          {/* --------------------------------Password Input----------------------------- */}
          <Input placeholderText="Password" valueText={pass} onChangeTxt={(value) => setPass(value)} secureTextEntry={passwordVisible} />

          {/* -----------------------Password Input Eye------------------- */}
          <TouchableOpacity onPress={handlePasswordEye} style={loginStyles.eyeBox}>
            <Image
              source={(passwordVisible) ? imagePath.hidePass : imagePath.showPass}
              style={loginStyles.eyeImg}
            />
          </TouchableOpacity>
          {
            passError ? <Text style={commonStyle.errorStyle}>Password should have atleast 8 digits, 1 capital letter,    1 lowerCase Letter and 1 special digit.</Text>: null
          }
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
