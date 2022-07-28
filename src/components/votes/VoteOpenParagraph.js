function VoteOpenParagraph(props) {
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 grid-c-4-md">
            <h4 className="u-text-center">What's your favourite language?</h4>
            <div className="text-lg u-text-center mx-auto u-flex u-flex-column max-w-50p u-gap-2 py-3">
                <textarea placeholder="What do you think?"></textarea>
            </div>
            <button className="bg-green-600 text-white u-center">Submit</button>
        </div>
    )
}

export default VoteOpenParagraph