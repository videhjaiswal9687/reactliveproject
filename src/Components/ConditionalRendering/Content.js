// Message Component
export function Message(props)
{
    if (props.isLoggedIn)
        return <h1 className="add">Welcome User</h1>;
    else
        return <h1 className="mul">Please Login</h1>;
}
 
// Login Component
export function Login(props)
{
   return(
           <button onClick = {props.clickFunc}>
               Login
           </button>
       );
}
 
// Logout Component
export function Logout(props)
{
    return(
           <button onClick = {props.clickFunc}>
               Logout
           </button>
       );
}
 