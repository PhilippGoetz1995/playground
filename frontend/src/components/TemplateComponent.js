export default function TemplateComponent({ id }) {
  return (
    <div className="col" key={id}>
      <p>content</p>
    </div>
  );
}
