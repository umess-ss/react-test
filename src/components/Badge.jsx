export function Badge({type, label}) {
    const typeStyle = {
    success: { bg: '#dcfce7', text: '#166534' },
    warning: { bg: '#fef9c3', text: '#854d0e' },
    error: { bg: '#fee2e2', text: '#991b1b' },
    default: { bg: '#f3f4f6', text: '#374151' }
    };

    const activeStyle = typeStyle[type] || typeStyle.default;

    const style = {
    backgroundColor: activeStyle.bg,
    color: activeStyle.text,
    padding: '4px 12px',
    borderRadius: '999px', // Makes it a "pill" shape
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'inline-block',
    fontFamily: 'sans-serif'
  };


  return <span style={style}>{label}</span>

}