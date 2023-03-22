/**
 * All utils for calendar and date related
 */

export const getCurrentWeek = () => {
    const curr = new Date; // get current date
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    const last = first + 6; // last day is the first day + 6

    const firstday = new Date(curr.setDate(first)).toUTCString();
    const lastday = new Date(curr.setDate(last)).toUTCString();

    console.log('Checking on firstday - ', firstday);
}