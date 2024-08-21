import { useState } from 'react';
import './App.css';
import CitySelector from './components/citySelector';

function App() {
  const [card, setCard] = useState({
    name: 'Осака',
    description:
      'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.',
    imageUrl:
      'https://sportishka.com/uploads/posts/2022-04/1650631594_29-sportishka-com-p-osaka-gorod-v-yaponii-krasivo-foto-30.jpg',
    facts: [
      'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',
      'Город является кулинарной столицей Японии.',
    ],
  });

  const setSelectedCard = (selectedCard) => {
    setCard(selectedCard);
  };

  return (
    <div className="App">
      <CitySelector selectedCard={card} setSelectedCard={setSelectedCard} />
    </div>
  );
}

export default App;
