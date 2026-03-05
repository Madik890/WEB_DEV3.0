numbers = list(map(int, input().split()))

for n in numbers:
    if n % 2 == 0:
        print(n, end=" ")