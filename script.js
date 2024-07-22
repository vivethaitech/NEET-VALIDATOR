const button=document.getElementById('btn')

button.addEventListener('submit',(e)=>{
    calculateMarks();
    validateInputs();
})

function calculateMarks() {
    const correctAnswers = parseInt(document.getElementById('correct').value);
    const wrongAnswers = parseInt(document.getElementById('wrong').value);
    const noAnswers = parseInt(document.getElementById('no').value);
    const totalQuestions = parseInt(document.getElementById('total').value);

    const totalMarks = (correctAnswers * 4) - (wrongAnswers * 1);

    document.getElementById('result').innerText = `Total NEET marks: ${totalMarks}`;
}

function validateInputs(){
   var name = document.getElementById('name');
   if(name===''){
    success=false;
    setError(name,"username is required")
}
else{
setSuccess(name)
}
}