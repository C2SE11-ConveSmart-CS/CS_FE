import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { AuthContextProvider } from './contexts/AuthContext'
import { ChatContextProvider } from './contexts/ChatsContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </AuthContextProvider>
)
