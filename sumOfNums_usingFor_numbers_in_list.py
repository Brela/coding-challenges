numbers = [346000, 22500, 3321, 7722, 15567, 613, 361, 316, 7721]
sumOfNums = 0
count = 0
for number in numbers:
    sumOfNums += number
    count += 1
average = sumOfNums / count
print("The list of numbers is:", numbers)
print("The average of all the numbers is:", average)