/*
REST ==> Representational State Transfer 

 Benifits of REST
   => Ease of use
   => Stateless (server doesn't maintain any data of previous request)
   => Scalability
   => Flexibility with data
   => Uniform Interface
   => Caching
   => Separations of concern
   => Interoperability (language agnostic)
   => East of Testing
   => Security


   CRUD => Create = > POST
           Read   => GET
           Update => PUT/PATCH
           Delete => DELETE


           
*/

import express from 'express';
import bodyParser from "bodyParser"

const app = express ();

app.use(bodyParser.json());

app.all('/',(req,res)=>{
    res.send(`I am up !`);
})

const todos = [{
    id:1,
    title:'Task1',
    completed:true
},{
    id:2,
    title:'Task2',
    completed:true
}]


//READ

app.get('/todos',(req,res)=>{
    res.json(todos);
})

//CREATE

app.post('/todods',(req,res)=>{
    const newToDo = req.body;
    todos.push();
    res.json({
        message:"New Todo added"
    })
})

// Update

app.put('/todods/:id',(req,res)=>{
    const newToDoData = req.body;
    const todoParamid= (req.params.id);
    const todoIndex = todos.findIndex(td => td.id === todoParamid);
    if(todoIndex !== -1){
        todos[todoIndex] = {
            id: todoParamid,
            ...newToDoData
        }
    }
    res.json({
        message:"Todo updated succesfully"
    })
})

// Delete
app.delete('/todods/:id',(req,res)=>{
    const todoParamid= (req.params.id);
    const todoIndex = todos.findIndex(td => td.id === todoParamid);
    if(todoIndex !== -1){
        todos.splice(todoIndex,1)
    }
    res.json({
        message:"Todo deleted succesfully"
    })
})

const PORT = 5111;

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
    
})
        