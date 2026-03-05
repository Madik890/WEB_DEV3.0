class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model} engine started."

    def stop_engine(self):
        return f"{self.brand} {self.model} engine stopped."

    def move(self):
        return "Vehicle is moving."

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def move(self):
        return f"{self.brand} {self.model} is driving on the road."

    def open_trunk(self):
        return "Trunk is open."


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def move(self):
        return f"{self.brand} {self.model} is speeding on two wheels."

    def wheelie(self):
        return "Motorcycle performs a wheelie!"