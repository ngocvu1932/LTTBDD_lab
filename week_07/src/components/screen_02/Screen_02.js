import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './style';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faSquareCheck, faPenToSquare} from '@fortawesome/free-regular-svg-icons'



export const Screen_02 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const name =  route.params?.data;

    useEffect(() => {
        const a = () => {
            fetch('https://65409c3b45bedb25bfc22aaa.mockapi.io/week_07')
            .then(response => response.json())
            .then(json => {
                setDT(json);
            })
        }
        setInterval(a, 1000);
    }, [])

    // useEffect(() => {
    //     fetch('https://65409c3b45bedb25bfc22aaa.mockapi.io/week_07')
    //     .then(response => response.json())
    //     .then(json => {
    //         setDT(json);
    //     })
    // }, [])

    const [dt, setDT] = useState([]);

    const renderItem = (item) => {
        return (
            <View style={styles.viewItem}>
                <FontAwesomeIcon style={{marginLeft: 15, color: 'green'}} icon={faSquareCheck} />
                <Text style={styles.textItem}> {item.name} </Text>
                <FontAwesomeIcon  style={{marginRight: 15, color: 'red'}}   icon={faPenToSquare} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewHeader} >
                <Pressable style={styles.buttonback} onPress={ () => {
                    navigation.navigate('Home')
                } } >
                    <FontAwesomeIcon size={20} icon={faArrowLeft}/>
                </Pressable>

                <View style={styles.viewHi} >
                    <Image style={styles.avt} source={require('../../../assets/avt.jpg')}></Image>
                    <View style={{marginLeft: 10}}> 
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> Hi {name} </Text>
                        <Text style={{fontSize: 15, fontWeight: '500'}}> Have agrate day a head</Text>
                    </View>
                </View>
            </View>

            <View style={{alignItems: 'center'}}> 
                <View style={styles.viewTextSear}>
                    <FontAwesomeIcon size={20} style={{marginRight: -30}} icon={faMagnifyingGlass} />
                    <TextInput style={styles.textInSear}  placeholder='Search' ></TextInput>
                </View>

                <View>
                    {
                        dt.map(renderItem)
                    }
                </View>

                <View style={{marginTop: 30}}>
                    <Pressable style={styles.buttonAdd} onPress={ () => {
                    navigation.navigate('Screen_03', {data: name})
                } }>
                        <Text style={{fontSize: 40, fontWeight: '100', color:'white', marginBottom: 5}}> + </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

