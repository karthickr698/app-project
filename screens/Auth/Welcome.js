import React,{useEffect} from 'react';
import {View,StyleSheet,Image,ActivityIndicator} from 'react-native'
import {COLORS,images} from '../../constants';

const Welcome =({navigation}) =>{
    useEffect(()=>{
        setTimeout(function(){ 
            navigation.navigate('Login')
         }, 2000);
        
    },[])
    return(
        <View>
                <View style={{alignItems:'center',justifyContent:'center',backgroundColor:COLORS.primary,height:'100%'}}>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        style={{
                            width: '99%',
                            alignContent:'center',
                            alignItems:'center',
                            justifyContent:'center'
                            
                        }}
                    />
                    <ActivityIndicator size="large" color="#ffffff" style={{bottom:80,position:'absolute'}} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center"
    },
  });

export default Welcome