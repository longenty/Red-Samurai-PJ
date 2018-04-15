class User{
    constructor(){
        this.firstName = 'Dat';
        this.lastName = 'Le'
    }

    showFullName() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
// Cach moi
const { firstName, lastName } = User;