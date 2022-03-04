module.exports = {
    format_date: date => {
        const monthNames = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const newDate = new Date(date);
        const day = date.getDate();
        const year = date.getFullYear();
        return `${monthNames[newDate.getMonth()]} ${day}, ${year}`;
    },
    format_time: time => {
        return new Date(time).toLocaleString('en-US', {
            hour12: true,
            hourCycle: 'h12',
            hour: 'numeric',
            minute: '2-digit'
        });
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${amount} ${word}s`;
        }
        return `${amount} ${word}`;
    }
}