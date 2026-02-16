// 1. IMPORTS — neste caso, nenhum necessário ainda

// 2. DEFINIÇÃO — PascalCase obrigatório!
function Greeting() {
  // 2a. LÓGICA
  const name = 'Estudante'
  const currentHour = new Date().getHours()

  let greeting: string
  if (currentHour < 12) {
    greeting = 'Bom dia'
  } else if (currentHour < 18) {
    greeting = 'Boa tarde'
  } else {
    greeting = 'Boa noite'
  }

  // 2b. RETORNO — JSX com expressões dentro de { }
  return (
    <section>
      <h2>
        {greeting}, {name}!
      </h2>
      <p>Estamos na aula de componentes funcionais.</p>
      <p>Agora são {currentHour}h.</p>
    </section>
  )
}

// 3. EXPORT
export default Greeting
