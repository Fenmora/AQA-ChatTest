Feature: chat
  Scenario Outline: As a user, I can log into the chat with right credentials

    Given I am on the login page
    When  I am on the chat page with <username> and <password>
    Then  I do click to a chat
    Then  I should be able to selected a chat
    Then  I should be able to sent a email saying <message>
    Then  I last email should be showed in chat detail <message>
    Then I should logOut
    
    Examples:
      | username            | password             | message                        |
      | engineer@gmail.com  | 123456               | Welcome to the Team chat!      |


  Scenario Outline: As a user, I can log in and see my message received

    Given I am on the login page
    When  I am on the chat page with <username> and <password>
    Then  I do click to a chat
    Then  I should be able to selected a chat
    Then  I should be able to compare last message <message_received>
    Then  I should be able to sent a email saying <message>
    Then  I last email should be showed in chat detail <message>
    Then  I should logOut
    
    Examples:
      | username            | password             | message    | message_received           | sender   |
      | A1@gmail.com        | A12345               | Hi guys!   | Welcome to the Team chat!  | Engineer |