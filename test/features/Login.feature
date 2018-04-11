Feature: Login Account
  I want to test Login page

Scenario Outline: Verify validate all field is null/ Blank 
    Given I open website <website>
    When I input email <email>, password <password> 
    Then I click login button
    Then I verify message errorEmail <errorEmail>, errorPassword <errorPassword>
    Examples:
      | website               | email    | password |errorEmail|errorPassword|
      | http://localhost:3000|          |          | Required | Required |
  
Scenario Outline: Verify validate input email without input password
    Given I open website <website>
    When I input email <email>, password <password> 
    Then I click login button
    Then I verify message errorFormatEmail, errorPassword <errorPassword>
    Examples:
      | website               | email| password |errorPassword|
      | http://localhost:3000|  abc |          | Required |

Scenario Outline: Verify validate input password without input email
    Given I open website <website>
    When I input email <email>, password <password> 
    Then I click login button
    Then I verify message errorFormatEmail <errorFormatEmail>, errorPassword
    Examples:
      | website               |email| password |errorFormatEmail|
      | http://localhost:3000|     | abc      | Required |

Scenario Outline: Verify validate when inputing email is invalue(wrong format : X@mail.com)
    Given I open website <website>
    When I input email <email>, password <password> 
    Then I click login button
    Then I verify message errorFormatInvalid <errorFormatInvalid>
    Examples:
      | website               | email| password|errorFormatInvalid|
      | http://localhost:3000| abc  |  abc    |Invalid username or password.|      

Scenario Outline: Login with email and password is inactive
    Given I open website <website>
    When I input email <email>, password <password> 
    Then I click login button
    Then I verify message errorFormatInacitve <errorFormatInacitve>
    Examples:
      | website               | email                     | password   |errorFormatInacitve|
      | http://localhost:3000| hieutrandn9889+8@gmail.com| Abcd@1234  |User is inactive.| 

Scenario Outline: Check review password apply
    Given I open website <website>
    When I input email <email>, password <password> 
    Then I click review password button
    Then I verify password display
    Examples:
      | website                                     | email                   | password |
      | http://localhost:3000| hieutrandn9889@gmail.com| Abcd@1234|

Scenario Outline: Verify "Log In" button apply 
    Given I open website <website>
    Then I click login button at header
    Then I verify this page
    Examples:
      | website                                                 |
      | http://localhost:3000/registration|  

Scenario Outline: Verify "Logo" apply at registration page
    Given I open website <website>
    Then I click logo button at header
    Then The page re-fresh
    Examples:
      | website                                                 |
      | http://localhost:3000/registration|  

Scenario Outline: Verify "Logo" apply at login page
    Given I open website <website>
    Then I click logo button at header
    Then The page re-fresh
    Then I close browser
    Examples:
      | website                                          |
      | http://localhost:3000/login|