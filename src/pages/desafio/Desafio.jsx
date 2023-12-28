import { Center, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Cabecalho from './components/Cabecalho.jsx'
import Conteudo from './components/Conteudo.jsx'
import Rodape from './components/Rodape.jsx'

export default function Desafio () {
  return (
    <Flex minHeight={'100vh'} flexDirection={'column'} bg={'gainsboro'}>

      <Cabecalho/>

      <Spacer/>

      <Center>
        <Conteudo />
      </Center>

      <Spacer/>

      <Rodape/>

    </Flex>
  )
}
