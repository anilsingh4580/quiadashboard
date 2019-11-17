import Axios from "./request"
import { config } from "../Config/config"
const host = config.ApiHost

const jackpot = `${host}/jackpot` // jackpot route here
const jackpotQn = `${host}/jackpotQn`

// ============================================Start  jackpot method =================================================================

//add  new jackpot
export const addJackpot = async data => {
  const result = await Axios.post(jackpot, data)
  return result
}

// view jackpot list
export const viewJackpot = async data => {
  const result = await Axios.get(jackpot)
  return result
}

//add jackpot Questions

export const addJackpotQn = async data => {
  const result = await Axios.post(jackpotQn, data)
  return result
}
