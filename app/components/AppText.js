import React from 'react'
import { View, Text} from 'react-native'
import defaultStyles from '../config/styles';

export default function AppText({children, style}) {
    return (
        <View>
            <Text  style={[defaultStyles.text, style]}>{children}</Text>
        </View>
    )
}
