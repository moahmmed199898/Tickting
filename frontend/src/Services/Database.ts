import { createClient } from '@supabase/supabase-js'
import { ApolloClient, DocumentNode, InMemoryCache, gql } from '@apollo/client';

import { Database } from '../Types/supabase'


const supabase = createClient<Database>(process.env.REACT_APP_SUPABASE_HOST as string, process.env.REACT_APP_SUPABASE_ANON_KEY as string)



export async function getQuery(query: DocumentNode) {
  // get the user token
  const { data, error } = await supabase.auth.getSession()
  if (error && data.session === null) return


  // init Apollo Client 
  const client = new ApolloClient({ // should I init the client once for overhead? How much of an overhead is it? 
    uri: process.env.REACT_APP_SUPABASE_HOST + "/graphql/v1",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${data.session!.access_token}`
    }
  })

  // submit the query 
  const results = await client.query({query});
  return results;
}

























// TEMP


export async function signin() {

  const { data, error } = await supabase.auth.signInWithPassword({
    email: "aspasp1998@gmail.com",
    password: "password"
  })
  console.log(data.session?.access_token)

}
