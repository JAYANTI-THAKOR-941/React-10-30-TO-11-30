
const withLoading = (Component)=>{
    return function WithLoadingComponent({isLoading,...props}){
        if(isLoading){
            return(
                <>
                    <h2>Loading.. please wait..!!!</h2>
                </>
            )
        }
        return <Component {...props} />
    }
}
export default withLoading;