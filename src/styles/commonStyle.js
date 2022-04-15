import { StyleSheet } from "react-native";

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
    phoneInput: { 
        height: 55, 
        width: '98%', 
        borderRadius: 3, 
        marginVertical: 20 
    },
    input: {
        height: 40,
        marginVertical: 5,
        borderWidth: 0.7,
        paddingHorizontal: 10,
        borderRadius: 4
    },
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
})