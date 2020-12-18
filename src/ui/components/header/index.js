import React from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
} from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

import Ability from "../global/Ability";
import ITEMS from "../../../constants/level";
import IMAGES from "../../../constants/resource";
import COLORS from "../../../constants/colors";

import styles from "./styles";

export default Header = (props) => {
    const { title, subTitle, src } = props;
    const { damage, utility, toughness, difficulty } = useSelector(state => state.abilityData);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[COLORS.GRADIANT_TOP, COLORS.BACKGROUND, COLORS.GRADIANT_BOTTOM]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}
            >
                <ImageBackground
                    source={{ uri: src }}
                    style={styles.imageView}
                >
                    <View style={styles.header}>
                        <View style={styles.headerText}>
                            <View style={styles.headerTitleSection}>
                                <Text style={styles.headerTitle}>
                                    {title}
                                </Text>
                                <Image source={IMAGES.HEADER_ITEM1} style={styles.headerImage}></Image>
                                <Image source={IMAGES.HEADER_ITEM2} style={styles.headerImage}></Image>
                            </View>
                            <Text style={styles.headerSubTitle}>
                                {subTitle}
                            </Text>
                        </View>
                        <View style={styles.ability}>
                            <Ability type={ITEMS.damage} ability={damage} />
                            <Ability type={ITEMS.utility} ability={utility} />
                            <Ability type={ITEMS.toughness} ability={toughness} />
                            <Ability type={ITEMS.difficulty} ability={difficulty} />
                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
};