import { StyleSheet } from "react-native";

import COLORS from "../../../../constants/colors";
import FONTS from "../../../../constants/font";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    abilityTitle: {
        fontFamily: FONTS.default,
        fontWeight: "400",
        fontSize: 14,
        color: COLORS.WHITE,
        paddingLeft: 8,
    },
    abilityItems: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 5,
    },
});