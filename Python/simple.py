name = input('hello, what is your name? > ')
age = input('how old are you? > ')
freetime = input('what do you do in your free time? > ')
sex = input('male(m) or female(f)? > ')
if sex == ('m'):
    sexy = 'he'
else:
    sexy = 'she'
print(f'{name} is {age} years old, and likes to {freetime} when {sexy} has freetime')
