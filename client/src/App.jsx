import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import HomePage from "./pages/HomePage/HomePage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import { useSelector } from "react-redux"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline, createTheme } from "@mui/material"



function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isUser = Boolean(useSelector(state => state.token))

  
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}/>
        <Route path="/home" element={isUser? <HomePage></HomePage>: <Navigate to="/"></Navigate>}/>
        <Route path="/profile/:userId" element={isUser? <ProfilePage></ProfilePage>: <Navigate to="/"></Navigate>}/>
      </Routes>
      </CssBaseline>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
