import { StyleSheet } from "react-native";

import COLORS from "../../../../constants/colors";
import FONTS from "../../../../constants/font";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 30,
        width: "100%",
        borderRadius: 10,
        backgroundColor: COLORS.TAB_BACKGROUND,
        padding: 3, 
    },
    gradient: {
       flex: 1,
       borderRadius: 12,
    },
    button: {
        width: "50%",
        height: "100%",
    },
    active: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_GRADIANT_TOP,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.7,
    },
    deActive: {
        flex: 1,
        backgroundColor: COLORS.TAB_BACKGROUND,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: FONTS.default,
        fontWeight: "700",
        fontSize: 15,
    },
});