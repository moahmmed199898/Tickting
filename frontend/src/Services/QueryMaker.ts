import { gql } from "@apollo/client";
import { QueryFilter } from "../Types/graphql";

export function queryTicketMaker(columns: string[], filters: QueryFilter[]) {
    const query = gql(`query {
        ticketCollection(
            filter: {
                ${filters.map(f => `${f.field}: {${f.operator}: "${f.value}"}`)
            }
        })
        {
            edges {
                node {
                    ${columns}
                }
            }
        }
    }`)

    return query
}