import { BrowserRouter, Route, Routes } from "react-router-dom"

import Main from "./pages/Main"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Blog from "./pages/Blog"
import Publish from "./pages/Publish"
import Blogs from "./pages/Blogs"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/blog/:id" element={<Blog/>}></Route>
          <Route path="/publish" element={<Publish/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
