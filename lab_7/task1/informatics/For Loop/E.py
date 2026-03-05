n = int(input())
k = int(input())

nf = 1
for i in range(1, n + 1):
    nf *= i

kf = 1
for i in range(1, k + 1):
    kf *= i

nkf = 1
for i in range(1, n - k + 1):
    nkf *= i

print(nf // (kf * nkf))