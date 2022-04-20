import React, { useState } from 'react';
import RNRestart from 'react-native-restart'

import loginStyles from './styles';
import commonStyle from '../../styles/commonStyle';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import { changeLanguage } from '../../utils/utils';

import PhoneInput from "react-native-phone-number-input";
import { Input } from '../../Components/Input';
import { moderateScaleVertical } from '../../styles/responsiveSize';

import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { googleLogin } from '../../../App';

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

  const onchangeLang = (key) => {
    changeLanguage(key)
    RNRestart.Restart()
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
      </View>
      <View style={commonStyle.loginBox}>
        <View style={commonStyle.loginFormBg}>
          <Text style={commonStyle.loginHeading}>{strings.LOGIN_SCREEN}</Text>

          {/* --------------------------------Mobile Input----------------------------- */}
          <View style={{ marginVertical: moderateScaleVertical(15) }}>
            <PhoneInput
              placeholder={strings.MOBILE_NO}
              containerStyle={commonStyle.phoneInput}
              onChangeText={(value) => setMob(value)}
            />
            {
              mobError ? <Text style={commonStyle.errorStyle}>Phone Number should have exactly 10 digits</Text> : null
            }
          </View>

          <View>
            {/* --------------------------------Password Input----------------------------- */}
            <Input placeholderText={strings.PASSWORD} valueText={pass} onChangeTxt={(value) => setPass(value)} secureTextEntry={passwordVisible} />

            {/* -----------------------Password Input Eye------------------- */}
            <TouchableOpacity onPress={handlePasswordEye} style={loginStyles.eyeBox}>
              <Image
                source={(passwordVisible) ? imagePath.hidePass : imagePath.showPass}
                style={loginStyles.eyeImg}
              />
            </TouchableOpacity>
            {
              passError ? <Text style={commonStyle.errorStyle}>Password should have atleast 8 digits, 1 capital letter,    1 lowerCase Letter and 1 special digit.</Text> : null
            }
          </View>

          {/* --------------------------------Login Button----------------------------- */}
          <TouchableOpacity onPress={() => handleLogin(data)}>
            <View style={commonStyle.logSignBtn}>
              <Text style={commonStyle.logBtntxt}>{strings.LOGIN}</Text>
            </View>
          </TouchableOpacity>
          
          
          <TouchableOpacity onPress={googleLogin} style={{marginVertical:10}}>
              <Image
                source={imagePath.google}
                style={{height:70, width:100}}
              />
          </TouchableOpacity>

          <View>
            <Button title="Change Language (Fr.)" color="black" onPress={() => { onchangeLang('fr') }} />
          </View>

          <View>
            <Button title="Change Language (EN.)" color="black" onPress={() => { onchangeLang('en') }} />
          </View>

        </View>

      </View>
    </View>

  );
}
