import React, {useState, useEffect} from 'react';

import api from './Services/api'

import './global.css'
import './sidebar.css'
import './app.css'
import './main.css'

import Notes from './Components/Notes'
import RadioButton from './Components/RadioButton';

function App() {

  const [ selectedValue, setSelectedValue ] = useState('all');
  const [ title, setTitles] = useState('')
  const [ notes, setNotes] = useState('')
  const [ allNotes, setAllNotes] = useState([])
  
  useEffect(() => {
    getAllNotes();
  }, [])

  async function getAllNotes(){
    const response = await api.get('/annotations',);
    setAllNotes(response.data)
  }

  async function loadNotes(option){
    const params = { priority: option };
    const response = await api.get('/prioriteis', { params });

    if (response ){
      setAllNotes(response.data);
    }
  }

  async function handleChange(e){
    setSelectedValue(e.value);
    setSelectedValue(event.target.value);
    if (e.checked && e.valeu !== 'all'){
      loadNotes(e.valeu);
    } else {
      getAllNotes();
    }
  }

  async function handleDelete(id){
    const deletedNote = await api.delete(`/annotations/${id}`);

    if (deletedNote){
      setAllNotes(allNotes.filter(note => note._id !== id));
    }
  }

  async function handleChangePriority(id){
    const note = await api.post(`/priorities/${id}`);

    if (note){
      getAllNotes();
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitles('')
    setNotes('')

    setAllNotes([ ... allNotes, response.data])

  }  

  useEffect(() => {
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#ffd3ca'
      if (title && notes){
        btn.style.background = "#EB8F7A"
      }
    }
    enableSubmitButton()
  }, [title, notes])
  
  return (
   <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className='input-block'>
            <label htmlFor='title'>Titulo da Anota????o</label>
            <input 
              required
              maxLength="30"
              value={title}
              onChange={e => setTitles(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='nota'>Anota????es</label>
            <textarea
              required
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
          <button id="btn_submit" type='submit'>Salvar</button>
        </form>
        < RadioButton 
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
      </aside>
      <main>
        <ul>
          {allNotes.map(data => (
            <Notes
              key={data._id} 
              data={data}
              handleDelete={handleDelete}
              handleChangePriority={handleChangePriority}
               />
          ))}
        </ul>
      </main>
   </div>
  )
}

export default App;
