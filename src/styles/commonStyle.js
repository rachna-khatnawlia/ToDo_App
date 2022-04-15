import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "./responsiveSize";

export default StyleSheet.create({
    loginBox: {
        flex: 1,
        justifyContent: "center",
    },
    loginFormBg: {
        margin: moderateScale(10),
        paddingHorizontal: moderateScale(18),
        paddingVertical: moderateScaleVertical(25),
        backgroundColor: '#fff',
    },
    loginHeading: {
        fontSize: textScale(22),
        textAlign: 'center',
    },
    phoneInput: { 
        height: moderateScale(55), 
        width: '98%', 
        borderRadius: moderateScale(3), 
    },
    input: {
        height: moderateScale(40),
        marginVertical: moderateScaleVertical(5),
        borderWidth: 0.7,
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(4)
    },
    logSignBtn: {
        backgroundColor: 'green',
        borderRadius: moderateScale(2),
        alignSelf: 'center',
        marginTop: moderateScaleVertical(13),
        overflow: 'hidden'
    },
    logBtntxt: {
        paddingVertical: moderateScaleVertical(8),
        paddingHorizontal: moderateScale(20),
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },    
    errorStyle:{ 
        textAlign: 'center',
        color: 'red', 
        fontSize: moderateScale(12) 
    }
})