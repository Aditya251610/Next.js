import Link from 'next/link';
import Image from 'next/image';
import classes from './Header.module.css';
import Logo from '@/assets/logo.png';
import HeaderBackground from '@/components/Header/HeaderBackground';


export default function Header() {
    return(
        <>
            <HeaderBackground />
            <header className={classes.header}>
                <Link href='/' className={classes.logo}>
                    <Image src={Logo} alt='Logo' priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href='/meals'>Browse Meals</Link>
                        </li>

                        <li>
                            <Link href='/community'>Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}