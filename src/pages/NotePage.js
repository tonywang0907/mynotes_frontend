import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = () => {
    const navigate = useNavigate()

    let noteId = useParams().id

    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`https://tonywang.pythonanywhere.com/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        fetch(`https://tonywang.pythonanywhere.com/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`https://tonywang.pythonanywhere.com/api/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`https://tonywang.pythonanywhere.com/api/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        navigate('/')
    }

    let handleSubmit = () => {
        if (noteId !== 'new' && !note.body) {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== null) {
            createNote()
        }

        navigate('/')
    }

    let handleChange = (value) => {
        setNote(note => ({...note, body: value}))
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ): (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
