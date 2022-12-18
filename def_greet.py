def greet(first_name, last_name):  # parameters go in these ()
    print(f"Hi {first_name} {last_name}") #the f is for formatted string
    print("Welcome aboard")
greet("MOsh", "Ham")
greet("Clay", "Breland")
print( ) 
#Version 1 is simple but only prints 
def greet2(name): #need :colon: every time
    print(f"Hi {name}")

#Version 2 allows a return so you can do more with it
def get_greeting(name):
    return f"Hi {name}"

message = get_greeting("Clay")
#you can print it to the terminal (print(message))
#or (open("content.txt", "w"))
print(message)
print()

def get_place(place) + get_time(time):
    
    return f"Arrive at {place} @ {time}"

place = get_place("Frisco Event Center")
time = get_time("4:00")
print(message + "   thank you")