let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  if(count > 0){
    count--;
    renderCounterApp();
  }
  return;
};
const reset = () => {
  count = 0;
  renderCounterApp();
}
const someId = 'myIdHere';



const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ addOne }>+1</button>
      <button onClick={ minusOne}>-1</button>
      <button onClick={ reset }>Reset</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();