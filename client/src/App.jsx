import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import HomePage from "./pages/HomePage/HomePage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import { useSelector } from "react-redux"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline, createTheme } from "@mui/material"
import Navbar from "./components/components/Navbar"


function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}/>
        <Route path="/home" element={<HomePage></HomePage>}/>
        <Route path="/profile/:userId" element={<ProfilePage></ProfilePage>}/>
      </Routes>
      </CssBaseline>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
