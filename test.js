function calculateDaysBetweenDates(begin, end) {
    const millisecondsPerDay = 86400000;
    const diff = end - begin;
    return Math.floor(diff / millisecondsPerDay);
}
console.log(
    calculateDaysBetweenDates(new Date('2020-06-01'), new Date('2020-06-30'))
)