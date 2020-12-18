import React, { useState } from "react";
import {
    View,
} from "react-native";

import ToggleButton from "../../components/global/ToggleButton";
import Box from "../../components/global/Box";

import styles from "./styles";

export default Content = (props) => {

    const [isSelected, setSelected] = useState(false)

    return(
        <View style={styles.container}>
            <ToggleButton
                text1="BUILD"
                text2="INFO"
                selected={isSelected}
                onChange={(value) => {
                    setSelected(value)
                }}
            />
            <Box
                text1="RUNES REFORGED"
                text2="SPELLS"
            />
        </View>
    )
}