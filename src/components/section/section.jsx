export default function Section({ tytle, children }) {
  return (
    <div className="title-cont">
      <h2 className="title-cont-text">{tytle}</h2>
      {children}
    </div>
  );
}
