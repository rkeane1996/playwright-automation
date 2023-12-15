import { faker } from '@faker-js/faker';

export function generateFirstName() {
  return faker.person.firstName();
}

export function generateLastName() {
  return faker.person.lastName();
}

export function generateEmail() {
  return faker.internet.email();
}

export function generateDepartment() {
  return faker.commerce.department();
}

export function generateAge() {
  return faker.number.int({ min: 20, max: 50 });
}

export function generateSalary() {
  const salary = Number(faker.finance.amount({ min: 10_000, max: 100_000, dec: 0 }));
  return salary;
}
