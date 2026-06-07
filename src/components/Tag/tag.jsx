import "./tag.css";
function Tag({ tagName }) {
  return (
    <>
      <button className="tag">{tagName}</button>
    </>
  );
}

export default Tag;
