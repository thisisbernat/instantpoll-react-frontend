function AppContainer(props) {
	return (
		<div className="App bg-gray-000 h-screen u-flex u-flex-column">
			{props.children}
		</div>
	)
}

export default AppContainer