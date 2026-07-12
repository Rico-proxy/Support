import { Route, Routes } from "react-router-dom"

import BaaseLayout from "@/layout/BaseLayout"
import Home from "@/pages/landingpage/Home"

export function App() {
  return (
    <Routes>
      <Route element={<BaaseLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
