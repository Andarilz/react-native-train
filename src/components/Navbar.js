import React from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native'
import {THEME} from '../theme'
import {AppTextBold} from '../components/UI/AppTextBold'

const Navbar = ({title}) => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navbarIOS,
            android: styles.navbarAndaroid
        })}}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    navbarAndaroid: {
        backgroundColor: THEME.mainColor,

    },
    navbarIOS: {
        borderBottomColor: THEME.mainColor,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.mainColor : '#fff',
        fontSize: 20
    }
})


export default Navbar