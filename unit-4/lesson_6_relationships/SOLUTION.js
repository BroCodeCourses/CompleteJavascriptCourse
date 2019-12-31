const Company = require('./classes/company').Company;
const Engineer = require('./classes/engineer').Engineer;
const Manager = require('./classes/manager').Manager;

/**
  * ACTIVITY: Instantiate a new Company.
*/

let company = new Company('Microsoft');


/**
  * ACTIVITY: Create 3 engineers and 1 manager with differing attributes, but all belonging to the above company. Assign all employees to your one manager.
*/

let managerStacie = new Manager('Stacie', 15, company);

let engineerJohn = new Engineer('John', 2, managerStacie, company);

let engineerKayla = new Engineer('Kayla', 3, managerStacie, company);

let engineerKyle = new Engineer('Kyle', 1, managerStacie, company);


/**
  * ACTIVITY: Add all of your engineers to your manager's list of subordinates. 
  * HINT: Use the manager class function addEmployeeToSubordinates(employee).
*/

managerStacie.addEmployeeToSubordinates(engineerJohn);
managerStacie.addEmployeeToSubordinates(engineerKayla);
managerStacie.addEmployeeToSubordinates(engineerKyle);


/**
  * ACTIVITY: Add all of your employees  to your company's list of employees. 
  * HINT: Use the company class function addEmployee(employee).
*/

company.addEmployee(managerStacie);
company.addEmployee(engineerJohn);
company.addEmployee(engineerKayla);
company.addEmployee(engineerKyle);