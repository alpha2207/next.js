import React from 'react'
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const Route = ({ninja}) => {
    return (
        <div style={{border:'1px solid grey',margin:'1rem 0',padding:'1rem'}}>
            <h1>{ninja.name}</h1>
            <h5>{ninja.username}</h5>
            <span>{ninja.email}</span>

        </div>
    )
}

export default Route;