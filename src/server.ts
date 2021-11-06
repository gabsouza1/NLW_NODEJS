import { serverHttp } from "./app"




serverHttp.listen(3000, () => {
    console.log('Server running on https://localhost:3000')
})
