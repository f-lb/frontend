import React from 'react';
import WordAnalysisDashboard from '../components/WordAnalysisDashboard';

export default function TodayReportPage() {
    // 더미 데이터 설정
    const totalSentences = 38;
    const negativeSentences = 5;
    const positiveSentences = 2;
    const yesterdayNegativePercent = 8.7;
    const negativeVariance = -2;
    const positiveVariance = 0;

    return (
        <>
            <WordAnalysisDashboard
                totalSentences={totalSentences}
                negativeSentences={negativeSentences}
                positiveSentences={positiveSentences}
                yesterdayNegativePercent={yesterdayNegativePercent}
                negativeVariance={negativeVariance}
                positiveVariance={positiveVariance}
            />
        </>
    );
}