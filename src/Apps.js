import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/auth";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products_Folder/Products";
import Profile from "./Components/Profile_Folder/Profile";
// import Login from "./Components/Profile_Folder/Login";
import RequireAuth from "./Components/Profile_Folder/RequireAuth";
import TaskTracker from "./Components/Components_tracker/TaskTracker";
import OrderList from "./Components/Products_Folder/OrderList";
// import AddList from "./Components/Products_Folder/AddList";
// import SignUp from "./Components/Profile_Folder/SignUp";
import SignInUp from "./Components/Profile_Folder/SignInUp";
const LazyAbout = React.lazy(() => 
import('./Components/About'))

const Apps = () => {
  // const navigate = useNavigate()
  return (
    // <div onLoad={() => navigate('/')}>
    <AuthProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route 
        path='about' 
        element={<React.Suspense fallback='Loading...'>
          <LazyAbout />
        </React.Suspense>} 
      />
      <Route path="products" element={<Products />} />
      {/* <Route path='addlist' element={<AddList />} /> */}
      <Route path='orders' element={<OrderList />} />
      <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
      {/* <Route path="profile" element={<Profile />} /> */}
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="SignUp" element={<SignUp />} /> */}
      <Route path="SignInUp" element={<SignInUp />} />
      <Route path='tracker' element={<TaskTracker />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
    </AuthProvider>
    // </div>
  )
}

export default Apps;
