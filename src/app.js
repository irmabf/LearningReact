class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: ['One', 'Two', 'Three']
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
      <AddOptions />
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
  onHandleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
    return;
  }
  render(){
    return (
      <div>
       <form onSubmit={ this.onHandleAddOption }>
        <input type="text" name="option"/>
        <button>Add Option</button>
       </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));