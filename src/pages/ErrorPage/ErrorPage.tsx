import Styles from './errorPage.module.css'
import { Link } from 'wouter'

export const ErrorPage = () => {
    return(
        <div className={Styles.container}>
         <div>
         <h1 className={Styles.h1}>Error 404 Page Not Found!</h1>
         <h2 className={Styles.h2}> There are no gifs here 👾 </h2>
         </div>
        {/* <div className={Styles.btnDiv}>
        <Link className={Styles.links} to="/">
        <div className={Styles.btn}> Back to home</div>
        </Link>
        </div> */}
     </div>
    )
}