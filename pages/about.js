import React from 'react'

export const getStaticProps = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await res.json();
  console.log(data);
  return {
    props: { ninjas: data }
  }
}

export default function about({ ninjas }) {
  return (
    <div>
      <h1>About</h1>
      {ninjas.map(ninja => (
        <div style={{border:'1px solid red'}}>
          <h1>{ninja.name}</h1>
          <p>{ninja.username}</p>
        </div>
      )
      )}
    </div>
  )
}
