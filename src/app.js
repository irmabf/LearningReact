class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: props.options
    };
  }
  //Lifecycle methods only exist in class based components,
  //we CAN'T use them in statless functional components

  //2. - Read the data in localStorage in and use this.setState
  //to set the the state base of whatever data is setting inside of localstorage

  componentDidMount(){
    try {
          //2.1 - Read the data from localStorage
      const json = localStorage.getItem('options');
      //2.2 Get a real JAVASCRIPT ARRAY BACK
      const options = JSON.parse(json);
      //2.3 Use this.setState to set the state to options
      //Return an object that updates options to the options array just parsed
      if (options) {
        //this.setState(  () => ({  options: options  }));
        this.setState(  () => ({ options }));
      }
    }catch (error){
     //Do nothing at all
    }

  }
  componentDidUpdate(prevProps, prevState){
    //1 - Save the data into local storage when the component updates (changes).
    if (prevState.options.length != this.state.options.length) {
      //1.1 - Convert our options OBJECT to a STRING REPRESENTATION,
      const json = JSON.stringify(this.state.options);
      //1.2 - Store the string representation that we just obtained to localStorage
      localStorage.setItem('options', json);
    }
  }
  //Fires when a component goes away
  componentWillUnmount(){
    console.log('component will unmount');
  }
  handleDeleteOptions(){
    this.setState(() => ({ options: []  }));
  }
  handleDeleteOption(optionToRemove) {
    //console.log('delete single', option);
    this.setState( (prevState) => ({
      options: prevState.options.filter( (option)=> {
        //Return false if we dont wanna keep the item in the array
        return optionToRemove !== option;
      })
    }));
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){
    //this is only going to run if there is an empty string in the input
    if (!option) {
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState( (prevState) => ({  options: prevState.options.concat(option) }));
  }
  render() {
    //const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
      <Header subtitle={ subtitle }/>
      <Action
        hasOptions={ this.state.options.length > 0 }
        handlePick={ this.handlePick }
      />
      <Options
        options={ this.state.options }
        handleDeleteOptions={ this.handleDeleteOptions  }
        handleDeleteOption={  this.handleDeleteOption }
      />
      <AddOptions
        handleAddOption={ this.handleAddOption }
       />
    </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        { props.subtitle && <h2>{ props.subtitle }</h2> }
      </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={ props.handlePick }
        disabled={ !props.hasOptions }
      >
        What should I do?
    </button>
  </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      { props.options.length === 0 && <p>Please add an option to get started.</p>}
        {
          props.options.map( option => (
            <Option
              key={  option  }
              optionText={  option  }
              handleDeleteOption= { props.handleDeleteOption}
            />
          ))
        }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      { props.optionText }
      <button
        onClick={ (e) =>{
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  )
}

class AddOptions extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState( () => ({  error  }));
    if (!error) {
      e.target.elements.option.value = '';
    }

  }
  render(){
    return (
      <div>
      { this.state.error && <p>{ this.state.error }</p>}
       <form onSubmit={ this.handleAddOption }>
        <input type="text" name="option"/>
        <button>Add Option</button>
       </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
