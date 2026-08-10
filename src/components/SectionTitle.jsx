export default function SectionTitle({ eyebrow, title, text, center = true }) {
  return (
    <div className={center ? "section-title center" : "section-title"}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}