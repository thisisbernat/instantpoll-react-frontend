import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react"
import Swal from "sweetalert2"
import VoteForm from "../containers/VoteForm"

export default function VoteRanking(props) {
    const { question, nextStep, saveAnswer } = props
    const [answer, setAnswer] = useState(question.options)

    const handleOnDragEnd = (result) => {
        if (!result.destination) return
        const items = Array.from(answer)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setAnswer(items)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (question.isCompulsory && !answer) {
            Swal.fire('Answering to this question is compulsory')
            return
        }
        if (answer) {
            saveAnswer({ 'ranking': answer })
            setAnswer(null)
        } else if (!answer) {
            nextStep()
        }
    }

    return (
        <VoteForm onSubmit={handleSubmit}>
            <h4 className="u-text-center">{question.title}</h4>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="options">
                    {(provided) => (
                        <div className="text-lg u-text-center mx-auto u-flex u-flex-column max-w-50p u-gap-2 py-3" {...provided.droppableProps} ref={provided.innerRef}>
                            {answer.map((option, index) => {
                                return (
                                    <Draggable key={`option-${index}`} draggableId={`option-${index}`} index={index}>
                                        {(provided) => (
                                            <div className="bg-green-300 u-round-xs u-shadow-sm py-1 px-2" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>{option}</div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button type="submit" className="bg-teal-600 text-white u-center">Submit answer</button>
        </VoteForm>
    )
}