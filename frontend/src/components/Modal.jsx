import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>✖</button>
        <div style={styles.content}>
          {children}
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '10px 20px 20px',
    width: 'auto',
    maxWidth: '95vw',
    boxShadow: '0 10px 24px rgba(0,0,0,0.25)',
    position: 'relative',
    animation: 'fadeInScale 0.3s ease-in-out',
  },
  closeBtn: {
    position: 'absolute',
    top: '8px',
    right: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    border: 'none',
    background: 'transparent',
    color: '#333',
    cursor: 'pointer',
  },
  content: {
    marginTop: '10px',
  },
};

export default Modal;
