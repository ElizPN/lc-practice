import { useEffect, useState } from "react"



export function SimpleList() {
    const [albumNames, SetAlbumNames] = useState([])
    console.log(albumNames, "albumName");




    // useEffect(() => {
    //     const FetchTodoList = () => {
    //         const dataUrl = 'https://jsonplaceholder.typicode.com/todos/1'

    //         fetch(dataUrl).then(
    //             response => response.json()
    //         ).then(json => console.log(json))
    //     }
    //     return FetchTodoList

    // }, [])


    useEffect(() => {
        const fetchAlbums = async () => {
            const dataUrl = 'https://jsonplaceholder.typicode.com/albums'
            const response = await fetch(dataUrl)
            const data = await response.json()
            const albumNames = data.map((item: { userId: number, id: number, title: string }) => {
                return item.title
            })
            SetAlbumNames(albumNames)

            return console.log(data)

        }
        fetchAlbums()

    }, [])


    const renderAlbumNames = albumNames.map((name) => {
        return <p key={name}>{name}</p>

    })

    return <div>{renderAlbumNames}</div>
} 