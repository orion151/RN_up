import React from "react";

import {
    View,
    TouchableOpacity,
    Text,
} from "react-native";

import styles from "./styles";

export default ToggleButton = (props) => {
    const { text1, text2, selected, onChange } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    onChange(!selected)
                }}
                style={styles.button}
            >
                <View style={selected == true ? styles.active : styles.deActive}>
                    <Text style={[styles.text, { color: selected == true ? COLORS.WHITE : COLORS.DISABLE_WHITE, opacity: selected == true ? 1 : 0.3 }]}>
                        {text1}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    onChange(!selected)
                }}
                style={styles.button}
            >
                <View style={selected == false ? styles.active : styles.deActive}>
                    <Text style={[styles.text, { color: selected == false ? COLORS.WHITE : COLORS.DISABLE_WHITE, opacity: selected == false ? 1 : 0.3 }]}>
                        {text2}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};