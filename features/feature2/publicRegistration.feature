Feature: Cvent Public Registration

  Scenario Outline: As a user, I can submit a public registration in Cvent
    Given user is on the Cvent public registration form
    When user inputs the <firstName>,<lastName>,<emailaddress>,<phone>,<jobtitle> and <organization>
    When user sets the value for <country> and <states>
    When user inputs the values for the assistant <FN><LN><AsstPhone><AsstEmail>
    When user clicks the next button
    When user selects sessions
    When user clicks the next button in the Session page
    When user clicks the next button in the Marketing Preferences
    When user clicks the next button in the Event Sponsor data use
    When user clicks the submit button in the Registration Summary
    Then user should see the processed message to confirm the registration

    Examples:
      | firstName | lastName | emailaddress                    | phone          | jobtitle        | organization | country        | states |
      | Ailene34  | Lizardoo | autotester1014@delinian.com     | +1897851248451 | Software Tester | KTG          | United States  | AZ     |


