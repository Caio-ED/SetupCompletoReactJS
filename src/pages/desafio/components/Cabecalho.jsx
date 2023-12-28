import { Flex, Spacer, Image, Center, Icon } from '@chakra-ui/react'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

export default function Cabecalho () {
  return (
    <Flex bg={'green'} p={'10px 15px'} alignItems={'center'}>

      <Image src="https://www.portalmaisvalor.com/assets/img/brand/white1.png" alt="Logo Grupo Mais Valor" w={'15%'} />

      <Spacer />

      <Flex w={'50%'}>Acoes Pagina</Flex>

      <Spacer />

      <Flex backgroundColor={'darkgreen'} rounded={'100'} alignItems={'center'}
        gap={'1%'} w={'20vw'} h={'7vh'} paddingRight={'8px'}
      >

        <Image
          src="https://appbancos.s3.sa-east-1.amazonaws.com/PORTALGMVB2df10ff9881f93b9c8543441f9a31cc9-169369295_552763095820120_8841723200390093665_n.jpg"
          alt="Foto Perfil Usuario"
          objectFit={'cover'} w={'4vw'} rounded={'100'} border={'solid #235e4e'} />

        <Spacer />

        <Center color={'gainsboro'} fontSize={'small'}>Nome Usuario</Center>

        <Spacer />

        <Icon as={IoMenu} color={'gainsboro'} cursor={'pointer'} h={'5vh'} w={'5vh'}
          fontWeight={'bolder'} border={'2px solid gainsboro'} rounded={'600'} p={'5px'}
        />

      </Flex>

    </Flex>
  )
}
