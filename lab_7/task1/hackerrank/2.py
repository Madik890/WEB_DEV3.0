def check_weird(n):
    if n % 2 == 1:
        return "Weird"
    elif 2 <= n <= 5:
        return "Not Weird"
    elif 6 <= n <= 20:
        return "Weird"
    else:
        return "Not Weird"


def main():
    n = int(input())
    print(check_weird(n))


if __name__ == "__main__":
    main()