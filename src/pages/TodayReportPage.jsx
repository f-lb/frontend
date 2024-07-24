import React from 'react';
import WordAnalysisDashboard from '../components/WordAnalysisDashboard';

export default function TodayReportPage() {
    // 더미 데이터 설정
    const totalWords = 104;
    const negativeWords = 7;
    const positiveWords = 1;
    const yesterdayNegativePercent = 8.7;

    return (
        <>
            <WordAnalysisDashboard
                totalWords={totalWords}
                negativeWords={negativeWords}
                positiveWords={positiveWords}
                yesterdayNegativePercent={yesterdayNegativePercent}
            />
        </>
    );
}