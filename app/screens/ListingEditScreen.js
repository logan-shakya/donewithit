import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup';
import {Formik} from 'formik';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import { AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
      },
      {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
      },
      {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
      },
      {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
      },
      {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
      },
      {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
      },
      {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
      },
      {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
      },
      {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
      },
];
    
export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{title: '', price: '', description:'', category: null}}
                onSubmit={values => console.log(values)}
                validationSchema= {validationSchema}
            >
                <AppFormField
                    maxLength = {255}
                    placeholder= "Title"
                    name= "Title"
                />
                <AppFormField
                    placeholder= "Price"
                    name= "Price"
                    keyboardType="numeric"
                    maxLength = {8}
                    width= {125}
                />                
                 <AppFormPicker 
                    items={categories}
                    name="category"
                    numberOfColumns= {3}
                    PickerItemComponent = {CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                 />       
                <AppFormField
                    maxLength= {255}
                    placeholder= "Description"
                    name= "Description"
                    multiline
                    numberOfLines= {3}
                />                    
                 <SubmitButton title= "Post" />
            </AppForm>
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})
