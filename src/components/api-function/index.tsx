import { Api } from '../../constant/index'

export const getHotels = async (id: number) => {
  try {
    // 👇️ const data: GetUsersResponse
    const data = await Api.get<any>(`/hotels/${id}?populate=*`, {
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
