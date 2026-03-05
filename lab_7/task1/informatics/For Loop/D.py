n = int(input())
k = int(input())

def fact(x):
    res = 1
    for i in range(1, x + 1):
        res *= i
    return res

c = fact(n) // (fact(k) * fact(n - k))
print(c)