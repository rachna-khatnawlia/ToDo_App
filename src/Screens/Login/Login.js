import React, { useState } from 'react';
import RNRestart from 'react-native-restart'

import loginStyles from './styles';
import commonStyle from '../../styles/commonStyle';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import { changeLanguage } from '../../utils/utils';

import { GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';

import PhoneInput from "react-native-phone-number-input";
import { Input } from '../../Components/Input';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { googleLogin } from '../../../App';
import styles from './styles';
import navigationStrings from '../../navigation/navigationStrings';


export default function Login({ navigation }) {
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

  const handleLogin = async (data) => {
    // if (phoneRegex.test(mob)) {
    //   setmobError(false)

    //   if (passRegex.test(pass)) {

    //     setpassError(false)

    //     console.log(data);
    //     actions.loginFunction(data);

    //   } else {
    //     setpassError(true)
    //     setmobError(false)
    //   }
    // }
    // else {
    //   setmobError(true)
    //   setpassError(true)
    // }
    let apiData = {
      phone: mob,
      phone_code: "91",
      device_token: 'dtLFa9OM6UEbsHD1Cv_S-O:APA91bEO2rU_o3T5DkrZ32zzQwpbATBOf4kw0ASjzVmiKRDaDcOfrtv_fQVmF24Z7OLILBehOJob9V43i4og7LgPwrWE0TuECQaiDHRT3GBp9rMwbfya51vgbn8BovWFo4wiuY0KB6Cw',
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: pass
    }
    try {
      const res = await actions.Login(apiData)
      console.log("Login api result +++++", res)
      alert("User Login successfully....!!!")
    } catch (error) {
      console.log("error raised", error)
      alert(error?.message)
    }

  }

  const onchangeLang = (key) => {
    changeLanguage(key)
    RNRestart.Restart()
  }

  const fbLogin = (resCallBack) => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log("FB_LOGIN_RESULT =====>", result);
        if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
          resCallBack({ message: "email is required" })
        }
        if (result.isCancelled) {
          console.log("error")
        } else {
          const infoResquest = new GraphRequest(
            '/me?fields = email, name, picture',
            null,
            resCallBack
          );
          new GraphRequestManager().addRequest(infoResquest).start()
        }
      },
      function (error) {
        console.log("login failed with error", error)
      }
    )
  }

  const onFbLogin = async () => {
    try {
      await fbLogin(resInfoCallBack)
    } catch (error) {
      console.log("error", error)
    }
  }

  const resInfoCallBack = async (error, result) => {
    if (error) {
      console.log("Login Error", error)
    } else {
      const userData = result;
      console.log("your data is", userData)
      actions.loginFunction(data);

    }
  }



  return (
    <View style={{ flex: 1 }}>
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
          <TouchableOpacity onPress={handleLogin}>
            <View style={commonStyle.logSignBtn}>
              <Text style={commonStyle.logBtntxt}>{strings.LOGIN}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGN_UP)}>
            <Text style={styles.noAccount}>{strings.NO_ACCOUNT}</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.loginWith}>{strings.LOGIN_WITH}</Text>
          </View>

          <View style={styles.flexRowCenter}>
            <TouchableOpacity onPress={googleLogin} style={{ alignSelf: 'center' }}>
              <Image
                source={imagePath.google} style={styles.googleLogin}
              />
            </TouchableOpacity>
            <Text style={{ alignSelf: 'center' }}>{strings.OR}</Text>
            <TouchableOpacity onPress={onFbLogin} style={{ alignSelf: 'center' }}>
              <Image
                source={imagePath.fb} style={styles.fbLogin}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.changeLangBtn} onPress={() => { onchangeLang('fr') }}>
            <Text style={styles.changeLangTxt}>Change Language (French)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.changeLangBtn} onPress={() => { onchangeLang('en') }}>
            <Text style={styles.changeLangTxt}>Change Language (English)</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>

  );
}
