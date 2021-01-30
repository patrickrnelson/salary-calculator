$(document).ready(onReady);

let allEmployees = [
  {
    firstName: 'Ashley',
    lastName: 'Aune',
    employeeID: 1357,
    jobTitle: 'CX Designer',
    annualSalary: 150000,
  },
  {
    firstName: 'Patrick',
    lastName: 'Nelson',
    employeeID: 2468,
    jobTitle: 'Front-end Developer',
    annualSalary: 120000,
  },
];

function onReady() {
  // listen for a click on the submit button
  $(document).on('click', '#submitBtn', submitClick);

  // listen for a click on the delete button
  $(document).on('click', '.delete-button', deleteEntry);

  // appends the list of allEmployees right away
  // in case there are any entries pre-loaded
  appendToDom(allEmployees);

  // show the total expenses on load
  totalExpenses();
}

// when submit is clicked, take all of the input vals
// and store them in an object (newEntry).
// that object gets pushed to the allEmployees array
function submitClick() {
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let id = $('#idNumberInput').val();
  let jobTitle = $('#jobTitleInput').val();
  let salary = $('#annualSalaryInput').val();

  let newEntry = {
    firstName: firstName,
    lastName: lastName,
    employeeID: Number(id),
    jobTitle: jobTitle,
    annualSalary: Number(salary),
  };

  allEmployees.push(newEntry);

  // this will loop through the allEmployees array
  // and push each entry to the DOM
  appendToDom(allEmployees);

  // this clears inputs after submit btn click
  // will probably need to move to the appendToDom so we can check if inputs are filled
  clearInputs();

  // This calculates total expenses
  // and is responsible for appending to DOM
  totalExpenses();
}

// loop through an array
// push each entry to the DOM
function appendToDom(array) {
  $('#employeeTable').empty();
  let deleteBtn = `<button>delete</button>`;
  for (item of array) {
    $('#employeeTable').append(
      `<tr>
      <td>${item.firstName}</td>
      <td>${item.lastName}</td>
      <td class='rowID'>${item.employeeID}</td>
      <td>${item.jobTitle}</td>
      <td>$${item.annualSalary}</td>
      <td class="delete-button">${deleteBtn}</td>
    </tr>`
    );
  }
}

// on a submit button click, clear the inputs
function clearInputs() {
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumberInput').val('');
  $('#jobTitleInput').val('');
  $('#annualSalaryInput').val('');
}

//
function deleteEntry() {
  // this gets the ID number of the deleted employee
  let $thisID = $(this).siblings('.rowID').text();
  console.log(Number($thisID));
  // if $thisID matches someone in the array, set their salary to 0
  for (item of allEmployees) {
    if (item.employeeID === Number($thisID)) {
      item.annualSalary = 0;
    }
  }
  // this will remove the whole row
  $(this).parent().remove();
  // update total expenses to reflect the deleted salary
  totalExpenses();
}

function totalExpenses() {
  // Calculate the total of all salaries
  let allSalaries = 0;
  for (item of allEmployees) {
    allSalaries += item.annualSalary;
  }
  // calculate monthly expense of all of the salaries
  let monthlySalaries = allSalaries / 12;
  // append monthly expense to DOM
  $('#expenses').empty();
  $('#expenses').append(`<h4>Total Monthly Expense: $${monthlySalaries}</h4>`);
}
