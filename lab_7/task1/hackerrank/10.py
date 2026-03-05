def main():
    n = int(input())
    students = []

    for _ in range(n):
        name = input()
        grade = float(input())
        students.append([name, grade])

    grades = sorted(set([s[1] for s in students]))
    second_lowest = grades[1]

    names = sorted([s[0] for s in students if s[1] == second_lowest])

    for name in names:
        print(name)


if __name__ == "__main__":
    main()