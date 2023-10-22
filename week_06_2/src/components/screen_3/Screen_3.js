import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
// import { FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"
import { faHeart} from "@fortawesome/free-regular-svg-icons"



export const Screen_3 = () => {
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <View style={styles.viewBike}>
                    <Image style={styles.img} source={require('../../../assets/2.png')}/>
                </View> 
            </View>

            <Text style={styles.textName}> Pina Mountain </Text>

            <View style={styles.price}> 
                <Text style={{fontSize: 25, fontWeight: '400'}}> 15% OFF 1350$ </Text>
                <Text style={{fontSize: 25, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 30}}> 449$ </Text>
            </View>

            <Text style={{fontFamily:'Voltaire', fontSize: 25, fontWeight: '400', marginTop: 20}}> Description</Text>

            <Text style={{fontSize: 16, fontWeight: '400', margin: 10}}>
                It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
            </Text>

            <View style={styles.viewCard} > 
                <FontAwesomeIcon size={35} icon={faHeart} />
                <TouchableOpacity style={styles.buton}>
                    <Text style={styles.tetxt}> Add to card </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}