export class OpenGymInst {

    constructor(gymName, address, dayOfWeek, time, cost, levelDescription) {
        this.gymName = gymName;
        this.address = address;
        this.sport = sport;
        this.dayOfWeek = dayOfWeek;
        this.time = time;
        this.cost = cost;
        this.levelDescription = levelDescription;
    }

    //Setters and getters

    setGymName(gymName) { this.gymName = gymName; }
    setAddress(address) { this.address = address; }
    setDayOfWeek(dayOfWeek) { this.dayOfWeek = dayOfWeek; }
    setTime(time) { this.time = time; }
    setCost(cost) { this.cost = cost; }
    setLevelDescription(levelDescription) { this.levelDescription = levelDescription; }

    getGymName() { return this.gymName; }
    getAddress() { return this.address; }
    getDayOfWeek() { return this.dayOfWeek; }
    getTime() { return this.time; }
    getCost() { return this.cost; }
    getLevelDescription() { return this.levelDescription; }
}