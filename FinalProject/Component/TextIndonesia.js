import React from 'react';
import { View, Text } from 'react-native';

const TextIndonesia = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>                    INDONESIA                       </Text>
        </View>
    );
};


const styles = {
    textStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    }
}
export default TextIndonesia;