export const CardComponent = ({ title, image, description, link }) => (
  <div className="card mb-4" style={{ width: '18rem' }}>
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{title}</h5>
      <p className="card-text flex-grow-1">{description}</p>
      <a href={link} className="btn btn-primary mt-auto">
        Ver más
      </a>
    </div>
  </div>
);
