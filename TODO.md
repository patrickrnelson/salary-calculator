## Salary Calculator TODO List

### Let's get started!

- [x] Source in and test HTML, CSS, JS, JQ files
- [x] Input form that collects the following (HTML)
  - employee first name
  - last name
  - ID number
  - job title
  - annual salary
- [x] 'Submit' button (HTML)
  - [x] Collect the form information (JQ)
  - [x] Store the information (JQ)
  - [x] Append information to the DOM (JQ)
  - [x] Clear the input fields (JQ)
- [ ] Create a delete button that removes an employee from the DOM

### Stretch Goals

- [ ] Don't push if any fields are left blank
- [ ] Add styling or extra functionality that fits with the theme of this assignment.
- [ ] Once the employee is deleted, update the total spend on salaries account for this employee's removal.
  - This will require that the logic knows which element was removed. You will need to use .text() as a getter or look into jQuery's .data() function. This is tricky!
