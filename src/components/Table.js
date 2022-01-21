export function Table({characters, handleOpenModal}) {
    return (
        <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: 100 }}>ID</th>
                        <th style={{ width: 250 }}>Nombre</th>
                        <th>Imagen</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters.map(item => (
                            <tr key={item.id} >
                                <td style={{ justifyContent: "center", alignItems: "center" }}> {item.id} </td>
                                <td style={{ justifyContent: "center", alignItems: "center" }}> {item.name} </td>
                                <td>
                                    <img
                                        src={item.image}
                                        style={{ height: 60 }}
                                    />
                                </td>
                                <td style={{ justifyContent: "center", alignItems: "center" }}>
                                <button onClick={() => handleOpenModal(item)}>Ver</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    )
}