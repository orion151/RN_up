import { StyleSheet } from "react-native";

import COLORS from "../../../constants/colors";
import FONTS from "../../../constants/font";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "30%",
    },
    gradient: {
        height: "100%",
        width: "100%",
    },
    imageView: {
      flex : 1,
      paddingBottom: 20,
    },
    header: {
        flex: 1,
        justifyContent: "flex-end"
    },
    headerText: {
        flexDirection: "column",
        padding: 10,
    },
    headerTitleSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerTitle: {
        fontFamily: FONTS.default,
        fontWeight: "700",
        fontSize: 25,
        color: COLORS.WHITE,
    },
    headerImage: {
        width: 20,
        height: 30,
        marginLeft: 5,
    },
    headerSubTitle: {
        fontFamily: FONTS.default,
        fontWeight: "400",
        fontSize: 16,
        color: COLORS.WHITE,
    },
    ability: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});