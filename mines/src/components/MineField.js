import React from "react";
import { Text, View, StyleSheet } from 'react-native'

import Field from "./Field";

export default function (props) {

    /* Tansforma uma matriz que dentro tem objetos que mapeia atributos 
    de Field para uma matriz que tem elementos JSX, ou seja, componentes do tipo Field */

    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return (
                <Field {...field} key={c} 
                onOpen={() => props.onOpenField(r, c)}
                onSelect={() => props.onSelectField(r, c)}
                />
            )
        });
        return (
            <View style={{ flexDirection: 'row' }} key={r}>
                {columns}
            </View>
        )
    });

    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
});