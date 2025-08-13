import React, { useRef, useEffect, useState } from 'react';

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState<'pen' | 'eraser'>('pen');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 5;
    
    if (currentTool === 'pen') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = '#374151';
    } else {
      ctx.globalCompositeOperation = 'destination-out';
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.beginPath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const interpretDrawing = () => {
    const phrases = [
      "I want food",
      "I need help", 
      "Thank you",
      "Hello",
      "I'm happy"
    ];
    
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(randomPhrase);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
    
    alert(`Interpreting drawing as: "${randomPhrase}"`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Drawing Tools */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem', 
        padding: '1rem', 
        backgroundColor: '#f9fafb', 
        borderRadius: '8px' 
      }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setCurrentTool('pen')}
            className={currentTool === 'pen' ? 'btn btn-primary' : 'btn btn-secondary'}
            style={{ fontSize: '0.875rem' }}
          >
            ✏️ Pen
          </button>
          <button
            onClick={() => setCurrentTool('eraser')}
            className={currentTool === 'eraser' ? 'btn btn-primary' : 'btn btn-secondary'}
            style={{ fontSize: '0.875rem' }}
          >
            🧽 Eraser
          </button>
        </div>
        
        <button
          onClick={clearCanvas}
          className="btn btn-danger"
          style={{ fontSize: '0.875rem' }}
        >
          🗑️ Clear
        </button>
      </div>

      {/* Canvas */}
      <div style={{ border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          style={{ width: '100%', cursor: 'crosshair', backgroundColor: 'white', display: 'block' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>

      {/* Action Button */}
      <button
        onClick={interpretDrawing}
        className="btn btn-success"
        style={{ width: '100%', padding: '0.75rem' }}
      >
        🎯 Speak Drawing
      </button>

      <p style={{ 
        fontSize: '0.875rem', 
        color: '#6b7280', 
        textAlign: 'center' 
      }}>
        Draw something and click "Speak Drawing" to hear it!<br />
        <span style={{ fontSize: '0.75rem' }}>In Phase 3, this will use AI to understand your drawings.</span>
      </p>
    </div>
  );
};

export default DrawingCanvas;
