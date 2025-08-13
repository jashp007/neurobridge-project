import React, { useState } from 'react';

const TextToSpeech: React.FC = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if (!text.trim()) return;

    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis not supported in this browser');
    }
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const quickPhrases = [
    "Hello", "Thank you", "I need help", "I want food", "I want water",
    "Yes", "No", "Please", "I'm happy", "Goodbye"
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label style={{ 
          display: 'block', 
          fontSize: '0.875rem', 
          fontWeight: '500', 
          color: '#374151', 
          marginBottom: '0.5rem' 
        }}>
          Type your message:
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type what you want to say..."
          style={{
            width: '100%',
            height: '120px',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '1rem',
            resize: 'none'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button
          onClick={speak}
          disabled={!text.trim() || isSpeaking}
          className="btn btn-primary"
          style={{ flex: 1 }}
        >
          {isSpeaking ? '🔊 Speaking...' : '🗣️ Speak'}
        </button>
        
        {isSpeaking && (
          <button
            onClick={stop}
            className="btn btn-danger"
          >
            ⏹️ Stop
          </button>
        )}
      </div>

      <div>
        <h3 style={{ 
          fontSize: '0.875rem', 
          fontWeight: '500', 
          color: '#374151', 
          marginBottom: '0.75rem' 
        }}>
          Quick Phrases:
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '0.5rem' 
        }}>
          {quickPhrases.map((phrase) => (
            <button
              key={phrase}
              onClick={() => setText(phrase)}
              style={{
                padding: '0.5rem',
                fontSize: '0.875rem',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {phrase}
            </button>
          ))}
        </div>
      </div>

      <p style={{ 
        fontSize: '0.875rem', 
        color: '#6b7280', 
        textAlign: 'center' 
      }}>
        Type or select a phrase and click "Speak" to hear it!
      </p>
    </div>
  );
};

export default TextToSpeech;
