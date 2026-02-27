import { useState } from "react";
import withAuth from "./components/withAuth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = ()=>{

  const [isLogin,setLogin] = useState(false);

  const MyDashboard = withAuth(Dashboard);

  return(
    <>
      <Login onLogin={()=>setLogin(true)}/>
      <MyDashboard islogin={isLogin} onLogout={()=>setLogin(false)} />
    </>
  )
}

export default App;