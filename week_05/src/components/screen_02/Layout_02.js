import {View, Text} from 'react-native'
import { styles } from './style'
import { Body } from './body/Body'

export const Layout_02 =() => {
    return(
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Header/>
            </View> */}

            <View style={styles.body}>
                <Body/>
            </View>

            {/* <View style={styles.footer}>
                <Footer/>
            </View> */}
        </View>
    )
}