Feature: Cvent Public Registration Form Validation

  Scenario Outline: As a user, I can submit a public registration in Cvent
    Given user is on the public registration form
    When user tries to proceed to the next page
    Then error message should be displayed that the field is required
    When user sets values for <Fname>,<Lname>,<emailad>,<mobile>,<title> and <org>
    When user selects the value for <Ctry> and <States>
    When user inputs the values for <AsstFirstName><AsstLastNAme><AsstPhone><AssstEmail>
    When user clears the values in the personal information
    When user set the values again for <Fname>,<Lname>,<emailad>,<mobile>,<title> and <org>
    When user selects the values again for <Ctry> and <States>
    # When user inputs the values again for <AsstFirstName><AsstLastNAme><AsstPhone><AssstEmail>
    When user proceeds to the sessions page
    When user selects multiple sessions
    When user deselect a session
    # When user proceeds to the Marketing page
    # When user proceeds to the Event Sponsor data use page
    # When user submits the Registration
    # Then user should see the registration confirmation message

Examples:
 | Fname      | Lname        | emailad                         | mobile          | title           | org         | Ctry          | States |
 | Ailene37   | Validation   | autotester1017@delinian.com     | +1897851248452  | Software Tester | Jaws        | United States |  AZ    |