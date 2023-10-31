import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
    },

    img: {
        height: 271,
        width: 271
    },

    text: {
        fontFamily: 'Epilogue',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center',
        color: '#8353E2'
    },

    textIn: {
        width: 334,
        height:43,
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 35,
        fontSize: 15,
        // opacity: 0.5,
    },

    button: {
        flexDirection: 'row',
        width: 190,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#00BDD6',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });
  