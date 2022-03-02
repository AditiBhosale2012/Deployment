import { useState, useEffect } from 'react'
import randomWords from 'random-words'
import './App.css';

const numb_words = 200;
const sec = 60;

function App() {
  // array of words typed by user
  const [words, setWords] = useState([])
  useEffect(() => {
    setWords(generateWords())

  }, [])

  function generateWords() {
    return new Array(numb_words).fill(null).map(() => randomWords())
  }




  return (

    <div className="App">
      <div class="section">
        <div class="is-size-1 has-text-centered has-text-primary">
          <h2 className='head1'>60</h2>
        </div>
      </div>
      <div class="control is-expanded section" id="text1">
        <input type="text" class="input"/>
      </div>
      <div class="section">
        <div className="button button is-info is-fullwidth" id="but">START</div> 
      </div>
      <div class="section">
        <div class="card">
          <div class="card-content">
            <div class="content">
              {words.map((word, i)=>(
                <>
                <span>
                  {word}
                </span>
                <span> </span>
                </>
              )
              
              
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
