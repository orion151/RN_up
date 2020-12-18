import { StyleSheet } from "react-native";

import COLORS from "../../../../constants/colors";

export default StyleSheet.create({
    containerActivePrimary: {
        width: 25,
        height: 6,
        backgroundColor: COLORS.ACTIVE_ABILITY_PRIMARY,
        borderRadius: 5,
    },
    containerActiveSecondary: {
        width: 25,
        height: 6,
        backgroundColor: COLORS.ACTIVE_ABILITY_SECONDARY,
        borderRadius: 5,
    },
    containerDeActive: {
        width: 25,
        height: 6,
        backgroundColor: COLORS.DEACTIVE_ABILITY,
        borderRadius: 5,
    },
});