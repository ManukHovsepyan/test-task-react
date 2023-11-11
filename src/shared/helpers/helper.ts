import { FeaturedStateInterface } from "store/filmSlice";

export const getConvertedTime = (time: string) => {
    try {
        const minute = Math.floor((+time % 3600) / 60);
        const hour = Math.floor(+time / 3600)
        return `${hour > 0 ? `${hour}h` : ''}${minute ? ` ${minute < 10 ? `0${minute}` : minute}m` : ''}`
    } catch (error) {
        return ''
    }
}

export const sortFilmsByDate = (films: Array<FeaturedStateInterface>) => {
    try {
        const sorted = films?.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()) || films
        return sorted
    } catch (error) {
        return films
    }
}

export const sortFilmsByLastClicked = (films: Array<FeaturedStateInterface>, id: string) => {
    try {
        const idx = +films?.findIndex((item) => item.Id === id)
        if (idx !== -1) {
            const copyFilms = [...films]
            const film  = copyFilms[idx]
            copyFilms.splice(idx, 1)
            const sorted = sortFilmsByDate(copyFilms)
            sorted.unshift(film)
            return sorted
        }
        return films
    } catch (error) {
        return films
    }
}