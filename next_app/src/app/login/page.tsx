'use client'
import {createClient} from "@supabase/supabase-js"

export default function AuthForm() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)


  const onsignupClickHandler = async () => {
    const {error, data} =  await supabase.auth.signUp({email:"aspasp1998@gmail.com", password: "password"})
    console.log(data)
  }
  
  return (
    <button onClick={onsignupClickHandler}>Sign up</button>
  )
}