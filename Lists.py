from email.errors import ObsoleteHeaderDefect


letters = ["a", "b", "c"] #letters is variable; abc = strings
matrix = [[0,1], [2,3]]  #matrix is a 2-2 list
zeros = [0] * 5 #astric to repeat items in a list
combined = zeros + letters
print(combined)

numbers = list(range(20))
print(numbers)
chars = list("hello World")  #prints each character as item in the list
print(len(chars))

letter = ["a", "b", "c", "d", "e", "f", "g"]
letter[0] = "A" # to change individual element from list
print(letter)
print(letter[-1]) # prints last letter from list | -2 would print second to last

print(letter)
print(letter[::3]) #prints every third(3 in this case) number in a list

print(letter[::-2]) #every other letter from back to front

num = list(range(100))
print(num[::4])
print(num[::-4]) #reverse order

#List Unpacking - unpack list into multiple variables
code = [1,2,367,4,346,7,34,5] # lost here, see list unpacking on codewithmosh
first, second, *other = code   #this packs all other numbers not defined(first, second) in a seperate list called other
#this^ is the same exact thing as whats below, simplified
first = code[0]  
second = code[1]     #this is the poopy way of doing the above naming the list items
third = code[3]

print(first)
print(other)