import { Api } from '../../constant/index'

export const getHotels = async (id: number) => {
  try {
    // 👇️ const data: GetUsersResponse
    const data = await Api.get<any>(`https://backend-bookings.herokuapp.com/hotels/${id}?populate=*`, {
      headers: {
        Accept: 'application/json',
      },
    })

    return data
  } catch (error) {
    console.log(error, 'error.')
    return error
  }
}
