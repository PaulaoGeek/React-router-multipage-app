
export function Card({ title, description, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export function CardDestaque({ title, children }) {
  return (
    <div className="card card-destaque">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
