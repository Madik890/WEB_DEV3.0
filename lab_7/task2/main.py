from models import Vehicle, Car, Motorcycle


def main():
    car = Car("Toyota", "Camry", 2022, 4)
    motorcycle = Motorcycle("Yamaha", "R1", 2021, False)
    vehicle = Vehicle("Generic", "Transport", 2000)

    vehicles = [car, motorcycle, vehicle]

    for v in vehicles:
        print(v)
        print(v.start_engine())
        print(v.move())  
        print(v.stop_engine())
        print("-" * 30)


if __name__ == "__main__":
    main()