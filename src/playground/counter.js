class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusone = this.handleMinusone.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //setup default state object
    this.state = {
      count: props.count
    };
  }

  handleAddOne() {
    // this.state.count++;
    // console.log(this.state.count);
    this.setState( (prevState) =>{
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusone(){
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset(){
    this.setState( () => {
      return {
        count: 0
      };
    })
  }
  render() {
    return (
      <div>
        <h1>Count: { this.state.count } </h1>
        <button onClick={ this.handleAddOne }>+1</button>
        <button onClick={ this.handleMinusone}>-1</button>
        <button onClick={ this.handleReset }>Reset</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));