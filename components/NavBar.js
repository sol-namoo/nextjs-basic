import Link from 'next/link';
import {useRouter} from 'next/router';
export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
          <Link className={[router.pathname === '/' ? 'active' : '', 'link' ].join(' ')}
                style={{marginRight: '8px',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                href="/">Home</Link>
          <Link className={[router.pathname === '/about' ? 'active' : '' , 'link'].join(' ')}
                style={{marginRight: '8px',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                href="/about">About</Link>
            <style jsx>{
                `
                  nav {
                    background-color: tomato;
                  }
                  .link {
                    margin-right: 8px;
                    color: white;
                    font-weight: bold;
                  }
                  .active {
                     color: cornflowerblue;
                  }
                `
            }</style>
        </nav>
    );
    }