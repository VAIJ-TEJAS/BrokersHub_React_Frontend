interface Item {
  title: string;
  description: string;
  budget: number;
  image: string;
  contact: string;
}

interface Props {
  item: Item;
}

const ExpandCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="property-details">
        <h3 className="property-title">{item.title}</h3>
        <p className="property-description">{item.description}</p>
        <p className="property-budget">
          <strong>Budget:</strong> ${item.budget}
        </p>
        {item.contact && (
          <p className="property-contact">
            <strong>Contact:</strong> {item.contact}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpandCard;
