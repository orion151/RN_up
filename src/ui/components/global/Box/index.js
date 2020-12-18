import React from "react";
import {
    Text,
    View,
} from "react-native";
import { Divider } from 'react-native-elements';

import COLORS from "../../../../constants/colors";
import Item from "../Item";
import IMAGES from "../../../../constants/resource";

import styles from "./styles";

export default Box = (props) => {
    const { text1, text2 } = props;

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={[styles.top, { borderTopLeftRadius: 10, backgroundColor: COLORS.PRIMARY_GRADIANT_TOP }]}>
                    <Text style={styles.text}>{text1}</Text>
                </View>
                <View style={[styles.bottom, { borderBottomLeftRadius: 10 }]}>
                    <Item type="circle" src={IMAGES.RUNES_ITEM1} width={40} height={40} />
                    <Divider style={styles.divider} />
                    <Item type="circle" src={IMAGES.RUNES_ITEM2} width={30} height={30} />
                    <Divider style={styles.divider} />
                    <Item type="circle" src={IMAGES.RUNES_ITEM3} width={30} height={30} />
                    <Divider style={styles.divider} />
                    <Item type="circle" src={IMAGES.RUNES_ITEM4} width={30} height={30} />
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.top_parent}>
                    <View style={[styles.top, { borderTopRightRadius: 10, backgroundColor: COLORS.SECONDARY_BACKGROUND }]}>
                        <Text style={styles.text}>{text2}</Text>
                    </View>
                </View>
                <View style={[styles.bottom, { borderBottomRightRadius: 10 }]}>
                    <Item type="square" src={IMAGES.SPELL_ITEM1} width={30} height={30} />
                    <Item type="square" src={IMAGES.SPELL_ITEM1} width={30} height={30} />
                </View>
            </View>
        </View>
    );
};