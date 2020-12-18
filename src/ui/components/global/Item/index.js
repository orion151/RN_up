import React from "react";
import {
    View,
    Image,
} from "react-native";

import COLORS from "../../../../constants/colors";

export default Item = (props) => {
    const { type, src, width, height } = props
    return(
        <View style={{ marginLeft: type == "square"? 10 : 0 }}>
            <Image
                source={{ uri: src }}
                style={{
                    width: width,
                    height: height,
                    borderRadius: type == "circle"? width/2 : 0,
                    borderWidth: type == "circle"? 2 : 4,
                    borderColor: type == "circle"? COLORS.CONNECT_LINE : COLORS.BLACK,
                }}
            />
        </View>
    );
};