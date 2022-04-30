// Reference: Taken Directly from Project Instructions
/**

* @jest-environment jsdom

*/
import { checkForName } from '../src/client/js/nameChecker';

// The describe() function takes two arguments - a string description, and a test suite as a callback function.     
describe("Testing the Regex Url-Checking functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForName() function", async () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           expect(checkForName).toBeDefined();
})});