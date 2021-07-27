import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {THEME} from '../theme'

const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.mainColor,
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})


export default Navbar