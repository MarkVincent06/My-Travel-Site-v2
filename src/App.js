import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import data from './data'

const cardComponents = data.map(card => {
  return (
    <Card 
      title={card.title}
      location={card.location}
      googleMapsUrl={card.googleMapsUrl}
      startDate={card.startDate}
      endDate={card.endDate}
      description={card.description}
      imgSrc={card.imageSrc}
    />
  )
})

function App() {
  return (
    <div>
      <Header />
      <section className='card-list'>
        {cardComponents}
      </section>
    </div>
  );
}

export default App;
