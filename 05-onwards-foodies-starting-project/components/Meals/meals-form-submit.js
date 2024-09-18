'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit({ type }) {
    const { pending } = useFormStatus();

    return <button disabled={pending} type={type}>
        {pending ? 'Submitting...' : 'Share Meal'}
    </button>
}