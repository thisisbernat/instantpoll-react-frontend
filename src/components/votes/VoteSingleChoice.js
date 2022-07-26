function VoteSingleChoice(props) {
    const { question, next } = props
    console.log(question.options)
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 grid-c-4-md">
            <h4 className="u-text-center">{question.title}</h4>
            <div className="text-lg u-center mb-1">
                <ul className="no-bullets">
                    {question.options.map((option, index) => {
                        return <li key={index}><label className="pointer"><input type="radio" name="house" /> {option}</label></li>
                    })}
                </ul>
            </div>
            <button onClick={next} className="bg-teal-600 text-white u-center">Submit</button>
        </div>
    )
}

export default VoteSingleChoice;