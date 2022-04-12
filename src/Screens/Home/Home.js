import React, { useState } from 'react';

import styles from '../../styles/styles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';

import { EditToDo, Logout } from '../../redux/actions/auth';

import { View, Text, TouchableOpacity, Image, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'react-native-paper';
import { removeToDo } from '../../redux/actions/auth';

export default function Home({ navigation }) {
    const dispatch = useDispatch();
    const EditDataPassThroughParam = (data) =>{
        console.log(data)
        navigation.navigate(navigationStrings.ADD_TASK,{paramData:data})

    }
    const list = useSelector((state) => state.taskInput.todo_list)
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                <Text>HOME</Text>

                <TouchableOpacity onPress={() => dispatch(Logout())}>
                    <Text style={{ fontSize: 15, color: 'orange', fontWeight: '600', }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <DataTable style={styles.container}>

                <DataTable.Header style={styles.tableHeader}>
                    {/* <DataTable.Title>Id</DataTable.Title> */}
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Age</DataTable.Title>
                    <DataTable.Title>Address</DataTable.Title>
                    <DataTable.Title>Mobile No.</DataTable.Title>
                    <DataTable.Title>Delete</DataTable.Title>
                    <DataTable.Title>Edit</DataTable.Title>

                </DataTable.Header>

                {
                    list.map((element) => {
                        return (

                            <DataTable.Row key={element.id}>
                                {/* <DataTable.Cell><>{element.id}</></DataTable.Cell> */}
                                <DataTable.Cell><>{element.name}</></DataTable.Cell>
                                <DataTable.Cell><>{element.age}</></DataTable.Cell>
                                <DataTable.Cell><>{element.address}</></DataTable.Cell>
                                <DataTable.Cell><>{element.mobile}</></DataTable.Cell>
                                <DataTable.Cell>
                                    <TouchableOpacity onPress={()=> dispatch(removeToDo(element.id))}>
                                        <Image source={imagePath.delete} style={{ height: 30, width: 30, marginTop: 10 }} />
                                    </TouchableOpacity>
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    <TouchableOpacity onPress={() => EditDataPassThroughParam(element)}>
                                        <Image source={imagePath.edit} style={{ height: 30, width: 30, marginTop: 10 }} />
                                    </TouchableOpacity>
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                }

            </DataTable>



            {/* <View style={[styles.logSignBtn, { backgroundColor: 'black' }]}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_TASK)} >
                    <Text style={[styles.logBtntxt, { paddingHorizontal: 70, paddingVertical: 10 }]}>Add task</Text>
                </TouchableOpacity>
            </View> */}


            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_TASK)} style={styles.addBox}>
                <Image source={imagePath.add} style={styles.addBtn} />
            </TouchableOpacity>
        </View>
    );
}
