import { Weather } from "../hooks/useWeather"
import { formatTemperature } from "../utils"

type WeatherDetailProps = {
    weather: Weather

}

const WeatherDetail = ({ weather }: WeatherDetailProps) => {
    return (
        <div className="bg-white rounded-lg flex flex-col text-center p-4">
            <h2 className="font-bold text-3xl mt-10">Clima de: {weather.name}</h2>
            <p className="font-bold text-7xl my-10">{formatTemperature(weather.main.temp)}&deg;C</p>
            <div className="flex justify-center gap-20">
                <p className="text-2xl font-bold">Min: {formatTemperature(weather.main.temp_min)}&deg;C</p>
                <p className="text-2xl font-bold">Max: {formatTemperature(weather.main.temp_max)}&deg;C</p>
            </div>

        </div>
    )
}

export default WeatherDetail
