import { useRouter } from 'next/router';

export default function MovieDetail() {
    const router = useRouter();
    const [title, id] = router.query.params;

    return (
        <div>
            <h4>{title || "Loading..."}</h4>
            <img src={router.query.imgUrl} />
        </div>
    );
}

export function getServerSideProps({params:{params}}){
    return{
        props:{
            params,
        }
    }
}