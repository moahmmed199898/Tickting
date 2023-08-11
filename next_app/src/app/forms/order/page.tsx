"use client"
import { Input } from "@/Components/Forms/Input";
import { insertCategory } from "@/Services/Database";
import { Button, Card } from "@mui/material";
import { useState } from "react";

export default function OrderRequestPage() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const onSubmitClickHandler = async () =>{
        await insertCategory(title + description)
    }

    return (
        <Card variant="elevation">
            <form>
                <Input label="Title" onChange={setTitle} />
                <Input label="Description" onChange={setDescription} />
                <Button onClick={onSubmitClickHandler}>Submit</Button>
            </form>
            
        </Card>
    )
}