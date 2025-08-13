import React from 'react';
import './App.css';
import Layout from './components/Layout';
import DrawingCanvas from './components/DrawingCanvas';
import EmergencyButton from './components/EmergencyButton';
import TextToSpeech from './components/TextToSpeech';

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
        </div>

        {/* Emergency Button - Always visible at top */}
        <EmergencyButton />

        {/* Main Communication Tools */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
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

        {/* Coming Soon Features */}
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
            🚀 Coming Soon
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem', 
            fontSize: '0.875rem', 
            color: '#6b7280' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📷</span>
              <span>Facial Expression Recognition</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎯</span>
              <span>AI Image Understanding</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎭</span>
              <span>GIF Responses</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
