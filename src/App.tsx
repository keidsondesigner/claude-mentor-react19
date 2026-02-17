import { useState } from 'react'
import Greeting from './components/Greeting'
import MeuButton from './components/MeuButton'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    alert('Clicado via props!')
  }


  return (
    <main>
      <h1>React 19 — Estudos</h1>
      <Greeting />

      <hr style={{ margin: '2rem 0' }} />

      <MeuButton
        variant="primary"
        title="Botão"
        onClick={handleClick}
      >
        Meu botão
      </MeuButton>

      <br />
      <br />

      <MeuButton
        variant="success"
        title="Atualizar contador"
        onClick={() => setCount(count + 1)}
      >
        Atualizar contador
      </MeuButton>
      <p>Contador: {count}</p>

    </main>
  )
}

export default App
