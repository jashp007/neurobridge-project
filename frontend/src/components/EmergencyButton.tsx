import React, { useState } from 'react';

const EmergencyButton: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleEmergency = () => {
    setIsPressed(true);
    
    const emergencyMessage = "I need help right now!";
    
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(emergencyMessage);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    }

    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('🚨 Emergency Alert', {
          body: emergencyMessage,
          icon: '/favicon.ico'
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('🚨 Emergency Alert', {
              body: emergencyMessage,
              icon: '/favicon.ico'
            });
          }
        });
      }
    }

    alert(`🚨 EMERGENCY ALERT 🚨\n\n${emergencyMessage}\n\nThis alert has been spoken and shown as a notification.`);
    
    setTimeout(() => {
      setIsPressed(false);
    }, 3000);
  };

  return (
    <div className="card" style={{ 
      backgroundColor: '#fef2f2', 
      border: '2px solid #fecaca' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          color: '#991b1b', 
          marginBottom: '0.5rem' 
        }}>
          🚨 Emergency Communication
        </h2>
        <p style={{ 
          color: '#b91c1c', 
          marginBottom: '1rem', 
          fontSize: '0.875rem' 
        }}>
          Press this button if you need immediate help
        </p>
        
        <button
          onClick={handleEmergency}
          disabled={isPressed}
          className="btn btn-danger"
          style={{ 
            fontSize: '1.25rem', 
            padding: '1rem 2rem',
            transform: isPressed ? 'scale(0.95)' : 'scale(1)',
            opacity: isPressed ? 0.8 : 1
          }}
        >
          {isPressed ? '🔊 HELP REQUESTED' : '🚨 I NEED HELP'}
        </button>
        
        <p style={{ 
          fontSize: '0.75rem', 
          color: '#dc2626', 
          marginTop: '0.75rem' 
        }}>
          This will speak aloud and show a notification
        </p>
      </div>
    </div>
  );
};

export default EmergencyButton;
