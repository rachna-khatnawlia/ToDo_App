import React, { useState } from 'react';
import styles from '../../styles/styles';
import imagePath from '../../constants/imagePath';

import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import { Logout } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import navigationStrings from '../../navigation/navigationStrings';
export default function Home({ navigation }) {
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                <Text>HOME</Text>

                <TouchableOpacity onPress={() => dispatch(Logout())}>
                    <Text style={{ fontSize: 15, color: 'orange', fontWeight: '600', }}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.logSignBtn, { backgroundColor: 'black' }]}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_TASK)} >
                    <Text style={[styles.logBtntxt, { paddingHorizontal: 70, paddingVertical: 10 }]}>Add task</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_TASK)} style={styles.addBox}>
                <Image source={imagePath.add} style={styles.addBtn} />
            </TouchableOpacity>
        </View>
    );
}
