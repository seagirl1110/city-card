function CityCard({ name, description, imageUrl, facts }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={'Image-' + name} />
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
