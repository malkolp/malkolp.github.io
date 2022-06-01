(()=>{
    moment.locale('id');
    const months_           = {
        '01'                : {
            full            : 'januari',
            alias           : 'jan',
        },
        '02'                : {
            full            : 'februari',
            alias           : 'feb',
        },
        '03'                : {
            full            : 'maret',
            alias           : 'mar',
        },
        '04'                : {
            full            : 'april',
            alias           : 'apr',
        },
        '05'                : {
            full            : 'mei',
            alias           : 'mei',
        },
        '06'                : {
            full            : 'juni',
            alias           : 'jun',
        },
        '07'                : {
            full            : 'juli',
            alias           : 'jul',
        },
        '08'                : {
            full            : 'agustus',
            alias           : 'agu',
        },
        '09'                : {
            full            : 'september',
            alias           : 'sep',
        },
        '10'                : {
            full            : 'oktober',
            alias           : 'okt',
        },
        '11'                : {
            full            : 'november',
            alias           : 'nov',
        },
        '12'                : {
            full            : 'desember',
            alias           : 'des',
        },
    };

    window.date_format      = {
        formatSince         : (el, timestamp, iter=0)=>{
            const seconds   = iter * 1000;
            const date      = (timestamp.split(' '))[0];

            el.innerText    = moment(date, "YYYY-MM-DD").fromNow();
            if (seconds > 0) {
                return setInterval(()=>{
                    el.innerText    = moment(date, "YYYY-MM-DD").fromNow();
                }, seconds);
            }

            return undefined;
        },
        deleteSince         : o=>{
            if (o)
                clearInterval(o);
        },
        formatDate          : (timestamp, includeTime=false, timeSeparator=' / ')=>{
            timestamp       = timestamp.split(' ');
            const date      = timestamp[0].split('-');
            const time      = timestamp[1].split(':');

            let res         = date[2] + ' ' + months_[date[1]].full + ' ' + date[0];

            if (includeTime)
                return  res + timeSeparator + time[0] + ':' + time[1];

            return res;
        },
        formatTimeSituation : (h=new Date().getHours())=>{
            if (h < 4 || h > 18)
                return 'malam';
            if (h < 12)
                return 'pagi';
            if (h < 15)
                return 'siang';

            return 'sore';
        },
        getDay              : timestamp=>{
            timestamp       = (((timestamp.split(' '))[0]).split('-'))[2];
            if (timestamp.length < 2)
                return '0' + timestamp;
            return timestamp;
        },
        getMonth            : timestamp=>{
            return months_[(((timestamp.split(' '))[0]).split('-'))[2]]['alias'];
        },
        getYear             : timestamp=>{
            return (((timestamp.split(' '))[0]).split('-'))[0];
        },
    };
})();