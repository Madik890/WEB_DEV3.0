def xor(x, y):
    return (x and not y) or (not x and y)


def main():
    x, y = map(int, input().split())
    x = bool(x)
    y = bool(y)

    result = xor(x, y)
    print(int(result))


if __name__ == "__main__":
    main()