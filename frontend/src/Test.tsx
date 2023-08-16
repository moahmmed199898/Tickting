import { signin, getQuery } from "./Services/Database"
import { queryTicketMaker } from "./Services/QueryMaker"
import { Operators } from "./Types/graphql"
export function Test() {

    const fun = async () => {
        await signin()
        const data = await getQuery(queryTicketMaker(["cost", "ticket_number"], [
            {
                field: "cost",
                operator: Operators.Greater,
                value: 300
            },
            {
                field: "ticket_number",
                operator: Operators.Equal,
                value: 3
            }
    
    ]))


        console.log(data?.data)
    }

    fun()
    return <div></div>
}