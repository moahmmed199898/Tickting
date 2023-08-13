import { createClient } from '@supabase/supabase-js'
import { ParsedMail } from 'mailparser'


const supabase = createClient(process.env.SUPABASE_HOST as string, process.env.SUPABASE_SERVICE_KEY as string)


export async function addTicketFromMail(message: ParsedMail) {
    const RequesterUID = await getUUIDFromEmail(message.from?.value[0].address)

    console.log(RequesterUID)
    const { data, error } = await supabase.from('ticket').insert([{
        title: message.subject,
        ticket_description: message.html,
        priority_id: 100,
        category_id: 0,
        requester_uid: RequesterUID,
        status_id: 0
    }]).select()

    if (error) console.log(error)
    else console.log(data)
}




export async function getUUIDFromEmail(email:string | undefined) {
    if(email === undefined) console.error("NO EMAIL")

    // find the user
    let { data, error } = await supabase.rpc('get_user_id_by_email', {email})
    if (error) console.error(error)
    if(data.length > 0) return data[0].id
    else {

        // if it doesn't exist create it 
        const {data,error} = await supabase.auth.admin.createUser({email})
        if(error) console.log(error)
        else return data.user.id
    }
}