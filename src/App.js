import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
//import Main from './components/Main';
import CounterContainer from './components/CounterContainer';
import FormContainer from './components/FormContainer';
import {Dashboard} from './components/dashboard/Dashboard';
//import Parent from './components/compositionAndCommunication/Parent';
import {ProductPage} from './components/productPage/ProductPage';
import UseEffectContainer from './components/useEffect/UseEffectContainer'
import UseRefContainer from './components/useRef/UseRefContainer'
import UseContextContainer from './components/useContext/UseContextContainer'
//import Login from './components/useContext/Login'
import './App.css'

// import { AuthProvider } from './components/context/AuthContext';
// import AppContainer from './components/context/AppContainer';

// import Users from './components/api/Users'

// import Users from './components/api/services/Users'
// import Users from './components/users/Users'

//import Posts from './components/posts/Posts'
import Parent from './components/CounterContainer';



function App() {
  return (
   <>
     <Header />
     <main>
      <Parent />
      {/*<Posts />
      <Users />
       <Users /> */}
      {/* <AuthProvider>
          <AppContainer />
        </AuthProvider> */}
      {/*<UseContextContainer />
      <UseRefContainer />
      <UseEffectContainer />
        <Main /> */}
      {/* <CounterContainer /> */}
       {/* <FormContainer /> */}
       {/* <Dashboard /> */}
       {/* <Parent /> */}
       {/* <ProductPage /> */}
     </main>
     <Footer />
   </>
  );
}

export default App;
