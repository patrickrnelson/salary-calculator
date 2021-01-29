console.log('JS JS JS');

$(document).ready(onReady);

function onReady() {
  console.log('JQ JQ JQ');

  // listen for a click on the submit button
  $(document).on('click', '#submitBtn', onClick);
}

function onClick() {
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let id = $('#idNumberInput').val();
  let jobTitle = $('#jobTitleInput').val();
  let salary = $('#annualSalaryInput').val();

  console.log(lastName);
}
