import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup';
import {Formik} from 'formik';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import { AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen() {
    return (
        <Screen>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema= {validationSchema}
            >
                <AppFormField 
                    autoCapitalize= "none"
                    autoCorrect= {false}
                    placeholder= "Email"
                    icon= "email"
                    name= "email"
                    keyboardType = "email-address"
                    textContentType= "emailAddress"
                />
                <AppFormField 
                    autoCapitalize= "none"
                    autoCorrect = {false}
                    placeholder= "Password"
                    icon = "lock"
                    name="password"
                    secureTextEntry
                    textContentType= "password"
                />
                 <SubmitButton title= "Login" />
            </AppForm>
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})
