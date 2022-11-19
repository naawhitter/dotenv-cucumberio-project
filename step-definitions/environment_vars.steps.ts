import { Given, Then, World } from "@cucumber/cucumber";
import { expect } from 'chai';


Given('I have environment variable {string}', function (this: World, envVariableName: string) {
    expect(this.parameters.testUrl).exist;
});

Then('I should see the environment variable equals {string}', function (this: World, expectedVariableValue: string) {
    expect(this.parameters.testUrl).to.equal(expectedVariableValue);
});
