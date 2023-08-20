import { createClient } from '@supabase/supabase-js'
import { Database } from '../Types/supabase'

const supabase = createClient<Database>(process.env.REACT_APP_SUPABASE_HOST as string, process.env.REACT_APP_SUPABASE_ANON_KEY as string)


export async function signin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "aspasp1998@gmail.com",
      password: "password"
    })
    console.log(error)
    console.log(data.session?.access_token)
}
  