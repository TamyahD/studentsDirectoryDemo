import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../screens/welcome'
import StudentList from '../screens/directory'
import Signup from '../screens/signup'
import StudentDetails from '../screens/studentDetails'


/* stack navigator function */
const NavStack = createStackNavigator()

/* stack function for individual screens in project */
function StackScreens() {
    return (
        <NavigationContainer>
            <NavStack.Navigator
                /* global default options for nav header */
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#ffc845',
                        height: 90,
                        // borderRadius: 18,
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: 'ralewayBold',
                    },
                }}>

                <NavStack.Screen
                    name="Home"
                    component={Landing}
                />
                <NavStack.Screen
                    name="Student List"
                    component={StudentList}
                />
                <NavStack.Screen
                    name="Sign Up"
                    component={Signup}
                />
                <NavStack.Screen
                    name="Student Details"
                    component={StudentDetails}
                />
            </NavStack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreens