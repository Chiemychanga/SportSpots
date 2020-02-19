export class OpenGymInst {

    constructor(image, gymName, address, googleAddressLink, sport, dayOfWeek, time, cost, levelDescription, website, description, numberOfCourts, courtType, minimumAge) {
        this.image = image;
        this.gymName = gymName;
        this.address = address;
        this.googleAddressLink = googleAddressLink;
        this.sport = sport;
        this.dayOfWeek = dayOfWeek;
        this.time = time;
        this.cost = cost;
        this.levelDescription = levelDescription;
        this.website = website;
        this.description = description;
        this.numberOfCourts = numberOfCourts;
        this.courtType = courtType;
        this.minimumAge = minimumAge;
    }

    //Setters and getters

    setImage(image) { this.image = image; }
    setGymName(gymName) { this.gymName = gymName; }
    setAddress(address) { this.address = address; }
    setGoogleAddressLink(googleAddressLink) { this.googleAddressLink = googleAddressLink; }
    setSport(sport) { this.sport = sport; }
    setDayOfWeek(dayOfWeek) { this.dayOfWeek = dayOfWeek; }
    setTime(time) { this.time = time; }
    setCost(cost) { this.cost = cost; }
    setLevelDescription(levelDescription) { this.levelDescription = levelDescription; }
    setWebsite(website) { this.website = website; }
    setDescription(description) { this.description = description; }
    setNumberOfCourts(numberOfCourts) { this.numberOfCourts = numberOfCourts; }
    setCourtType(courtType) { this.courtType = courtType; }
    setMinimumAge(minimumAge) { this.minimumAge = minimumAge; }

    getImage() { return this.image; }
    getGymName() { return this.gymName; }
    getAddress() { return this.address; }
    getGoogleAddressLink() { return this.googleAddressLink; }
    getSport() { return this.sport; }
    getDayOfWeek() { return this.dayOfWeek; }
    getTime() { return this.time; }
    getCost() { return this.cost; }
    getLevelDescription() { return this.levelDescription; }
    getWebsite() { return this.website; }
    getDescription() { return this.description; }
    getNumberOfCourts() { return this.numberOfCourts; }
    getCourtType() { return this.courtType; }
    getMinimumAge() { return this.minimumAge; }
}