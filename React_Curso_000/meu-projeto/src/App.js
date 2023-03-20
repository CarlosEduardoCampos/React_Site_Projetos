import './css/App.css';
import Pessoa from './components/Pessoa';
import Cabeca from './components/Cabeca';
import List from './components/List';
import Evento from './components/Evento';

function App() {

    return (
        <main className="App">
            <Cabeca/>
            <Evento/>
            <h1> Meus Dados</h1>
            <Pessoa nome="Carlos E. C. Rodrigues" idade="21" profissao="Desenvolvedor Beck-end" />
            <List/>
        </main>
    );
}

export default App;