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

    **************Headers************

    Request headers===>

    header             |     UseCase                                            |   example
                       |                                                        |
    Host               |   Target Host                                          |   host:www.1.cdn.example.com
    Origin             |   Origin Host                                          |   host:www.example.com
    Referer            |   Indicate the previous web page making this request   |   https://example.com/pervious-page
    User-agent         |   Identify the client                                  |   user agent string : OS,Browser
    Accept             |   Response content type                                |   application/json
    Accept-language    |   Preferred Respose content language                   |   en-US,en:q=0.9
    Accept-encoding    |   Encoding algorithm                                   |   gzip, deflate, br
    connection-headers |   keep connection open                                 |   keep-alive
    Authorization      |   send credentials                                     |   Authorization; Bearer
    Cookies            |   previous server token can be resend                  |   key = value
    if-modified-since  |   
    cache-control      |   
    
    Response Header==>

    Header             |     UseCase                                            |   example
                       |                                                        |
    Date               | when the response was generated                        |  Thu, 30 Nov 2026 03:36:04 GMT
    Server             | Provides server info                                   |  server Apache/2.4.41 (unix) 
    Content-type       | Type of response content                               |  text/html application/json
    Content-length     | Original Body response length                          |  256
    Set-cookie         | Informs about cookie need to store for future response |  Set-cookie: user_id:33
    Content-encoding   | Response content encoding                              |  br
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
        