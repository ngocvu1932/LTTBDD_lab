import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const Screen_01 = () => {
    const navigation = useNavigation();
    const [test, setTest] = useState('');
    
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Image style={styles.img} source={require('../../../assets/Image 95.png')}/>
            </View>

            <View style={{alignItems: 'center' , marginTop: 20}}>
                <Text style={styles.text}> MANAGE YOUR TASK </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center' , marginTop: 30}}>  
                <FontAwesomeIcon icon={faEnvelope} size={20} style={{marginRight: -30}} />
                <TextInput style={styles.textIn} placeholder='Enter your name' value={test} onChangeText={setTest}/>            
            </View>

            <View style={{alignItems: 'center' , marginTop: 130}}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    
                    navigation.navigate('Screen_02', {data: test})
                    

                }}>
                    <Text style={{color: 'white'}}>GET STARTED </Text>
                    <FontAwesomeIcon style={{color: 'white'}}  icon={faArrowRight} />
                </TouchableOpacity>
            </View>
        </View>
  );
}

