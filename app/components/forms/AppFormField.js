import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({name, width, ...otherprops}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput 
                onChangeText = {handleChange(name)}
                onBlur = {() => setFieldTouched(name)}
                width={width}
                {...otherprops}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
