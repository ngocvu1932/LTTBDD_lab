import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faTableList, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const Screen_03 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const name =  route.params?.data;
    return (
        <View style={styles.container}>
            <View style={styles.viewHeader} >
                <View style={styles.viewHi} >
                    <Image style={styles.avt} source={require('../../../assets/avt.jpg')}></Image>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> Hi {name} </Text>
                        <Text style={{fontSize: 15, fontWeight: '500'}}> Have agrate day a head</Text>
                    </View>
                </View>

                <Pressable style={styles.buttonback} onPress={ () => {
                    navigation.navigate('Screen_02')
                } } >
                    <FontAwesomeIcon size={20} icon={faArrowLeft}/>
                </Pressable>
            </View>

            <View style={{alignItems: 'center'}}> 
                <View style={{marginTop: 50}}> 
                    <Text style={{fontWeight: 'bold', fontSize: 25}}> ADD YOUR JOB </Text>
                </View>

                <View style={styles.textInJobV}> 
                    <FontAwesomeIcon style={{marginRight: -30, color: 'green'}} size={20} icon={faTableList} />
                    <TextInput style={styles.textInJob}  placeholder='input your job'></TextInput>
                </View>

                <View style={{marginTop: 50}}> 
                    <Pressable style={styles.buttonFi} onPress={ () => {
                    navigation.navigate('Screen_02')
                } } >
                        <Text style={{color: 'white', fontSize: 16}}> FINISH </Text>
                        <FontAwesomeIcon style={{color: 'white'}}  icon={faArrowRight} />
                    </Pressable>
                </View>

                <View style={{marginTop: 50}}> 
                    <Image style={{height: 200, width: 200}} source={require('../../../assets/Image 95.png')}></Image>
                </View>
            </View>  
        </View>
    );
}

