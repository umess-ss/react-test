export function MyButton({ text, variant, size, onClick }) {
  // Define some basic styles based on the props
  const styles = {
    backgroundColor: variant === 'danger' ? '#ff4d4d' : '#007bff',
    padding: size === 'large' ? '15px 30px' : '8px 16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: size === 'large' ? '18px' : '14px',
    margin: '5px'
  };

  return (
    <button style={styles} onClick={onClick}>
      {text}
    </button>
  );
}