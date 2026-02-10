import { useState } from "react";
import { UserCard } from "./components/UserCard";
import LearnUseReducer from "./LearnUseReducer";
import { MyComponents } from "./components/MyComponents";
import TaskApp from "./components/TaskApp";

export default function App() {

  const [searchTerm, setSearchTerm ] = useState("");

  const pageStyle = {
    backgroundColor: '#ffffff', // Set the whole page to white
    minHeight: '100vh',         // Ensure it covers the full screen height
    width: '100%',
    maxWidth: '1200px',              // Ensure it covers full width
    margin: '0 auto',
    padding: 0,
    fontFamily: 'sans-serif'
  };

  const [users, setUsers] = useState(
    [{ id: 1, name: "Umesh Rajbanshi", role: "Admin", isActive: true, bio: "Full-stack developer...", image: "https://avatars.githubusercontent.com/u/116547422?s=400&u=6e1bde999c0d13487d471aac73c9a42cd58f28a1&v=4"  },
    { id: 2, name: "Sarah Chen", role: "Editor", isActive: false, bio: "Digital artist...", image: "" }]
  );


  const [newName, setNewName] = useState("");
  const [newBio, setNewBio] = useState("");


  const addUser = (e) => {
    e.preventDefault();
    if (!newName || !newBio) return;

    const newUser = {
      id: Date.now(),
      name: newName,
      bio: newBio,
      role: "User",
      isActive: true,
      image: `https://i.pravatar.cc/150?u=${Date.now()}`
    };

    setUsers([...users,newUser]); //Add new user to the list
    setNewName(""); //clear form
    setNewBio("");

  };


  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id != id);
    setUsers(updatedUsers);
  }
  




  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
    gap: '20px',
    padding: '40px',
    justifyItems: 'center'
  };


  const inputStyle = {
    padding: '12px 20px',
    width: '300px',
    borderRadius: '25px',
    border: '1px solid #ddd',
    fontSize: '16px',
    marginBottom: '30px',
    outline: 'none',
  };


  // Filter logic: This runs every time searchTerm changes
  const filteredUsers = users.filter((user)=>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div style={pageStyle}>
      <hr />
      <hr />
      <hr />
      <hr />
      <TaskApp />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <MyComponents />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <h1>Learning Use Reducer</h1>
      <LearnUseReducer />
      <hr />
      <h1 style={{textAlign: 'center', paddingTop:'20px', color: "#000"}}>Team Directory</h1>


      <form onSubmit={addUser} style={{marginBottom: '40px', background: '#f9f9f9', padding: '20px', borderRadius: '10px', display: 'inline-block'}}>
        <h3>Add New User</h3>
        <input placeholder="Name" value={newName} style={inputStyle} onChange={(e)=>setNewName(e.target.value)}/>
        <br />
        <textarea placeholder="Bio" value={newBio} onChange={(e)=>setNewBio(e.target.value)} style={{...inputStyle,height: '60px'}} />
        <br />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Add User
        </button>
      </form>

        <hr />
      <input
        type="text"
        placeholder="Search by name..."
        style={inputStyle}
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />

      <div style={gridStyle}>


      {filteredUsers.length > 0 ? 
      (filteredUsers.map((user)=>(<UserCard key={user.id} userData={user} onDelete={deleteUser} />))) 
      :
      (<p>No team members found for "{searchTerm}"</p>)}

      </div>
    </div>
  );
}