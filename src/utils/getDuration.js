import intervalToDuration from "date-fns/intervalToDuration"

export const getDuration = (start, end) => {
    const duration = intervalToDuration({
        start: start,
        end: end,
    })
    return duration
}
