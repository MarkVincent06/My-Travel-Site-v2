import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card'

function App() {
  return (
    <div>
      <Header />
      <section className='card-list'>
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default App;
