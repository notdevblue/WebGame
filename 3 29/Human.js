class Human {
    constructor(name = "게마고", age = 1, x = 10) {
        this.name = name;
        this.age = age;
        this.x = x;
    }

    move() {
        this.x += 10;
        console.log("이동", this.x);

    }
}