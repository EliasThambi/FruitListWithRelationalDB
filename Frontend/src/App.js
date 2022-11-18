// import Display from './components/display';
import Login from './pages/login'
import AddCart from './pages/addcart'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/register';

export const ProtectedRoute = ({ children}) => {
  const logvar=JSON.parse(localStorage.getItem("loginvariable"))
  if(logvar===true){
      return children
  }
  return "no access";
};


function App() {
  // const [user,setUserName]=useState('')
  // const [pass,setPassword]=useState('')
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cart" element={<ProtectedRoute ><AddCart /></ProtectedRoute>}/>
            <Route path="/register" element={<Register/>}/>
            {/* username={user} password={pass} */}

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
