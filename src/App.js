import { Route, Routes } from 'react-router-dom'
import AppContainer from './components/containers/AppC'
import MainContainer from './components/containers/MainC'
import PageContainer from './components/containers/PageC'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Signup from './components/authforms/Signup'
import Login from './components/authforms/Login'
import NewPoll from './pages/NewPoll'
import Dashboard from './pages/Dashboard'
import Vote from './pages/Vote'
import Results from './pages/Results'
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'
import Dnd from './pages/dnd'

function App() {
	return (
		<AppContainer>
			<Navbar />
			<MainContainer>
				<Routes>
					<Route path="/" element={<Main />} />

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

					<Route exact path="/dnd" element={
						<Dnd />
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

					<Route exact path="/poll/:id" element={
						<PageContainer>
							<Vote />
						</PageContainer>
					} />

					<Route exact path="/results/:pollId" element={
						<PrivateRoute>
							<PageContainer>
								<Results />
							</PageContainer>
						</PrivateRoute>
					} />
					
				</Routes>
			</MainContainer>
			<Footer />
		</AppContainer>
	)
}

export default App
