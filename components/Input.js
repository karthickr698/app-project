import React,{useState} from 'react';
import {Text,TextInput,StyleSheet} from 'react-native'

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const Input=({placeholder,name,data,setData,validation,validationSchema,secureTextEntry})=>{

    const [errors,setErrors]=useState({})

    const handleChange=(name,value)=>{
        let error={}
        if(validation){
            if(!value){
                error[name]=placeholder+' should not be empty'
            }
            if(validationSchema){
                if(name==='email'){
                    if(value){
                        const letters = /^[A-Za-z]+$/;
                        if(value.match(letters) && !emailRegex.test(value)){
                            error[name]='Invalid email'
                        }else if(!phoneRegex.test(value)){
                            error[name]='Invalid Phone'
                        }
                    }
                }
            }
        }
        setErrors({...error})
        setData({...data,[name]:value})
    }
    
    return(
        <>
            <TextInput
                placeholder={placeholder}
                underlineColorAndroid = "transparent"
                style={styles.formFieldText}
                autoCapitalize = "none"
                value={data[name]} 
                onChange={(e)=>{handleChange(name,e.nativeEvent.text)}}
                onBlur={()=>{handleChange(name,data[name])}}
                secureTextEntry={secureTextEntry}
            />
            {
                errors && errors[name] ?
                    <Text style={{color:'red',fontSize:16,height:50}}>{errors[name]}</Text>
                :null
            }
        </>
    )
}

const styles = StyleSheet.create({
    formFieldText: {
        width:'80%',
        fontSize: 16,
        borderRadius: 10,
        backgroundColor:'white',
        height:50,
        borderWidth: 0,
        padding: 12,
        paddingLeft:30,
        paddingRight:30,
        marginBottom:20,
        shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.84,
      elevation: 8,
    },
  })

export default Input;