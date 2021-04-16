import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native'
import {COLORS,SIZES,images,regex} from '../../constants';
import Input from '../../components/Input'
import CustomButton from '../../components/CustomButton'

const Login=({ navigation })=>{
    const [data,setData]=useState({
        email:'',
        password:''
    })

    const handleClick=()=>{
    }

    return(
        <View style={{backgroundColor:'#ffffff',flex:1,height:'100%'}}>
            <ScrollView>
                <View>
                    <Text
                        style={{
                            width: '97%',
                            paddingLeft:20,
                            justifyContent:'center',
                            textAlign:'center',
                            backgroundColor:'#ffffff',
                            color:COLORS.primary,
                            fontSize:SIZES.h1,
                            justifyContent:'center',
                            textAlign:'center',
                            paddingTop:150,
                            fontWeight:'bold'
                        }}
                    >Selva Lakshimi Agencies</Text>
                    <Text
                        style={{
                            width: '100%',
                            backgroundColor:'#ffffff',
                            color:COLORS.secondary,
                            fontSize:SIZES.body2,
                            justifyContent:'center',
                            paddingTop:30,
                            paddingLeft:50,
                        }}
                    >Login to your Account</Text>
                    <View
                        style={{
                            width: '100%',
                            paddingTop:20,
                            alignItems:'center'
                        }}
                    >
                        <Input 
                            placeholder='Email or Phone'
                            setData={(data)=>{setData(data)}}
                            name='email'
                            data={data}
                            validation={true}
                            validationSchema={true}
                        />
                        <Input 
                            placeholder='Password'
                            setData={(data)=>{setData(data)}}
                            name='password'
                            data={data}
                            validation={true}
                            secureTextEntry={true}
                        />
                        <CustomButton name='Login' handleClick={handleClick}/>
                        <TouchableOpacity
                            style = {styles.forget}
                            onPress = {handleClick}
                        >
                            <Text style = {styles.forgetText} onPress={() => navigation.navigate('ForgetPassword')}> Forget Password </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    forget:{
        paddingTop:15,
        width:'90%',
        height: 50,
    },
    forgetText:{
        color: 'black',
        textAlign:'center',
        fontSize:16,
        textDecorationLine:'underline'
    },
})

export default Login;