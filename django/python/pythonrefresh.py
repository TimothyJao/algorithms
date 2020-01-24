# age = 17

# name = "Tim"

# todayIsCold = False
# print("Hello my name is {} and I am {}".format(name, age))

# if todayIsCold:
#     print('You are older than 18')

# else:
#     print('You are younger than 18')


# def hello(string, age=0):
#     return "Hello {} you are {} years old".format(string, age)

# print(hello("Tim"))

# dognames = ["Fido", "Sean", "Sally", "Mark"]

# print(dognames)

# for x in range(1,10):  
#     print(x)

# age = 0

# while age < 18:
#     print(age)
#     age+=1

# dogs = {"Fido": 8, "Sally": 17, "Sean": 2}
# print(dogs)

class Dog:

    def __init__(self, name="", age=0, furcolor=""):
        self.name = name
        self.age = age
        self.furcolor = furcolor

    dogInfo = "Hey dogs are cool!"
    
    def bark(self, str):
        print("BARK! {}".format(str))

mydog = Dog("Fido", 13, "brown")
mydog.bark("hello")
mydog.name = "Fido"
mydog.age = 16
print(mydog.name)
print(mydog.age)

Dog.dogInfo = "Hey There"
print(Dog.dogInfo)