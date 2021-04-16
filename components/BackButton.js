import React from 'react';
import {TouchableOpacity,Image} from 'react-native'
import {SIZES,images} from '../constants';

const BackButton=({navigation,bgChange})=>{
    return(
        <TouchableOpacity
            style={{
                width: 50,
                marginTop:30,
                paddingLeft: SIZES.padding * 2,
                justifyContent: 'center'
            }}
            onPress={() => navigation.goBack()}
        >
            <Image
            onPress={() => navigation.goBack()}
            source={bgChange?images.back_arrow1:images.back_arrow}
            resizeMode="cover"
            style={{
                width: 30,
                height: 30,
            }}
            />
        </TouchableOpacity>
    )
}

export default BackButton;