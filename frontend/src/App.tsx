import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Box, CssBaseline } from '@mui/material'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StaffList from './components/StaffList'

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* Sidebar (Menu bên trái) */}
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            marginLeft: 30, // Dành không gian cho sidebar
          }}
        >
          {/* Header */}
          <Header />

          {/* Danh sách nhân viên */}
          <StaffList />
        </Box>
      </Box>
    </Router>
  )
}

export default App
