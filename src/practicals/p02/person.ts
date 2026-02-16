export class Person {
    firstname? : string;
    lastname? : string;
    
    private age : number =0
    static COUNTRY : string ="AMERICA"
    setAge(age : number){
        this.age = age;
    }
    getAge(){
        return this.age
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
}