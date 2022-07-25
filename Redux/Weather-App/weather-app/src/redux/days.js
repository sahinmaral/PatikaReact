const days = [
    {
        'tr' : 'Pazartesi',
        'en' : 'Monday'
    },
    {
        'tr' : 'Salı',
        'en' : 'Tuesday'
    },
    {
        'tr' : 'Çarşamba',
        'en' : 'Wednesday'
    },
    {
        'tr' : 'Perşembe',
        'en' : 'Thursday'
    },
    {
        'tr' : 'Cuma',
        'en' : 'Friday'
    },
    {
        'tr' : 'Cumartesi',
        'en' : 'Saturday'
    },
    {
        'tr' : 'Pazar',
        'en' : 'Sunday'
    }
]

export const retrieveDay = (day_eng) => {
    return days.find((day)=>day.en === day_eng).en.toString()
} 