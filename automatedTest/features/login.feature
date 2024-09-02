Feature: Login

  Scenario Outline: As a user, I can't log into the chat with wrong credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username            | password             | message                        |
      | foobar              | barfoo               | Your credentials are invalid!  |

  Scenario Outline: As a user, I can log into the chat with right credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    Then I should logOut

    Examples:
      | username            | password             | message                        |
      | engineer@gmail.com  | 123456               | Welcome to the Fender chat!    |


  Scenario Outline: As a user, I should see the register form

    Given I am on the login page
    When  I click into Register button
    Then  I should see the register form

  Scenario Outline: As a user, I can register into the chat platform

    Given I am on the login page
    When  I click into Register button
    Then  I should see the register form
    Then  I write user information <username> and <email> and  <password>

    Examples:
      | username                       | email                   | password           |
      | Salesforce_Developer2          | salesforce2.gmail.com   | sales123456        |


 