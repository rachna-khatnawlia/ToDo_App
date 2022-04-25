import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export default StyleSheet.create({
    eyeBox: {
        position: 'absolute',
        right: moderateScale(20),
        top: moderateScale(17)
    },
    eyeImg: {
        height: moderateScale(18),
        width: moderateScale(21)
    },
    fbLogin: {
        height: moderateScale(70),
        width: moderateScale(70),
        resizeMode: 'cover',
        borderRadius: moderateScale(40)
    },
    googleLogin: {
        height: moderateScale(50),
        width: moderateScale(50),
        resizeMode: 'cover',
        borderRadius: 100,
        marginHorizontal: moderateScale(10)
    },
    loginWith: {
        textAlign: 'center',
        marginTop: moderateScale(15),
        fontSize: textScale(15)
    },
    flexRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    changeLangBtn: {
        marginHorizontal: moderateScale(45),
        marginVertical: moderateScaleVertical(5),
        backgroundColor: 'black',
        paddingVertical: moderateScaleVertical(10),
        borderRadius: moderateScale(3)
    },
    changeLangTxt: {
        color: '#fff',
        textAlign: 'center'
    },
    noAccount: {
        fontSize: textScale(12),
        color:'tomato',
        marginTop:moderateScaleVertical(10),
        textAlign:'center',
        fontWeight:'500'
    }

})