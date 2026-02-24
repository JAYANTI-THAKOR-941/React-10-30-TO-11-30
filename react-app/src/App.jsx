import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import withLoading from "./components/withLoading";
import ProductPage from "./pages/ProductPage";


const App = ()=>{

  const UserComponent = withLoading(UserList);

  const [users,setUsers] = useState([]);

  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(()=>{
        setUsers(["Himanshu","Arif","Anish","Aditya","Smit"]);
        setLoading(false);
    },5000)

  },[])

  return(
    <>
      <UserComponent isLoading={loading}  users={users} />
      <ProductPage/>
    </>
  )
}

export default App;