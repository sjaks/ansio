var jobCount = 0;


// Delete the desired job experience card
function delExperience(id) {
    console.log("Removing " + id);
    document.getElementById("job" + id + "Card").remove();
}


// Create a new job experience card
function addExperience() {
    jobCount++;
    var container = document.getElementById("experience");

    // Outer card container
    var newCard = document.createElement("div");
    newCard.id = "job" + jobCount + "Card";
    newCard.className = "card";
    var newCardBody = document.createElement("div");
    newCardBody.className = "card-body";
    var newFormGroup= document.createElement("div");
    newFormGroup.className = "form-group";
    var newContainer = document.createElement("div");
    newContainer.className = "container";

    // Card top part container
    var newTopRow = document.createElement("div");
    newTopRow.className = "row";
    var newTopColLeft = document.createElement("div");
    newTopColLeft.className = "col-6";
    var newTopColRight = document.createElement("div");
    newTopColRight.className = "col-6"; 

    // Top part inputs
    var newTopInput1 = document.createElement("input");
    newTopInput1.className = "form-control";
    var newTopInput2 = document.createElement("input");
    newTopInput2.className = "form-control";

    // Card bottom part container
    var newBottomRow = document.createElement("div");
    newBottomRow.className = "row";
    var newBottomWideCol = document.createElement("div");
    newBottomWideCol.className = "col-12";
    var newBottomInnerRow = document.createElement("div");
    newBottomInnerRow.className = "row";
    var newBottomLeftCol = document.createElement("div");
    newBottomLeftCol.className = "col-6";
    var newBottomRightCol = document.createElement("div");
    newBottomRightCol.className = "col-6";

    // Bottom part inputs
    var newBottomInputWide = document.createElement("textarea");
    newBottomInputWide.className = "form-control";
    var newBottomInput1 = document.createElement("input");
    newBottomInput1.className = "form-control";
    var newBottomInput2 = document.createElement("input");
    newBottomInput2.className = "form-control";

    // Bottom part labels
    var newBottomLabel1 = document.createElement("small");
    newBottomLabel1.className = "form-text text-muted";
    newBottomLabel1.innerHTML = "Start date";
    var newBottomLabel2 = document.createElement("small");
    newBottomLabel2.className = "form-text text-muted";
    newBottomLabel2.innerHTML = "End date";

    // Delete button
    var deleteButton = document.createElement("a");
    //deleteButton.href = "";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.style.color = "#ffffff";
    deleteButton.innerHTML = "Remove";
    deleteButton.setAttribute("onclick", "delExperience(" + jobCount + ")");

    // Change element properties
    newCard.style.marginTop = 20;
    newCard.style.paddingTop = 15;
    newTopInput1.id = "job" + jobCount + "Employer";
    newTopInput1.placeholder = "Employer";
    newTopInput2.id = "job" + jobCount + "Title";
    newTopInput2.placeholder = "Job title";
    newBottomInputWide.id = "job" + jobCount + "Description";
    newBottomInputWide.placeholder = "Description about the job";
    newBottomInput1.type = "date";
    newBottomInput1.id = "job" + jobCount + "Start";
    newBottomInput2.type = "date";
    newBottomInput2.id = "job" + jobCount + "End";

    // Then put elements into each other and to DOM
    newTopColLeft.append(newTopInput1);
    newTopColRight.appendChild(newTopInput2);
    newTopRow.appendChild(newTopColRight);
    newTopRow.appendChild(newTopColLeft);

    newBottomWideCol.appendChild(newBottomInputWide);
    newBottomWideCol.innerHTML += "<br>";
    newBottomLeftCol.appendChild(newBottomInput1);
    newBottomRightCol.appendChild(newBottomInput2);
    newBottomLeftCol.appendChild(newBottomLabel1);
    newBottomRightCol.appendChild(newBottomLabel2);
    newBottomInnerRow.appendChild(newBottomLeftCol);
    newBottomInnerRow.appendChild(newBottomRightCol);
    newBottomWideCol.appendChild(newBottomInnerRow);
    newBottomWideCol.innerHTML += "<br>";
    newBottomWideCol.appendChild(deleteButton);
    newBottomRow.appendChild(newBottomWideCol);

    newContainer.appendChild(newTopRow);
    newContainer.innerHTML += "<br>";
    newContainer.appendChild(newBottomRow);
    newFormGroup.appendChild(newContainer);
    newCardBody.appendChild(newFormGroup);
    newCard.appendChild(newCardBody);
    container.appendChild(newCard);
}


// Enable or disable the bio text field according to user input
function updateBioStatus() {
    var checkbox = document.getElementById("showBio");
    var textbox = document.getElementById("bioText");    

    if (checkbox.checked) {
        textbox.disabled = false;
    } else {
        textbox.disabled = true;
    }
}

addExperience();