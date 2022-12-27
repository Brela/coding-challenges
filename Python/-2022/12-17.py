# MINE
def lovefunc(flower1, flower2):
    if flower1 % 2 != 0 and flower2 == 0:
        return True
    if flower2 % 2 != 0 and flower1 == 0:
        return True
    else:
        return False


# best voted

def lovefunc(flower1, flower2):
    return (flower1+flower2) % 2
