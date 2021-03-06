import React from 'react'
import {View, StyleSheet} from 'react-native'

export const AppCard = ({children, style})=> (
    <View style={ {...styles.default, ...style} }>
        {children}
    </View>
)


const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: .3,
        shadowOffset: {width: 2, height: 2},
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10,

    }
})