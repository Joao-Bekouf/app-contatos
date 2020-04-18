import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'



const ContatoInput = (props) => {
    const [contato, setContato] = useState({ nome: '', telefone: '' })
    const capturarNome = (nome) => {
        let nomeContato = nome
        let telefoneContato = contato.telefone
        setContato({
            nome: nomeContato,
            telefone: telefoneContato
        })
    }

    const capturarTelefone = (telefone) => {
        let nomeContato = contato.nome
        let telefoneContato = telefone
        setContato({
            nome: nomeContato,
            telefone: telefoneContato
        })
    }

    return (
        <View style={styles.contatoView}>
            <View style={styles.contatoInput}>
                <TextInput
                    placeholder={'Nome:'}
                    onChangeText={capturarNome}
                    value={contato.nome}
                />
                <TextInput
                    placeholder={'Telefone:'}
                    onChangeText={capturarTelefone}
                    value={contato.telefone}
                />
            </View>
            <Button
                title='+'
                onPress={() => props.onAdicionarContato(contato)}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    contatoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'darkblue',
        borderRadius: 5
    },
    contatoInput: {
        width: '80%',
        flexDirection: 'column',
        paddingRight: 2,
        paddingLeft: 2,
    }
})

export default ContatoInput;