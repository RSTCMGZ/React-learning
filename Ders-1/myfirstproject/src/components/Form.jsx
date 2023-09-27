import React from 'react'

function Form() {
  return (
    <div className='text-center'>
        <form action="">
            <input type="text" placeholder='Adınız Soyadınız:'className='p-2 w-50 mt-2' /> <br />
            <input type="text" placeholder='Numaranız:'className='p-2 w-50 mt-2' /><br />
            <button className='btn btn-primary w-50 p-2 mt-2'>Gönder</button>
        </form>
    </div>
  )
}

export default Form