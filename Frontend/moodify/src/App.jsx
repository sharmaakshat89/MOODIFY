import { useState } from 'react'
import {RouterProvider} from 'react-router'
import {router} from './features/app.routes'
import { SongContextProvider } from './features/home/song.context'
import './App.css'


function App() {
  

  return (
    <SongContextProvider>
      <RouterProvider router={router} />
    </SongContextProvider>
    
  )
}

export default App
