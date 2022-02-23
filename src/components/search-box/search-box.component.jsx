import React from "react";

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input type="search" placeholder={placeholder}
    onChange={handleChange} className="search"></input>
);
    {/*

      <input type="search" placeholder='Enter search string here'
          onChange={e => {this.setState({ searchField : e.target.value }); console.log(this.state.searchField);}}></input>
 
      The above code will not print the LATEST set state status, but instead one character/letter
      behind, this is because the setState function is a Asynchronous function call!!!

      Meaning, the setState might finnish right after the console.log or much later!
      Therefore the console.log ONLY contains the "previous" characters/letter.

      -----------------------------------

      onChange={e => {this.setState({ searchField : e.target.value }, () => console.log(this.state.searchField))}}></input>

      To PROPPERLY or have the desired output/console.log then you want to pass a second argument, a callback method
      * After the setState method has finnished, it will run the function that we have passed,
      then we can use the console.log, and see the NEW latest value!

      This is the way, with a callback method AFTER setting the state, IF we want to
      do anything, or need the latest STATE!
    */}
