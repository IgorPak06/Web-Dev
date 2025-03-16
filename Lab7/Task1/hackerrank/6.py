if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    max_1 = -100000
    second_max = -100000
    for i in range(n):
        if arr[i] > max_1:
            max_1 = arr[i]
        
    for j in range(n):
        if arr[j] > second_max and arr[j] < max_1:
            second_max = arr[j]
            
    print(second_max)
        