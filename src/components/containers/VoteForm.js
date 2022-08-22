export default function VoteForm(props) {
	return (
		<form onSubmit={props.onSubmit} className="bg-white u-round-sm u-shadow-lg px-2 py-3 grid-c-4-md u-flex u-flex-column u-justify-center">
			{props.children}
		</form>
	)
}