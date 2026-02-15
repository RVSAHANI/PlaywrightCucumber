Feature: Login functionality

  Scenario: Valid login
    Given user is on login page
    When user enters valid credentials username and password and clicks on login button    
    Then user should see home page
    And user should see logout link

  Scenario: Invalid login
    Given user is on login page
    When user enters invalid username and password and clicks on login button    
    Then user should see login page
    And user should see error message


    Scenario: Invalid login 2
    Given user is on login page
    When user enters invalid username and password and clicks on login button    
    Then user should see login page
    And user should see error message  
