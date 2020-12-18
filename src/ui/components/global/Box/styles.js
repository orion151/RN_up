import { StyleSheet } from "react-native";

import COLORS from "../../../../constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
    },
    left: {
        minWidth: "60%"
    },
    right: {
        flex: 1,

    },
    top_parent: {
        backgroundColor: COLORS.PRIMARY_GRADIANT_TOP,
        borderTopRightRadius: 10,
    },
    top: {
        height: 30,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,
        opacity: 0.7,
    },
    bottom: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: COLORS.BOX,
        minHeight: 60,
        alignItems: "center",
    },
    divider: {
        backgroundColor: COLORS.CONNECT_LINE,
        width: 10,
        height: 2,
    },
    text: {
        color: COLORS.WHITE,
        fontWeight: "400",
        fontSize: 16,
    },
});