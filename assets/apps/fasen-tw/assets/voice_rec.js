const speech                = (()=>{
    if (window['webkitSpeechRecognition']) {
        const speechParser  = (()=>{
            const ROMANS            = {
                HASHES              : {
                    i: 1,
                    v: 5,
                    x: 10,
                    l: 50,
                    c: 100,
                    d: 500,
                    m: 1000,
                },
                KEYS                : [
                    "","c","cc","ccc","cd","d","dc","dcc","dccc","cm",
                    "","x","xx","xxx","xl","l","lx","lxx","lxxx","xc",
                    "","i","ii","iii","iv","v","vi","vii","viii","ix"
                ],
                toRoman             : num=>{
                    const digits    = String(+num).split('');
                    let i           = 3, roman = '';

                    while (i--)
                        roman       = (ROMANS.KEYS[+digits.pop() + (i * 10)] || "") + roman;

                    i               = Array(+digits.join("") + 1).join("M") + roman;

                    if (i === '')
                        return NaN;

                    return i;
                },
                toInteger           : s=>{
                    let accumulate  = 0;

                    for (let i = 0; i < s.length; i++) {
                        if (s[i] === "i" && s[i + 1] === "v") {
                            accumulate += 4;
                            i++;
                        } else if (s[i] === "i" && s[i + 1] === "x") {
                            accumulate += 9;
                            i++;
                        } else if (s[i] === "x" && s[i + 1] === "l") {
                            accumulate += 40;
                            i++;
                        } else if (s[i] === "x" && s[i + 1] === "c") {
                            accumulate += 90;
                            i++;
                        } else if (s[i] === "c" && s[i + 1] === "d") {
                            accumulate += 400;
                            i++;
                        } else if (s[i] === "c" && s[i + 1] === "m") {
                            accumulate += 900;
                            i++;
                        } else {
                            accumulate += ROMANS.HASHES[s[i]];
                        }
                    }

                    return accumulate;
                },
            };
            const NUMERIC           = {
                strToInt            : str=>{
                    str             = str.toLowerCase();

                    if (!isNaN(parseInt(str)))
                        return parseInt(str);

                    if (str === 'satu') return 1;
                    else if (str === 'dua') return 2;
                    else if (str === 'tiga') return 3;
                    else if (str === 'empat') return 4;
                    else if (str === 'lima') return 5;
                    else if (str === 'enam') return 6;
                    else if (str === 'tujuh') return 7;
                    else if (str === 'delapan') return 8;
                    else if (str === 'sembilan') return 9;
                    else if (str === 'sepuluh') return 10;

                    return NaN;
                },
            };
            const TOKENS            = {
                COMMANDS            : [
                    {
                        command     : 'new line',
                        pattern     : /^ ?\b(baris +baru|enter)\b$/m,
                        call        : ()=>{

                        },
                    },
                    {
                        command     : 'continue',
                        pattern     : /^ ?\blanjut\b$/m,
                        call        : ()=>{

                        },
                    },
                ],
                SYNTAX              : [
                    {
                        command     : 'heading',
                        break       : true,
                        pattern     : /^ ?bab +(\w+)$/im,
                        call        : reg_result=>{
                            let chapter     = reg_result[1].toLowerCase();
                            let number      = chapter;
                            let roman;

                            number          = NUMERIC.strToInt(number);
                            roman           = ROMANS.toRoman(number);

                            if (isNaN(parseInt(number))) {
                                return {
                                    text    : 'bab ' + chapter,
                                    value   : undefined,
                                    match   : false,
                                };
                            }

                            return {
                                text        : 'bab ' + roman,
                                value       : parseInt(number),
                                match       : true,
                            };
                        },
                    },
                    {
                        command     : 'subheading',
                        break       : false,
                        pattern     : /^ ?heading +(\w+) +([\w\S ]+)$/m,
                        call        : reg_result=>{
                            let number      = reg_result[1].toLowerCase();
                            let text        = reg_result[2];
                            let parsed      = 'heading ' + number;
                            let val, match  = false;

                            if (!isNaN(parseInt(number))) {
                                const tmp   = parseInt(number);

                                val         = tmp;

                                if (tmp === 1)
                                    parsed  = '#';
                                else
                                    parsed  = '#' + tmp;

                                match       = true;
                            }
                            else {
                                let tmp     = NUMERIC.strToInt(number);

                                if (!isNaN(tmp)) {
                                    tmp     = parseInt(tmp);

                                    val     = tmp;

                                    if (tmp === 1)
                                        parsed  = '#';
                                    else
                                        parsed  = '#' + tmp;

                                    match       = true;
                                }
                            }

                            if (text)
                                parsed      = parsed + ' ' + text;

                            return {
                                value       : val,
                                text        : parsed,
                                match       : match,
                            };
                        },
                    },
                ],
                SYMBOLS             : [
                    {
                        pattern     : / ?\btitik +ganda\b/g,
                        replace     : ':',
                    },
                    {
                        pattern     : / ?\btitik\b/g,
                        replace     : '.',
                    },
                    {
                        pattern     : / ?\bkoma\b/g,
                        replace     : ',',
                    },
                    {
                        pattern     : / ?\. ?,/g,
                        replace     : ';',
                    },
                    {
                        pattern     : / ?\bkutip\b/g,
                        replace     : '\'',
                    },
                    {
                        pattern     : / ?\bkutip +(ganda\b|dua\b|2)/g,
                        replace     : '"',
                    },
                    {
                        pattern     : / ?\btanda +tanya\b/ig,
                        replace     : '?',
                    },
                    {
                        pattern     : / ?\bbuka +kurung\b ?/g,
                        replace     : '(',
                    },
                    {
                        pattern     : / ?\btutup +kurung\b/g,
                        replace     : ')',
                    },
                    {
                        pattern     : / ?\( ?siku\b ?/g,
                        replace     : '[',
                    },
                    {
                        pattern     : / ?\) ?siku\b/g,
                        replace     : ']',
                    },
                    {
                        pattern     : / ?\( ?kurawal\b ?/g,
                        replace     : '{',
                    },
                    {
                        pattern     : / ?\) ?kurawal\b/g,
                        replace     : '}',
                    },
                ],
            };

            return text=>{
                let match           = {
                    command         : 'default',
                    break           : false,
                    text            : text,
                    value           : undefined,
                };

                for (let i=0; i<TOKENS.SYNTAX.length; i++) {
                    const syntax    = TOKENS.SYNTAX[i];
                    const res       = syntax.pattern.exec(text);

                    if (res) {
                        const tmp       = syntax.call(res);

                        if (tmp.match) {
                            match.text      = tmp.text;
                            match.command   = syntax.command;
                            match.break     = syntax.break;
                            match.value     = tmp.value;
                            break;
                        }
                    }
                }

                TOKENS.SYMBOLS.forEach(symbol=>{
                    match.text          = match.text.replaceAll(symbol.pattern, symbol.replace);
                });

                return match;
            };
        })();
        const events        = {
            listen              : false,
            parsed              : {
                'new line'      : ()=>{},
                'continue'      : ()=>{},
                'heading'       : ()=>{},
                'subheading'    : ()=>{},
                'default'       : ()=>{},
            },
        };
        const machine       = {
            isListen        : false,
            timer           : {
                listen      : 1,
            },
            results         : [],
            transcript      : '',
        };
        const rec           = (()=>{
            const rec       = new window['webkitSpeechRecognition']();

            rec.continous       = true;
            rec.interimResults  = true;
            rec.lang            = 'id';

            rec.onstart         = ()=>{
            };
            rec.onend           = ()=>{
                machine.transcript  = '';
                if (events.listen)
                    rec.start();
            };
            rec.onresult        = ev=>{
                let text        = Array.from(ev.results)
                    .map(results=>results[0])
                    .map(results=>results.transcript)
                    .join('');

                if (ev.results[0].isFinal) {
                    const res   = speechParser(text);

                    events.parsed[res.command](res);
                }
            };

            return rec;
        })();

        machine.stop            = ()=>{
            events.listen       = false;
            rec.stop();
        };
        machine.start           = ()=>{
            events.listen       = true;
            rec.start();
        };
        machine.setEvent        = (name, callback)=>{
            events.parsed[name] = callback;

            return machine;
        };
        machine.error           = false;

        return machine;
    }

    const x         = {
        error       : true,
        setEvent    : ()=>{
            console.warn('webkitSpeechRecognition not supported!');

            return x;
        },
        start       : ()=>{
            console.warn('webkitSpeechRecognition not supported!');
        },
        stop        : ()=>{
            console.warn('webkitSpeechRecognition not supported!');
        },
    };

    return x;
})();