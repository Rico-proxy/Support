import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./index.css"
import App from "./App.tsx"
import { Pointer } from "./components/ui/pointer.tsx"
import { FaStar } from "react-icons/fa"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Pointer>
        <div className="text-3xl">
          <FaStar/>
          
        </div>
      </Pointer>
      <App />
    </BrowserRouter>
  </StrictMode>
)
