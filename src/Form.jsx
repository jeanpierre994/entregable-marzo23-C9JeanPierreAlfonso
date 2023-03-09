import { Fragment, useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Form = ({onSubmit}) => {
    
    const[name, setName] = useState("")
    const[favoriteSong, setFavoriteSong] = useState("")
    const[error, setError] = useState(false)

    const handleSubmit = () =>{
        const regex = /^\s/;
        if((name.length < 3 || regex.test(name)) || favoriteSong.length < 6){
            setError(true)
            onSubmit({})
        }else{
            const data = {
                name,
                favoriteSong,
            }
            setError(false)
            onSubmit(data)
            setName("")
            setFavoriteSong("")
        }
    }

    const handleChangeFavoriteSong = (e) => {
        setFavoriteSong(e.target.value);
    }
    
    const handleChangeName = (e) => {
        setName(e.target.value); 
    }
    return(
        <Fragment>
            <form>
                <h2 style={{color:"black"}}>Listado de Tema favotito</h2>
                <TextField id="outlined-basic" label="Su Nombre" variant="outlined" value={name} onChange={handleChangeName} size={"medium"} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Cancion Favorita Nombre" variant="outlined" value={favoriteSong} onChange={handleChangeFavoriteSong}/>
                <br />
                <br />
                <Button variant="contained" onClick={handleSubmit}>ENVIAR</Button>
                {error && <h3 style={{color:"red"}}>Por favor chequea que la información sea correcta</h3>}
            </form>
        </Fragment>
    )
}