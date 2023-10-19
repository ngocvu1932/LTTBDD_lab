import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";



export const Home = () => {
    const navigation = useNavigation();

    const handlePressButton1 = () => {
        navigation.navigate('screen_1')
    }

    const handlePressButton2 = () => {
        navigation.navigate('screen_2')
    }


    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlePressButton1}>
                <Text style={styles.text}> Go to Screen_01 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handlePressButton2}>
                <Text  style={styles.text}> Go to Screen_02 </Text>
            </TouchableOpacity>
        </View>
    );
}