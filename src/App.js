import logo from './logo.svg';
import './App.css';
import { Alexa } from 'ask-sdk-jsx-for-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <h1>My React App with Alexa Integration</h1>
          <Alexa skillId="YOUR_SKILL_ID">
            <Alexa.Intent name="LaunchRequest">
              <Alexa.AddSpeechText>Hello! Welcome to my Alexa-enabled React app.</Alexa.AddSpeechText>
            </Alexa.Intent>
          </Alexa>
        </div>

      </header>
    </div>
  );
}

export default App;