// noinspection HtmlUnknownAnchorTarget,JSUnresolvedFunction,JSUnresolvedVariable

window.university__ = {
    id   : 1,
    name : 'universitas muhammadiyah malang',
    faculties : {
        'teknik' : {
            id : 1,
            name : 'teknik',
            departments : {
                'informatika' : {
                    id : 1,
                    name : 'informatika',
                    advisors : {
                        'fulan fulana' : {
                            id : 1,
                            name : 'fulan fulana',
                        }
                    }
                },
                'elektro' : {
                    id : 1,
                    name : 'elektro',
                    advisors : {
                        'fulan fulana' : {
                            id : 1,
                            name : 'fulan fulana',
                        }
                    }
                },
            },
        }
    },
}

window.advisors__ = {

}

window.map__ = {
    'universitas muhammadiyah malang' : university__,
    'teknik' : university__.faculties.teknik,
    'informatika' : university__.faculties['teknik'].departments['informatika'],
    'elektro' : university__.faculties['teknik'].departments['elektro'],
    'fulan fulana' : university__.faculties['teknik'].departments['informatika'].advisors['fulan fulana'],
}

window.user_roles__ = {
    'reader'  : 0,
    'advisor' : 1,
    'writer'  : 2,
    'admin'   : 3,
}

window.watermark__ = {
    'OFF' : 0,
    'ON'  : 1,
    'DEFAULT' : 0,
}

window.privacy__ = {
    'writer_only' : 0,
    'advisor'     : 1,
    'logged_in'   : 2,
    'public'      : 3,
    'DEFAULT'     : 0,
}

window.preface__ = {
    'default'   : 0,
    'basmallah' : 1,
    'DEFAULT'   : 0,
}

window.phases__ = {
    'proposal'   : 0,
    'writing'    : 1,
    'plag_check' : 2,
    'exam'       : 3,
    'submit'     : 4,
    'DEFAULT'    : 0,
}

window.lang__ = {
    'id'      : 0,
    'en-us'   : 1,
    'ar'      : 2,
    'DEFAULT' : 0,
}

window.lang_dic__ = {
    'and'       : 'dan',
    'january'   : 'januari',
    'february'  : 'februari',
    'march'     : 'maret',
    'april'     : 'april',
    'may'       : 'mei',
    'june'      : 'juni',
    'july'      : 'juli',
    'august'    : 'agustus',
    'september' : 'september',
    'october'   : 'oktober',
    'november'  : 'november',
    'december'  : 'desember',
    'final project' : 'tugas akhir',
    'undergraduate thesis' : 'skripsi',
    'majoring' : 'bidang minat',
    'faculty' : 'fakultas',
    'department' : 'program studi',
    'university' : 'universitas',
    'from' : 'oleh',
    'this thesis is submited to meet one of the requirements' : 'diajukan untuk memenuhi',
    'to achieve' : 'guna meraih',
    'bachelor degree' : 'gelar sarjana',
    'master degree' : 'gelar magister',
    'informatic' : 'informatika',
    'engineering' : 'teknik',
    'preface_basmallah_pattern' : '<div id="pg-kata_pengantar" class="head-count"><div id="pg-kata_pengantar-content"><div class="pendahuluan-sub-title">kata pengantar<img src="##REP-logo##" alt=""></div><p>Penulis memanjatkan Segala Puji Bagi Allah SWT Tuhan semesta alam dan Shalawat serta salam selalu tercurahkan kepada Nabi Muhammad SAW, Penulis berhasil menyelesaikan Tugas Akhir dengan judul:</p><p id="pg-kata_pengantar-judul">##REP-title##</p><p>Melalui kesempatan yang sangat berbahagia ini penulis menyampaikan ucapan terima kasih yang sebesar-besarnyakepada semua pihak yang telah membantu dan terlibat dalam dalam penyelesaian tugas akhir ini.</p><p>Peneliti menyadari bahwa dalam penulisan Tugas Akhir ini masih banyak kekurangan dan keterbatasan. Oleh karena itu penulis mengharapkan saran yang  membangun agar tulisan ini bermanfaat bagi perkembangan ilmu pengetahuan kedepannya.</p></div><div></div><p id="pg-kata_pengantar-info"><span style="text-transform: capitalize;">##REP-date##, ##REP-location##</span><br><br><br><br><br><span style="text-transform: capitalize;">##REP-name##</span></p></div>',
    'preface_default_pattern' : '<div id="pg-kata_pengantar" class="head-count"><div id="pg-kata_pengantar-content"><div class="pendahuluan-sub-title">kata pengantar</div><p>Penulis memanjatkan Segala Puji Bagi Tuhan yang maha esa sehingga Penulis berhasil menyelesaikan Tugas Akhir dengan judul:</p><p id="pg-kata_pengantar-judul">##REP-title##</p><p>Melalui kesempatan yang sangat berbahagia ini penulis menyampaikan ucapan terima kasih yang sebesar-besarnyakepada semua pihak yang telah membantu dan terlibat dalam dalam penyelesaian tugas akhir ini.</p><p>Peneliti menyadari bahwa dalam penulisan Tugas Akhir ini masih banyak kekurangan dan keterbatasan. Oleh karena itu penulis mengharapkan saran yang  membangun agar tulisan ini bermanfaat bagi perkembangan ilmu pengetahuan kedepannya.</p></div><div></div><p id="pg-kata_pengantar-info"><span style="text-transform: capitalize;">##REP-date##, ##REP-location##</span><br><br><br><br><br><span style="text-transform: capitalize;">##REP-name##</span></p></div>',
    'chapter' : 'bab',
    'preface' : 'kata pengantar',
    'approval' : 'persetujuan',
    'statement' : 'pernyataan',
    'attestation' : 'pernyataan',
    'approval empty' : 'tidak ada lembar persetujuan',
    'statement empty' : 'tidak ada lembar pernyataan',
    'attestation empty' : 'tidak ada lembar pengesahan',
    'approval sheet' : 'lembar persetujuan',
    'statement sheet' : 'lembar pernyataan',
    'attestation sheet' : 'lembar pengesahan',
    'images list' : 'daftar gambar',
    'tables list' : 'daftar tabel',
    'attachments list' : 'daftar lampiran',
    'empty' : 'kosong',
    'table of content' : 'daftar isi',
    'references' : 'daftar pustaka'
}

window.ar_type__ = {
    'un_thesis' : 0,
    'thesis'    : 1,
    'DEFAULT'   : 0,
}

window.citation_format__ = {
    'APA'      : {
        id   : 0,
        code : 'APA',
        name : 'American Psychological Association',
    },
    'DEFAULT' : {
        id   : 0,
        code : 'APA',
        name : 'American Psychological Association',
    },
}

window.citation_type__ = {
    'journal' : 0,
    'book'    : 1,
    'DEFAULT' : 0,
}

window.citation_arrange__ = {
    'front'   : 0,
    'back'    : 1,
    'inline'  : 2,
    'DEFAULT' : 3,
}

window.document__ = {
    meta : {
        id           : undefined,
        title        : undefined,
        version      : undefined,
        preface      : preface__.default,
        privacy      : privacy__.writer_only,
        watermark    : false,
        template     : undefined,
        location     : undefined,
        approval     : undefined,
        attestation  : undefined,
        statement    : undefined,
        citation     : 'APA',
        lang         : lang__.id,
        type         : ar_type__.un_thesis,
        date         : {
            year     : undefined,
            created  : undefined,
            modified : undefined,
            approved : undefined,
            submit   : undefined,
        },
        author       : {
            name     : undefined,
            id       : undefined,
        },
        majoring     : undefined,
        department   : {
            name     : undefined,
            id       : undefined,
        },
        faculty      : {
            name     : undefined,
            id       : undefined,
        },
        university   : {
            name     : undefined,
            id       : undefined,
        },
        advisors     : [],
        keywords     : [],
        images       : [],
        citations    : {},
        cite_keys    : [],
    },
    variables : {},
    raw     : undefined,
    text    : {
        all    : undefined,
        cp_i   : undefined,
        cp_ii  : undefined,
        cp_iii : undefined,
        cp_iv  : undefined,
        cp_v   : undefined,
        att    : undefined,
    },
    html    : {
        all    : undefined,
        cover  : undefined,
        toc    : undefined,
        cp_1   : undefined,
        cp_2   : undefined,
        cp_3   : undefined,
        cp_4   : undefined,
        cp_5   : undefined,
        att    : undefined,
        references : undefined,
    },
    compressed : undefined,
    clear   : function () {
        document__['meta']['id']                    = undefined;
        document__['meta']['title']                 = undefined;
        document__['meta']['version']               = undefined;
        document__['meta']['preface']               = preface__.default;
        document__['meta']['privacy']               = privacy__.writer_only;
        document__['meta']['watermark']             = undefined;
        document__['meta']['template']              = undefined;
        document__['meta']['location']              = undefined;
        document__['meta']['approval']              = undefined;
        document__['meta']['attestation']           = undefined;
        document__['meta']['statement']             = undefined;
        document__['meta']['citation']              = 'APA';
        document__['meta']['lang']                  = lang__.id;
        document__['meta']['type']                  = ar_type__.un_thesis;
        document__['meta']['date']                  = {};
        document__['meta']['date']['year']          = undefined;
        document__['meta']['date']['created']       = undefined;
        document__['meta']['date']['modified']      = undefined;
        document__['meta']['date']['approved']      = undefined;
        document__['meta']['date']['submit']        = undefined;
        document__['meta']['author']                = {};
        document__['meta']['author']['name']        = undefined;
        document__['meta']['author']['id']          = undefined;
        document__['meta']['majoring']              = undefined;
        document__['meta']['department']            = {};
        document__['meta']['department']['name']    = undefined;
        document__['meta']['department']['id']      = undefined;
        document__['meta']['faculty']               = {};
        document__['meta']['faculty']['name']       = undefined;
        document__['meta']['faculty']['id']         = undefined;
        document__['meta']['university']            = {};
        document__['meta']['university']['name']    = undefined;
        document__['meta']['university']['id']      = undefined;
        document__['meta']['advisors']              = [];
        document__['meta']['keywords']              = [];
        document__['meta']['images']                = [];
        document__['meta']['cite_keys']             = [];
        document__['variables']                     = {};
        document__['raw']                           = undefined;
        document__['text']                          = {};
        document__['text']['all']                   = undefined;
        document__['text']['att']                   = undefined;
        document__['text']['cp_i']                  = undefined;
        document__['text']['cp_ii']                 = undefined;
        document__['text']['cp_iii']                = undefined;
        document__['text']['cp_iv']                 = undefined;
        document__['text']['cp_v']                  = undefined;
        document__['html']                          = {};
        document__['html']['all']                   = undefined;
        document__['html']['cover']                 = undefined;
        document__['html']['toc']                   = undefined;
        document__['html']['att']                   = undefined;
        document__['html']['references']            = undefined;
        document__['html']['cp_1']                  = undefined;
        document__['html']['cp_2']                  = undefined;
        document__['html']['cp_3']                  = undefined;
        document__['html']['cp_4']                  = undefined;
        document__['html']['cp_5']                  = undefined;
        document__['html']['abstract_id']           = undefined;
        document__['html']['abstract_en']           = undefined;
        document__['images']                        = undefined;
        document__['tables']                        = undefined;
        document__['toc']                           = undefined;
        document__['references']                    = [];
        document__['sources']                       = [];
        document__['compressed']                    = undefined;
    }
}

window.parser__ = {
    init  : function (input) {
        let iterable;

        if (input['iterable'] === undefined) iterable = false;
        else iterable = input['iterable'];
        if (input['pre_value'] === undefined) parser__.CONF.SOURCE.PRE = '';
        else parser__.CONF.SOURCE.PRE = input['pre_value'];
        if (input['diagram'] !== undefined) {
            parser__.LIB.DIAGRAM.EL = document.getElementById('parser-diagram');
            parser__.LIB.DIAGRAM.EL.parentNode.removeChild(parser__.LIB.DIAGRAM.EL);
        }
        parser__.CONF.SOURCE.PACKAGE = document.querySelector('meta[name="pkg"]').content;

        parser__.REGEX = {
            'MULTI_LINE'  : {
                infix     : '\\n\\n+',
                attr      : 'gm',
                repl      : '\n\n',
            },
            'EMPTY_LINE'  : {
                infix     : '[ \\u00A0][ \\u00A0]*',
                attr      : 'gm',
                repl      : ' ',
            },
            'MULTI_SPACE' : {
                infix     : '^\\/\\/[\\w\\S ]*$',
                attr      : 'gm',
                repl      : '',
            },
            'USE_SOURCE'  : {
                infix     : '^(\\[([A-Z-a-z_][\\w]*)\\][ \u00A0]*)?ref([ \u00A0]+)([\\w\\S]+)([ \u00A0]*)$',
                attr      : 'm',
                repl      : '',
            },
            'INLINE_BOLD' : {
                prefix    : '\\*\\*',
                prefix_v  : '**',
                prefix_r  : '<strong>',
                infix     : '([ \\w\\S]+)',
                postfix   : '\\*\\*',
                postfix_v : '**',
                postfix_r : '</strong>',
                sub       : true,
                attr      : 'm',
            },
            'INLINE_EMP'  : {
                prefix    : '\\*',
                prefix_v  : '*',
                prefix_r  : '<em>',
                infix     : '([ \\w\\S]+)',
                postfix   : '\\*',
                postfix_v : '*',
                postfix_r : '</em>',
                sub       : true,
                attr      : 'm',
            },
            'INLINE_UND'  : {
                prefix    : '__',
                prefix_v  : '__',
                prefix_r  : '<u>',
                infix     : '([ \\w\\S]+)',
                postfix   : '__',
                postfix_v : '__',
                postfix_r : '</u>',
                sub       : true,
                attr      : 'm',
            },
            'INLINE_UPPER': {
                prefix    : '\\bupper\\(',
                prefix_v  : 'upper(',
                prefix_r  : '<span style="text-transform: uppercase">',
                infix     : '([ \\w\\S]+)',
                postfix   : '\\)',
                postfix_v : ')',
                postfix_r : '</span>',
                sub       : true,
                attr      : 'm',
            },
            'INLINE_LOWER': {
                prefix    : '\\blower\\(',
                prefix_v  : 'lower(',
                prefix_r  : '<span style="text-transform: lowercase">',
                infix     : '([ \\w\\S]+)',
                postfix   : '\\)',
                postfix_v : ')',
                postfix_r : '</span>',
                sub       : true,
                attr      : 'm',
            },
            'INLINE_CAPT' : {
                prefix    : '\\bcapital\\(',
                prefix_v  : 'capital(',
                prefix_r  : '<span style="text-transform: capitalize">',
                infix     : '([ \\w\\S]+)',
                postfix   : '\\)',
                postfix_v : ')',
                postfix_r : '</span>',
                sub       : true,
                attr      : 'm',
            },
            'INLINE_MARK' : {
                prefix    : '\\bmark\\(',
                prefix_v  : 'mark(',
                prefix_r  : '<span style="background-color: #F4D03F;color: #834900">',
                infix     : '([ \\w\\S]+)',
                postfix   : '\\)',
                postfix_v : ')',
                postfix_r : '</span>',
                sub       : true,
                attr      : 'm',
            },
            'VARIABLE'    : {
                prefix    : '\\$',
                prefix_v  : '$',
                prefix_r  : '##VAR-',
                infix     : '([A-z][\\w]*)',
                postfix_r : '##',
                attr      : '',
            },
            'CITE_FRONT'  : {
                prefix    : '" *\\r?\\n? *\\[',
                prefix_r  : ' ##C-F-',
                infix     : '([A-z0-9_]+)',
                postfix   : ']',
                postfix_r : '##',
                attr      : '',
            },
            'CITE_BACK'   : {
                prefix    : '\\["',
                prefix_r  : ' ##C-B-',
                infix     : '([A-z0-9_]+)',
                postfix   : ']',
                postfix_r : '##',
                attr      : '',
            },
            'CITE_INLINE' : {
                prefix    : '\\[\'',
                prefix_r  : ' ##C-I-',
                infix     : '([A-z0-9_]+)',
                postfix   : ']',
                postfix_r : '##',
                attr      : '',
            },
            'META'        : {
                prefix    : '^[ \\u00A0]*',
                infix     : '(@[\\w\\S \']+)',
                postfix   : '[ \\u00A0]*$',
                attr      : 'm',
            },
            'CHAPTER'     : {
                prefix    : '^ *bab ',
                infix     : '(i|ii|iii|iv|v)',
                postfix   : ' *$',
                attr      : 'm',
            },
            'SUB_CHAPTER' : {
                prefix    : '^ *',
                infix     : '(#|#2|#3|#4|#5|#6) +([\\w\\S ]+)',
                postfix   : ' *$',
                attr      : 'm',
            },
            'IMAGE'       : {
                prefix    : '^ *img',
                infix     : '\\[([\\w\\S ]+)] *\\(([\\w\\S ]+)\\) *(xs|sm|md|lg|xl)?',
                postfix   : ' *$',
                attr      : 'm',
            },
            'TABLE_HEAD'  : {
                prefix    : '^ *',
                infix     : '\\|([\\w\\S ]+)\\| *\\(([\\w\\S ]+)\\) *(xs|sm|md|lg|xl)?',
                postfix   : ' *$',
                attr      : 'm',
            },
            'SECTION'     : {
                prefix    : '^ *',
                infix     : '(present page|abstract id|abstract en)',
                postfix   : ' *$',
                attr      : 'm',
            },
            'REFERENCE'   : {
                prefix    : '^[ \\u00A0]*',
                infix     : '\\[([A-z0-9_]+)][ ]*cite[ ]*(BOOK|JOURNAL)[ ]*with',
                postfix   : '[ \\u00A0]*$',
                attr      : 'm',
            },
            'LIST'        : {
                prefix    : '^ *',
                infix     : '(1\\. |a\\) |> |\\. |- )([\\w\\S][\\w\\S ]*)',
                postfix   : '$',
                attr      : 'm',
            },
            'ATTACHMENT'  : {
                prefix    : '^[ \\u00A0]*',
                infix     : 'attach ([\\w\\S][\\w\\S ]*)',
                postfix   : '[ \\u00A0]*$',
                attr      : 'm',
            },
            'VISUAL'      : {
                prefix    : '^##DIAG-BLOCK',
                infix     : '(-\\(([\\w\\S ]+)\\))?',
                postfix   : '##$',
                attr      : 'm',
            },
            'VAR_BLOCK'   : {
                prefix    : '^##VAR-',
                infix     : '([A-z][\\w]*)',
                postfix   : '##$',
                attr      : 'm',
            },
            'BREAK'       : {
                prefix    : '^',
                infix     : '[ \\u00A0]*',
                postfix   : '$',
                attr      : 'm',
            }
        };
        parser__.PARSE = {
            INLINE : [
                parser__.REGEX.INLINE_BOLD,
                parser__.REGEX.INLINE_EMP,
                parser__.REGEX.INLINE_UND,
                parser__.REGEX.INLINE_UPPER,
                parser__.REGEX.INLINE_LOWER,
                parser__.REGEX.INLINE_CAPT,
                parser__.REGEX.INLINE_MARK,
                parser__.REGEX.VARIABLE,
                parser__.REGEX.CITE_BACK,
                parser__.REGEX.CITE_FRONT,
                parser__.REGEX.CITE_INLINE,
            ],
        };
        parser__.CONF.SOURCE.basmallah = 'https://drive.google.com/thumbnail?id=1G0D919EbhGdGCsC5JN1nY0hg6ypTlkJu';
        parser__.CONF.SOURCE.ON_UPDATE = false;
        parser__.CONF.SOURCE.ON_PARSE  = false;
        parser__.REGIS.clear();
        if (iterable) {
            let interval;
            if (input.interval < 1500)
                interval = 1500;
            else if (input.interval > 10000)
                interval = 10000;
            else
                interval = input.interval;
            parser__.CONF.SOURCE.INTERVAL = interval;
            parser__.CONF.SOURCE.SILENT   = interval * 5;
        }
    },
    REG_C : function (syntax) {
        let code = syntax.infix;
        if (syntax.prefix !== undefined)
            code = syntax.prefix + code;
        if (syntax.postfix !== undefined)
            code = code + syntax.postfix;

        return new RegExp(code, syntax.attr);
    },
    REGEX : undefined,
    PARSE : undefined,
    VAR   : {},
    REGIS : {
        clear : function () {
            parser__.REGIS['PG_SECTION']   = {
                i   : false,
                ii  : false,
                iii : false,
                iv  : false,
                v   : false,
            };
            parser__.REGIS['VAR_MODEL']    = {};
            parser__.REGIS['_VAR_BLOCK']   = [];
            parser__.REGIS['_META']        = [];
            parser__.REGIS['_CHAPTER']     = [];
            parser__.REGIS['_SUB_CHAPTER'] = [];
            parser__.REGIS['_IMAGE']       = [];
            parser__.REGIS['_TABLE']       = [];
            parser__.REGIS['_PARAG']       = [];
            parser__.REGIS['_LIST']        = [];
            parser__.REGIS['_SECTION']     = [];
            parser__.REGIS['_ATTACHMENT']  = [];
            parser__.REGIS['_CITATION']    = {};
            parser__.REGIS['_CITE_LIST']   = [];
            parser__.REGIS['_BREAK']       = [];
            parser__.REGIS['_BLOCK']       = [];
            parser__.REGIS['_PATTERN']     = [];
            parser__.REGIS['_EXTEND']      = [];
        },
    },
    LIB   : {
        DIAGRAM : {
            EL  : undefined,
            render : function (syntax) {
                try {
                    mermaid.parse(syntax);
                    parser__.LIB.DIAGRAM.EL.innerHTML = '';
                    mermaid.render('theGraph', syntax, function (svgCode) {
                        parser__.LIB.DIAGRAM.EL.innerHTML = svgCode;
                    });
                } catch (err) {
                    return '<div></div>';
                }
                return '<div>' + parser__.LIB.DIAGRAM.EL.innerHTML + '</div>';
            }
        },
        MATH    : {
            EL     : document.createElement('div'),
            render : function (syntax) {
                const temp = parser__.LIB.MATH.EL;
                katex.render(syntax, temp, {throwOnError: false});

                return temp.innerHTML;
            }
        },
        CODE    : {
            render : function (syntax) {
                return '<pre style="display:block;text-align: left"><code class="language-css">' + syntax + '</code></pre>';
            }
        },
    },
    CONF  : {
        SOURCE : {
            activating      : function () {
                parser__.CONF.SOURCE.ITERATION = setInterval(()=>{
                    document__.meta.citations  = {};
                    if (!(parser__.CONF.SOURCE.ON_UPDATE && parser__.CONF.SOURCE.ON_PARSE)) {
                        parser__.CONF.SOURCE.ON_UPDATE = true;
                        const res = parser__.CONF.SOURCE.OUT;
                        const url = parser__.CONF.SOURCE.OUT_URL;
                        const APPEND_SRC = parser__.CONF.render.USE_SRC;

                        Object.entries(res).forEach((entry) => {
                            const [key] = entry;
                            const path  = url[`${key}`];
                            let name    = `${key}`;
                            if (name === path)
                                name = undefined;
                            APPEND_SRC(name, path, true);
                        });
                        parser__.CONF.SOURCE.ON_UPDATE = false;
                    }
                },5000);
                parser__.CONF.SOURCE.AUTO_SAVE = setInterval(()=>{
                    parser__.CONF.SOURCE.ACTIVE += parser__.CONF.SOURCE.INTERVAL;
                    if (parser__.CONF.SOURCE.ACTIVE >= parser__.CONF.SOURCE.SILENT) {
                        clearInterval(parser__.CONF.SOURCE.AUTO_SAVE);
                        clearInterval(parser__.CONF.SOURCE.ITERATION);
                        parser__.CONF.SOURCE.ACTIVE = 0;
                    }
                    else
                        control_.save(document__);

                }, parser__.CONF.SOURCE.INTERVAL);
            },
            deactivating    : function () {
                clearInterval(parser__.CONF.SOURCE.AUTO_SAVE);
                clearInterval(parser__.CONF.SOURCE.ITERATION);
                parser__.CONF.SOURCE.ACTIVE = 0;
            },
            logo            : undefined,
            basmallah       : undefined,
            OUT             : {},
            OUT_URL         : {},
            ON_UPDATE       : undefined,
            ON_PARSE        : undefined,
            PACKAGE         : undefined,
            PRE             : undefined,
            ITERATION       : undefined,
            AUTO_SAVE       : undefined,
            INTERVAL        : 0,
            SILENT          : 0,
            ACTIVE          : 0,
            PARSEABLE       : false,
        },
        render : {
            'SEPARATED' : function (text, SYMBOL=',') {
                return text.split(SYMBOL);
            },
            'DATE'      : function (text) {
                function date(day, month, year) {
                    const dict   = lang_dic__;
                    let m;

                    if (day == null) {
                        const date   = new Date();
                        const year_  = date.getFullYear();
                        const month_ = date.getMonth();
                        const day_   = date.getDay();

                        if (month_ === 1)
                            m = dict.january;
                        else if (month_ === 2)
                            m = dict.february;
                        else if (month_ === 3)
                            m = dict.march;
                        else if (month_ === 4)
                            m = dict.april;
                        else if (month_ === 5)
                            m = dict.may;
                        else if (month_ === 6)
                            m = dict.june;
                        else if (month_ === 7)
                            m = dict.july;
                        else if (month_ === 8)
                            m = dict.august;
                        else if (month_ === 9)
                            m = dict.september;
                        else if (month_ === 10)
                            m = dict.october;
                        else if (month_ === 11)
                            m = dict.november;
                        else
                            m = dict.december;

                        return day_ + ' ' + m.charAt(0).toUpperCase() + m.slice(1) + ' ' + year_;
                    }
                    else {
                        if (month === '1' || month === '01')
                            m = dict.january;
                        else if (month === '2' || month === '02')
                            m = dict.february;
                        else if (month === '3' || month === '03')
                            m = dict.march;
                        else if (month === '4' || month === '04')
                            m = dict.april;
                        else if (month === '5' || month === '05')
                            m = dict.may;
                        else if (month === '6' || month === '06')
                            m = dict.june;
                        else if (month === '7' || month === '07')
                            m = dict.july;
                        else if (month === '8' || month === '08')
                            m = dict.august;
                        else if (month === '9' || month === '09')
                            m = dict.september;
                        else if (month === '10')
                            m = dict.october;
                        else if (month === '11')
                            m = dict.november;
                        else
                            m = dict.december;

                        m = m.charAt(0).toUpperCase() + m.slice(1);

                        return day + ' ' + m + ' ' +year;
                    }
                }

                let res;
                if ((res = /(\d{1,2})[,\- ](\d{1,2})[,\- ](\d\d\d\d)/.exec(text)) != null) {
                    return date(res[1], res[2], res[3]);
                }
            },
            'YEAR'      : function (text) {
                let res
                if ((res = /(\d{1,2})[,\- ](\d{1,2})[,\- ](\d\d\d\d)/.exec(text)) != null) {
                    return res[3];
                }
                return '2000';
            },
            'ENUM'      : function (text, ENUM) {
                if (ENUM[text] === undefined)
                    return ENUM['DEFAULT'];
                return ENUM[text];
            },
            'NUM'       : function (text) {
                return parseInt(text);
            },
            'HTML'      : function (text) {
                return text;
            },
            'LIST'      : function (text) {
                text = text.replace('  ', ' ');
                return text.split(',');
            },
            'IMG'       : function (text) {
                return '<img src="'+ text +'" alt="">';
            },
            'MAP'       : function (code) {
                return map__[code];
            },
            'COVER'     : function (doc_='') {
                return '';
            },
            'PREFACE'   : function (doc) {
                let res;
                if (doc.meta.preface === preface__.basmallah)
                    res = lang_dic__.preface_basmallah_pattern;
                else
                    res = lang_dic__.preface_default_pattern;
                res = res.replace('##REP-logo##', parser__.CONF.SOURCE.basmallah);
                res = res.replace('##REP-title##', doc.variables.title);
                res = res.replace('##REP-location##', doc.variables.location);
                res = res.replace('##REP-date##', doc.variables.date);
                res = res.replace('##REP-name##', doc.variables.author);

                return res;
            },
            'CITATIONS' : function (doc) {
                function references (cp) {
                    let result;
                    let citation_obj;
                    while ((result = /##C-([FBI])-([A-z0-9_]+)##/.exec(cp)) != null) {
                        citation_obj = citations[result[2]];
                        if (citation_obj !== undefined) {
                            if (citeTemp[result[2]] === undefined) {
                                citeTemp[result[2]] = increment;
                                increment += 1;
                                ref_list  += ('<div class="ls-ref">' + citation_obj.getReference() + '</div>');
                            }
                            if (result[1] === 'F') cp = cp.replace('##C-F-' + result[2] + '##', citation_obj.getCite('front'));
                            else if (result[1] === 'B') cp = cp.replace('##C-B-' + result[2] + '##', citation_obj.getCite());
                            else cp = cp.replace('##C-I-' + result[2] + '##', '[' + citeTemp[result[2]] + ']');
                        } else {
                            cp = cp.replace('##C-' + result[1] + '-' + result[2] + '##', '');
                        }
                    }
                    return cp;
                }

                const citations = document__.meta.citations;
                const citeTemp  = {};
                let increment   = 1;
                let ref_list    = '<span class="reset-ref-ls"></span><div id="daftar-pustaka"></div>';
                doc.html.cp_1   = references(doc.html.cp_1);
                doc.html.cp_2   = references(doc.html.cp_2);
                doc.html.cp_3   = references(doc.html.cp_3);
                doc.html.cp_4   = references(doc.html.cp_4);
                doc.html.cp_5   = references(doc.html.cp_5);

                return ref_list;
            },
            'TEXT'      : function (doc) {
                function extract(cp) {
                    let text = '';
                    temp_ctr.innerHTML = cp;
                    const children = temp_ctr.childNodes;
                    children.forEach(function (item) {
                        text += (item.innerText + ' ');
                    });
                    text = text.replaceAll(/  +/g, ' ');
                    return text.replaceAll(/(^ | $)/gm, '');
                }

                const temp_ctr   = document.createElement('div');
                const doc_text   = {};
                doc_text['cp_1'] = extract(doc.html.cp_1);
                doc_text['cp_2'] = extract(doc.html.cp_2);
                doc_text['cp_3'] = extract(doc.html.cp_3);
                doc_text['cp_4'] = extract(doc.html.cp_4);
                doc_text['cp_5'] = extract(doc.html.cp_5);

                doc.text         = doc_text;
            },
            'VAR'       : function (doc, specific) {
                function assign(cp) {
                    let result;
                    let variable;
                    while ((result = /##VAR-([A-z][\w]*)##/.exec(cp)) != null) {
                        variable = document__.variables[result[1]];
                        if (variable !== undefined)
                            cp = cp.replace('##VAR-' + result[1] + '##', variable);
                        else
                            cp = cp.replace('##VAR-' + result[1] + '##', '');
                    }

                    return cp;
                }

                if (specific === undefined)
                    return assign(doc);
                return assign(specific);
            },
            'USE_SRC'   : function (name=undefined,url='', update=false) {
                function validateUrl(value) {
                    return /^((https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?)|http:\/\/localhost(:[\d]{2,4})?\/?((\/[\w%\-+=]+)*(\/[\w\-%]+\.\w{1,3}|\/)?)?$/mi.test(value);
                }

                function validatePkg(value) {
                    return /^[A-Za-z_][\w]*(\.[A-Za-z][\w]*)+$/m.test(value);
                }

                function storeBlock(raw) {
                    let result;
                    let replacement;
                    let iter = 1;
                    while ((result = /^(MATH|CODE|DIAGRAM)(\(([\w\S ]+)\))?```\n([\w\n\S\u00A0 ]+)\n```$/.exec(raw)) != null) {
                        if (/[ \u00A0]?\n```/.test(result[4])) {
                            const inside  = result[4].split(/[ \u00A0]?\n```/);
                            result[4]     = inside[0];
                        }
                        if (result[3] !== undefined)
                            replacement = result[1] + result[3] + '\`\`\`\n' + result[4] + '\n\`\`\`';
                        else
                            replacement = result[1] + '\`\`\`\n' + result[4] + '\n\`\`\`';
                        raw = raw.replace(replacement, '##DIAG-BLOCK-' + iter + '##');
                        BLOCK.push(replacement);
                        iter++;
                    }

                    return raw;
                }

                function indexBlock(raw) {
                    let result;
                    while ((result = /^##DIAG-BLOCK-([\d]+)##$/m.exec(raw)) != null) {
                        raw = raw.replace('##DIAG-BLOCK-' + result[1] + '##', BLOCK.shift());
                    }

                    return raw;
                }

                function readOnlyVar(lines, name, path) {
                    let extracted   = '';
                    let block_var   = false;
                    let type_block  = {
                        list        : false,
                        table       : false,
                        none        : false,
                    };
                    let result;
                    const REG_META  = parser__.REG_C(parser__.REGEX.META);
                    const REG_LIST  = parser__.REG_C(parser__.REGEX.LIST);
                    const REG_THEAD = parser__.REG_C(parser__.REGEX.TABLE_HEAD);
                    const REG_BODY  = /^[\u00A0 ]*\|[\w\S ]+\|[\u00A0 ]*/m;
                    const citation  = _citation_factory.make('article');
                    citation.add('reference',path);
                    citation.add('label',name);

                    lines = lines.split('\n');
                    lines.forEach(line=>{
                        if ((result = REG_META.exec(line)) != null) {
                            block_var = /^@[A-z0-9][\w_]* *: *$/m.test(result[0]);
                            if (!block_var) {
                                const inline_var = /^@([A-z0-9][\w_]*) *: *([\w\S ]+)$/m.exec(line);
                                if (inline_var != null) {
                                    let param_name   = inline_var[1];
                                    param_name       = param_name.replace(name + '_', '');
                                    citation.add(param_name, inline_var[2]);
                                }
                            }
                            extracted += line+'\n';
                            type_block.list  = false;
                            type_block.table = false;
                            type_block.none  = true;
                        }
                        else if (block_var) {
                            if (type_block.none) {
                                extracted += line+'\n';
                                if (REG_LIST.test(line)) {
                                    type_block.list  = true;
                                    type_block.table = false;
                                    type_block.none  = false;
                                }
                                else if (REG_THEAD.test(line)) {
                                    type_block.list  = false;
                                    type_block.table = true;
                                    type_block.none  = false;
                                }
                            }
                            else if (REG_LIST.test(line) && type_block.list) {
                                extracted += line+'\n';
                            }
                            else if (REG_BODY.test(line) && type_block.table)
                                extracted += line+'\n';
                        }
                    });

                    document__.meta.citations[name]  = citation;
                    parser__.REGIS._CITATION[name]   = citation;
                    parser__.REGIS._CITE_LIST.push(citation);

                    return extracted;
                }


                const MEMORY = parser__.CONF.SOURCE.OUT;
                const IO_URL = parser__.CONF.SOURCE.OUT_URL;
                const BLOCK  = [];
                let val      = '';
                let map      = url;
                let pkg      = validatePkg(url);
                if (name !== undefined)
                    map = name;

                if ((MEMORY[map] === undefined || update) && (validateUrl(url) || pkg)) {
                    let xmlHttp = new XMLHttpRequest();
                    let tmp_url = url
                    if (pkg)
                        tmp_url = parser__.CONF.SOURCE.PACKAGE + '/' + url;
                    xmlHttp.open( "GET", tmp_url, false );
                    xmlHttp.send( null );
                    if (xmlHttp.status === 200) {
                        val = xmlHttp.responseText;
                        if (name !== '' && val !== '') {
                            if (name !== undefined) {
                                let result;
                                val = storeBlock(val);
                                while ((result = /^@([A-Za-z_][\w]*)[\u00A0 ]*:/m.exec(val)) != null) {
                                    const pointer = result[1];
                                    val           = val.replace(new RegExp('^@' + pointer,'gm'), '@#' + name + '_' + pointer);
                                    while (val.includes('$'+pointer)) {
                                        val       = val.replace('$'+pointer, '$'+name+'_'+pointer);
                                    }
                                }
                                val = val.replaceAll(/^@#/gm,'@');
                                val = readOnlyVar(val, name, url);
                                val = indexBlock(val);
                            }
                            MEMORY[map] = val;
                            IO_URL[map] = url;
                        }
                        else {
                            delete MEMORY[map];
                            delete IO_URL[map];
                        }
                    }
                    else {
                        delete MEMORY[map];
                        delete IO_URL[map];
                    }
                }
                else {
                    if (update) {
                        delete MEMORY[map];
                        delete IO_URL[map];
                    }
                    else
                        val = MEMORY[map];
                }

                return val;
            },
        },
        micro  : {
            image   : function (image) {
                return image;
            },
            variable : function (variables='') {
                return variables;
            },
            source : function (source='') {
                return source;
            }
        }
    },
    parse : function (text, doc=document__, register=parser__.REGIS) {

        function source(raw) {
            const REG_USE_SOURCE = parser__.REG_C(parser__.REGEX.USE_SOURCE);
            const SOURCE_APPEND  = parser__.CONF.render.USE_SRC;
            let result;

            while ((result = REG_USE_SOURCE.exec(raw)) != null) {
                //temp testing result[5] to result[4]
                if (!parent_doc.includes(result[4])) {
                    raw = raw.replace(result[0], SOURCE_APPEND(result[2], result[4]));
                    //temp testing result[5] to result[4]
                    if (!visit.includes(result[4]))
                        visit.push(result[4]);
                }
                else
                    raw = raw.replace(result[0], '\n');
            }

            if (visit.length > 0) {
                parent_doc.push(visit.shift());
                return source(raw);
            }

            while((result = /\$([A-Z-a-z_][\w]*)(->[A-Za-z_][\w]*)+/.exec(raw)) != null) {
                raw = raw.replace(result[0], result[0].replace('->', '_')+'[\''+result[1]+']');
            }

            return raw;
        }

        function block(raw) {
            let result;
            while ((result = /^(MATH|CODE|DIAGRAM)(\(([\w\S ]+)\))?```\n([\w\n\S\u00A0 ]*)\n```$/m.exec(raw)) != null) {
                let description = result[3];
                let type        = result[1];
                let temp        = result[4];
                if (/[ \u00A0]*\n```/.test(temp)) {
                    let inside  = temp.split(/\n[ \u00A0]*```/);
                    temp        = inside[0];
                }
                if (description === undefined)
                    raw = raw.replace(type + '\`\`\`\n' + temp + '\n\`\`\`' , '##DIAG-BLOCK##');
                else
                    raw = raw.replace(type + '(' + description + ')' + '\`\`\`\n' + temp + '\n\`\`\`' , '##DIAG-BLOCK-(' +description+ ')##');
                parser__.REGIS._EXTEND.push({
                    type    : type,
                    content : temp.replace(/\n\n/g, '\n'),
                });
            }
            return raw;
        }

        function inline(raw) {
            function parse_inline(raw, regx) {
                let result;
                const regex = parser__.REG_C(regx);

                if (regx.sub) {
                    while ((result = regex.exec(raw)) != null) {
                        if (result[1].includes(regx.postfix_v)) {
                            let inside = result[1].split(regx.postfix_v);
                            result[1] = inside[0];
                        }
                        raw = raw.replace(regx.prefix_v + result[1] + regx.postfix_v, regx.prefix_r + result[1] + regx.postfix_r);
                    }
                }
                else {
                    while ((result = regex.exec(raw)) != null) {
                        raw = raw.replace(regex, regx.prefix_r + result[1] + regx.postfix_r);
                    }
                }

                return raw;
            }

            const REGX   = parser__.REGEX;
            const INLINE = parser__.PARSE.INLINE;

            const REG_MULTI_LINE  = parser__.REG_C(REGX.MULTI_LINE);
            const REG_EMPTY_LINE  = parser__.REG_C(REGX.EMPTY_LINE);
            const REG_MULTI_SPACE = parser__.REG_C(REGX.MULTI_SPACE);

            raw = raw.replace(/\r\n|\n/gm, '\n');

            raw = raw.replace(REG_MULTI_LINE, REGX.MULTI_LINE.repl);
            raw = raw.replace(REG_EMPTY_LINE, REGX.EMPTY_LINE.repl);
            raw = raw.replace(REG_MULTI_SPACE, REGX.MULTI_SPACE.repl);

            INLINE.forEach(function (item) {
                raw = parse_inline(raw, item);
            });

            return raw.split(/\n/);
        }

        function lex(raw) {

            function check(regex, item) {
                result = regex.exec(item);
                return result != null;
            }

            function push_pattern(pattern = undefined, value = undefined, stack=undefined) {
                if (VAR_BLOCK.identifier !== undefined) {
                    if (pattern !== undefined && value !== undefined) {
                        VAR_BLOCK.pattern = pattern;
                        VAR_BLOCK.value   = value;
                        register.VAR_MODEL[VAR_BLOCK.identifier] = VAR_BLOCK;
                        if (VAR_BLOCK.pattern === '9')
                            doc.variables[VAR_BLOCK.identifier] = VAR_BLOCK.value.html;
                    }
                    VAR_BLOCK = break_pattern();
                }
                else {
                    if (stack !== undefined)
                        stack.push(value);
                    register._PATTERN.push(pattern);
                }
            }

            function break_pattern() {
                return {
                    identifier : undefined,
                    pattern    : undefined,
                    value      : undefined,
                };
            }

            const MICRO           = parser__.CONF.micro;

            const SYN_META        = parser__.REG_C(parser__.REGEX.META);
            const SYN_CHAPTER     = parser__.REG_C(parser__.REGEX.CHAPTER);
            const SYN_SUB_CHAPTER = parser__.REG_C(parser__.REGEX.SUB_CHAPTER);
            const SYN_IMAGE       = parser__.REG_C(parser__.REGEX.IMAGE);
            const SYN_TABLE_HEAD  = parser__.REG_C(parser__.REGEX.TABLE_HEAD);
            const SYN_SECTION     = parser__.REG_C(parser__.REGEX.SECTION);
            const SYN_REFERENCE   = parser__.REG_C(parser__.REGEX.REFERENCE);
            const SYN_LIST        = parser__.REG_C(parser__.REGEX.LIST);
            const SYN_ATTACHMENT  = parser__.REG_C(parser__.REGEX.ATTACHMENT);
            const SYN_VISUAL      = parser__.REG_C(parser__.REGEX.VISUAL);
            const SYN_VAR_BLOCK   = parser__.REG_C(parser__.REGEX.VAR_BLOCK);
            const SYN_BREAK       = parser__.REG_C(parser__.REGEX.BREAK);

            let VAR_BLOCK         = break_pattern();

            let result;
            let markup;

            for (let i = 0; i < raw.length; i++) {
                const item = raw[i];

                if (check(SYN_META, item)) {
                    if (check(/^ *@([A-Za-z][\w]*) *: *(DATE|NUM|HTML|IMG|LIST|) *([\w\S][ \w\S]*) *$/m, item)) {
                        let val = result[3];
                        if (result[1] === 'title') {
                            doc.meta.title = val;
                            doc.variables['title'] = val;
                        }
                        else if (result[1] === 'citation') {
                            val = parser__.CONF.render.ENUM(val, citation_format__);
                            doc.meta.citation = val;
                            doc.variables['citation'] = val;
                        }
                        else if (result[1] === 'location') {
                            doc.meta.location = val;
                            doc.variables['location'] = val;
                        }
                        else if (result[1] === 'author') {
                            doc.meta.author.name = val;
                            doc.variables['author'] = val;
                        }
                        else if (result[1] === 'id') {
                            doc.meta.author.id = val;
                            doc.variables['id'] = val;
                        }
                        else if (result[1] === 'email') {
                            doc.meta.author.email = val;
                            doc.variables['email'] = val;
                        }
                        else if (result[1] === 'department') {
                            doc.meta.department = val;
                            doc.variables['department'] = val;
                        }
                        else if (result[1] === 'faculty') {
                            doc.meta.faculty = val;
                            doc.variables['faculty'] = val;
                        }
                        else if (result[1] === 'university') {
                            doc.meta.university = val;
                            doc.variables['university'] = val;
                        }
                        else if (result[1] === 'date') {
                            val = parser__.CONF.render.DATE(result[3]);
                            doc.meta.date.modified = val;
                            doc.variables['date'] = val;
                            doc.variables['year'] = parser__.CONF.render.YEAR(result[3]);
                        }
                        else if (result[1] === 'preface') {
                            val = parser__.CONF.render.ENUM(result[3], preface__);
                            doc.meta.preface = val;
                            doc.variables['preface'] = val;
                        }
                        else if (result[1] === 'watermark') {
                            val = parser__.CONF.render.ENUM(result[3], watermark__);
                            doc.meta.watermark = val;
                            doc.variables['watermark'] = val;
                        }
                        else if (result[1] === 'keywords') {
                            val = parser__.CONF.render.LIST(result[3]);
                            doc.meta.keywords = val;
                            doc.variables['keywords'] = val;
                        }
                        else if (result[1] === 'advisors') {
                            const vals = parser__.CONF.render.LIST(result[3]);
                            doc.meta.advisors = vals;
                            doc.variables['advisors'] = vals;
                        }
                        else if (result[1] === 'approval') {
                            doc.meta.approval = val;
                            doc.variables['approval'] = val;
                        }
                        else if (result[1] === 'attestation') {
                            doc.meta.attestation = val;
                            doc.variables['attestation'] = val;
                        }
                        else if (result[1] === 'statement') {
                            doc.meta.statement = val;
                            doc.variables['statement'] = val;
                        }
                        else {
                            if (result[2] !== '')
                                doc.variables[result[1]] = parser__.CONF.render[result[2]](result[3]);
                            else
                                doc.variables[result[1]] = result[3];
                        }
                        const meta = {
                            text  : item,
                            html  : '',
                            value : val,
                        }
                        register._META.push(meta);
                    }
                    else if (check(/^[ \u00A0]*@([\w]+)[ \u00A0]*:[ \u00A0]*$/m, item)) {
                        VAR_BLOCK.identifier = result[1];
                    }
                }
                else if (check(SYN_CHAPTER, item)) {
                    let val;
                    if (result[1] === 'i') val = 1;
                    else if (result[1] === 'ii') val = 2;
                    else if (result[1] === 'iii') val = 3;
                    else if (result[1] === 'iv') val = 4;
                    else val = 5;
                    markup = '<div id="reset-bab-'+result[1]+'"></div><div id="bab-'+result[1]+'" class="bab"></div><span id="set-bab-'+result[1]+'"></span>'
                        + '<span class="reset-sub"></span><span class="reset-img"></span><span class="reset-tbl"></span>'
                        + '<span class="reset-alpha-ls"></span><span class="reset-num-ls"></span><span class="reset-ref-ls"></span>';

                    const chapter = {
                        text  : item,
                        html  : markup,
                        value : val,
                    };

                    VAR_BLOCK = break_pattern();

                    push_pattern('1', chapter, register._CHAPTER);
                }
                else if (check(SYN_SUB_CHAPTER, item)) {
                    let val;
                    if (result[1] === '#') val = 1;
                    else if (result[1] === '#2') val = 2;
                    else if (result[1] === '#3') val = 3;
                    else if (result[1] === '#4') val = 4;
                    else if (result[1] === '#5') val = 5;
                    else val = 6;
                    markup = '<div id="##REP-ID##" class="sub sub-' + val + '">'+result[2]+'</div>';

                    const sub_chapter = {
                        text  : item,
                        html  : markup,
                        value : result[2],
                        level : val
                    };

                    VAR_BLOCK = break_pattern();
                    register._SUB_CHAPTER.push(sub_chapter);
                    register._PATTERN.push('2');
                }
                else if (check(SYN_IMAGE, item)) {
                    function setImgSize(input) {
                        if (input === 'xs') return 'img-xs';
                        if (input === 'sm') return 'img-sm';
                        if (input === 'md') return 'img-md';
                        if (input === 'lg') return 'img-lg';
                        if (input === 'xl') return 'img-xl';
                        return 'img-md';
                    }

                    const imageSize = setImgSize(result[3]);
                    const temp      = result[2];
                    const source    = MICRO.image(result[1]);
                    markup          = '<div id="##REP-ID##" class="image">'
                        + '<img class="'+imageSize+'" src="'+source+'" alt="">'
                        + '<div class="image-dsc">'+temp+'</div></div>';

                    const image = {
                        text  : item,
                        html  : markup,
                        value : temp,
                        src   : source,
                        size  : imageSize,
                    }

                    push_pattern('3', image, register._IMAGE);
                }
                else if (check(SYN_TABLE_HEAD, item)) {
                    function setTableSize(input) {
                        if (input === 'xs') return 'tbl-xs';
                        if (input === 'sm') return 'tbl-sm';
                        if (input === 'md') return 'tbl-md';
                        if (input === 'lg') return 'tbl-lg';
                        if (input === 'xl') return 'tbl-xl';
                        return 'tbl-md';
                    }

                    function constructTableHead(input) {
                        let row = '';
                        input   = input.split('|');
                        span    = input.length;
                        for (let loop = 0; loop < input.length; loop++) {
                            row += '<th>'+input[loop]+'</th>';
                        }
                        return '<thead><tr>'+row+'</tr></thead>';
                    }

                    function constructTableSpan(input) {
                        let row         = '';
                        input           = input.split('|');
                        const max       = span;
                        let amount      = input.length;
                        const each      = max / amount;
                        let col_exp     = 0;
                        let col_shr     = amount;
                        for (let loop = 0; loop < input.length; loop++) {
                            if (input[loop].charAt(0) === '>') {
                                col_exp++;
                                col_shr--;
                            }
                        }
                        if (col_exp > 0) {
                            const shrink = each / 2;
                            const expand = (max - col_shr * shrink) / col_exp;
                            for (let loop = 0; loop < input.length; loop++) {
                                if (input[loop].charAt(0) === '>') {
                                    row += '<td colspan="'+expand+'">'+input[loop].substring(1,input[loop].length)+'</td>';
                                }
                                else {
                                    row += '<td colspan="'+shrink+'">'+input[loop]+'</td>';
                                }
                            }
                        }
                        else {
                            for (let loop = 0; loop < input.length; loop++) {
                                row += '<td colspan="'+each+'">'+input[loop]+'</td>';
                            }
                        }
                        while (amount + col_exp < span) {
                            row += '<td>&nbsp;&nbsp;</td>';
                            amount++;
                        }
                        return '<tr>'+row+'</tr>';
                    }

                    let span                = 1;
                    const size              = setTableSize(result[3]);
                    const desc              = result[2];
                    const table_desc        = '<div class="table-dsc">'+desc+'</div>';
                    const syn_table_row     = /^[ \u00A0]*\|([\w\S ]+)\|[ \u00A0]*$/m;
                    const table_head        = constructTableHead(result[1]);
                    let table_data          = '';
                    while (i+1 < raw.length && (result = syn_table_row.exec(raw[i+1])) != null) {
                        table_data += constructTableSpan(result[1]);
                        i++;
                    }
                    if (table_data !== '')
                        table_data = '<tbody>' + table_data + '</tbody>';
                    table_data = '<table class="'+size+'">'+table_head+table_data+'</table>';
                    markup     = '<div id="##REP-ID##" class="table">'+table_desc+table_data+'</div>';

                    const table = {
                        text  : item,
                        html  : markup,
                        value : desc,
                    };

                    push_pattern('4', table, register._TABLE);
                }
                else if (check(SYN_VISUAL, item)) {
                    const data = register._EXTEND.shift();
                    let mode, hasDesc;
                    if (data.type === 'MATH')
                        mode = parser__.LIB.MATH.render(data.content);
                    else if (data.type === 'DIAGRAM')
                        mode = parser__.LIB.DIAGRAM.render(data.content);
                    else
                        mode = parser__.LIB.CODE.render(data.content);
                    if (result[2] !== undefined) {
                        mode = '<div id="##REP-ID##" class="visual">' + mode + '<div class="visual-dsc">' + result[2] + '</div></div>';
                        hasDesc = true;
                    }
                    else {
                        mode = '<div class="visual">' + mode + '</div>';
                        hasDesc = false
                    }
                    push_pattern('a', {
                        html  : mode,
                        desc  : hasDesc,
                        value : result[2],
                    }, register._BLOCK);
                }
                else if (check(SYN_VAR_BLOCK, item)) {
                    register._PATTERN.push('b');
                    register._VAR_BLOCK.push({html:result[1]});
                }
                else if (check(SYN_LIST, item)) {
                    let pattern;
                    let classes;
                    if (result[1] === '1. ') {
                        pattern = /^ *1\. +([\w\S][\w\S ]*)$/m;
                        classes = 'ls-num';
                    }
                    else if (result[1] === 'a) ') {
                        pattern = /^ *a\) +([\w,. )(</>]+)$/m;
                        classes = 'ls-alpha';
                    }
                    else if (result[1] === '> ') {
                        pattern = /^ *> +([\w,. )(</>]+)$/m;
                        classes = 'ls-arrow';
                    }
                    else if (result[1] === '. ') {
                        pattern = /^ *\* +([\w,. )(</>]+)$/m;
                        classes = 'ls-dot';
                    }
                    else {
                        pattern = /^ *- +([\w,. )(</>]+)$/m;
                        classes = 'ls-dash';
                    }

                    markup   = '<div class="' + classes + '">'+result[2]+'</div>';
                    let text = item;
                    while (i+1 < raw.length && (result = pattern.exec(raw[i+1])) != null) {
                        text   += ('\n' + raw[i + 1]);
                        markup += '<div class="' + classes + '">'+result[1]+'</div>';
                        i++;
                    }

                    const list = {
                        text  : text,
                        html  : markup,
                        value : '',
                    };

                    push_pattern('5', list, register._LIST);
                }
                else if (check(SYN_SECTION, item)) {
                    let val;
                    if (result[1] === 'present page')
                        val = 5;
                    else if (result[1] === 'abstract id')
                        val = 3;
                    else if (result[1] === 'abstract en')
                        val = 4;
                    else
                        val = 2;

                    const section = {value: val};
                    VAR_BLOCK = break_pattern();
                    register._SECTION.push(section);
                    register._PATTERN.push('6');
                }
                else if (check(SYN_REFERENCE, item)) {
                    const cite = _citation_factory.make('article');
                    const key  = result[1];
                    while (i + 1 < raw.length && check(/^ *@([A-Za-z][\w]*) *: *([()'A-z0-9\-][()'A-z0-9 \-]*) *$/m, raw[i + 1])) {
                        cite.add(result[1], result[2]);
                        if (check(/^ *@([A-Za-z][\w]*) *: *(DATE|NUM|HTML|IMG|LIST|) *([()'A-z0-9\-][()'A-z0-9 \-]*) *$/m, raw[i + 1])) {
                            if (result[2] !== '')
                                cite.add(result[1],parser__.CONF.render[result[2]](result[3]));
                            else
                                cite.add(result[1], result[3]);
                        }
                        i++;
                    }
                    VAR_BLOCK = break_pattern();
                    doc.meta.citations[key]  = cite;
                    register._CITATION[key]  = cite;
                    register._CITE_LIST.push(cite);
                }
                else if (check(SYN_ATTACHMENT, item)) {
                    markup = '<div id="##REP-ID##" class="ls-lampiran">'
                        + '<div class="ls-lampiran-logo"><img src="' + parser__.CONF.SOURCE.logo + '" alt=""></div>'
                        + '<div class="ls-lampiran-title"><div>'+result[1]+'</div></div></div>';

                    const attachment = {
                        text  : item,
                        html  : markup,
                        value : result[1]
                    };

                    VAR_BLOCK = break_pattern();
                    register._ATTACHMENT.push(attachment);
                    register._PATTERN.push('7');
                }
                else if (check(SYN_BREAK, item)) {
                    let html = '<span class="reset-alpha-ls"></span><span class="reset-num-ls"></span>';
                    while (i+1 < raw.length && check(SYN_BREAK, raw[i + 1])) {
                        i++;
                    }
                    const pattern = register._PATTERN[register._PATTERN.length - 1];
                    if (pattern === '5' || pattern === '9') {
                        if (pattern === '9')
                            html = '';
                        else if (register._PARAG.length > 0) {
                            if (register._PARAG[register._PARAG.length - 1]['on_list'])
                                html = '';
                        }
                        else
                            html = '';
                    }
                    VAR_BLOCK = break_pattern();
                    register._BREAK.push({html:html});
                    register._PATTERN.push('0');
                }
                else {
                    push_pattern('9', {
                        text    : item,
                        html    : item,
                        value   : '',
                        on_list :register._PATTERN[register._PATTERN.length-1] === '5'
                    }, register._PARAG);
                }
            }

            doc.meta.cite_keys = register._CITE_LIST;
        }

        function construct() {
            function romans(value) {
                if (value === 1) return 'i';
                if (value === 2) return 'ii';
                if (value === 3) return 'iii';
                if (value === 4) return 'iv';
                if (value === 5) return 'v';
                if (value === 6) return 'vi';

                return 'vii';
            }

            function capitalizeFirstLetter(str='') {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            let on_chapter = 0;
            let ids        = {
                sub : 1,
                img : 1,
                tbl : 1,
                att : 1,
                cit : 1,
            }
            const dic      = lang_dic__;
            const doc_temp = {
                chapter_1  : '',
                chapter_2  : '',
                chapter_3  : '',
                chapter_4  : '',
                chapter_5  : '',
                attachs    : '',
                attachment : [],
                reference  : '',
                present    : {
                    cover       : '',
                    preface     : '',
                    present     : '',
                    approval    : '<div id="pg-lembar_persetujuan" class="head-count"><p>' + dic['approval empty'] + '</p></div>',
                    attestation : '<div id="pg-lembar_pengesahan" class="head-count"><p>' + dic['attestation empty'] + '</p></div>',
                    statement   : '<div id="pg-lembar_pernyataan" class="head-count"><p>' + dic['statement empty'] + '</p></div>',
                    abstract    : {
                        id      : '',
                        en      : '',
                    },
                    toc         : {
                        toc     : '<div id="pg-daftar_isi" class="head-count"><div class="pendahuluan-sub-title">' + dic['table of content'] + '</div><ul><li>' + dic['empty'] + '</li></ul></div>',
                        images  : '<div class="pendahuluan-sub-title">' + dic['images list'] + '</div><ul id="daftar_gambar"><li>' + dic['empty'] + '</li></ul>',
                        tables  : '<div class="pendahuluan-sub-title">' + dic['tables list'] + '</div><ul id="daftar_tabel"><li>' + dic['empty'] + '</li></ul>',
                        attachs : '<div class="pendahuluan-sub-title">' + dic['attachments list'] + '</div><ul id="daftar_lampiran"><li>' + dic['empty'] + '</li></ul>',
                        all     : '',
                    },
                },
            };
            const toc_map  = {
                present : [],
                content : {
                    chapter_1 : [],
                    chapter_2 : [],
                    chapter_3 : [],
                    chapter_4 : [],
                    chapter_5 : [],
                },
                has        : {},
                attachment : [],
            };
            const img_map  = {};
            const tbl_map  = {};

            const toc = {
                content : {
                    present    : {
                        preface     : '<li class="df-root"><span class="di-b">' + dic['preface'] + '</span><a href="#pg-kata_pengantar" class="pen-idx"></a></li>',
                        approval    : '<li class="df-root"><span class="di-b">' + dic['approval sheet'] + '</span><a href="#pg-lembar_persetujuan" class="pen-idx"></a></li>',
                        attestation : '<li class="df-root"><span class="di-b">' + dic['attestation sheet'] + '</span><a href="#pg-lembar_pengesahan" class="pen-idx"></a></li>',
                        statement   : '<li class="df-root"><span class="di-b">' + dic['statement sheet'] + '</span><a href="#pg-lembar_pernyataan" class="pen-idx"></a></li>',
                        abstract    : {
                            id      : '<li class="df-root"><span class="di-b">abstrak</span><a href="#pg-lembar_abstrak" class="pen-idx"></a></li>',
                            en      : '<li class="df-root"><span class="di-b">abstract</span><a href="#pg-lembar_abstract" class="pen-idx"></a></li>',
                        },
                        toc         : '<li class="df-root"><span class="di-b">' + dic['table of content'] + '</span><a href="#pg-daftar_isi" class="pen-idx"></a></li>',
                        img_list    : '<li class="df-root"><span class="di-b">' + dic['images list'] + '</span><a href="#daftar_gambar" class="pen-idx"></a></li>',
                        tbl_list    : '<li class="df-root"><span class="di-b">' + dic['tables list'] + '</span><a href="#daftar_tabel" class="pen-idx"></a></li>',
                        att_list    : '<li class="df-root"><span class="di-b">' + dic['attachments list'] + '</span><a href="#daftar_tabel" class="pen-idx"></a></li>',
                    },
                    chapter_1  : '',
                    chapter_2  : '',
                    chapter_3  : '',
                    chapter_4  : '',
                    chapter_5  : '',
                    attachment : [],
                },
                images  : {
                    chapter_1  : '',
                    chapter_2  : '',
                    chapter_3  : '',
                    chapter_4  : '',
                    chapter_5  : '',
                    all        : '',
                },
                tables  : {
                    chapter_1  : '',
                    chapter_2  : '',
                    chapter_3  : '',
                    chapter_4  : '',
                    chapter_5  : '',
                    all        : '',
                },
                attachment : [],
                attachs_all : '',
                references : '<li class="df-root"><span class="di-b">' + dic['references'] + '</span><a href="#daftar-pustaka" class="con-idx"></a></li>'
            };

            const pattern  = parser__.REGIS._PATTERN;
            let operand    = 0;
            let section    = 0;

            if (pattern.length > 1) {
                while (pattern.length > 0) {
                    operand = pattern.shift();
                    if (operand === '1') {
                        const bab_val = register._CHAPTER.shift();
                        const chapter_pointer = 'chapter_' + bab_val.value;
                        if (doc_temp[chapter_pointer] === '') {
                            const romans_      = romans(bab_val.value);
                            toc.content[chapter_pointer] = '<span class="set-dfi-bab-' + romans_ + '"></span><span class="reset-dfi-sub"></span><li class="df-root"><span class="di-b di-b_'+romans_+'">bab ' + romans_ + '</span><a href="#bab-' + romans_ + '" class="con-idx"></a></li>';
                            toc.images[chapter_pointer]  = '<span class="set-dfi-bab-' + romans_ + '"></span><span class="reset-df-gambar"></span>';
                            toc.tables[chapter_pointer]  = '<span class="set-dfi-bab-' + romans_ + '"></span><span class="reset-df-tabel"></span>';
                            doc_temp[chapter_pointer]    = bab_val.html;
                            toc_map[chapter_pointer]     = [];
                            toc_map.has[chapter_pointer] = {};
                        }
                        section    = 1;
                        on_chapter = chapter_pointer;
                    }
                    else if (operand === '2') {
                        const id       = ids["sub"]++;
                        const sub_val  = register._SUB_CHAPTER.shift();
                        const romans_  = romans(sub_val.level);
                        if (section === 1) {
                            toc.content[on_chapter] += '<li class="di-s' + sub_val.level + ' dfi-sub-' + romans_ + '"><span>' + sub_val.value + '</span><a href="#s' + id + '" class="con-idx"></a></li>';
                            doc_temp[on_chapter] += sub_val.html.replace('##REP-ID##', 's' + id);
                            toc_map["content"][on_chapter].push({level:sub_val.level, content:sub_val.value, id: 's' + id});
                            toc_map["has"][on_chapter][sub_val.value] = sub_val.level;
                        }
                    }
                    else if (operand === '3') {
                        const id      = ids["img"]++;
                        const img_val = register._IMAGE.shift();
                        img_val.value = parser__.CONF.render.VAR(doc, img_val.value);
                        if (section === 1) {
                            toc.images[on_chapter] += '<li class="df-gambar"><span>' + img_val.value + '</span><a href="#i' +id+ '"></a></li>';
                            doc_temp[on_chapter] += img_val.html.replace('##REP-ID##', 'i' + id);
                        }
                        else if (section === 2) {
                            doc_temp.attachment[doc_temp.attachment.length - 1] += img_val.html.replace('##REP-ID##','').replace('class="image"','class="image lampiran-image"');
                        }
                        img_map['img_'+id] = {
                            source      : img_val.src,
                            description : img_val.value,
                        };
                    }
                    else if (operand === '4') {
                        const id      = ids["tbl"]++;
                        const tbl_val = register._TABLE.shift();
                        tbl_val.html  = parser__.CONF.render.VAR(doc, tbl_val.html);
                        tbl_val.value = parser__.CONF.render.VAR(doc, tbl_val.value);
                        if (section === 1) {
                            toc.tables[on_chapter] += '<li class="df-tabel"><span>' + tbl_val.value + '</span><a href="#t'+id+'"></a></li>';
                            doc_temp[on_chapter] += tbl_val.html.replace('##REP-ID##', 't' + id);
                        }
                        else if (section === 2) {
                            doc_temp.attachment[doc_temp.attachment.length - 1] += tbl_val.html.replace('##REP-ID##', '').replace('class="table"', 'class="table lampiran-tbl"');
                        }
                        tbl_map['tbl_'+id] = {
                            html : tbl_val.html.replace('##REP-ID##', ''),
                            description : tbl_val.value,
                        };
                    }
                    else if (operand === '5') {
                        const list_val = register._LIST.shift();
                        if (section === 1) {
                            doc_temp[on_chapter] += list_val.html;
                        }
                        else if (section === 2) {
                            doc_temp.attachment[doc_temp.attachment.length - 1] += list_val.html;
                        }
                        else if (section === 5) {
                            doc_temp.present.present += list_val.html;
                        }
                        else if (section === 3) {
                            doc_temp.present.abstract.id += list_val.html;
                        }
                        else if (section === 4) {
                            doc_temp.present.abstract.en += list_val.html;
                        }
                    }
                    else if (operand === '6') {
                        section = (register._SECTION.shift()).value;
                        if (!toc_map.present.includes(section))
                            toc_map.present.push(section);
                    }
                    else if (operand === '7') {
                        section = 2;
                        doc_temp.attachment.push('');
                        const id = ids['att']++;
                        const att_val = register._ATTACHMENT.shift();
                        toc.content.attachment.push('<li><span class="di-b">lampiran ' + id + ' ' +att_val.value+ '</span><a href="#l' + id + '" class="con-idx"></a></li>');
                        toc.attachment.push('<li class="df-lampiran"><span>'+att_val.value+'</span><a href="#l'+id+'"></a></li>');
                        doc_temp.attachment[doc_temp.attachment.length - 1] += att_val.html;
                        toc_map.attachment.push({content: att_val.value, id:'l' + id});
                    }
                    else if (operand === '9') {
                        let parag_temp = (register._PARAG.shift()).html;
                        while (pattern.length > 0 && pattern[0] === '9') {
                            parag_temp += (' ' + (register._PARAG.shift()).html);
                            pattern.shift();
                        }
                        const capitalize = parag_temp.split(/\. ?/);
                        parag_temp = capitalizeFirstLetter(capitalize[0]);
                        for (let i = 1; i < capitalize.length; i++) {
                            parag_temp += '. ' + capitalizeFirstLetter(capitalize[i]);
                        }
                        parag_temp = '<p>' + parag_temp + '</p>';
                        if (section === 1)
                            doc_temp[on_chapter] += parag_temp;
                        else if (section === 2)
                            doc_temp.attachment[doc_temp.attachment.length - 1] += parag_temp;
                        else if (section === 3)
                            doc_temp.present.abstract.id += parag_temp;
                        else if (section === 4)
                            doc_temp.present.abstract.en += parag_temp;
                    }
                    else if (operand === 'a') {
                        const id      = ids["img"]++;
                        let block_val = register._BLOCK.shift();
                        if (block_val.desc)
                            block_val.html  = block_val.html.replace('##REP-ID##', 'i' + id);
                        else
                            block_val.html  = block_val.html.replace('##REP-ID##', '');

                        if (section === 1) {
                            toc.images[on_chapter] += '<li class="df-gambar"><span>' + block_val.value + '</span><a href="#i' +id+ '"></a></li>';
                            doc_temp[on_chapter]   += block_val.html;
                        }
                        else if (section === 2) {
                            doc_temp.attachment[doc_temp.attachment.length - 1] += block_val.html;
                        }
                    }
                    else if (operand === 'b') {
                        let var_val  = register._VAR_BLOCK.shift();
                        let variable = register.VAR_MODEL[var_val.html];
                        if (variable !== undefined) {
                            const pt  = variable.pattern;
                            const obj = variable.value;
                            obj.value = parser__.CONF.render.VAR(doc, obj.value);
                            if (obj.html !== undefined)
                                obj.html = parser__.CONF.render.VAR(doc, obj.html);

                            if (pt === '3') {
                                if (section === 1) {
                                    const id = ids['img']++;
                                    toc.images[on_chapter] += '<li class="df-gambar"><span>' + obj.value + '</span><a href="#i' +id+ '"></a></li>';
                                    doc_temp[on_chapter]   += obj.html.replace('##REP-ID##', 'i' + id);
                                }
                                else if (section === 2) {
                                    doc_temp.attachment[doc_temp.attachment.length - 1] += obj.html.replace('##REP-ID##','').replace('class="image"','class="image lampiran-image"');
                                }
                            }
                            else if (pt === '4') {
                                if (section === 1) {
                                    const id = ids['tbl']++;
                                    toc.tables[on_chapter] += '<li class="df-tabel"><span>' + obj.value + '</span><a href="#t'+id+'"></a></li>';
                                    doc_temp[on_chapter]   += obj.html.replace('##REP-ID##', 't' + id);
                                }
                                else if (section === 2) {
                                    doc_temp.attachment[doc_temp.attachment.length - 1] += obj.html.replace('##REP-ID##', '').replace('class="table"', 'class="table lampiran-tbl"');
                                }
                            }
                            else if (pt === '5') {
                                if (section === 1)
                                    doc_temp[on_chapter] += obj.html;
                                else if (section === 2)
                                    doc_temp.attachment[doc_temp.attachment.length - 1] += obj.html;
                                else if (section === 3)
                                    doc_temp.present.abstract.id += obj.html;
                                else if (section === 4)
                                    doc_temp.present.abstract.en += obj.html;
                                else if (section === 5)
                                    doc_temp.present.present += obj.html;
                            }
                            else if (pt === '9') {
                                if (section === 1)
                                    doc_temp[on_chapter] += ('<p>' + obj.html + '</p>');
                                else if (section === 2)
                                    doc_temp.attachment[doc_temp.attachment.length - 1] += ('<p>' + obj.html + '</p>');
                                else if (section === 3)
                                    doc_temp.present.abstract.id += ('<p>' + obj.html + '</p>');
                                else if (section === 4)
                                    doc_temp.present.abstract.en += ('<p>' + obj.html + '</p>');
                            }
                            else {
                                let id = (ids["img"]++) + '';
                                if (obj.desc)
                                    id = 'i' + id;
                                else
                                    id = '';
                                obj.html = obj.html.replace('##REP-ID##', id);
                                if (section === 1) {
                                    doc_temp[on_chapter]   += obj.html;
                                    toc.images[on_chapter] += '<li class="df-gambar"><span>' + obj.value + '</span><a href="#i' +id+ '"></a></li>';
                                }
                                else if (section === 2)
                                    doc_temp.attachment[doc_temp.attachment.length - 1] += obj.html;
                            }
                        }
                        else if (doc.variables[var_val.html] !== undefined) {
                            if (section === 1)
                                doc_temp[on_chapter] += '<p>'+doc.variables[var_val.html]+'</p>';
                            else if (section === 2)
                                doc_temp.attachment[doc_temp.attachment.length - 1] += '<p>'+doc.variables[var_val.html]+'</p>';
                            else if (section === 3)
                                doc_temp.present.abstract.id += '<p>'+doc.variables[var_val.html]+'</p>';
                            else if (section === 4)
                                doc_temp.present.abstract.en += '<p>'+doc.variables[var_val.html]+'</p>';
                        }
                    }
                    else {
                        if (section === 1) {
                            doc_temp[on_chapter] += (register._BREAK.shift()).html;
                        }
                        else if (section === 2) {
                            doc_temp.attachment[doc_temp.attachment.length - 1] += (register._BREAK.shift()).html;
                        }
                        else if (section === 3) {
                            doc_temp.present.abstract.id += (register._BREAK.shift()).html;
                        }
                        else if (section === 4) {
                            doc_temp.present.abstract.en += (register._BREAK.shift()).html;
                        }
                    }
                }

                doc_temp.present.cover   = parser__.CONF.render.COVER(doc);
                doc_temp.present.preface = parser__.CONF.render.PREFACE(doc);

                toc.images.all  = toc.images.chapter_1 + toc.images.chapter_2 + toc.images.chapter_3 + toc.images.chapter_4 + toc.images.chapter_5;
                toc.tables.all  = toc.tables.chapter_1 + toc.tables.chapter_2 + toc.tables.chapter_3 + toc.tables.chapter_4 + toc.tables.chapter_5;
                toc.attachs_all = toc.attachment.join('');

                if (ids.img !== 1)
                    doc_temp.present.toc.images  = '<div class="pendahuluan-sub-title">' + dic['images list'] + '</div><ul id="daftar_gambar">' + toc.images.all + '</ul>';
                else
                    doc_temp.present.toc.images = '';
                if (ids.tbl !== 1)
                    doc_temp.present.toc.tables  = '<div class="pendahuluan-sub-title">' + dic['tables list'] + '</div><ul id="daftar_tabel">' + toc.tables.all + '</ul>';
                else
                    doc_temp.present.toc.tables = '';
                if (ids.att !== 1)
                    doc_temp.present.toc.attachs = '<div class="pendahuluan-sub-title">' + dic['attachments list'] + '</div><ul id="daftar_lampiran">' + toc.attachs_all + '</ul>';
                else
                    doc_temp.present.toc.attachs = '';

                if (doc.meta.approval !== undefined)
                    doc_temp.present.approval = '<div id="pg-lembar_persetujuan" class="head-count"><img src="' + doc.meta.approval + '" alt=""></div>';
                else {
                    doc_temp.present.approval = '';
                    toc.content.present.approval = '';
                }
                if (doc.meta.attestation !== undefined)
                    doc_temp.present.attestation = '<div id="pg-lembar_pengesahan" class="head-count"><img src="' + doc.meta.attestation + '" alt=""></div>';
                else {
                    doc_temp.present.attestation = '';
                    toc.content.present.attestation = '';
                }
                if (doc.meta.statement !== undefined)
                    doc_temp.present.statement = '<div id="pg-lembar_pernyataan" class="head-count"><img src="' + doc.meta.statement + '" alt=""></div>';
                else {
                    doc_temp.present.statement = '';
                    toc.content.present.statement = '';
                }
                if (doc_temp.present.abstract.id !== '')
                    doc_temp.present.abstract.id = '<div id="pg-lembar_abstrak"><div class="pendahuluan-sub-title">abstrak</div>' + doc_temp.present.abstract.id + '</div>';
                else
                    toc.content.present.abstract.id = '';
                if (doc_temp.present.abstract.en !== '')
                    doc_temp.present.abstract.en = '<div id="pg-lembar_abstract"><div class="pendahuluan-sub-title">abstract</div>' + doc_temp.present.abstract.en + '</div>';
                else
                    toc.content.present.abstract.en = '';

                if (doc_temp.present.toc.images + doc_temp.present.toc.tables + doc_temp.present.toc.attachs !== '') {
                    if (doc_temp.present.toc.images === '') toc.content.present.img_list = '';
                    if (doc_temp.present.toc.tables === '') toc.content.present.tbl_list = '';
                    if (doc_temp.present.toc.attachs === '') toc.content.present.att_list = '';
                    doc_temp.present.toc.all = '<div id="pg-daftar_gambar_tabel_lampiran">' + doc_temp.present.toc.images + doc_temp.present.toc.tables + doc_temp.present.toc.attachs + '</div>';
                }
                else {
                    doc_temp.present.toc.all     = '';
                    toc.content.present.img_list = '';
                    toc.content.present.tbl_list = '';
                    toc.content.present.att_list = '';
                }
                doc.html.references = '';
                toc.references = '';

                doc_temp.present.toc.toc = '<div id="pg-daftar_isi" class="head-count"><div class="pendahuluan-sub-title">' + dic['table of content'] + '</div><ul>'
                    + toc.content.present.approval + toc.content.present.attestation + toc.content.present.statement + toc.content.present.abstract.en
                    + toc.content.present.abstract.id + toc.content.present.preface + toc.content.present.toc + toc.content.present.img_list
                    + toc.content.present.tbl_list + toc.content.present.att_list + toc.content.chapter_1 + toc.content.chapter_2 + toc.content.chapter_3
                    + toc.content.chapter_4 + toc.content.chapter_5 + toc.references + toc.content.attachment.join('') + '</ul></div>';

                doc.html.cover = doc_temp.present.cover;
                doc.html.toc   = doc_temp.present.toc.toc;
                doc.html.att   = doc_temp.attachs;
                doc.html.cp_1  = parser__.CONF.render.VAR(doc_temp.chapter_1);
                doc.html.cp_2  = parser__.CONF.render.VAR(doc_temp.chapter_2);
                doc.html.cp_3  = parser__.CONF.render.VAR(doc_temp.chapter_3);
                doc.html.cp_4  = parser__.CONF.render.VAR(doc_temp.chapter_4);
                doc.html.cp_5  = parser__.CONF.render.VAR(doc_temp.chapter_5);
                doc.html.abstract_id = doc_temp.present.abstract.id;
                doc.html.abstract_en = doc_temp.present.abstract.en;
                doc.images = img_map;
                doc.tables = tbl_map;
                doc.html.references = parser__.CONF.render.CITATIONS(doc);

                doc.html.all     = doc_temp.present.cover + doc_temp.present.approval + doc_temp.present.attestation + doc_temp.present.statement + doc_temp.present.abstract.en
                    + doc_temp.present.abstract.id + doc_temp.present.preface + doc_temp.present.toc.toc+ doc_temp.present.toc.all
                    + doc.html.cp_1 + doc.html.cp_2 + doc.html.cp_3 + doc.html.cp_4 + doc.html.cp_5 + doc.html.references + doc_temp.attachs;

                parser__.CONF.render.TEXT(doc);

                doc['toc'] = toc_map;
            }
        }

        if (parser__.CONF.SOURCE.ACTIVE === 0 && parser__.CONF.SOURCE.SILENT !== 0)
            parser__.CONF.SOURCE.activating();
        parser__.CONF.SOURCE.ACTIVE = 10;
        const parent_doc = [document.URL];
        const visit      = [];

        const raw = text;
        //text = parser__.CONF.micro.source() + text;
        text = parser__.CONF.micro.variable() + text;
        parser__.CONF.SOURCE.ON_PARSE = true;
        parser__.CONF.SOURCE.PARSEABLE = true;
        register.clear()
        //if (parser__.CONF.SOURCE.PARSEABLE) text = source(text + parser__.CONF.SOURCE.PRE);
        //else return;
        if (parser__.CONF.SOURCE.PARSEABLE) text = block(text);
        else return;
        if (parser__.CONF.SOURCE.PARSEABLE) text = inline(text);
        else return;
        if (parser__.CONF.SOURCE.PARSEABLE) lex(text);
        else return;
        if (parser__.CONF.SOURCE.PARSEABLE) construct();
        else return;

        parent_doc.shift();
        doc.references = parent_doc;

        doc.raw = raw;
        parser__.CONF.SOURCE.ON_PARSE = false;
        parser__.CONF.SOURCE.PARSEABLE = false;
    },
    construct : function () {
        return '';
    },
    stop  : function () {
        control_.save(document__);
        parser__.REGIS.clear();
        parser__.CONF.SOURCE.SILENT = 0;
        parser__.CONF.SOURCE.deactivating();
    },
    interrupt : function () {
        parser__.CONF.SOURCE.PARSEABLE = false;
    },
    MICRO : function (input) {
        if (input.image !== undefined)
            parser__.CONF.micro.image = input.image;
        if (input.variable !== undefined)
            parser__.CONF.micro.variable = input.variable;
        if (input.source !== undefined)
            parser__.CONF.micro.source = input.source;
    },
    RENDER : function (input) {
        if (input.cover !== undefined)
            parser__.CONF.render.COVER = input.cover;
        if (input.logo !== undefined)
            parser__.CONF.SOURCE.logo  = input.logo;
        if (input.basmallah !== undefined)
            parser__.CONF.SOURCE.basmallah = input.basmallah;
    }
}

window.render__ = {
    render : function (frame, doc) {
        if (typeof frame === 'object')
            frame.innerHTML = doc.html.all;
    }
}

window.user__ = {
    token : '0',
    id    : 0,
    type  : user_roles__.reader,
    data  : {},
}

window.control_ = {
    save    : function (doc) {
        const tmp = document.createElement('div');
        let title = doc.variables.title;
        let raw   = doc.raw;
        let text  = doc.text.all;
        if (title === undefined)
            title = $('meta[name="title"]').attr('content');
        if (text === undefined)
            text = 'empty';
        if (raw !== undefined)
            raw = raw.replace('\n\n','\n');
        else if (editor.pane !== undefined)
            raw = editor.pane.innerText;
        else {
            raw  = ' ';
            text = ' ';
        }
        tmp.innerHTML = title;
        //const cite_sources = {};
        const data = new FormData();
        data.append('id', window.active_content.id);
        data.append('raw', raw);
        data.append('text', text);
        data.append('title', tmp.innerText);
        data.append('media',JSON.stringify({'images':doc.images,'tables':doc.tables}));
        data.append('variables', JSON.stringify(doc.variables));
        pipe.post({
            url         : $('meta[name="save"]').attr('content'),
            data        : data,
            success     : res=>{
                if (res.saved) {
                    window.active_content                      = res.article;
                    unpublished_articles[active_content.id+''] = active_content;
                    saveFiles();
                }
            },
        });
    },
}