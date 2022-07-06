describe("isVowel",function(){
    it(`is 'a' vowel `,function(){
        assert.equal(isVowel('a'),true)
    })
    it(`is '' vowel `,function(){
        assert.equal(isVowel(''),false)
    })
    it(`is ' ' vowel `,function(){
        assert.equal(isVowel(' '),false)
    })
});

describe("repeatVowels",function(){
    it("repeat 'a' 2 times ",function(){
        assert.equal(repeatVowels('a',2),'aa')
    })
    it("repeat 'e' 3 times ",function(){
        assert.equal(repeatVowels('e',3),'eee')
    })
    it("repeat ' ' 5 times ",function(){
        assert.equal(repeatVowels(' ',5),'     ');
    })
});

describe("longText", function(){
    it("Repeat vowels of string 'bhavya'",function(){
        assert.equal(longText('bhavya',2),'bhaavyaa')
    })
    it("Repeat vowels of string 'Software'",function(){
        assert.equal(longText("Software",3),'Soooftwaaareee')
    })
})