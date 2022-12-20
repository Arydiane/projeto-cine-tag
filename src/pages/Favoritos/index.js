import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css"

function Favoritos(){
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id="1" titulo="Rua 15" capa="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png" />
            </section>
        </>
    )
}

export default Favoritos; 