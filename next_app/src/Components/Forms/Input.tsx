import { FormControl, Input as MUIInput, InputLabel } from "@mui/material";
import {v4 as uuid} from "uuid"

type Props = {
    label: string,
    onChange: (text:string)=>void
}

export function Input(props:Props) {
    const id = uuid()
    return (
        <FormControl>
            <InputLabel htmlFor={id}>{props.label}</InputLabel>
            <MUIInput id={id} onChange={e=>props.onChange(e.currentTarget.value)} />
        </FormControl>
    )
}