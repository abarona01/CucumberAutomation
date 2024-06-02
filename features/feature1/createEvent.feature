Feature: Test Login Functionality

  Scenario: check login with valid credentials
    Given user is on login page
    When user enters <account>,<username> and <password>
    And clicks on login button
    Then user should see a flash message saying <message>
    When user clicks the create button
    When user selects the use template option
    When user selects the template
    When user rename the event title
    When user selects the In Person event format
    When user clicks the create event button
    Then user should be redirected to the Events list

    Examples:
      | account    | username                   | password     | message                                                                               |
      | INSUSSB072 | ailene.barona@delinian.com | AileneTest02 | This is a Sandbox Account intended solely for testing and training on Cvent products. |
