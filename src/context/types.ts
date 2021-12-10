import axios from "axios";
const api = "https://reqres.in/api/users?page=2";

async function fetchUsers() {
  const { data } = await axios.get(api);
  return data;
}

export { fetchUsers };
