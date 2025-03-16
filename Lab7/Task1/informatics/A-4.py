n = int(input())
i = 1
while n > 0:
    square = i * i
    if  square < n:
        print(square)
        i += 1
        n -= square
    elif n < 0:
        break