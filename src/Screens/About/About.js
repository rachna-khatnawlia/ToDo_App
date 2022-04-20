import React from 'react';

import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';


export default function About({navigation}) {
    const userData = useSelector(state => state.UserStatus.userLoginState);
    // console.log("userDetails on home page after Login", userData?.user?.email);
    const email = userData?.email;
    const name = userData?.name;
    const givenName = userData?.givenName;
    return (
        <View>
            <Text>Your E-mail is : {email}</Text>
            <Text>Your UserName is : {name}</Text>
            <Text>Your GivenName is : {givenName}</Text>
        </View>


    );
}
