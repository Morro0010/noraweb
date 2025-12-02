import { Navigate, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Panel } from './pages/Panel'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/panel" element={<Panel />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
