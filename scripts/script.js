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
  $(document).on('click', '#submitBtn', onClick);
  appendToDom(allEmployees);
}

function onClick() {
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let id = $('#idNumberInput').val();
  let jobTitle = $('#jobTitleInput').val();
  let salary = $('#annualSalaryInput').val();

  let newEntry = {
    firstName: firstName,
    lastName: lastName,
    employeeID: id,
    jobTitle: jobTitle,
    annualSalary: salary,
  };

  allEmployees.push(newEntry);

  // will loop through the allEmployees array
  // and push each entry to the DOM
  appendToDom(allEmployees);

  // clears input after submit btn click
  // will probably need to move to the appendToDom f so we can check if inputs are filled
  clearInputs();
}

// loop through an array
// push each entry to the DOM
function appendToDom(array) {
  $('#employeeTable').empty();
  for (item of array) {
    $('#employeeTable').append(
      `<tr>
      <td>${item.firstName}</td>
      <td>${item.lastName}</td>
      <td>${item.employeeID}</td>
      <td>${item.jobTitle}</td>
      <td>$${item.annualSalary}</td>
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
