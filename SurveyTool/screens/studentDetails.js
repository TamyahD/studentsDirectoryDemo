import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { globalStyles } from '../styles/global'


export default function StudentDetails({ route }) {
    /* route to grab (student) item parameters for details */
    const { item } = route.params

    return (
        /* format student details display */
        <SafeAreaView style={globalStyles.detailsContainer}>
            <Text style={globalStyles.studentDetailsText}>
                Student ID: {JSON.stringify(item.id)}{'\n'}
                Student Name: {JSON.stringify(item.firstN + " " + item.lastN)}{'\n'}
                Major: {JSON.stringify(item.major)}{'\n'}
                Goal: {JSON.stringify(item.goal)}
            </Text>
        </SafeAreaView>
    )
}