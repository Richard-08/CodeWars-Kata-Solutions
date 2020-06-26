/* Description:

Complete the solution so that the function will break up camel casing, using a space between words.
Example

solution("camelCasing")  ==  "camel Casing" */

function solution(string) {
    const reg = /[A-Z]+/g;
    return string.replace(reg, (value) => ` ${value}`);
}

console.log(solution('camelCasing'));


// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
