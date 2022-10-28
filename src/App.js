// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcom';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBinding from './components/EventBinding';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentsDemo from './components/FragmentsDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Sarfraz" hero="Superman">
        <p>wassup man !</p>
      </Greet>
      <Greet name="Asif" hero="Hulk">
        <button>DABA NAA</button>
      </Greet>
      <Greet name="Rizwan" hero="Thor"/>


      <Welcome name="Sarfraz" hero="Superman"/>
      <Welcome name="Asif" hero="Hulk"/>
      <Welcome name="Rizwan" hero="Thor"/> */}

      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBinding/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <Form/> */}

      {/* <LifecycleA/> */}

      {/* <FragmentsDemo/> */}
      
      {/* <Table/> */}

      {/* <ParentComp/> */}

      {/* <RefsDemo/> */}

      {/* <FocusInput/> */}

      {/* <FRParentInput/> */}

      {/* <PortalDemo/> */}

    <ErrorBoundary>
      <Hero heroName='Batman'/>
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroName='Superman'/>
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroName='Joker'/>
    </ErrorBoundary>
    </div>
  );
}

export default App;
