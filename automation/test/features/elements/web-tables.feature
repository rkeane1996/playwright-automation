@WebTableTests
Feature: Add/Edit/Delete information in a web table

  Background: 
    Given A User To Add
    When User is added to Web Table

  @AddUser @Smoke
  Scenario: Add User To Web Table
    Then User Is Displayed In Web Table

  @EditUser
  Scenario: Edit User In Web Table
    When User Email Is Edited
    Then User "email" Is Updated

  @DeleteUser
  Scenario: Delete User in Web Table
    When User Is Deleted
    Then User Has Been Deleted Sucessfully