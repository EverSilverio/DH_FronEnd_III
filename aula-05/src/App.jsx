import Container from './Container';
import ListaCompras from './ListaCompras';

function App() {
  return (
    <>
      <div>
        <Container>
          <h1>Titulo</h1>
          <p>Parágrafo com texto</p>
        </Container>
        
        <Container>
          <p>Apenas Texto</p>
        </Container>
      </div>

      <ListaCompras></ListaCompras>
    </>
  )
}

export default App
