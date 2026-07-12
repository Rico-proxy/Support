import { Route, Routes } from "react-router-dom"

import BaaseLayout from "@/layout/BaseLayout"
import Home from "@/pages/landingpage/Home"
import Resources from "@/pages/resourceguide/Resources"
import Support from "@/pages/support/Support"
import Understanding from "@/pages/understanding/Understanding"
import Stories from "@/pages/stories/Stories"
import About from "@/pages/about/About"

export function App() {
  return (
    <Routes>
      <Route element={<BaaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/understanding" element={<Understanding />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
