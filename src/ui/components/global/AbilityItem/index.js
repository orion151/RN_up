import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import propTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";

import COLORS from "../../../../constants/colors";
import ITEMS from "../../../../constants/level";
import styles from "./styles";

export default AbilityItem = (props) => {
    const { viewStyle, active, type } = props;
    
    return (
        <View
            style={StyleSheet.flatten([
                active == 1? (type === ITEMS.difficulty ? styles.containerActiveSecondary : styles.containerActivePrimary) : styles.containerDeActive,
                viewStyle,
            ])}
        >
            {active == 1 &&
                <LinearGradient
                    colors={[COLORS.PRIMARY_GRADIANT_TOP, COLORS.PRIMARY_GRADIANT_BOTTOM]}
                    style={styles.linearGradient}
                />
            }
        </View>
    );
};

AbilityItem.propTypes = {
    viewStyle: propTypes.oneOfType([propTypes.object, propTypes.array]),
};

AbilityItem.defaultProps = {
    viewStyle: {},
};