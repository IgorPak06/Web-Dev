a = int(input())
b = int(input())

for i in range(a, b + 1):
    square = i * i
    if square >= a and square < b:
        print(square, end=" ")