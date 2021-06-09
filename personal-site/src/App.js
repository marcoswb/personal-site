import React from 'react'
import { FirebaseDatabaseProvider } from "@react-firebase/database"

import Routes from './routes'
import './App.css'


export default function App() {
  return (
    <FirebaseDatabaseProvider>
      <div className="App">
        <Routes/>
      </div>
    </FirebaseDatabaseProvider>
  )
}