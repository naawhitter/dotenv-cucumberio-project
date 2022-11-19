Feature: Dotenv 

    Scenario: Environment variable is set from .dotenv
        Given I have environment variable "TEST_URL" 
        Then I should see the environment variable equals "https://www.demoblaze.com/"