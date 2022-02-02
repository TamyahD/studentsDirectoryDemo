import React, { useState } from 'react'
import {
    SafeAreaView, TextInput, View,
    TouchableWithoutFeedback, Keyboard,
    KeyboardAvoidingView
} from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik';
import { Button } from 'react-native-elements'
// https://www.youtube.com/watch?v=S_5xMvaUUP0
// Referenced for KeyboardAvoidingView


export default function Signup({ addStudent }) {
    const [enableShift, setEnableShift] = useState(false)

    return (
        <KeyboardAvoidingView behavior="position" style={globalStyles.container} enabled={enableShift}>

            <SafeAreaView>
                {/* set student values */}
                <Formik
                    initialValues={{
                        id: '',
                        firstN: '',
                        lastN: '',
                        major: '',
                        goal: ''
                    }}
                    onSubmit={(text) => {
                        addStudent(text)
                    }}>

                    {/* built in formik props to access data */}
                    {(props) => (
                        <TouchableWithoutFeedback onPress={() => {
                            Keyboard.dismiss()
                        }}>
                            <View style={globalStyles.pushUp}>
                                {/* input form */}
                                <TextInput
                                    placeholder='Student ID'
                                    placeholderTextColor={'#52565e'}
                                    style={globalStyles.simpleInput}
                                    autoCorrect={false}
                                    onFocus={() => setEnableShift(false)}
                                    onChangeText={props.handleChange('id')}
                                    value={props.values.id}
                                    keyboardType='numeric'
                                />
                                <TextInput
                                    placeholder={'First Name'}
                                    placeholderTextColor={'#52565e'}
                                    style={globalStyles.simpleInput}
                                    autoCorrect={false}
                                    onFocus={() => setEnableShift(false)}
                                    onChangeText={props.handleChange('firstN')}
                                    value={props.values.firstN}
                                />
                                <TextInput
                                    placeholder={'Last Name'}
                                    placeholderTextColor={'#52565e'}
                                    style={globalStyles.simpleInput}
                                    autoCorrect={false}
                                    onFocus={() => setEnableShift(true)}
                                    onChangeText={props.handleChange('lastN')}
                                    value={props.values.lastN}
                                />
                                <TextInput
                                    placeholder={'Major'}
                                    placeholderTextColor={'#52565e'}
                                    style={globalStyles.simpleInput}
                                    autoCorrect={false}
                                    onFocus={() => setEnableShift(true)}
                                    onChangeText={props.handleChange('major')}
                                    value={props.values.major}
                                />
                                <TextInput
                                    placeholder={'Academic Goal(s)'}
                                    placeholderTextColor={'#52565e'}
                                    style={globalStyles.goalInput}
                                    autoCorrect={false}
                                    onFocus={() => setEnableShift(true)}
                                    onChangeText={props.handleChange('goal')}
                                    value={props.values.goal}
                                />

                                {/* add student FORM button */}
                                <Button containerStyle={globalStyles.padding}
                                    style={globalStyles.addButton}
                                    title='Add'
                                    titleStyle={{ color: 'black' }}
                                    type='clear'
                                    raised={true}
                                    onPress={props.handleSubmit} />
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </Formik>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}