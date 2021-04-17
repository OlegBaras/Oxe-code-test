import "../css/Card.css";

//Card Component
export default function Card({ name, state }) {
  return (
    <div className="card">
      <section className="title">
        <h1>{name}</h1>
      </section>
      <section className="content">
        <h1>{state}</h1>
      </section>
    </div>
  );
}
