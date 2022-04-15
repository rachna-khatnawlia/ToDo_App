import React, { useEffect, useState } from 'react';

import { homeStyle } from './styles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';

import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { DataTable } from 'react-native-paper';

export default function Home({ navigation }) {
    
    const EditDataPassThroughParam = (data) => {
        console.log(data)
        navigation.navigate(navigationStrings.ADD_TASK, { paramData: data })
    }
    const list = useSelector((state) => state.taskInput.todo_list);

    return (
        <View style={homeStyle.homeContainer}>
                    {/* -------------------------Home and Logout--------------------------- */}
            <View style={homeStyle.homeRow1}>
                <Text>HOME</Text>
                <TouchableOpacity onPress={() => actions.Logout()}>
                    <Text style={homeStyle.logout}>Logout</Text>
                </TouchableOpacity>
            </View>

                    {/* ------------------------------Table-------------------------------- */}
            <DataTable>
                <DataTable.Header>
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
                                <DataTable.Cell><>{element.name}</></DataTable.Cell>
                                <DataTable.Cell><>{element.age}</></DataTable.Cell>
                                <DataTable.Cell><>{element.address}</></DataTable.Cell>
                                <DataTable.Cell><>{element.mobile}</></DataTable.Cell>
                                <DataTable.Cell>
                                    <TouchableOpacity onPress={() => actions.removeToDo(element.id)}>
                                        <Image source={imagePath.delete} style={homeStyle.editDelBtn} />
                                    </TouchableOpacity>
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    <TouchableOpacity onPress={() => EditDataPassThroughParam(element)}>
                                        <Image source={imagePath.edit} style={homeStyle.editDelBtn} />
                                    </TouchableOpacity>
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                }
            </DataTable>

                    {/* -------------------------Add Item Button--------------------------- */}
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_TASK)} style={homeStyle.addBox}>
                <Image source={imagePath.add} style={homeStyle.addBtn} />
            </TouchableOpacity>
        </View>
    );
}
