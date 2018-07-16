const app = {
  name: 'Visibility Toggle'
}

let visibility = false;

const toggleVisibility = ()=> {
  visibility = !visibility;
  console.log('show');
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{ app.name }</h1>
      <button onClick={ toggleVisibility }>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see</p>
        </div>
      )}
    </div>

  )
  ReactDOM.render(template, appRoot);
};

render();