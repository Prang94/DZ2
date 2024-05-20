class User{

    name;
    surname;

    getData() {
        this.name = prompt("Enter your name: ");
        if(this.name != null) {
        this.surname = prompt("Enter your surname: ");
        }
    }

    printData() {
        alert(`Вас зовут ${this.name} ${this.surname}`);
    }

    confirmData() {
    
        confirm(`Вас зовут ${this.name} ${this.surname} ?`) ? this.printData() : this.getName();
    }
}

export default new User;