import React from 'react';
import './App.css';
import Layout from './components/Layout';
import DrawingCanvas from './components/DrawingCanvas';
import EmergencyButton from './components/EmergencyButton';
import TextToSpeech from './components/TextToSpeech';
import FacialEmotionRecognition from './components/FacialEmotionRecognition';

function App() {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '0.5rem' 
          }}>
            🧠 NeuroBridge
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280' 
          }}>
            AI-Powered Communication for Everyone
          </p>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#059669',
            fontWeight: '500',
            marginTop: '0.5rem'
          }}>
            🚀 Phase 2: Now with Facial Emotion Recognition!
          </p>
        </div>

        {/* Emergency Button - Always visible at top */}
        <EmergencyButton />

        {/* Main Communication Tools */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Facial Emotion Recognition - NEW in Phase 2 */}
          <div className="card">
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151', 
              marginBottom: '1rem' 
            }}>
              📷 Facial Emotions
            </h2>
            <FacialEmotionRecognition />
          </div>

          {/* Drawing Canvas */}
          <div className="card">
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151', 
              marginBottom: '1rem' 
            }}>
              ✏️ Draw to Speak
            </h2>
            <DrawingCanvas />
          </div>

          {/* Text to Speech */}
          <div className="card">
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151', 
              marginBottom: '1rem' 
            }}>
              🗣️ Type to Speak
            </h2>
            <TextToSpeech />
          </div>
        </div>

        {/* Phase Progress & Coming Soon */}
        <div style={{ 
          background: 'linear-gradient(to right, #eff6ff, #f0fdf4)', 
          borderRadius: '12px', 
          padding: '1.5rem' 
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '0.75rem' 
          }}>
            🚀 Development Progress
          </h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#059669', marginBottom: '0.5rem' }}>
              ✅ Phase 2 Complete:
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '0.5rem', 
              fontSize: '0.875rem', 
              color: '#065f46' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📷</span>
                <span>Camera Integration</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🧠</span>
                <span>Emotion Detection (Mock)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🗣️</span>
                <span>Emotion-to-Speech</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#2563eb', marginBottom: '0.5rem' }}>
              🔄 Phase 3 Coming Next:
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '0.5rem', 
              fontSize: '0.875rem', 
              color: '#1e40af' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🤖</span>
                <span>AWS Rekognition Integration</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🎯</span>
                <span>DeepAI Image Understanding</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🎭</span>
                <span>Giphy GIF Responses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
