Feature: Forgot password Account
  I want to test Forgot password page

Scenario Outline: Check "Forgot password" button apply
    Given I open website <website>
    Then I click Forgot password button
    Then I verify pop-up 
    Then I input email invalid <email>
    Then I click next button
    Then I verify message forgot password page errorFormatEmail <errorFormatEmail> 
    Then I close browser
    
   Examples:
      | website|email|errorFormatEmail|
      | http://localhost:3000| abc |Invalid email address|

