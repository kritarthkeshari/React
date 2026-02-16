import { useState } from "react"
export default function Search(){
    const [find,setFind]=useState("");
    const name=["Krish","KshamaKutiya","TeenaLallu","Ayush"];
    const student=name.filter();
    return (
        <div>
            <h1>Wallahh habibii humkoo maangta tmhara bibi</h1>
            <input type="text"
            placeholder="Enter key to search"
            value={find}
            onChange={(e)=>setFind(e.target.value)}/>
            <ul>
                {find.map((index))=>}
            </ul>
        </div>
    )
}