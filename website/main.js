const call = new API()
const ui = new UI()



call.getQuestion().then((data)=>{
    

    random_question = Math.floor(Math.random()*data.data.length)

    

    question_id = data.data[random_question].id
    question_text = data.data[random_question].question

   

    document.getElementById('question').innerHTML = question_text

    call.getOptions(question_id).then(data=>{
        console.log(data)

        console.log(data[0].option)

        ui.CreateOptions(data)
    })
});

