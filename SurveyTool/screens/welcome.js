import React from 'react'
import { View, Text, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'


export default function Welcome({ navigation }) {
    const pressEvent = () => {
        navigation.navigate('Student List')
    }

    return (
        <View style={globalStyles.bg}>
            <View style={globalStyles.aContainer}>

                <Text style={globalStyles.titleText}>PenBerry High School</Text>
                <Image style={globalStyles.logo}
                    source={require('../assets/pencils.png')} />

                <View style={globalStyles.footer}>
                    <Text style={globalStyles.footerText}>Welcome!</Text>

                    <Button
                        buttonStyle={globalStyles.button}
                        icon={<Entypo name="list" size={30} color="black" />}
                        title="Student List"
                        titleStyle={globalStyles.buttonText}
                        type="clear"
                        raised={true}
                        onPress={pressEvent}
                    />
                </View>
            </View>
        </View>
    )
}