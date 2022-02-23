import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const names = '{"T", "J", "A"}';

class App extends Component {
  constructor() {
    super()

    this.state = { 
      string: 'Dr4co',
      selectedNumber: 1337,
      numbers: [1337, 8, 16, 7],
      monsters: [
        {name: 'Frankenstein', id: 'asc1'},
        {name: 'Dracula', id: 'asr2'},
        {name: 'Zombie', id: 'as1w'}
      ],
      fetchedMonsters: [],
      searchField: ''
      };
    
//      this.handleChange = this.handleChange.bind(this);    
    };

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(users => console.log(users))
      .then(users => this.setState({fetchedMonsters: users}));
    }

    handleChange = (e) => {
      this.setState({ searchField : e.target.value })
    }

  render () {
    const { fetchedMonsters, searchField } = this.state;
    // Same as the below:
    // * const fetchedMonsters = this.state.fetchedMonsters;
    // * const searchField = this.state.searchField;
    const filteredMonsters = fetchedMonsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (<div className="App">
      <h1>Cats cats cats</h1>
      <SearchBox placeholder='Enter search string here' handleChange={this.handleChange}/>
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
      <CardList fetchedMonsters={filteredMonsters}></CardList>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {this.state.string}</p>
        <p>Hello {this.state.string}</p>
        <br/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>Random number: {this.state.selectedNumber}</span>
        <button onClick={() => this.setState({string : 'Some Name'})}>Change Name</button>
          Learn React
      </header>
    </div>
    )
  };
};

/*

        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}          
        <!--<button onClick={() => this.setState({selectedNumber: Math.Random()})}>Change Number</button>-->


            {this.state.fetchedMonsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))}          


        */

export default App;
