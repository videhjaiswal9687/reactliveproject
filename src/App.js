import logo from './logo.svg';
import './App.css';
import HeaderDemo from './Components/FunctionComponent/Header';
import { Content } from './Components/FunctionComponent/Content';
import { Footer } from './Components/FunctionComponent/Footer';
// import {Faculty,Student} from './Components/FunctionComponent/Student';
// import Home from './Components/ConditionalRendering/Home';
import { JSXDemo } from './Components/JSX/JSXDemo';
// import Greeting from './Components/ConditionalRendering/Welcome';
import Person from './Components/ConstructorDemo.js/ConstructorDemo';
import EventHandling from './Components/EventHandling/EventHandling';
import Product from './Components/LifeCycleOfClassComponent/Product';
import JsonDemo from './Components/JSON/JsonDemo';
import HookDemo from './Components/ReactHook/HookDemo'
import Parent from './Components/PassDataFromParentToChild/Parent';
import Parent1 from './Components/PassDataFromChildToParent/Parent1';
// import Demo from './Components/LiftingStateUp/Demo';
import Test from './Components/DestructuringProps&State/Test';
import Employee from './Components/PropType/Employee';
import FormDemo from './Components/ControlleredComponent/FormDemo';
import UserForm from './Components/ControlleredComponent/UserForm';
import TestDemo from './Components/UnControlleredComponent/TestDemo';
import RoutingDemo from './Components/Routing/RoutingDemo';
import BootStrapDemo from './Components/ReactBootStrap/BootStrapDemo';
import Rahul from './Components/HighOrderComponent/Rahul';
import Neha from './Components/HighOrderComponent/Neha';
// The <Provider> component makes the Redux store available to any nested 
//components that need to access the Redux store.
import {Provider} from 'react-redux'
// import Store from './Components/ReactRedux/Store';
import Store from './Components/ReduxThunk/Store';
import Medical from './Components/ReactRedux/Medical';
import { MedicalHook } from './Components/ReactRedux/MedicalHook';
import CustomerLogin from './Components/ReduxThunk/CustomerLogin';
import Users from './Components/ReduxThunk/Users';
import Demo from './Components/ContextAPI/Demo';
import AnimationDemo from './Components/Animation/AnimationDemo';
const studObj = {
  stud_name: "Rahul Sharma",
  stud_rollno: 121,
  stud_course: "BCA",
  stud_fees: 45678.45
}

function App() {
  return (
    <Provider store={Store}>
      <>
      <Demo />
      {/* <AnimationDemo/> */}
      </>
    </Provider>
  );
}

export default App;

{/* calling Function Component */ }
{/* <Home /> */ }
{/* <HeaderDemo/>

         <Content/>
         <Footer/> */}
{/* <JSXDemo /> */ }
{/* <Greeting isLoggedIn={true} /> */ }
{/* <Person name="Neha"/> */ }
{/* <EventHandling /> */ }
{/* <Product price={23000.0}/> */ }
{/* <JsonDemo /> */ }
{/* <HookDemo /> */ }
{/* <Parent /> */ }
{/* <Parent1 /> */ }
{/* <Test student={studObj}/> */ }
{/* <Demo /> */ }
{/* <Employee /> */}
      {/* <FormDemo /> */}
      {/* <UserForm /> */}
      {/* <TestDemo /> */}
      {/* <RoutingDemo /> */}
      {/* <BootStrapDemo/> */}

      {/* <Rahul course="iOS Development" address="Indore M.P"/>
      <Neha course="React JS Development" address="Banglore Karnataka"/> */}
      {/* <Medical />
      <MedicalHook /> */}
      {/* <CustomerLogin /> */}
      {/* <Users /> */}
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}