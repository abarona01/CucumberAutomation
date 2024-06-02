Feature: Test Login Functionality

  Scenario: check login with valid credentials
    Given user is on login page
    When user enters <account>,<username> and <password>
    And clicks on login button
    Then user should see a flash message saying <message>

Examples:
      | account    | username                   | password     | message                                                                               |
      | INSUSSB072 | ailene.barona@delinian.com | AileneTest02 | This is a Sandbox Account intended solely for testing and training on Cvent products. |














# Feature: The Internet Guinea Pig Website

#   Scenario Outline: As a user, I can log into the secure area

#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |
