class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four']
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action />
      <Options options={options} />
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
  //This is a self contained method
  handlePick() {
    alert('HandlePick');
  }
  render(){
    return (
      /*We DONT call handlePick, we reference it is called when the user pushes the button */
      <div>
      <button onClick={ this.handlePick }>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  //Method binding
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options);
  }
  render(){
    return (
      <div>

      <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          /*this.props.options.map( option => <p key={option}>{ option }</p> )*/
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