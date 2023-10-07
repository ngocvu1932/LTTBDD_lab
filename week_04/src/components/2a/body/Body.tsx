import { View, Text, TextInput } from 'react-native'
import { styles } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faKey , faEye} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

export const Body = () => {
    return (
        <View style={styles.container} >
            <View style={styles.textInputUser}>
                <FontAwesomeIcon icon={faUser} style={{marginRight:-35}} size={32} />
                <TextInput placeholder='Name' style={styles.textInput}/> 
            </View>
            
            <View style={styles.textInputPassword}>
                <FontAwesomeIcon icon={faKey} size={32} style={{marginRight:-35}} />
                <TextInput placeholder='Password' style={styles.textInput}/>
                <FontAwesomeIcon icon={faEye} size={32} style={{ marginLeft:-35}} />
            </View>
        </View>
    )
}
