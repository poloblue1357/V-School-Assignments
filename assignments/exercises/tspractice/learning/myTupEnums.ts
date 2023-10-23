// tuples are for restricting the order of the data

// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["dc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type TupUser = [number, string]

const newUser: TupUser = [112, "example@google.com"]

newUser[1] = "hc.com"
newUser.push()