export function Avatar({ src, name, size = 'md' }) {
  // Define dimensions based on the size prop
  const sizes = {
    sm: '32px',
    md: '48px',
    lg: '80px'
  };

  const dimension = sizes[size] || sizes.md;

  const style = {
    width: dimension,
    height: dimension,
    borderRadius: '50%', // Perfect circle
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366f1', // Brand color for fallback
    color: 'white',
    fontSize: size === 'lg' ? '24px' : '14px',
    fontWeight: 'bold',
    overflow: 'hidden',
    border: '2px solid #fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  // Logic: If there is no image (src), show the first letter of the name
  return (
    <div style={style}>
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%' }} />
      ) : (
        <span>{name ? name.charAt(0).toUpperCase() : '?'}</span>
      )}
    </div>
  );
}