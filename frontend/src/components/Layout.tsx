import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #dcfce7 100%)' }}>
      <div className="container">
        {children}
      </div>
      
      {/* Footer */}
      <footer style={{ 
        marginTop: '4rem', 
        padding: '2rem 0', 
        backgroundColor: '#f9fafb', 
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            NeuroBridge • Built with ❤️ for accessibility • Phase 1
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
