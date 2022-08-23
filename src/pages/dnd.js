import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react"
const orderedElements = [
  { id: 0, name: 'tres'},
  { id: 1, name: 'sis'},
  { id: 2, name: 'quatre'},
  { id: 3, name: 'un'},
  { id: 4, name: 'cinc'},
  { id: 5, name: 'dos'}
]

export default function Dnd() {
  const [elements, setElements] = useState(orderedElements)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(elements)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setElements(items)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="elements">
        {(provided) => (
          <div className="bg-green-100 p-4 u-center u-flex-column u-gap-2 max-w-30p mb-3 u-round-sm" {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map(({id, name}, index) => {
              return (
                <Draggable key={`id-${index}`} draggableId={`id-${index}`} index={index}>
                  {(provided) => (
                    <div className="bg-green-500 text-gray-200 py-2 px-8 u-round-sm" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{name}</div>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}