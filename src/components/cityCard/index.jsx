import styles from './styles.module.css';

function CityCard({ name, description, imageUrl, facts }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <img src={imageUrl} alt={'Image-' + name} className={styles.img} />
      <p>{description}</p>
      <ul>
        {facts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
