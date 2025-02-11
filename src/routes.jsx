import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/home/Home'
import Desafio from './pages/desafio/Desafio'
import Admin from './layout/Admin'
import NaoAutorizado401 from './pages/naoAutorizado401/NaoAutorizado401'
import NaoLocalizado404 from './pages/naoLocalizado404/NaoLocalizado404'
import Logar from './pages/logar/Logar'
import { verificarChave } from './auth/verificaChaveDeAutorizacao'
import Registrar from './pages/registrar/Registrar'

export default function Routes () {
  const routing = useRoutes([
    {
      path: 'SetupCompletoReactJS/admin',
      element: <Admin />,
      children: [
        {
          path: 'home',
          element: verificarChave('KOA') ? <Home /> : <NaoAutorizado401 />
        },
        {
          path: 'desafio',
          element: <Desafio />
        }
      ]
    },
    {
      path: '/SetupCompletoReactJS',
      element: <Admin />,
      children: [
        { path: '/SetupCompletoReactJS', element: <Logar /> },
        { path: '/SetupCompletoReactJS/registrar-se', element: <Registrar /> },
        { path: '*', element: <NaoLocalizado404 /> }
      ]
    }
  ])

  return routing
}
