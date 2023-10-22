import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native"



export const Screen_1 = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.viewOne} >
                <Text style={styles.textOne}> A premium online store for sporter and their stylish choice </Text>
            </View>

            <View style={styles.viewBike}>
                <Image style={styles.img} source={require('../../../assets/bifour_-removebg-preview.png')}/>
            </View>

            <View style={{marginTop: 10}}> 
                <Text style={styles.textTwo}> POWER BIKE SHOP </Text>
            </View>

            <View style={{marginTop: 25}}>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('scr2')}}> 
                    <Text style={styles.textStart}> Get Started </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}