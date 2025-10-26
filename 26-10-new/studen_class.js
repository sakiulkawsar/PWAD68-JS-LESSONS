class studentClass {
    constructor(name, roll, address) {
        this.name = name;
        this.roll = roll;
        this.address = address;
    }

    studentInfo() {
        let output = "<h1>Student Information</h1>";
        output += "Name:" + this.name + "<br>";
        output += "Roll No:" + this.roll + "<br>";
        output += "Address:" + this.address + "<br>";
        return output;
    }
}
