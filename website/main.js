const call = new API()
const ui = new UI()
const store = new Storage()



// sessionStorage.turn = 1
// sessionStorage.score = 0
// alert(sessionStorage.turn)

console.log(sessionStorage)

call.getQuestion().then((data)=>{
    

    random_question = Math.floor(Math.random()*data.data.length)

    

    question_id = data.data[random_question].id
    question_text = data.data[random_question].question

   

    document.getElementById('question').innerHTML = question_text

    call.getOptions(question_id).then(data=>{
        
        // if(sessionStorage.turn==5){
        //     sessionStorage
        // }

        store.addTurn()
        console.log("This is the turn")
        console.log(store.getTurn())

        ui.CreateOptions(data)
        console.log(data)

        data.forEach(element => {
            document.getElementById(element.id).addEventListener('click', (event)=>{

                event.preventDefault()
                console.log(question_id)
                call.getCorrect(question_id).then(data_two=>{
                    selected = element.option
                    
                    correct_answer = data_two[0].correct.option 
                    correct_id = data_two[0].correct.id
                    if(selected==correct_answer){
                        console.log(true)
                        document.getElementById(element.id).style.backgroundColor="#00ff00"

                        for(let i=0; i<data.length; i++){
                            if(data[i].id!=correct_id){
                                document.getElementById(data[i].id).hidden=true
                            }
                        }

                        sessionStorage.score+=1

                        alert('score '+sessionStorage.score)

                        alert("Correct!!")

                        
                    }
                    else{
                        console.log(false)
                        document.getElementById(element.id).style.backgroundColor = "#ff0000"
                        document.getElementById(correct_id).style.backgroundColor= "#00ff00"

                        for(let i=0; i<data.length; i++){
                            if(data[i].id!=correct_id && data[i].id !=element.id){
                                document.getElementById(data[i].id).hidden = true
                            }
                        }
                        alert("Incorrect!!")
                    }

                    
                })

            })
        });
    })

    
    

    
});


document.getElementById('next').addEventListener('click', (event)=>{
    location.reload()
})

