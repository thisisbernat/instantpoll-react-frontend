function VoteMultipleChoice(props) {
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 grid-c-4-md">
            <h4 className="u-text-center">What's your favourite language?</h4>
            <div className="text-lg u-center mb-1">
                <ul className="no-bullets">
                    <li><label className="pointer"><input type="checkbox" name="house" /> JavaScript</label></li>
                    <li><label className="pointer"><input type="checkbox" name="house" /> TypeScript</label></li>
                    <li><label className="pointer"><input type="checkbox" name="house" /> Both</label></li>
                </ul>
            </div>
            <button className="bg-green-600 text-white u-center">Submit</button>
        </div>
    )
}

export default VoteMultipleChoice;