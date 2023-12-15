import { Given } from '@cucumber/cucumber';
import CustomWorld from '../../../../src/util/custom-world';
import { User } from '../../../../src/types/user';
import {
  generateAge,
  generateDepartment,
  generateEmail,
  generateFirstName,
  generateLastName,
  generateSalary
} from '../../../../src/util/faker';

Given('A User To Add', function (this: CustomWorld) {
  const user: User = {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    age: generateAge(),
    salary: generateSalary(),
    department: generateDepartment()
  };
  this.user = user;
});
