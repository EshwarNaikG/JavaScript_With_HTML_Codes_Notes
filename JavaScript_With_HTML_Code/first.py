vowel = ['a', 'e', 'i', 'o', 'u']
word = "bbbbbb"
count = 0
for char in word:
    if char in vowel:
        count += 1
print("Number of vowels in the word is:", count)