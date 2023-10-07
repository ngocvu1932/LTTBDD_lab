import React, {useState} from 'react'
import { View , Text, TextInput } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { styles } from './style'
import { color } from 'react-native-elements/dist/helpers'

export const Body = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textInputCon}>
                <TextInput style={styles.textInput}></TextInput>
            </View>

            <View style={styles.form}> 
                <View style={styles.formStyle}>
                    <Text style={styles.textForm}> Password length</Text>
                    <TextInput style={styles.textInputPass}></TextInput>
                </View>

                <View style={styles.formStyle} >
                    <Text style={styles.textForm}> Include lower case letters </Text>
                    <CheckBox/>
                </View>

                <View style={styles.formStyle} >
                    <Text style={styles.textForm}> Include number </Text>
                    <CheckBox/>
                </View>

                <View style={styles.formStyle} >
                    <Text style={styles.textForm}> Include special symbol </Text>
                    <CheckBox/>
                </View>

            </View>
            
        </View>
    )
}
