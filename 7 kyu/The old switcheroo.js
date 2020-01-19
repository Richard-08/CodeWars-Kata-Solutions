/* Write a function

vowel2index(str)```
```coffeescript
vowel2index(str)```
```python
vowel_2_index```
```ruby
vowel_2_index```
```csharp
Vowel2Index(string s)```
```java
vowel2Index(String s)```

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string. <br/>
E.g: <br/>

```javascript
vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

Your function should be case insensitive to the vowels. */

////////////////////////////Solution////////////////////////////

function vowel2index(str) {
    return str.replace(/[aeiou]/gi, (m, i) => i + 1);
  }

////////////////////////////Solution////////////////////////////

function vowel2index(str) {
    const vowels = ['a','e','i','o','u'];
    return str.split('').map((value, index) => vowels.includes(value.toLowerCase()) ? index + 1 : value).join('');
  }