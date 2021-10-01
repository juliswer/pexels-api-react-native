import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import {getImages} from '../api/pexels';

const HomeScreen = () => {

    const loadImages = () => {
        const res = await getImages
        console.log(res)
    }

    useEffect(() => {
        loadImages()
    }, [])
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen
