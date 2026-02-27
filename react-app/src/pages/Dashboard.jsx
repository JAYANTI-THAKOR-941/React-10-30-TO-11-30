
const Dashboard = ({onLogout})=>{
    return(
        <>
            <h1>Admin Dashboard</h1> 
            <h3>Welcome admin you are log in.!</h3>   
            <button onClick={onLogout}>Log out</button>    
        </>
    )
}

export default Dashboard;