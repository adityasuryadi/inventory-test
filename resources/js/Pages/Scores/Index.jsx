import React from 'react';
import { useForm,Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { useRoute } from 'ziggy-js';
import ScoreBoard from '@/Components/ScoreBoard';

const Index = ({ match }) => {
    const route = useRoute();
    return (
        <ScoreBoard match={match} />
    )
}