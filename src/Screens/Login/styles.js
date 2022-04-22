import { StyleSheet } from "react-native";
import { moderateScale, textScale } from "../../styles/responsiveSize";

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
        height: 50, 
        width: 130, 
        resizeMode: 'stretch' 
    },
    googleLogin:{
        height: moderateScale(70), 
        width: 120, 
        resizeMode: 'stretch'
    },
    loginWith:{
        textAlign:'center', 
        marginTop:moderateScale(30), 
        fontSize:textScale(15)
    },
    flexRowCenter:{
        flexDirection:'row', 
        justifyContent:'center'
    }
})