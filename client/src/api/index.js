import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getTest = () => api.get('/question')
export const postTest = () => api.post('/question')
export const register = (payload) => api.post('/question', payload)

// export const insertMovie = payload => api.post(`/movie`, payload)
// export const getAllMovies = () => api.get(`/movies`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    // insertMovie,
    // getAllMovies,
    // updateMovieById,
    // deleteMovieById,
    // getMovieById,
    getTest,
    postTest,
    register
}

export default apis