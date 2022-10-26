import Link from 'next/link';
import React from 'react'

export const getStaticProps = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await res.json();
  return {
    props: { ninjas: data }
  }
}

export default function about({ ninjas }) {
  return (
    <div>
      <h1>About</h1>
      {ninjas.map(ninja => (
        <div style={{border:'1px solid red',margin:'1rem'}}>
          <Link href={'/users/'+ninja.id}><h1>{ninja.name}</h1></Link>
          <p>{ninja.username}</p>
        </div>
      )
      )}
    </div>
  )
}
