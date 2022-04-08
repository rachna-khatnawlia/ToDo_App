import { StyleSheet } from "react-native"

export default StyleSheet.create({
    loginBox: {
        flex: 1,
        justifyContent: "center",
    },
    loginFormBg: {
        margin: 10,
        paddingHorizontal: 18,
        paddingVertical: 30,
        backgroundColor: '#fff',
    },
    loginHeading: {
        fontSize: 25,
        textAlign: 'center',
    },
    phoneInput: { height: 55, width: '98%', borderRadius: 3, marginVertical: 20 },
    input: {
        height: 40,
        marginVertical: 5,
        borderWidth: 0.7,
        // borderBottomWidth: 0.3,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    
    eyeButton: { height: 15, width: 20 },
    logSignBtn: {
        backgroundColor: 'green',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 15,
        overflow: 'hidden'
    },
    logBtntxt: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    //Home
    addBox:{
        // position:'relative',
        // height:"95%",
        // backgroundColor:'red',
        position:"absolute",
        bottom:30,
        right:30,
    },
    addBtn:{
        height:40,
        width:40
    }
})