export default function VoteOpenNumber(props) {
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 grid-c-4-md">
            <h4 className="u-text-center">What's your favourite language?</h4>
            <div className="text-lg u-text-center mx-auto u-flex u-flex-column max-w-90p u-gap-2 py-3">
                <input className="u-center" type="number" placeholder="0" style={{ maxWidth: "75px" }} />
            </div>
            <button className="bg-green-600 text-white u-center">Submit</button>
        </div>
    )
}