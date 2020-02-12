class OpenGymInst {

    constructor(gymName, address, sport, dayOfWeek, time, cost, levelDescription) {
        this.gymName = gymName;
        this.address = address;
        this.sport = sport;
        this.dayOfWeek = dayOfWeek;
        this.time = time;
        this.cost = cost;
        this.levelDescription = levelDescription;
    }


    //Setters and getters

    set gymName(gymName) { this.gymName = gymName; }
    set address(address) { this.address = address; }
    set sport(sport) { this.sport = sport; }
    set dayOfWeek(dayOfWeek) { this.dayOfWeek = dayOfWeek; }
    set time(time) { this.time = time; }
    set cost(cost) { this.cost = cost; }
    set levelDescription(levelDescription) { this.levelDescription = levelDescription; }

    get gymName() { return this.gymName; }
    get address() { return this.address; }
    get sport() { return this.sport; }
    get dayOfWeek() { return this.dayOfWeek; }
    get time() { return this.time; }
    get cost() { return this.cost; }
    get levelDescription() { return this.levelDescription; }
}