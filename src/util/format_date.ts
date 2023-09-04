export const format_date = (date: Date) => {
    function getDaySuffix(day: number): string {
        if (day >= 11 && day <= 13) return 'th';

        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    const new_date = new Date(date);
    const day = new_date.getDate();
    const suffix = getDaySuffix(day);
    const month = new_date.toLocaleString('en-US', { month: 'long' });
    const year = new_date.getFullYear();

    return `${month} ${day}${suffix}, ${year}`;
};
