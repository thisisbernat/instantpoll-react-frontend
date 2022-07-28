import { Route, Routes } from 'react-router-dom'
import AppContainer from './components/containers/AppC'
import MainContainer from './components/containers/MainC'
import PageContainer from './components/containers/PageC'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Signup from './components/authforms/Signup'
import Login from './components/authforms/Login'
import NewPoll from './pages/NewPoll'
import Dashboard from './pages/Dashboard'
import Vote from './pages/Vote'
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'

function App() {
	return (
		<AppContainer>
			<Navbar />
			<MainContainer>
				<Routes>
					<Route path="/" element={<Hero />} />

					<Route exact path="/signup" element={
						<AnonRoute>
							<Signup />
						</AnonRoute>
					} />

					<Route exact path="/login" element={
						<AnonRoute>
							<Login />
						</AnonRoute>
					} />

					<Route exact path="/new" element={
						<PrivateRoute>
							<PageContainer>
								<NewPoll />
							</PageContainer>
						</PrivateRoute>
					} />

					<Route exact path="/dashboard" element={
						<PrivateRoute>
							<PageContainer>
								<Dashboard />
							</PageContainer>
						</PrivateRoute>
					} />

					{/* <Route exact path="/profile" element={
						<AnonRoute>
							<Hero />
						</AnonRoute>
					} /> */}

					<Route exact path="/poll/:id" element={
						<PageContainer>
							<Vote />
						</PageContainer>
						
					} />
				</Routes>
			</MainContainer>
			<Footer />
		</AppContainer>
	)
}

export default App
