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
    fbLogin:{ 
        height: moderateScale(85), 
        width: moderateScale(85), 
        resizeMode: 'cover',
        borderRadius:moderateScale(40)
    },
    googleLogin:{
        height: moderateScale(60), 
        width: moderateScale(60), 
        resizeMode: 'contain',
        borderRadius:moderateScale(40),
        marginHorizontal:moderateScale(10)
    },
    loginWith:{
        textAlign:'center', 
        marginTop:moderateScale(15), 
        fontSize:textScale(15)
    },
    flexRowCenter:{
        flexDirection:'row', 
        justifyContent:'center'
    }, 
    changeLangBtn:{marginHorizontal:moderateScale(45), marginVertical:moderateScaleVertical(5), backgroundColor:'black', paddingVertical:moderateScaleVertical(10), borderRadius:moderateScale(3) },
    changeLangTxt:{color:'#fff', textAlign:'center'}


})