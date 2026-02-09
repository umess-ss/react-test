import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { MyButton } from "./MyButton";

export function UserCard({ userData, onDelete}) {
    const cardStyle = {
    width: '300px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif'
    }

    const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px'
    };
    


    return (
        <div style={cardStyle}>

            <button 
        onClick={() => onDelete(userData.id)}
        style={{
          float: 'right',
          border: 'none',
          background: 'none',
          color: '#ff4d4d',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        ✕
      </button>
      
            <div style={headerStyle}>
                <Avatar src={userData.image} name={userData.name} size="lg" />
            </div>

            <div>
                <h3 style={{margin:'5px 0', color:'#000'}}>{userData.name}</h3>
                <Badge label={userData.role} type={userData.isActive ? 'success' : 'default' } />
            </div>

            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>
                {userData.bio}
            </p>


            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {/* We use our Button Atoms here */}
        <MyButton text="View Profile" variant="primary" size="small" />
        <MyButton text="Message" variant="default" size="small" />
      </div>
        </div>
    );
}