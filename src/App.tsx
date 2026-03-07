import { useEffect, useRef, useState } from 'react'
import Greeting from './components/Greeting'
import MeuButton from './components/MeuButton'

interface User {
  id: number
  name: string
}

function App() {
  const [count, setCount] = useState(0);

  const [names, setNames] = useState(["Keidson", "karol", "Ana"]);

  const [car, setCar] = useState("");

  const [usersApi, setUsersApi] = useState<User[]>([]);

  const [loadingUsersApi, setLoadingUsersApi] = useState(true);

  const [errorUsersApi, setErrorUsersApi] = useState<string | null>(null);

  // 6 aula - Filtrando dados da lista
  const [search, setSearch] = useState("");


  // 18 aula - Criando formulários com useRef
  const formRef = useRef<HTMLFormElement>(null);

  function handleClick() {
    alert('Clicado via props!');
  }

  // 18 aula - Criando formulários com useRef
  function handleFormSubmit(event: React.SubmitEvent) {
    // Previne o comportamento padrão do formulário(que é recarregar a página)
    event.preventDefault();

    // Se o formRef.current for null, não faz nada
    if (!formRef.current) return;

    // 1. Acessar o elemento do formulário
    const form = formRef.current;

    // 2. Criar um FormData a partir do formulário
    const formData = new FormData(form);

    // 3. Acessar os dados do formulário
    const payload = {
      name: formData.get('name'),
      email: formData.get('email')
    }

    // 4. Fazer algo com os dados
    console.log("Formulario", payload);
  }

  // 7 aula - Efeitos colaterais com useEffect()
  // Veja a sequência dos seus logs:

  // 🟢 montado e executado        ← 1ª montagem (StrictMode)
  // Você clicou 0 vezes           ← useEffect([count]) roda
  // Contador ou Carro atualizado  ← useEffect([count, car]) roda
  // 🔴 desmontado (cleanup)       ← StrictMode DESMONTA de propósito
  // 🟢 montado e executado        ← StrictMode REMONTA para testar
  // Você clicou 0 vezes           ← tudo roda de novo
  // Contador ou Carro atualizado  ← tudo roda de novo

  // 8 aula - Múltiplos useEffect() quando usar cada um?
  // Use um useEffect() para cada efeito colateral.
  // Exemplo: um useEffect para buscar dados, outro para manipular o DOM, etc.
  // Não misture efeitos colaterais diferentes no mesmo useEffect().
  // Cada useEffect() tem seu próprio ciclo de vida.
  // Cada useEffect() tem sua própria limpeza.
  // Cada useEffect() tem sua própria ordem de execução.
  // Cada useEffect() tem sua própria ordem de limpeza.

  useEffect(() => {
    console.log('🟢 montado e executado')

    return () => {
      console.log('🔴 desmontado (cleanup)')
      // aqui vai o codigo de limpeza
      // Exemplo: cancelar fetch, limpar timer, remover EventListener e Subscriptions.
    }
  }, [])

  useEffect(() => {
    console.log(document.title = `Você clicou, e atualizou ${count} vezes`);
  }, [count]);

  useEffect(() => {
    console.log("Contador ou Carro foi atualizado");
  }, [count, car]);

  // 9 aula - Chamada a API e salvando dados no estado, lidando com estados de carregamento e erro

  // Ao fazer fetch, precisamos lidar com 3 situações:
  // 1. Loading - os dados ainda não chegaram
  // 2. Sucesso - os dados chegaram
  // 3. Erro - algo deu errado

  // Use um estado para cada situação: loading, error e data
  // Use um useEffect para buscar dados
  // Use um cleanup para cancelar fetch
  // Use um try/catch para lidar com erros
  // Use um finally para lidar com loading

  useEffect(() => {
    //fazer fetch para buscar dados em https://jsonplaceholder.typicode.com/users
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then(response => response.json())
      .then(data => setUsersApi(data)) // ← salva no estado
      .catch(error => {
        if (error.name === 'AbortError') return // ← cancela silenciosamente
        setErrorUsersApi('Erro ao buscar usuários')     // ← só trata erros reais
      })
      .finally(() => setLoadingUsersApi(false)) // ← Após o fetch, sempre vai ser false

    return () => {
      console.log('🔴 desmontado (cleanup) - cancelando fetch')
      controller.abort()
    }
  }, [])


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

      <MeuButton
        variant="primary"
        title="Adicionar carro"
        onClick={() => setCar("Gol Quadrado")}
      >
        Adicionar ao carro
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

      <br />
      <br />

      {/* 1. Loading - mostra enquanto carrega */}
      {loadingUsersApi && <p>Carregando usuários...</p>}

      {/* 2. Error - mostra se der erro */}
      {errorUsersApi && <p style={{ color: 'red' }}>{errorUsersApi}</p>}

      {/* 3. Data - mostra os dados quando chegar */}
      {/* renderizar os dados que vem do fetch */}
      <ul>
        {usersApi.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>

      <br />
      <br />

      {/* 18 aula - Formulários com useRef */}
      <h2>Formulário com useRef</h2>
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Enviar</button>
      </form>

    </main>
  )
}

export default App
