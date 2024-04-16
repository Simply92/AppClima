import { ChangeEvent, useState } from "react"
import { countries } from "../data/countries"
import type { SearchType } from "../types"

const Form = () => {

    const [search, setSearch] = useState<SearchType>({
        city: "",
        country: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (

        <form className="gap-8 flex flex-col justify-center items-center">
            <div className="gap-8 flex flex-col md:w-full">
                <label className="font-bold text-white text-3xl" htmlFor="city">Ciudad: </label>
                <input
                    className="p-2 bg-transparent border-4 border-solid text-white text-xl rounded-lg font-bold placeholder:text-white"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange} />
            </div>
            <div className="gap-8 flex flex-col md:w-full">
                <label className="font-bold text-white text-3xl" htmlFor="country">País: </label>
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
