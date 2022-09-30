
weight = int(input('Enter Weight: '))
unit = (input('Enter L for lbs and K for kilograms: '))
if unit.upper() == 'L':
    converted = weight * 0.45
    print(f'You are {converted} kilos')
else:
    converted = weight / 0.45
    print(f'You are {converted} pounds')
