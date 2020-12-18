import React, { useState, useEffect } from "react";
import {
    View,
    Text,
} from "react-native";

import AbilityItem from "../AbilityItem";
import ITEMS from "../../../../constants/level";
import styles from "./styles";

export default Ability = (props) => {
    const { type, ability } = props;

    const [actives, setActives] = useState([0, 0, 0]);

    useEffect(() => {
        let tempData = [0, 0, 0];
        if (type == ITEMS.difficulty) {
            if (ability == "MODERATE") tempData = [1, 1, 0];
        } else {
            if (ability == 0) tempData = [0, 0, 0];
            if (ability == 1) tempData = [1, 0, 0];
            if (ability == 2) tempData = [1, 1, 0];
            if (ability == 3) tempData = [1, 1, 1];
        }
        setActives(tempData);
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.abilityTitle}>
                {type}
            </Text>
            <View style={styles.abilityItems}>
                <AbilityItem type={type} active={actives[0]} />
                <AbilityItem type={type} active={actives[1]} />
                <AbilityItem type={type} active={actives[2]} />
            </View>
        </View>
    );
};