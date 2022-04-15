import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export const homeStyle = StyleSheet.create({
    homeContainer: {
        flex: 1, 
        position: 'relative'
    },
    homeRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: moderateScale(15)
    },
    logout: {
        fontSize: textScale(13),
        color: 'orange',
        fontWeight: '700',
    },
    editDelBtn: {
        height: moderateScale(30),
        width: moderateScale(30),
        marginTop: moderateScaleVertical(10)
    },
    addBox:{
        position:"absolute",
        bottom:moderateScale(30),
        right:moderateScale(30),
    },
    addBtn:{
        height:moderateScale(40),
        width:moderateScale(40)
    }
});