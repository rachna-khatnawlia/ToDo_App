import { StyleSheet } from "react-native";
import { moderateScale } from "../../styles/responsiveSize";

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
})