
def fizz_buzz(input):
    if (num % 3 == 0) and (num % 5 == 0):
        return "FizzBuzz"
    if (num % 3 == 0) and (num % 5 != 0):
        return 'Fizz'
    if (num % 5 == 0) and (num % 3 != 0):
        return 'Buzz'
        return input

print(fizz_buzz(7))












print(fizz_buzz(3))