import React from 'react';
import Camera from './Camera';
import EmotionDetection from './EmotionDetection';

const FacialEmotionRecognition: React.FC = () => {
  const handleImageCapture = (imageData: string) => {
    // For now, we'll trigger the mock emotion detection
    // In Phase 3, this will send imageData to AWS Rekognition
    const triggerButton = document.getElementById('trigger-emotion-detection') as HTMLButtonElement;
    if (triggerButton) {
      triggerButton.click();
    }
  };

  const handleEmotionDetected = (emotion: string, confidence: number) => {
    console.log(`Detected emotion: ${emotion} with ${confidence}% confidence`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          color: '#374151', 
          marginBottom: '1rem' 
        }}>
          📷 Camera Feed
        </h3>
        <Camera onCapture={handleImageCapture} />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          color: '#374151', 
          marginBottom: '1rem' 
        }}>
          🧠 Emotion Analysis
        </h3>
        <EmotionDetection onEmotionDetected={handleEmotionDetected} />
      </div>
    </div>
  );
};

export default FacialEmotionRecognition;
