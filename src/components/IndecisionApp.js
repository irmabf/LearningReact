import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: []  }));
  }
  handleClearSelectedOption = () => {
    this.setState( () => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (optionToRemove) => {
    //console.log('delete single', option);
    this.setState( (prevState) => ({
      options: prevState.options.filter( (option)=> {
        //Return false if we dont wanna keep the item in the array
        return optionToRemove !== option;
      })
    }));
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState( () => ({
      selectedOption: option
    }));
  }
  handleAddOption = (option) => {
    //this is only going to run if there is an empty string in the input
    if (!option) {
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState( (prevState) => ({  options: prevState.options.concat(option) }));
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

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={ subtitle }/>
        <div className="container">
          <Action
            hasOptions={ this.state.options.length > 0 }
            handlePick={ this.handlePick }
          />
          <div className="widget">
            <Options
              options={ this.state.options }
              handleDeleteOptions={ this.handleDeleteOptions  }
              handleDeleteOption={  this.handleDeleteOption }
            />
            <AddOption
            handleAddOption={ this.handleAddOption }
          />
          </div>
        </div>
        <OptionModal
          selectedOption={ this.state.selectedOption }
          handleClearSelectedOption={ this.handleClearSelectedOption }
         />
       </div>
    );
  };
};



