import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: ''
    }
    
    this.JSON = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  
  componentDidMount() {
    fetch(this.JSON)
      .then(data => data.json())
      .then(quotes => this.setState({quotes}, () => {
      this.setState({quote: this.getRandomQuote()})
    }))
  }
    
  getRandomQuote = (e) => {
    let randomIndex = Math.floor((Math.random() * 100 - 1) + 1);
    this.setState({quote: this.state.quotes[randomIndex]});
    return this.state.quotes[randomIndex];
  }
    
  render () {   
    let twitterURL = 'https://twitter.com/intent/tweet?text=' + this.state.quote.quote + ' - ' + this.state.quote.author;
    
    return (      
      <div id="quote-box">
        <h1 id="title">Random Quote Machine</h1>
        <p id="text">"{this.state.quote.quote}"</p>
        <p id="author">-{this.state.quote.author}</p>
        <div id="icons">
          <a id="tweet-quote" href={twitterURL}>
            Tweet!                  
          </a>
          <button id="new-quote" onClick={this.getRandomQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
