import MealsGrid from '@/components/Meals/MealsGrid';
import classes from './page.module.css'
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
import Loading from './loading';

async function MealLoader(){
    const meal = await getMeals();
    return(
        <MealsGrid meals={meal} />
    )
}

export default async function Meals(){

    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>for you</span>
                </h1>
                <p>
                    Choose your favourite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share Your Favourite Recipe.
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<Loading />}>
                    <MealLoader />
                </Suspense>
            </main>
        </>
    )
}