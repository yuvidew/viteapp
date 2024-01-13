import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const HomeComp = () => {
    const [input , setInput] = useState('')
    const [arr , setArr] = useState([])


    const handelEdite = (index) => {
        setInput(arr[index]);
        setArr(prev => {
            const updateInput = [...prev]
            updateInput.splice(index , 1  , input)
            return updateInput
        })
    }

    const handelDetet = (index) => {
        setArr(prev => {
            const deletInput = [...prev]
            deletInput.splice(index , 1)
            return deletInput
        })
    }

    const handelCreateList = () => {
        setArr(prev => [...prev , input])
        setInput('')
    }


    return (<>
        <Container>
            <h1 className="text-center pt-4">Create Todo list</h1>
            <div className='w-100 d-flex align-items-center justify-content-center mt-4 gap-2'>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder='Enter Todo...' 
                className=' fs-3 p-2' 
                style={{border : '1px solid black'}}
                />
                <button 
                className='btn btn-primary fs-3 p-2'
                onClick={handelCreateList}
                >Add</button>
            </div>
            <div className="w-50 m-auto mt-5">
                <ul className='list-group'>
                    {arr.length !==0 ? arr.map((ele , index) => (
                        <li key={index} className='list-group-item '>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3>{ele}</h3>
                                <div className='d-flex align-items-center gap-2'>
                                    <button 
                                    className='btn btn-primary fs-3 p-2'
                                    onClick={() => handelEdite(index)}
                                    >Edit</button>
                                    <button 
                                    className='btn btn-danger fs-3 p-2' 
                                    onClick={() => handelDetet(index)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    ))
                    :
                    <h2 className='text-center'>List is empty</h2>
                    }
                </ul>
            </div>
        </Container>
    </>)
}

export default HomeComp