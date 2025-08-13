import React, { useState } from 'react';

interface EmotionDetectionProps {
  onEmotionDetected: (emotion: string, confidence: number) => void;
}

const EmotionDetection: React.FC<EmotionDetectionProps> = ({ onEmotionDetected }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [lastEmotion, setLastEmotion] = useState<{emotion: string, confidence: number} | null>(null);

  // Mock emotion detection for Phase 2 demo
  // In Phase 3, this will connect to AWS Rekognition
  const detectEmotion = async (imageData: string) => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const emotions = [
        { emotion: 'HAPPY', confidence: 0.85 },
        { emotion: 'SAD', confidence: 0.75 },
        { emotion: 'SURPRISED', confidence: 0.70 },
        { emotion: 'CALM', confidence: 0.90 },
        { emotion: 'CONFUSED', confidence: 0.65 }
      ];
      
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      setLastEmotion(randomEmotion);
      onEmotionDetected(randomEmotion.emotion, randomEmotion.confidence);
      setIsAnalyzing(false);
    }, 1500);
  };

  const emotionToPhrases: Record<string, string[]> = {
    'HAPPY': [
      "I'm feeling great!",
      "I'm happy!",
      "Everything is wonderful!",
      "I'm having a good day!"
    ],
    'SAD': [
      "I'm feeling sad",
      "I need some comfort",
      "I'm not feeling well",
      "I could use a hug"
    ],
    'SURPRISED': [
      "That's surprising!",
      "I didn't expect that!",
      "Wow, that's amazing!",
      "I'm surprised!"
    ],
    'CALM': [
      "I'm feeling peaceful",
      "Everything is okay",
      "I'm relaxed",
      "I feel calm"
    ],
    'CONFUSED': [
      "I don't understand",
      "I'm confused",
      "Can you explain that?",
      "I need help understanding"
    ]
  };

  const speakEmotion = (emotion: string) => {
    const phrases = emotionToPhrases[emotion] || ["I'm feeling something"];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(randomPhrase);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {isAnalyzing && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#eff6ff', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🧠</div>
          <p style={{ color: '#2563eb', fontWeight: '500' }}>
            Analyzing facial expression...
          </p>
        </div>
      )}

      {lastEmotion && !isAnalyzing && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#f0fdf4', 
          borderRadius: '8px',
          border: '1px solid #bbf7d0'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: '600', 
            color: '#166534', 
            marginBottom: '0.5rem' 
          }}>
            🎯 Emotion Detected
          </h3>
          <div style={{ marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>
              {lastEmotion.emotion === 'HAPPY' && '😊'}
              {lastEmotion.emotion === 'SAD' && '😢'}
              {lastEmotion.emotion === 'SURPRISED' && '😲'}
              {lastEmotion.emotion === 'CALM' && '😌'}
              {lastEmotion.emotion === 'CONFUSED' && '😕'}
            </span>
            <span style={{ marginLeft: '0.5rem', fontWeight: '500', color: '#166534' }}>
              {lastEmotion.emotion}
            </span>
            <span style={{ 
              marginLeft: '0.5rem', 
              fontSize: '0.875rem', 
              color: '#4b5563' 
            }}>
              ({Math.round(lastEmotion.confidence * 100)}% confidence)
            </span>
          </div>
          
          <button
            onClick={() => speakEmotion(lastEmotion.emotion)}
            className="btn btn-success"
            style={{ width: '100%' }}
          >
            🗣️ Speak My Feeling
          </button>
        </div>
      )}

      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f9fafb', 
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: '#6b7280'
      }}>
        <h4 style={{ fontWeight: '500', marginBottom: '0.5rem' }}>How it works:</h4>
        <ol style={{ paddingLeft: '1.25rem', margin: 0 }}>
          <li>Camera captures your facial expression</li>
          <li>AI analyzes your emotion (currently simulated)</li>
          <li>Converts emotion to appropriate speech</li>
        </ol>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          Phase 3 will integrate real AWS Rekognition emotion detection
        </p>
      </div>

      {/* Hidden function to trigger detection from Camera component */}
      <button
        onClick={() => detectEmotion('')}
        style={{ display: 'none' }}
        id="trigger-emotion-detection"
      />
    </div>
  );
};

export default EmotionDetection;
