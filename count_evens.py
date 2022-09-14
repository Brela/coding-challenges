count = 0  # beginning count = 0
div = 50  # enter whatever number you want to divide by
for num in range(1000000):
    if (num % (div) == 0):
        count = count + 1
        print(num)
print(f"We have {count} numbers that are divisible by {div}")
