export default function Friend ({friend}){
    // console.log(Friend)

    const {name, email, phone} = friend;
    return(
        <div className="borderCard">
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
        </div>
    )
}