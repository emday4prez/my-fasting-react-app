export default function subtractTimeFromDate(objDate, intHours) {
    var numberOfMlSeconds = objDate.getTime()
    var addMlSeconds = intHours * 60 * 60 * 1000
    var newDateObj = new Date(numberOfMlSeconds - addMlSeconds)

    return newDateObj
}