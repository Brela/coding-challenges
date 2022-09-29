level = int(input('On a scale of 1 to 5, how good are you at programming? > '))
if level == 1:
    print('You are a noob')
    q2 = input('Do you want to enter beast learning mode? ')

    if q2 == ('yes'):
        print("That's a great answer, let's get started.")
        print(':)')
    else:
        print("It's all good, not for all of us, have nice day.")
        reply = input('Your reply: ')
        if reply == ('thanks') or ('thank you'):
            print('No problem.')
        else:
            print('bye bye')
elif level == 2:
    hours = float(input("You know some things \nHow many hours do you study a day? > "))
    if hours <= 1.5:
        print("That's good, but you need to step it up, there is money to be made out there!")
    else:
        print("Youre doing great\nKeep up the good work!")
elif level == 3:
    print("Learn more, don't stop")
elif level == 4:
    print('Dang son, you sure bout that? Show me.')
elif level == 5:
    print("You're makin that moneyyy$$$$$")
else:
    print('I said 1 to 5, congrats for being a rebel!')



