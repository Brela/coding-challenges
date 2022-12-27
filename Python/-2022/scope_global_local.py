message = 'a' #this is a global variable

#the scope of this vavriable is the greet function
def greet(name): #greet and name are local this function
    message = 'a'

def send_email(name): #this name can be different
    #than the other name because it is local to this function
    message = 'b'

greet("Clay")
print(message)