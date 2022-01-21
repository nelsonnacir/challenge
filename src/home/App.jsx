import React, { useState, useEffect } from "react";
import { Api } from "./api/Api";
import { ModalComponent } from "./components/Modal";
import { Table } from "./components/Table";
import { InputCustom } from "./components/IntputCustom";
import { Pagination } from "./components/Pagination";
import './help/App.css'

export function App() {

    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [pages, setPages] = useState([])
    const [search, setSearch] = useState("")
    const [characterSeleted, setCharacterSelected] = useState({})
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const initialPage = Array.from({ length: 15 }, (x, i) => i + 1)
        setPages(initialPage)
        handleCharacter(initialPage)
    }, [])

    const handleOpen = (item) => {
        console.log("item", item)
        setCharacterSelected(item)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleCharacter = (pages) => {
        Api.get(`/character/${pages}`)
            .then(
                res => {
                    setCharacters(res.data)
                },
                error => {
                    console.log(error)
                }
            )
            .catch(console.log("error"))
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 15)
        filterPage()
    }

    const nextPage = () => {
        if (currentPage < 827)
            setCurrentPage(currentPage + 15)
        filterPage()
    }

    const filterPage = () => {
        if (search.length == 0)
        for (let i = 0; i < 15; i++) {
            pages.push(pages[pages.length - 1] + 1)
        }
        const numberPage = pages.slice(currentPage, currentPage + 15)
        handleCharacter(numberPage)
    }

    const onSearchChange = ({ target }) => {
        setCurrentPage(0);
        setSearch(target.value);
        Api.get(`/character/?name=${target.value}`)
            .then(
                res => {
                    setCharacters(res.data.results.slice(0, 15))
                },
                error => {
                    console.log(error)
                }
            )
            .catch(console.log("error"))
        if (target.value.length == 0) filterPage()
    }

    return (
        <div className="App">
            <h1>Rick and Morty</h1>
            <hr />
            <InputCustom search={search} onSearchChange={onSearchChange} />
            <Table characters={characters} handleOpenModal={handleOpen} />
            <Pagination prevPage={prevPage} nextPage={nextPage}/>
            <ModalComponent open={open} handleClose={handleClose} character={characterSeleted} />
        </div>
    )
}