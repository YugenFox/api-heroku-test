const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const meleeSpacies = {
    'Fox': {
        'age': 30,
        'birthName': 'Fox McCloud',
        'birthLocation': 'Space'
    },
    'Falco':{
        'age': 20,
        'birthName': 'Falco Lombardi',
        'birthLocation': 'Space' 
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const spacieName = request.params.name.toLowerCase()

    if( meleeSpacies[spacieName] ){
        response.json(meleeSpacies[spacieName])
    }else{
        response.json(meleeSpacies['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})