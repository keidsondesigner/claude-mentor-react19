import { useState } from 'react'
import Greeting from './components/Greeting'
import MeuButton from './components/MeuButton'

function App() {
  const [count, setCount] = useState(0);

  const [names, setNames] = useState(["Keidson", "karol", "Ana"]);

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

      <br />
      <br />

      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
          </li>
        ))}
      </ul>

    </main>
  )
}

export default App
