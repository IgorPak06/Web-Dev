n = int(input())
i = 0
while n > 0:
    if (2**i < n):
        print(2**i, end=" ")
        i += 1
    else:
        break