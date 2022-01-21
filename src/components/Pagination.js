import * as React from 'react';
import Stack from '@mui/material/Stack';

export function Pagination({ prevPage, nextPage }) {
  return (
    <div style={{ flexDirection: 'row', alignItems: 'center' }}>
      <button
        onClick={prevPage}
      >
        Anteriores
      </button>
      <button
      style={{marginLeft: 15}}
        onClick={nextPage}
      >
        Siguientes
      </button>
    </div>
  )
}