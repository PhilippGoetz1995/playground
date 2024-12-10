function ReactTestComponent({ number, name }) {
  return (
    <div>
      <p>
        Die Nummer ist: {number} und der name ist: {name}
      </p>
    </div>
  );
}

//set the default values if no props are handed over
ReactTestComponent.defaultProps = {
  number: "0",
  name: "Leerer Film",
};

export default ReactTestComponent;
