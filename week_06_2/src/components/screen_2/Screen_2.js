import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { useNavigation } from "@react-navigation/native"



const DATA = [
    {
        id: '1',
        name: 'Pinarello',
        price: '1800',
        imageURL: require('../../../assets/bifour_-removebg-preview.png')
    },

    {
        id: '2',
        name: 'Pina Mountain',
        price: '1700',
        imageURL: require('../../../assets/bione-removebg-preview.png')
    },

    {
        id: '3',
        name: 'Pina Bike',
        price: '1500',
        imageURL: require('../../../assets/bithree_removebg-preview.png')
    },

    {
        id: '4',
        name: 'Pinarello',
        price: '1900',
        imageURL: require('../../../assets/bitwo-removebg-preview.png')
    },

    {
        id: '5',
        name: 'Pinarello',
        price: '2700',
        imageURL: require('../../../assets/bithree_removebg-preview.png')
    },

    {
        id: '6',
        name: 'Pinarello',
        price: '1350',
        imageURL: require('../../../assets/bione-removebg-preview.png')
    }
]


export const Screen_2 = () => {
    const navigation = useNavigation();
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={()=>{navigation.navigate('scr3')}}>
            <View style={styles.viewBike}>
            <FontAwesomeIcon style={{margin: 10}} icon={faHeart} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}> <Image style={styles.img} source={item.imageURL}/> </View>

            <View style={{alignItems:'center', marginTop: 20}}>
                <Text> {item.name} </Text>
                <Text> $ {item.price} </Text>
            </View>

        </View>
        </TouchableOpacity>
    )


    return(
        <View style={styles.container}>
            <View style={{marginTop: 20}} >
                <Text style={styles.texxt}> The world’s Best Bike </Text>
            </View>

            <View style={styles.viewSel}>
                <TouchableOpacity style={styles.button}>
                    <Text> All </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text> Roadbike </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text> Mountain </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={{marginTop: 10}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
           
        </View>
    )
}