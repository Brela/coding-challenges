// 7 kyu - a class method to create pods - pods swap colors when bumped

/* You're modelling the interaction between a large number of 
pods and have decided to create a pod class so you 
can generate your own pod objects.

Your pod class should allow you to create pods of any valid color ("red", "blue", and "green") 
and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

Every pod has the same baryon_number (BaryonNumber in C#): 1/3.

Every pod should have an .interact() method that allows any pod to interact 
with another pod via the strong force. When two pods interact they exchange colors. */

class Pod {
    constructor(color, flavor) {
        this.color = color,
            this.flavor = flavor,
            this.baryon_number = 1 / 3
    }
    interact(otherPod) {
        let tempColor = this.color;
        this.color = otherPod.color;
        otherPod.color = tempColor;
    }
}


let q1 = new Pod("red", "up")
let q2 = new Pod("blue", "strange")


console.log(q1.color) // "red"
console.log(q2.flavor)   // "strange"
console.log(q2.baryon_number)   // 1 / 3

q1.interact(q2)
console.log(q1.color) // "blue"
