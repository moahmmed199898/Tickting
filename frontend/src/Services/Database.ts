import { createClient } from '@supabase/supabase-js'
import { Database } from '../Types/supabase'


const supabase = createClient<Database>(process.env.REACT_APP_SUPABASE_HOST as string, process.env.REACT_APP_SUPABASE_ANON_KEY as string)


export async function getCatagories() {
  const data = await supabase.from("category").select("category_id, category_name")
  return data.data;
}

export async function getDepartments() {
  const data = await supabase.from("department").select("department_id, department_name")
  return data.data;
}


export async function getLocations() {
  const data = await supabase.from("location").select("location_id, location_name")
  return data.data;
}


export async function getPriorities() {
  const data = await supabase.from("priority").select("priority_id, priorty_description")
  return data.data;
}

export async function getRoles() {
  const data = await supabase.from("role").select("role_id, role_name")
  return data.data;
}

export async function getStatuses() {
  const data = await supabase.from("status").select("status_id, status_name")
  return data.data;
}

export async function getInfo() {
  const data = await Promise.all([getCatagories(), getDepartments(), getLocations(), getPriorities(), getStatuses()])
  return {
    catagories: data[0],
    departments: data[1],
    locations: data[2],
    priorities: data[3],
    status: data[4]
  }
}
