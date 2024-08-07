import Link from 'next/link';

export default function Meals(){
    return(
        <div>
            Meals
            <p><Link href='/meals/info-1'>Meal 1</Link></p>
            <p><Link href='/meals/info-2'>Meal 2</Link></p>
        </div>
    )
}