import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>

          <nav>
            <ul>
              <li>Como funciona?</li>
              <li>Sobre nós</li>
              <li>Contato</li>
              </ul>
              <a href="">
                Fazer parceria
              </a>
          </nav>

          
        </header>
        
        <div className='bg'></div>
        <div className="text">
          <h1>
            Sua marca, <br />
            nossa missão.
          </h1>
          

          <div className='texts-box'>
            <div>
              <img src="./icon-01.png" alt="" />
              <h2>A arte do design</h2>
              <p>Com um design impecável, nós criamos artes de alta qualidade para sua marca. Conte com nossa expertise para criar uma imagem forte e marcante para seu negócio.
              Lembre-se: o segredo de uma boa imagem é um design de alta qualidade!
              </p>
            </div>
            <div>
              <img src="./icon-02.png" alt="" />
              <h2>Do estoque ao envio</h2>
              <p>Com um backoffice eficiente, cuidamos da logística, produção e envio de seus produtos, além de garantir um controle de estoque preciso. Deixe seu negócio em boas mãos e foque no que realmente importa: o crescimento da sua empresa.</p>
            </div>
            <div>
              <img src="./icon-03.png" alt="" />
              <h2>Marketing e divulgação</h2>
              <p>Com nossos produtos, você é o astro das redes sociais! Aproveite sua influência para ampliar seu alcance e obter resultados reais. Conte conosco para cuidar do restante e garantir o sucesso de sua parceria!</p>
            </div>
          </div>
        </div>
      </main>

      <section className='about-box'>
        
      <img src="about.jpg" alt="" />
        <div>
          <div className='about-main-text'>
            <h3>Sobre nós</h3>
            <p>A Atrey Digital é uma empresa que, tem como principal objetivo, facilitar a criação de
              marcas para influenciadores digitais. Nossa base de crescimento é o marketing de
              influência, cremos que entre influenciadores e seu público, pode existir, acima de tudo,
              uma história de relações humanas, confiança, admiração e principalmente identificação.</p>
          </div>

          <div className='about-alt-texts'>
            <div>
              <h4>O que acreditamos?</h4>
              <p>Nós acreditamos que marcas imbatíveis são alimentadas pelo poder da influência de seus fundadores!</p>  
            </div>
            <div>
              <h4>Trabalho em equipe</h4>
              <p>Nós prezamos pelo trabalho em equipe, entendemos que as vezes sozinhos podemos ir rápido, mas sem sombra de dúvidas, em equipe conseguimos chegar mais longe!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
