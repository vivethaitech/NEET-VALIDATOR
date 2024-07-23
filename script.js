const form = document.getElementById('neetForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateMarks();
});

function calculateMarks() {
    const name = document.getElementById('name').value.trim();
    const register = document.getElementById('regno').value.trim();
    const correctAnswers = parseInt(document.getElementById('correct').value);
    const wrongAnswers = parseInt(document.getElementById('wrong').value);
    const noAnswers = parseInt(document.getElementById('no').value);
    const totalQuestions = parseInt(document.getElementById('total').value);

    let errorMessage = '';

   
    if (!name) {
        errorMessage += 'Name is required.<br>';
    }
    if (!register) {
        errorMessage += 'Registration number is required.<br>';
    }
     
    if(totalQuestions!=180){
        errorMessage += 'Total question must be 180.<br><br>';
    }

    if (isNaN(correctAnswers) || isNaN(wrongAnswers) || isNaN(noAnswers)) {
        errorMessage += 'All answer fields are required and must be numbers.<br>';
    }
    
    const sumAnswers = correctAnswers + wrongAnswers + noAnswers;
    if (sumAnswers !== 180) {
        errorMessage += 'The sum of correct, wrong, and no answers must be 180 Currently, it is '+sumAnswers;
    }

    if (errorMessage) {
        document.getElementById('error').innerHTML = errorMessage;
        document.getElementById('result').innerText = '';
    } else {
        const totalMarks = (correctAnswers * 4) - (wrongAnswers * 1)-(noAnswers*0);
        document.getElementById('result').innerText = 'Total NEET marks: ' + totalMarks + ' marks';
        document.getElementById('error').innerText = '';
    }
}
