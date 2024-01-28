import { backendInstance } from "./backendInstance"

export const getCoffeeListService = async () => {
  return await backendInstance.get('');
}
