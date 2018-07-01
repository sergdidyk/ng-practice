export class CounterService {
    activeCounter = 0;
    inactiveCounter = 0;

    incrementActiveCounter() {
        this.activeCounter++;
        console.log("Active counter = " + this.activeCounter);
    }

    incrementInactiveCounter() {
        this.inactiveCounter++;
        console.log("Inactive counter = " + this.inactiveCounter);
    }
}