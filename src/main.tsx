import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'

const Redirect = () => {
  useEffect(() => {
    window.location.href = '/'
  }, [])
  
  return <div>Redirecting to Next.js application...</div>
}

createRoot(document.getElementById("root")!).render(<Redirect />);
