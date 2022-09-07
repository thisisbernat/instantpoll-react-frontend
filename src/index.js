import React from "react"
import ReactDOM from "react-dom"
import './assets/stylesheets/index.css'
import 'cirrus-ui'
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProviderWrapper } from "./context/auth.context"
import { Analytics } from 'analytics'
import { AnalyticsProvider } from "use-analytics"
import { addNewViewService } from './services/public.services.js'

const analytics = Analytics({
  app: 'instantpoll',
  plugins: [{
    name: 'my-plugin',
    page: async ({ payload }) => {
      const visitId = payload.anonymousId
      const pollId = payload.properties.path.split('/').at(-1)
      try {
        await addNewViewService(pollId, visitId)
      } catch (error) {
        console.log(error)
      }
    }
  }]
})

ReactDOM.render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <Router>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </Router>
    </AnalyticsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()