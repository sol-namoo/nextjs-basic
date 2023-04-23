import Link from 'next/link';
 export default function Home(){
    return (
        <div>
            <h1>Home Page</h1>
            <h2>try going to <Link href='/about'>this page!</Link></h2>
        </div>
    );
 }