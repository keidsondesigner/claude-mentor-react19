import { useEffect, useState } from 'react'
import Greeting from './components/Greeting'
import MeuButton from './components/MeuButton'

function App() {
  const [count, setCount] = useState(0);

  const [names, setNames] = useState(["Keidson", "karol", "Ana"]);

  // 6 aula - Filtrando dados da lista
  const [search, setSearch] = useState("");

  function handleClick() {
    alert('Clicado via props!')
  }

  // 7 aula - Efeitos colaterais com useEffect()
  useEffect(() => {
    console.log(document.title = `Você clicou ${count} vezes`);
  }, [count]);


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

      <br />
      <br />
      <p>Contador: {count}</p>
      <br />

      <MeuButton
        variant="danger"
        title="Limpar contador"
        onClick={() => setCount(0)}
      >
        Limpar contador
      </MeuButton>

      <br />
      <br />

      <input
        type="text"
        placeholder="Digite um nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {names
          .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
          .map((name, index) => (
            <li key={index}>
              {name}
            </li>
          ))}
      </ul>

    </main>
  )
}

export default App
