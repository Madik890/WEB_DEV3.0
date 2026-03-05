numbers = list(map(int, input().split()))

for i in range(len(numbers) - 1):
    if numbers[i] * numbers[i + 1] > 0:
        print(numbers[i], numbers[i + 1])
        break