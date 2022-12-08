import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NewNote } from './NewNote'

function App() {
    return (
        // container is for bootstrap
        <Container className='my-4'>
            <Routes>
                <Route path='/' element={<h1>Hi</h1>}/>
                <Route path='/new' element={<NewNote />} />
                {/* routes can be nested */}
                <Route path='/:id'>
                    {/* index: the path of parent route */}
                    <Route index element={<h1>Show</h1>} />
                    <Route path='edit' element={<h1>Edit</h1>} />
                </Route>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Container>
    )
}

export default App

