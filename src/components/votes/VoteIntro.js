function VoteIntro(props) {
  const { question, nextStep } = props
  return (
    <div className="bg-white u-round-sm u-shadow-lg px-2 py-5-md py-3 grid-c-4-md">
      <div className="u-flex u-flex-column u-items-center u-justify-space-between h-100p">
        <h4>{question.title}</h4>
        <p>{question.message}</p>
        <button onClick={nextStep} className="bg-teal-600 text-white">{question.buttonText}</button>
      </div>
    </div>
  )
}

export default VoteIntro;