console.log('App is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const numbers = [55, 101, 1000];

const onFormSubmit = (e) =>  {
  e.preventDefault();
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    console.log(option);
    render();
  }
  return
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  //Pull option from the options array usin the randomNum as the index
  const option = app.options[randomNum];
  alert(option);

};
const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.options.length > 0) ? "Here are your options" : "No options"}
      <button disabled={app.options.length === 0} onClick={ onMakeDecision }>What should I do?</button>
      <ol>
        {
          app.options.map(option => <li key={ option }>Option: { option }</li>)
        }
      </ol>
      <button onClick={ onRemoveAll }>Remove All</button>
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();

