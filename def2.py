

def multiply(*numbers):
    total = 1
    for number in numbers:
        total = total * number
        return total

print(multiply(2, 3, 4, 5))

