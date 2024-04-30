import React, { useEffect, useState } from "react";
import ListColumns from "./ListColumns/ListColumns";
import Column from "./ListColumns/Column/Column";
import TrelloCard from "./ListColumns/Column/ListCards/Card/TrelloCard";
import { Box, Card } from "@mui/material";
import { DndContext, MouseSensor,useSensors,useSensor,DragOverlay, defaultDropAnimationSideEffects,closestCorners } from "@dnd-kit/core";
import {cloneDeep} from 'lodash'
import { mapOrder } from "../../../../utils/sort";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentBoardData,
  updateCurrentColumnsOrder,
} from "../../../../Redux/Slices/boardSlice";
import { arrayMove, defaultAnimateLayoutChanges } from "@dnd-kit/sortable";

const ACTIVE_DRAG_ITEM_TYPE ={
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD',
}
function BoardContent() {
  const dispatch = useDispatch();
  const currentBoardData = useSelector((s) => s.board.currentBoardData);
  const [orderedColumns, setOrderedColumns] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

  
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: { distance: 10} } )
    const sensors = useSensors(mouseSensor)
  useEffect(() => {
    setOrderedColumns(
      mapOrder(currentBoardData.columns, currentBoardData.columnOrderIds, "_id")
    );
  }, [currentBoardData]);
  const findColumnByCardId = (cardId) =>{
    return orderedColumns.find(column => column.cards.map(card => card._id)?.includes(cardId))
  }
  const handleDragStart =(event) =>{
    console.log('handleDragStart', event);
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN);
    setActiveDragItemData(event?.active?.data?.current)
  }
  const handleDragOver = (event) => {
    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN){
        return
    }

    const {active,over} = event

    if(!active || !over) return

    const {id: activeDraggingCardId, data: { current: activeDraggingCardData }} = active
    const {id: overCardId} = over

    const activeColumn =  findColumnByCardId(activeDragItemId)
    const overColumn =  findColumnByCardId(overCardId)

    if(!activeColumn || !overColumn) return

    if(activeColumn._id !== overColumn._id){
        setOrderedColumns(prevColumns=>{
            const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

            let newCardIndex
            const isBelowOverItem =
                active.rect.current.translate &&
                active.rect.current.translate.top >
                    over.rect.top + over.rect.heght
            const modifier = isBelowOverItem ? 1 : 0
            newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1
            const nextColumns = cloneDeep(prevColumns)
            const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
            const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

            if(nextActiveColumn){
                nextActiveColumn.cards = nextActiveColumn.cards.filter( card => card._id !== activeDraggingCardId)

                nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id) 
            }
            if(nextOverColumn){
                nextOverColumn.cards = nextOverColumn.cards.filter( card => card._id !== activeDraggingCardId)
                nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
                nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id) 
            }
            return nextColumns
        })
    }
  }
  const handleDragEnd = (event) => {
    console.log("handleDragEnd", event);
    const { active, over } = event;

    if(!active || !over) return

    if (active.id !== over.id) {
        const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
        const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);

      const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
      console.log("dndOrderedColumns: ", dndOrderedColumns);

      setOrderedColumns(dndOrderedColumns);
      dispatch(updateCurrentColumnsOrder(dndOrderedColumnsIds));
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: {opacity: '0.5' }}})
  }
  return (
    <DndContext 
    onDragStart={handleDragStart}
    onDragOver={handleDragOver}
    onDragEnd={handleDragEnd}
    collisionDetection={closestCorners}
    sensors={sensors}
    >
      <Box
        sx={{
          marginTop: "48px",
          width: "100%",
          p: 1,
        }}
      >
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
            {(!activeDragItemId || !activeDragItemType) && null}
            {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData}/>}
            {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <TrelloCard card={activeDragItemData}/>}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
