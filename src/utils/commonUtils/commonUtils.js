export const getPercentageValue = (value, total) => (value / total) * 100

export const splitSecondIntoHrMins = (seconds) => ({
    hours: Math.floor(seconds/3600),
    minutes: Math.floor((seconds%3600) / 60)
})