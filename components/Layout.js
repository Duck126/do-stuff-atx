import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head'
import styles from '../styles/Layout.module.css'


const Layout = ({ children }) => {
    
    //getStaticProps();

    return (
        <div className={styles.container}>
            <Head>
                <title>Eventfull</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin="" />
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                    crossOrigin=""></script>
                <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>

            </Head>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    );
}

// export async function getStaticProps(context) {
//     const res = await fetch(`https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=S2RWMEKZLXUJSMZOTB&redirect_uri=http://localhost:3000/oauth/redirect?`)
//     const data = await res.json()
//     console.log(res);
//     if (!data) {
//         console.log(data.json);
//         // return {
//         //     redirect: {
//         //         destination: EventRedirect,
//         //         permanent: false,
//         //     },
//         // }
//     }

//     return {
//         props: { data }, // will be passed to the page component as props
//     }
// }



export default Layout;