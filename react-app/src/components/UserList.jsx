
const UserList = ({users})=>{
    return(
        <>
            <h1>User List</h1>
            {
                users.map((u,i)=>(
                    <div key={i}>
                        <h3>{u}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default UserList;