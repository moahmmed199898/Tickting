import { createClient } from '@supabase/supabase-js'
import { Database } from '@/Types/supabase'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient<Database, "orders">(supabaseUrl, supabaseKey)

export async function insertCategory(name: string) {
    const {error, status } =  await supabase.from("Category").insert({CategoryName: name})
}



