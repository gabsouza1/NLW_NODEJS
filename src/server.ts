import { serverHttp } from "./app"




serverHttp.listen(4000, () => {
    console.log('Server running on https://localhost:4000')
})
