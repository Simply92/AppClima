export const formatTemperature = (temperature: number): number => {
    const kelvil = 273.15
    return parseInt((temperature - kelvil).toString())
}