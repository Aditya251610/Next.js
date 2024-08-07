export default function SlugPage({params}){
    return(
        <div>
            <h1>Slug Page</h1>
            <p>{params.slug}</p>
        </div>
    )
}