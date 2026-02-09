import { MyButton } from './components/MyButton';

export default function App() {
  return (
    <div>
      <h1>Level 1: Reusable Buttons</h1>
      
      {/* 1. A standard primary button */}
      <MyButton 
        text="Save Changes" 
        variant="primary" 
        onClick={() => alert('Saved!')} 
      />

      {/* 2. A large danger button */}
      <MyButton 
        text="Delete Account" 
        variant="danger" 
        size="large" 
        onClick={() => alert('Are you sure?')} 
      />
    </div>
  );
}