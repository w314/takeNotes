import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path='/products' element={<h1>Hi</h1>}/>
            <Route path='/new' element={<h1>NEW</h1>} />
            {/* routes can be nested */}
            <Route path='/:id'>
                {/* index: the path of parent route */}
                <Route index element={<h1>Show</h1>} />
                <Route path='edit' element={<h1>Edit</h1>} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default App

