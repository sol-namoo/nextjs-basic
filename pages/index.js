import Link from 'next/link';
import Seo from "../components/Seo";
 export default function Home(){
    return (
        <div>
            <Seo title='Home'/>
            <h1>Home Page</h1>
            <h2>try going to <Link href='/about'>this page!</Link></h2>
        </div>
    );
 }