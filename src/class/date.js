export default class DateHandler {
    constructor(){
        this.current = new Date;
        this.currentDay = this.current.getDate();
        this.currentMonth = this.current.getMonth();
        this.firstDayOfWeek = this.currentDay - this.current.getDay();
        this.lastDayOfWeek = this.firstDayOfWeek + 6;
        this.monthsInYearArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.daysInWeekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.labels = [];
        this.weeklyDateData = [];
        this.weeklyDate = [];
    }

    dateOrdinal(d) {
        if (d == 31 || d == 21 || d == 1) return d + "st";
        else if (d == 22 || d == 2) return d + "nd";
        else if (d == 23 || d == 3) return d + "rd";
        else return d + "th";
    };

    getLabels() {
        const monthLabel = this.monthsInYearArr[this.currentMonth].substr(0, 3);

        this.daysInWeekArr.forEach((v, idx) => {
            const obj = { main: v, sub: `${this.dateOrdinal(this.firstDayOfWeek + idx)}, ${monthLabel}` }; 
            this.labels.push(obj);
        });
    }

    getWeeklyDateData() {
        this.daysInWeekArr.forEach((v, idx) => {
            const obj = { date: this.firstDayOfWeek + idx, dayLongName: v, dayShortName: v.substr(0, 3)  };
            this.weeklyDateData.push(obj);
        });
    }

    getWeeklyDate() {
        this.daysInWeekArr.forEach((v, idx) => {
            this.weeklyDate.push(this.firstDayOfWeek + idx);
        });
    }

    getDateObject() {
        this.getLabels();
        this.getWeeklyDateData();
        this.getWeeklyDate();

        return {
            currentDate: this.currentDay,
            labels: this.labels,
            weekDateData: this.weeklyDateData,
            weekDate: this.weeklyDate,
            daysInWeek: this.daysInWeekArr,
            monthLabel: this.monthsInYearArr,
            month: this.currentMonth
        }
    }
}