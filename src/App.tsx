import Greeting from './components/Greeting'
import MeuButton from './components/MeuButton'

function App() {
  return (
    <main>
      <h1>React 19 — Estudos</h1>
      <Greeting />
      <hr />
      <MeuButton variant="primary" title="Botão">
        Meu botão
      </MeuButton>
    </main>
  )
}

export default App
