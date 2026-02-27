
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import withLoading from "./components/withLoading";

const UserManagement = () => {
    
  const UserComponent = withLoading(UserList);

  const [users,setUsers] = useState([]);

  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(()=>{
        setUsers(["Himanshu","Arif","Anish","Aditya","Smit"]);
        setLoading(false);
    },5000)

  },[])
  return (
    <div>
         <UserComponent isLoading={loading}  users={users} />
    </div>
  )
}

export default UserManagement