import styles from './styles.module.css';

const citiesData = [
  {
    name: 'Токио',
    description:
      'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',
    imageUrl:
      'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',
    facts: [
      'Токио - самый населенный мегаполис в мире.',
      'Здесь расположена самая высокая башня в Японии - Токийская башня.',
      'В Токио проходят множество культурных событий и фестивалей.',
    ],
  },
  {
    name: 'Киото',
    description:
      'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.',
    imageUrl:
      'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663423488_24-mykaleidoscope-ru-p-kioto-stolitsa-yaponii-instagram-25.jpg',
    facts: [
      'В Киото насчитывается более 1600 буддийских храмов.',
      'Этот город был столицей Японии более тысячи лет.',
    ],
  },
  {
    name: 'Осака',
    description:
      'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.',
    imageUrl:
      'https://sportishka.com/uploads/posts/2022-04/1650631594_29-sportishka-com-p-osaka-gorod-v-yaponii-krasivo-foto-30.jpg',
    facts: [
      'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',
      'Город является кулинарной столицей Японии.',
    ],
  },
  {
    name: 'Хоккайдо',
    description:
      'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',
    imageUrl:
      'http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg',
    facts: [
      'Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.',
      'Летом остров привлекает туристов своими цветущими лавандовыми полями.',
    ],
  },
  {
    name: 'Нагоя',
    description:
      'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',
    imageUrl:
      'https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg',
    facts: [
      'Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.',
      'Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.',
    ],
  },
];

function CitySelector({ selectedCard, setSelectedCard }) {
  const handleChange = (evt) => {
    const selectedIndex = evt.target.selectedIndex;
    setSelectedCard(citiesData[selectedIndex]);
  };

  return (
    <form className={styles.form}>
      <h2>Выберите город:</h2>
      <select
        value={selectedCard.name}
        onChange={handleChange}
        name="city"
        id="city"
        className={styles.select}
      >
        {citiesData.map((city, index) => (
          <option key={index}>{city.name}</option>
        ))}
      </select>
    </form>
  );
}

export default CitySelector;
