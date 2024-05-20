import newUser from "./User.js"

start:
while(true) {
newUser.getData();

if(newUser.name && newUser.surname) {
    newUser.confirmData();
    break start;
}
}