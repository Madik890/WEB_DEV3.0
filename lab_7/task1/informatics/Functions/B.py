def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result


def main():
    a, n = input().split()
    a = float(a)
    n = int(n)

    print(power(a, n))


if __name__ == "__main__":
    main()