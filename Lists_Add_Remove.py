letters = ["a", "b", "c"]
for letter in letters:
    print(letter)
print()
#loop over list with "for loop"
#enumerate function - to get the index of each function
# the index is a tuple which is is a read only list, cant add items 
letters = ["e", "f", "g"]
for letter in enumerate(letters):     # first item of tuple is index, second is the item of the index
    print(letter[0], letter[1]) # use square brackets to get index
print()

# Add
letters.append("x")
print(letters)

# Remove
letters.pop(1)  #pop removes only one | delete deletes a range of objects
print(letters)

#To remove object but you dont know the INDEX, use remove
letters.remove("e")
print(letters) #if you want to remove all Bs or whatever, you have to "loop over to 
#remove thewm individually" - MOsh whatever that means lol