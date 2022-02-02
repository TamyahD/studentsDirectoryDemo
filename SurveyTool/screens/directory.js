/* THIS PAGE WILL SHOW LIST OF STUDENTS ON SERVER */
import React, { useState } from 'react'
import {
    Text, FlatList, TouchableOpacity,
    Modal, View
} from 'react-native'
import { globalStyles } from '../styles/global'
import { AntDesign } from '@expo/vector-icons';
import Signup from '../screens/signup'


export default function Directory({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)

    //array of student (objects)
    const [students, setStudents] = useState([
        {
            firstN: 'Lisa', lastN: 'Simpson', major: 'Fine & Applied Arts',
            goal: 'I should be the most popular girl in school.', id: '1000',
        },
        {
            firstN: 'Benjamin', lastN: 'Katz', major: 'Psychology',
            goal: 'I want to help people & their brain.', id: '1001',
        },
    ])

    const addStudent = text => {
        setStudents(prevStudents => {
            return [text, ...prevStudents]
        })
        setModalVisible(false)
    }

    return (
        <View style={globalStyles.bg}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >

                <View style={globalStyles.centerContent}>
                    {/* modal close button */}
                    <AntDesign
                        name="closecircleo"
                        size={60}
                        color="red"
                        onPress={() => setModalVisible(false)}
                    />
                </View>
                <Signup style={globalStyles.modal}
                    addStudent={addStudent} />
            </Modal>



            {/* Show list of students */}
            <FlatList
                data={students}
                renderItem={({ item }) => (
                    /* onPress function navigates to student details page
                    to show students object array */
                    <TouchableOpacity onPress={() => navigation.navigate('Student Details',
                        { item })
                    }>
                        <Text style={globalStyles.studentListText}>
                            {item.id + ", " + item.lastN}
                        </Text>
                    </TouchableOpacity>
                )} />

            {/* add student LIST button */}
            <View style={globalStyles.circleButton}>
                <View style={globalStyles.listIcon}>
                    <AntDesign name="adduser" size={40} color="black"
                        onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>
        </View>
    )
}