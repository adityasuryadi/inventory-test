import React from 'react';
import { useRoute } from 'ziggy-js';
import ScoreBoard from '@/Components/ScoreBoard';

const View = ({ match,Score }) => {
    const route = useRoute();
    return (
        <ScoreBoard match={match} />
    )
}

export default View