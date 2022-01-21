import React, {useEffect} from "react";
import { Item } from "./Item";

export function List({character}) {
    return(
        <ul>
            <Item key={character.id} item={character}/>
        </ul>
    )
}