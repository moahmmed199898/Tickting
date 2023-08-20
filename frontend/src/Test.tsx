import {getInfo} from "./Services/Database"
import { signin } from "./Services/TempServices"
import { getQuery } from "./Services/Query"
import { queryTicketMaker } from "./Services/QueryMaker"
import { Operators } from "./Types/graphql"
export function Test() {

    const fun = async () => {
        await signin()
        const data = await getInfo()


        console.log(data)
    }

    fun()
    return <div></div>
}