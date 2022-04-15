import React, { useState } from 'react';
import styles from '../../styles/styles';
import imagePath from '../../constants/imagePath';
import { loginFunction } from '../../redux/actions/auth';

import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();

  const [pass, setPass] = useState('')
  const [mob, setMob] = useState('')

  const [passwordVisible, setPasswordVisible] = useState(true)
  function handlePasswordEye() {
    if (passwordVisible) {
      setPasswordVisible(false)
    } else {
      setPasswordVisible(true)
    }
  }
  
  const data = [{pass, mob}];
  const handleLogin = (data) =>{
    console.log(data);
    dispatch(loginFunction(data))
  }
  return (
    <View style={styles.loginBox}>
      <View style={styles.loginFormBg}>
        <Text style={styles.loginHeading}>Login Screen</Text>

        {/* Mobile Input */}
        <PhoneInput
          placeholder={"Mobile No.*"}
          containerStyle={styles.phoneInput}
          onChangeText={(value) => setMob(value)}
        />
        {/* Password */}
        <View>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            onChangeText={(value) => setPass(value)}
            secureTextEntry={passwordVisible}
          />
          <TouchableOpacity onPress={handlePasswordEye} style={{ position: 'absolute', right: 20, top: 21 }}>
            <Image
              source={(passwordVisible) ? imagePath.hidePass : imagePath.showPass}
              style={styles.eyeButton}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleLogin(data)}>
          <View style={styles.logSignBtn}>
            <Text style={styles.logBtntxt}>LOGIN</Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
  );
}
