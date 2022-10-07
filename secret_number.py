g = 1
while g <= 5:
    print('ya' * g)
    g = g + 1
print('done')
# 2nd while proj below
secret_number = 9
guess_count = 0
guess_limit = 3
while guess_count < guess_limit:
    guess = int(input('Guess: '))
    guess_count += 1
    if guess == secret_number:
        print('You won!')
        #to terminate loop enter break
        break
#similar to 'if' statements, 'while' statements can have 'else' statements
else:
    print('Sorry, you failed')