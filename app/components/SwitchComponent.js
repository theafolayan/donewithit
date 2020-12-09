import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, Switch } from 'react-native'

export default function SwitchComponent() {
 const [isNew, setIsNew] = useState(false)
    return (
        <View>
            <Switch value={isNew } onValueChange={ newValue =>{ setIsNew(newValue)}}/>
        </View>
    )
}
