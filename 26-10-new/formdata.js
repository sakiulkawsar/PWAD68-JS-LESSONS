class FormData {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
  // thsi is a mathode
    DataDisplay() {
        let output = "<h1>All information</h1>";
        output += "Name:" + this.name + "<br>";
        output += "Address:" + this.address + "<br>";
        output += "phone:" + this.phone + "<br>";
        return output;
    }
}