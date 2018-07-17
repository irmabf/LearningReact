class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusone = this.handleMinusone.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //setup default state object
    this.state = {
      count: 0
    };
  }

  componentDidMount(){
    //2.1 Check if json data is valid
    try {
      //2.2 Read the data from localStorage
      const stringCount = localStorage.getItem('count');
      //2.3 Get a real JAVASCRIPT ARRAY back
      const count = parseInt(stringCount, 10);
      //2.5 If count is a number
      if (!isNaN(count)) {
        //2.6 Use this.setState to set the state to count
        //Return an object that updates count to the count number just obtained
        this.setState( () => ({ count }));
      }
    }catch(error){
      //Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState){
    //1. - Save the data into localStorage when the component updates (changes props or states).
    if (prevState.count != this.state.count){
      //Set the item as a string
      localStorage.setItem('count', this.state.count);
    }

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

ReactDOM.render(<Counter />, document.getElementById('app'));