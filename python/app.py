# x = 1
# if x > 2:
#     print("x is bigger then 2")
# elif x < 2:
#     print("x is smaller then 2")
# else:
#     print("x is 2")

# for i in range(10):
#     print(i)

# while True:
#   x =  input(">>> ")
#   print(x)
#   if x.lower() == 'quit':
#     break

# debuging my code
# def multiply(*x):
#     total = 1
#     for a in x:
#         total *= a
#     return total

# print('start')
# print(multiply(2,3,4))

# letters = ['a', 'b', 'c', 'd', 'e', 'f']

# matrix = [[0,1], [1,2], [3,4], [5,6]]

# print(matrix)

items = [
    ('a', 1),
    ('b', 4),
    ('c', 3),
]

# def sort_items(item):
#     return item[1]

# items.sort(key=sort_items)

# items.sort(key= lambda item: item[1])

# prices = []

# for item in items:
#     prices.append(item[1])

# prices = list(map( lambda x: x[1]*2, items))
# prices = [item[1] for item in items if item[1] > 2]
# print(prices)

# list1 = ['ali', 'ahmed', 'hassan']
# list2 = [1, 2, 3]

# zipped = list(zip(list1, list2, 'how'))

# print(zipped)

x = 10
y = 20

# z = x
# x = y
# y = z
# unpacking 
x,y = y,x

print('x',x, 'y', y)