import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default function (props) {

    const {mined, opened, nearMines, explosed, flagged} = props;

    const styleField = [styles.field];

    if(opened) 
    {
        styleField.push(styles.opened);
    }

    if(explosed) 
    {
        styleField.push(styles.explosed);
    }

    if(flagged) 
    {
        styleField.push(styles.flagged);
    }

    if(!opened && !explosed) 
    {
        styleField.push(styles.regular);
    }

    var color = null;

    if(nearMines > 0) {
        if(nearMines == 1) color = '#2A28D7';
        if(nearMines == 2) color = '#2B520F';
        if(nearMines > 2 && nearMines < 6) color = '#F9060A';
        if(nearMines >= 6) color = '#F221A9';
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ? <Text style={[styles.label, {color: color}]}>{nearMines}</Text> : false}
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag /> : false}
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    explosed: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
});