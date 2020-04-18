import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onLongPress={props.onRemoverContato.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <View>
                    <Text>
                        {props.nome}
                    </Text>
                </View>
                <View>
                    <Text>
                        {props.telefone}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    itemNaLista: {
        padding: 12,
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 5,
        borderColor: 'darkblue'
    }
})

export default ContatoItem;