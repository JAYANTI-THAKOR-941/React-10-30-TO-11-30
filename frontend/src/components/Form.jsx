
const Form = ()=>{

    const formFields = [
        {name:"username",type:"text",placeHolder:"Enter username"},
        {name:"email",type:"email",placeHolder:"Enter Email"},
        {name:"password",type:"text",placeHolder:"Enter password"},
        {name:"",type:"submit",placeHolder:""},
    ]

    return(
        <>
            <form>
                <h2>Register Form</h2>
                {
                    formFields.map((f,index)=>(
                       <div key={index}>
                            <label>{f.name}</label>
                            <input type={f.type} placeholder={f.placeHolder} />
                       </div>
                    ))
                }
            </form>
        </>
    )
}
export default Form;