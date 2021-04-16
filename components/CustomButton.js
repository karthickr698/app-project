import React from 'react';
import {TouchableOpacity,StyleSheet,Text} from 'react-native'
import {COLORS} from '../constants';

const CustomButton=({name,handleClick})=>{
    return(
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {handleClick}
        >
            <Text style = {styles.submitButtonText}> {name} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: COLORS.primary,
        paddingTop:5,
        width:'80%',
        borderRadius: 10,
        height: 50,
     },
     submitButtonText:{
        color: 'white',
        textAlign:'center',
        fontSize:20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.26,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

export default CustomButton;