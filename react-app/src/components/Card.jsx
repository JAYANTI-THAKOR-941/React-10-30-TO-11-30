
const Card = ({products})=>{
    return(
        <>
            <h2>Product List</h2> 
            {
                products.map((p,i)=>(
                    <div key={i}>
                        <h3>{p}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default Card;