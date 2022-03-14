import React from 'react'
import './index.css'
import BoxSx from './component/Box'

function App() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%', width: "100%", alignItems: 'center', justifyContent: "center" }}>
        <BoxSx/>
      </div>
    </div>
  )
}

export default App