import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    homeContainer: {
        flex: 1, position: 'relative'
    },
    homeRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    logout: {
        fontSize: 15,
        color: 'orange',
        fontWeight: '600',
    },
    editDelBtn: {
        height: 30,
        width: 30,
        marginTop: 10
    },
    addBox:{
        position:"absolute",
        bottom:30,
        right:30,
    },
    addBtn:{
        height:40,
        width:40
    }
});