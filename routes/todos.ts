import { Router } from "express";
import { todo } from "node:test";

import { Todo } from "../models/todo"

let todos:Todo[]=[]
const router=Router()
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})
router.post('/todo',(req,res)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text

    }
    todos.push(newTodo)
    res.status(200).json({message:'done'})

})

router.put('/edit', (req, res, next) => {
    const { id, text } = req.body;
    console.log(id)
    const todoIndex = todos.findIndex((element) => {
        return element.id == id;
    })

    console.log(todoIndex)

    if (todoIndex!=-1) {
        todos.splice(todoIndex, 1, req.body)
        res.status(200).json({ success: true, message: 'item eidted successfully' })
    }

    else {
        res.status(404).json({ success: false, message: 'item not found' })
    }


})
router.delete('/todo/:todoId',(req,res,next)=>{
    todos=todos.filter(todoItem=>todoItem.id !==req.params.todoId)
    res.status(200).json({message:'Deleted todo',todos:todos})
})
export default router