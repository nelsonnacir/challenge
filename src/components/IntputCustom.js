import React, { useState, Fragment, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export function InputCustom({search, onSearchChange }) {
  return (
    <input
      type="text"
      className="mb-2 form-control"
      placeholder="Filtrar personajes"
      value={search}
      onChange={(event) => onSearchChange(event)}
      style={{}}
    />
  );
}