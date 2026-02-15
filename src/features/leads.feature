Feature: Leads functionality

@test
Scenario: Create a new lead with valid credentials
 Given user is on login page
 When user enters valid credentials username and password and clicks on login button
 When user enters click on new lead link
 And fill the mandatory fields and click on save button
 Then lead should be created successfully

  