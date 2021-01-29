$(document).ready(onReady);

let allEmployees = [];

function onReady() {
  // listen for a click on the submit button
  $(document).on('click', '#submitBtn', onClick);
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

  console.log(allEmployees);
}
