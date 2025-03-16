def xor(a, b):
    return(1 if a == 1 and b == 0 or a == 0 and b == 1 else 0)

a, b = map(int, input().split())
print(xor(a, b))
