import * as React from 'react';
import {
    View,
} from "react-native";
import { Divider } from 'react-native-elements';

import { Header, Content } from "../../components";
import IMAGES from "../../../constants/resource";

import styles from "./styles";

export default AbilityScreen = () => {
    return (
        <View style={styles.container}>
            <Header
                title="AHRI"
                subTitle="The Nine-Tailed Fox"
                src={IMAGES.HEADER_IMAGE}
            />
            <Divider style={ styles.divider } />
            <Content />
        </View>
    );
};