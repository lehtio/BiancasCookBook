import { useState } from 'react'

function App() {
  const [recipes, setRecipes] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')

  const handleAddRecipe = (e) => {
    e.preventDefault()
    const newRecipe = {
      id: Date.now(),
      title,
      description,
      content,
    }
    setRecipes([...recipes, newRecipe])
    setTitle('')
    setDescription('')
    setContent('')
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Kokkikirja</h1>

      <form onSubmit={handleAddRecipe} style={{ marginBottom: '2rem' }}>
        <div>
          <label>Otsikko</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label>Kuvaus</label><br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label>Ohjeet ja ainekset</label><br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="5"
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Lisää resepti</button>
      </form>

      <h2>Reseptit</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
          <h3>{recipe.title}</h3>
          <p><em>{recipe.description}</em></p>
          <pre>{recipe.content}</pre>
        </div>
      ))}
    </div>
  )
}

export default App
