import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Screen_02 = () => {
    const route = useRoute();
    // const data= route.params.data;

    const data= "nnv";

    const getListAPI = () => {
        
    }

    return (
        <View style={styles.container}>
            <View> 
                <Text> {data}</Text>

            </View>
            
        </View>
    );
}

