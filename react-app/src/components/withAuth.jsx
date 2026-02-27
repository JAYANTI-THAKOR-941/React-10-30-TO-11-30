
const withAuth = (Component)=>{
    return function WithAuthComponent({islogin,...props}){
        if(!islogin){
            return <h2>Login Required to access admin dashboard</h2>;
        }

        return <Component {...props} />
    }
}

export default withAuth;