import React from 'react';
import './style.css';

const displayEmojiName = event => alert(event.target.id);

const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];



export default function App() {
  const greeting = "greeting";
  return(
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing more JSX</p>
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
