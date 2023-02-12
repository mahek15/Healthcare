import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MeetDoctors from "./pages/MeetDoctors";
import Testimonials from "./pages/Testimonials";
import Works from "./pages/Works";
import { Route,Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Medicines from "./pages/Medicines";
import SinglePost from "./components/blogs/SinglePost";
import Write from "./components/blogs/Write";
import Chat from "./components/Chat";

function App() {
  return (
    <UserAuthContextProvider>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" 
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/meetdoctors" element={<MeetDoctors />} />
      <Route path="/works" element={<Works />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact/> }/>
      <Route path="/blogs" element={<Blogs/> }/>
      <Route path="/medicines" element={<Medicines/> }/>
      <Route path="/singlepost" element={<SinglePost/> }/>
      <Route path="/composeblog" element={<Write/> }/>
      <Route path="/chat" element={<Chat/> }/>
    </Routes>
    <Footer/>
    </UserAuthContextProvider>
  );
}

export default App;
