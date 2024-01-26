import {Grid, Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Noticia from './Noticia';
import useNoticias from '../hooks/useNoticias'
const ListadoNoticias = () => {

    const {noticias,totalNoticias,pagina,handleChangePagina} = useNoticias();

    const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
        <Typography
        textAlign={'center'}
        marginY={5}
        variant={'h3'}
        component={'h2'}

        >Ultimas Noticias</Typography>

        <Grid
        container
        spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia
                key={noticia.url}
                noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          marginY: 5
        }}
        >
          <Pagination 
          page={pagina}
          count={totalPaginas} 
          color="secondary" 
          onChange={handleChangePagina} />

        </Stack>
    </>
  )
}

export default ListadoNoticias
