import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import {getImages} from '../api/pexels';

const HomeScreen = () => {

    const [photos, setPhotos] = useState([])

    const loadImages = async () => {
        const res = await getImages
        console.log(res.headers)
        setPhotos(res.data.photos)
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
