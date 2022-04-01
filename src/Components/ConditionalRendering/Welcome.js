function UserGreeting(props){
    return <h1 className="add">Welcome,{props.name}</h1>
}

function GuestGreeting(props){
    return <h1 className="mul">Please Sign Up!!,{props.name}</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting name="Rahul Sharma" />
    }
    return <GuestGreeting name="Guest User!!!"/>
}

export default Greeting;
//Use Conditional Rendering
//When user loggedIn , then display logout button with Home page.
//Otherwise display login button with Login Page.