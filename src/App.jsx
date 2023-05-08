import Header from './components/header/Header';
import Main from './pages/Main';
import './styles/main.scss';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Header />
      <Main />
    </DataProvider>
  );
}

export default App;
