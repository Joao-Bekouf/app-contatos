import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import ContatoInput from './componentes/ContatoInput'
import ContatoItem from './componentes/ContatoItem'

export default function App() {
  const [contatos, setContatos] = useState([])
  const [contador, setContador] = useState(0)

  const adicionarContato = (contato) => {
    setContatos((contatos) => {
      console.log(contato)
      console.log(contatos)

      setContador(contador + 1)

      return [...contatos, { key: contador.toString(), nome: contato.nome, telefone: contato.telefone }]
    })
  }

  const removerContato = (keyRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyRemovida
      })
    })
  }


  return (
    <View style={styles.telaPrincipal}>
      <ContatoInput onAdicionarContato={adicionarContato} />
      <FlatList
        data={contatos}
        renderItem={
          contato => (
            <ContatoItem
              chave={contato.item.key}
              nome={contato.item.nome}
              telefone={contato.item.telefone}
              onRemoverContato={removerContato}
            />
          )
        }
      />
    </View>
  )
}



const styles = StyleSheet.create({

  telaPrincipal: {
    padding: 50,
    backgroundColor: '#00000011'
  }
})
