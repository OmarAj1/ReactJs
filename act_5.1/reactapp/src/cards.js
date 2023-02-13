export default Card;

function Card(props) {
  return (
    <section className={props.className1}>
      <img alt={props.alt} src={props.src} />
      <div className={props.id}>
        <h1> {props.header} </h1> <p> {props.paragraph} </p>{" "}
        <a href={props.link1}> facebook </a> <a href={props.link2}> google</a>
      </div>{" "}
    </section>
  );
}
