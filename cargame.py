k = ('>')
started = False
while True:
    k = input('> ').lower()
    if k == 'help':
        print('''
start - to start the car \n
stop - to stop the car \n
quit - to exit''')
    elif k == 'start':
        if started:
            print("car is already started!")
        else:
            started = True
            print('Car started...Ready to go!')
    elif k == 'stop':
        if not started:
            print('Car is already stopped!')
        else:
            started = False
            print('Car stopped.')
    elif k == 'quit':
        break
    else:
        print("Sorry, I don't understand that")


