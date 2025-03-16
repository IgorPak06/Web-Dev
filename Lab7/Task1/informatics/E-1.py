v = int(input())
t = int(input())

s = v * t

if s > 109:
    print(s - 109)
elif (v < 0):
    print(109 - abs(s))