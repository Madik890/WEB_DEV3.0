def main():
    n = int(input())
    scores = list(map(int, input().split()))

    scores = list(set(scores))  
    scores.sort()               

    print(scores[-2])           

if __name__ == "__main__":
    main()