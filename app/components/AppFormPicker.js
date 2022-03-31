import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFormikContext} from 'formik';


import ErrorMessage from './forms/ErrorMessage';
import AppPicker from './AppPicker';

export default function AppFormPicker({items, name,numberOfColumns,PickerItemComponent, placeholder, width}) {
    const {errors, setFieldValue, values, touched} = useFormikContext();
    return (
        <>
            <AppPicker 
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name,item)}
                placeholder={placeholder}
                PickerItemComponent= {PickerItemComponent}
                selectedItem={values[name]}
                width= {width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
