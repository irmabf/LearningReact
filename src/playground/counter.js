class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusone = this.handleMinusone.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }
  handleAddOne() {
    //count++;
    console.log('+1');
  }
  handleMinusone(){
    //count--
    console.log('-1');
  }
  handleReset(){
    //count = 0;
    console.log('reset');
  }
  render() {

    return (
      <div>
        <h1>Count: </h1>
        <button onClick={ this.handleAddOne }>+1</button>
        <button onClick={ this.handleMinusone}>-1</button>
        <button onClick={ this.handleReset }>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));