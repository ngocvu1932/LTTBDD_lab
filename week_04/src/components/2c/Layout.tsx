import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Header } from './header/Header';
import { Body } from './body/Body';
import { Footer } from './footer/Footer';


export const Layout = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.container_}>
                <View style={styles.header}>
                    <Header/>
                </View>

                <View style={styles.body}>
                    <Body/>
                </View>

                <View style={styles.footer}>
                    <Footer/>
                </View>
            </View>
            
        </View>
    )
};