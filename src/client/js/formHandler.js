function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    // Function to POST data 
    // Reference from Weather Journal Project in Previous Course: 
    // Lesson 4-11: https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/9e29ea8c-f587-4e11-9c4a-e2671c23e4e8
    // Weather Journal App Rubric, 'Dynamically Update UI': https://review.udacity.com/#!/rubrics/4671/view
    // Response Section from MeaningCloud: https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)){
        console.log("::: Form Submitted :::");
        fetch('http://localhost:8712/apiData', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify({url: formText}), // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(function(res) {
        updateUI(res)
    });
    } else {
        alert('Submission Failed')
    };
};

// Event Listener to start handleSubmit on Click
// If statement added to pass Jest
// Reference: https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
let submit = document.getElementById("submit");
if(submit){
    submit.addEventListener("click", handleSubmit);
};
// updateUI: async --> void
// Function to update UI with NLP results
// Reference: 
// Weather Journal App Rubric, 'Dynamically Update UI': https://review.udacity.com/#!/rubrics/4671/view
const updateUI = async () => {
    const request = await fetch('http://localhost:8712/apiData');
    try {
        // Transform into JSON
        const allData = await request.json();
        console.log(allData);
        // Write updated data to DOM elements
        document.getElementById('model').innerHTML = `Model: ${allData.model}`;
        document.getElementById('score_tag').innerHTML = `Score Tag: ${allData.score_tag}`;
        document.getElementById('agreement').innerHTML = `Agreement: ${allData.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${allData.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${allData.irony}`;
    }
    catch(error) {
        console.log('error', error);
        // Appropriately handle errors
    };
};

export { handleSubmit, updateUI };
