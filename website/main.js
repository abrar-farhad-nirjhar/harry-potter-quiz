const call = new API()
const ui = new UI()



call.getQuestion().then((data)=>{
    

    random_question = Math.floor(Math.random()*data.data.length)

    

    question_id = data.data[random_question].id
    question_text = data.data[random_question].question

   

    document.getElementById('question').innerHTML = question_text

    call.getOptions(question_id).then(data=>{
        

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
                        document.getElementById(element.id).style.backgroundColor="#32CD32"
                    }
                    else{
                        console.log(false)
                        document.getElementById(element.id).style.backgroundColor = "#B22222"
                        document.getElementById(correct_id).style.backgroundColor= "#32CD32"
                    }
                })

            })
        });
    })

    
    

    
});

