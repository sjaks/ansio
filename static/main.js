var jobCount = 1;

function addExperience() {
    jobCount++;
    var container = document.getElementById("experience");

    // Outer card container
    var newCard = document.createElement("div");
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

    // Change element properties
    newCard.style.marginTop = 20;
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
    newBottomRow.appendChild(newBottomWideCol);

    newContainer.appendChild(newTopRow);
    newContainer.innerHTML += "<br>";
    newContainer.appendChild(newBottomRow);
    newFormGroup.appendChild(newContainer);
    newCardBody.appendChild(newFormGroup);
    newCard.appendChild(newCardBody);
    container.appendChild(newCard);
}