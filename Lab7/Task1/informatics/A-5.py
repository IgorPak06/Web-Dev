n = int(input())
arr = list(map(int, input().split()))

for j in range(0, n, 2):
    print(arr[j], end=" ")