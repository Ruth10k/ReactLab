import './App.css';

// they have to be in this order
// each value has a color
// having the colors like this makes the hover effect more complicated
const MyColors = [
  { value: 7, color: "#ADEEC5" },
  { value: 8, color: "#B72818" },
  { value: 9, color: "#FFA213" },
  { value: 4, color: "#7D4EED" },
  { value: 5, color: "#4B75FF" },
  { value: 6, color: "#65988B" },
  { value: 1, color: "#ED744E" },
  { value: 2, color: "#ED5297" },
  { value: 3, color: "#4EEDC4" },
];

function Block({ bgcolor, children }) {
  return (
    <div
      className="blocks"
      style={{ backgroundColor: bgcolor }}
      // this is going to make the item appear on the screen
      onClick={() => alert(children)}
    >
      {children}
    </div>
  );
}



function ColorGrid( props) {
  const colorArray = props.colorArray;
  return ( 
    <div className="grid"> 
      {colorArray.map((item) => (
        <Block key={item.value} bgcolor={item.color}>
          {item.value}
        </Block>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ColorGrid colorArray={MyColors} />
    </div>
  );
}

export default App;
