# Tutorial

## Setup

### 1. Create app
```bash
npm create vite
cd take-notes
npm install
npm run dev
```
- app name: take-notes
- select `react` as framework
- select `typescript` as variant

### 2. Remove unecessary default content
```bash
rm -r src/assets
rm src/App.css
rm src/index.css
```

Delete `import './index.css'` from `main.tsx`
```bash
sed -i '/index.css/d'  src/main.tsx
```
- `sed` is a text editing command
- `-i` for editing the file itself
- `'/index.css/d'` will delete (`d`) the line with the pattern provided (`index.css`) 

Replace content of `App.tsx`
```bash
echo '
function App() {
    return <h1>Hi</h1>
}

export default App
' > src/App.tsx
```

### 3. Install `bootstrap` and `react router`

```bash
npm i react-bootstrap bootstrap react-router-dom
```

Import `bootsrap` to `App.tsx`
```bash
sed -i "1iimport 'bootstrap/dist/css/bootstrap.min.css'\n" src/App.tsx
```
- `1i` at the beginning of the string to be inserted tells `sed` the line to insert the thext to


### Setup Router
Edit `src/main.tsx`:
```tsx
import { BrowserRouter } from 'react-router-dom'
// ...
<BrowserRouter>
    <App />
</BrowserRouter>
//...
```

Edit `src/App.tsx`
```tsx
import { Routes, Route, Navigate } from 'react-router-dom'
//...
function App() {
    return (
        <Routes>
            <Route path='/' element={<h1>Hi</h1>}/>
            <Route path='/new' element={<h1>NEW</h1>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

//...
```