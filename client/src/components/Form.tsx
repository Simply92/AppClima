import { ChangeEvent, useState } from "react"
import { countries } from "../data/countries"
import type { SearchType } from "../types"
import Alert from "./Alert"

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}
const Form = ({ fetchWeather }: FormProps) => {

    const [search, setSearch] = useState<SearchType>({
        city: "",
        country: ""
    })

    const [alert, setAlert] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }
        fetchWeather(search)
        setAlert('')
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="gap-8 flex flex-col items-center">
            {alert && <Alert>{alert}</Alert>}
            <div className="gap-8 flex flex-col md:w-full text-start">
                <label className="font-bold text-white text-2xl" htmlFor="city">Ciudad: </label>
                <input
                    className="p-2 bg-transparent border-4 border-solid text-white text-xl rounded-lg font-bold placeholder:text-white"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange} />
            </div>
            <div className="gap-8 flex flex-col md:w-full text-start">
                <label className="font-bold text-white text-2xl" htmlFor="country">País: </label>
                <select
                    id="country"
                    value={search.country}
                    name="country"
                    onChange={handleChange}
                    className="p-2 bg-transparent border-4 border-solid text-white text-xl rounded-lg font-bold">
                    <option className="text-black font-bold" value="">-- Seleccione un país --</option>
                    {countries.map(country => (
                        <option className="text-black font-bold" key={country.code} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </div>
            <input className="font-bold text-white bg-orange-500 text-xl rounded-lg md:w-1/2 uppercase cursor-pointer p-1" type="submit" value="Consultar clima" />
        </form>

    )
}

export default Form
