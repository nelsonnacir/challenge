import React, { Fragment } from "react";

export function Item({ item }) {
    return (
        <Fragment>
            <li>Estado: {item.status}</li>
            <li>Especie: {item.species}</li>
            <li>Origin: {item.origin.name}</li>
            <li>Ubicación: {item.location.name}</li>
        </Fragment>
    )
}