/**
 * This version of indecision only uses class components. Down below there is an example showing
 * how to use a stateless functional component.
 */

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions(){
    this.setState( () =>{
      return {
        options: []
      };
    });
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

    this.setState( (prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action
        hasOptions={ this.state.options.length > 0 }
        handlePick={ this.handlePick }
      />
      <Options
        options={ this.state.options }
        handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOptions
        handleAddOption={ this.handleAddOption }
       />
    </div>
    );
  }
}

class Header extends React.Component {
  render(){
    //console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render(){
    return (
      /*We DONT call handlePick, we reference it is called when the user pushes the button */
      <div>
        <button
          onClick={ this.props.handlePick }
          disabled={ !this.props.hasOptions }
          >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
      <button onClick={ this.props.handleDeleteOptions }>Remove All</button>
        {
          this.props.options.map( option => <Option key={option} optionText={option} />)
        }
      </div>

    )
  }
}

class Option extends React.Component {
  render(){
    //console.log(this.props.optionText);
    return (
      <div>
        { this.props.optionText }
      </div>
    )
  }
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
    this.setState( () => {
      return { error };
    });
    e.target.elements.option.value = '';
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
/**
 * ***************************** HOW TO CREATE AND USE A STATELESS FUNCTIONAL COMPONENT********************************
 *
 *const User = (props) => {
  return (
    <div>
      <p>Name: { props.name }</p>
      <p>Age: { props.age }</p>
    </div>
  );
};
ReactDOM.render(<User name="Jon Snow" age="30" />, document.getElementById('app'));
 */


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));