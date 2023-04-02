// noinspection JSUnresolvedFunction,JSUnresolvedVariable,JSCheckFunctionSignatures

(()=>{
    const PARAM         = {
        amountLoad      : {
            small       : 5,
            medium      : 10,
            large       : 20,
        },
        preloader_timer : 0.3,
        path            : `${window.location.origin}/project/`,
        languages       : (()=>{
            const lang      = ['id', 'en', 'de', 'kr', 'jp', 'cn', 'ru'];
            const toggles   = {};

            lang.forEach(l=>{
                toggles[l]          = $(`[data-lang-toggle="${l}"]`);
                toggles[l].loaded   = false;
            });

            return {
                data        : lang,
                toggles     : toggles,
                default     : lang[0],
                path        : `${window.location.origin}/project/assets/script/processes/lang/script.js`,
            }
        })(),
        contents        : (()=>{
            const page      = $('meta[name="page"]').attr('content');

            return {
                default     : page,
                elementKey  : 'data-spa-content',
                dynamicMap  : 'data-spa-map',
                pages       : ['beranda', 'sejarah', 'pegawai', 'sertifikat', 'layanan_interaktif', 'layanan_publik', 'status_dan_kontak', 'kerjasama', 'album_galeri', 'berita', 'agenda_kegiatan', 'innovation_qrant', 'innovation_data_api'],
                info        : {},
                path        : `${window.location.origin}/project/assets/script/processes/content/script.js`,
            };
        })(),
        navigator       : ['tentang_kami', 'layanan', 'regulasi', 'galeri'],
        process         : {
            landing     : {
                video       : {
                    target  : '.landing-header-container',
                    source  : 'assets/video/landing-header-scene.mp4',
                    type    : 'video/mp4',
                },
            },
        },
        appData         : {
            schedule    : {
                'senin'             : {
                    open            : true,
                    start           : {
                        hour        : 7,
                        minute      : 30,
                    },
                    end             : {
                        hour        : 16,
                        minute      : 0,
                    },
                    rest            : {
                        start       : {
                            hour    : 12,
                            minute  : 0,
                        },
                        end         : {
                            hour    : 13,
                            minute  : 0,
                        },
                    },
                    next            : 'selasa',
                },
                'selasa'            : {
                    open            : true,
                    start           : {
                        hour        : 7,
                        minute      : 30,
                    },
                    end             : {
                        hour        : 16,
                        minute      : 0,
                    },
                    rest            : {
                        start       : {
                            hour    : 12,
                            minute  : 0,
                        },
                        end         : {
                            hour    : 13,
                            minute  : 0,
                        },
                    },
                    next            : 'rabu',
                },
                'rabu'              : {
                    open            : true,
                    start           : {
                        hour        : 7,
                        minute      : 30,
                    },
                    end             : {
                        hour        : 16,
                        minute      : 0,
                    },
                    rest            : {
                        start       : {
                            hour    : 12,
                            minute  : 0,
                        },
                        end         : {
                            hour    : 13,
                            minute  : 0,
                        },
                    },
                    next            : 'kamis',
                },
                'kamis'             : {
                    open            : true,
                    start           : {
                        hour        : 7,
                        minute      : 30,
                    },
                    end             : {
                        hour        : 16,
                        minute      : 0,
                    },
                    rest            : {
                        start       : {
                            hour    : 12,
                            minute  : 0,
                        },
                        end         : {
                            hour    : 13,
                            minute  : 0,
                        },
                    },
                    next            : 'jumat',
                },
                'jumat'             : {
                    open            : true,
                    start           : {
                        hour        : 7,
                        minute      : 30,
                    },
                    end             : {
                        hour        : 16,
                        minute      : 30,
                    },
                    rest            : {
                        start       : {
                            hour    : 11,
                            minute  : 30,
                        },
                        end         : {
                            hour    : 13,
                            minute  : 0,
                        },
                    },
                    next            : 'sabtu',
                },
                'sabtu'             : {
                    open            : true,
                    start           : {
                        hour        : 7,
                        minute      : 30,
                    },
                    end             : {
                        hour        : 16,
                        minute      : 0,
                    },
                    rest            : {
                        start       : {
                            hour    : 12,
                            minute  : 0,
                        },
                        end         : {
                            hour    : 13,
                            minute  : 0,
                        },
                    },
                    next            : 'minggu',
                },
                'minggu'            : {
                    open            : false,
                    start           : {
                        hour        : 7,
                        minute      : 30,
                    },
                    end             : {
                        hour        : 16,
                        minute      : 0,
                    },
                    rest            : {
                        start       : {
                            hour    : 12,
                            minute  : 0,
                        },
                        end         : {
                            hour    : 13,
                            minute  : 0,
                        },
                    },
                    next            : 'senin',
                },
            },
            schEvent    : {
                open    : {
                    status          : '.onsite-status-open',
                    message         : `<span data-lang-id="onsite-service-open-message">Pelayanan secara luring dapat dilakukan sebelum jam tutup kantor di alamat Stasiun Karantina Pertanian Kelas I di</span>`,
                },
                early   : {
                    status          : '.onsite-status-closed',
                    message         : `<span data-lang-id="onsite-service-early-message">Pelayanan secara luring akan dibuka kembali pada pagi ini sesuai jadwal di alamat Stasiun Karantina Pertanian Kelas I di</span>`,
                },
                rest    : {
                    status          : '.onsite-status-rest',
                    message         : `<span data-lang-id="onsite-service-rest-message">Pelayanan secara luring ditutup sementara dan akan dibuka setelah jam istirahat selesai. Pelayanan luring kantor dapat dilakukan di alamat Stasiun Karantina Pertanian Kelas I di</span>`,
                },
                closed  : {
                    status          : '.onsite-status-closed',
                    message         : `<span data-lang-id="onsite-service-closed-message">Pelayanan secara luring akan dibuka kembali pada besok di alamat Stasiun Karantina Pertanian Kelas I di</span>`,
                },
            },
        },
        mobileMode      : document.body.clientWidth < 1200,
        width           : document.body.clientWidth,
    };
    const factory       = (()=>{
        const f             = {};

        f.animate           = {
            customCard  : {
                hover       : (cardThumbnail, in_=false)=>{
                    const element   = cardThumbnail.children[1];
                    const icon      = cardThumbnail.children[2];
                    const opacity   = in_?[0.75, 1]:[0.25, 0];

                    (gsap.timeline()).to(element, {duration: 0.3, opacity:opacity[0], oncomplete:()=>{
                            if (icon)
                                (gsap.timeline()).to(icon, {duration: 0.3, opacity:opacity[1]});
                        }});
                },
            },
            boxCard     : {
                setGroup        : ()=>{
                    return {
                        cardSelector    : $(),
                        bgSelector      : $(),
                        cards           : {},
                        backgrounds     : {},
                    };
                },
                addBox          : (id, card, bg, group)=>{
                    group.cards[id]         = card;
                    group.backgrounds[id]   = bg;
                    group.cardSelector      = group.cardSelector.add(card);
                    group.bgSelector        = group.bgSelector.add(bg);
                },
                setActive       : (id, group)=>{
                    const card          = group.cards[id];
                    const bg            = group.backgrounds[id];

                    if (card && bg) {
                        group.bgSelector.addClass('d-none');
                        group.cardSelector.removeClass('box-active');
                        $(card).addClass('box-active');
                        $(bg).removeClass('d-none');
                    }
                },
            },
            boxSlider   : {
                setSlider           : element=>{
                    const carousel  = $(`${element}`);
                    let backgrounds = $();
                    let childEls    = $();
                    let headers     = $();
                    let active;
                    let children;

                    (carousel.flickity({
                        cellAlign: 'left',
                        contain: true,
                        imagesLoaded:true,
                    })).
                    on( 'change.flickity', ( event, index )=>{
                        $(active).removeClass('box-active');
                        $(active.header).removeClass('box-header-active');

                        active          = children[index];
                        backgrounds.addClass('d-none');
                        $(active.background).removeClass('d-none');
                        $(active).addClass('box-active');
                        setTimeout(()=>{
                            $(active.header).addClass('box-header-active');
                        }, 300);
                    });
                    setTimeout(()=>{
                        children        = carousel[0].firstElementChild.firstElementChild.children;

                        for (let i=0; i<children.length; i++) {
                            children[i].style.height    = '100%';
                            children[i].background      = $(`[data-box-background=${children[i].getAttribute('data-box-bg')}]`)[0];
                            children[i].header          = children[i].firstElementChild;
                            backgrounds                 = backgrounds.add(children[i].background);
                            headers                     = headers.add(children[i].header);
                            childEls                    = childEls.add(children[i]);
                        }

                        active          = children[0];
                        backgrounds.addClass('d-none');
                        $(active.background).removeClass('d-none');
                        $(active).addClass('box-active');
                    }, 1000);
                },
            },
            tagSlider   : {
                setSlider           : element=>{
                    const carousel  = $(`${element}`);
                    const children  = carousel[0].children;
                    const tags      = {};

                    let active;
                    for (let i=0; i<children.length; i++) {
                        const child     = children[i];
                        const id        = child.getAttribute('data-tag-id');

                        tags[id]        = {
                            element     : child,
                            setActive   :()=>{
                                if (child !== active) {
                                    $(active).removeClass('tag-active');
                                    $(child).addClass('tag-active');
                                    tags[id].callback();
                                    active  = child;
                                }
                            },
                            callback    :()=>{},
                        };
                        $(child).unbind('click').on('click', ()=>{
                            tags[id].setActive();
                        });
                    }

                    (carousel.flickity({
                        cellAlign: 'left',
                        contain: true,
                        imagesLoaded:true,
                    }));

                    return {
                        setActive   : id=>{
                            const tag   = tags[id];

                            if (tag)
                                tag.setActive();
                        },
                        setCallback : (id, cb=()=>{})=>{
                            const tag   = tags[id];

                            if (tag)
                                tag.callback    = cb;
                        },
                    };
                },
            },
        };
        f.event             = {
            scrollTop       : (element, onTop, notOnTop)=>{
                let positionTop             = true;

                document.body.onscroll      = ()=>{
                    if (element.getBoundingClientRect().y === 0) {
                        if (!positionTop)
                            onTop();

                        positionTop     = true;
                    }
                    else {
                        if (positionTop)
                            notOnTop();

                        positionTop     = false;
                    }
                };
            },
        };
        f.href              = {
            update      : ()=>{
                $(`[data-init-href][data-init=false]`).each((i, e)=>{
                    e.setAttribute('data-init', 'true');

                    $(e).
                    unbind('click').
                    click(()=>{
                        window.open(e.getAttribute('data-init-href'), '_blank');
                    });
                });
            },
        };
        f.input             = {
            select          : {
                set         : (target, onchange=()=>{})=>{
                    const select        = $(`.${target}`);
                    const el_value      = select[0].firstElementChild;
                    const el_button     = select[0].children[1];
                    const el_options    = select[0].lastElementChild.children;
                    let onopen          = false;
                    let selected        = undefined;
                    let def_;

                    $(el_value).
                    unbind('change').
                    on('change', ()=>{
                        onchange(el_value.value);
                    });

                    $(el_button).
                    unbind('click').
                    click(()=>{
                        if (onopen)
                            select[0].setAttribute('data-option-open', 'false');
                        else
                            select[0].setAttribute('data-option-open', 'true');

                        onopen          = !onopen;
                    });

                    for (let i=0; i<el_options.length; i++) {
                        const option        = el_options[i];

                        if (typeof option.getAttribute('data-selected') === 'string') {
                            def_            = option;
                            $(selected).removeAttr('data-selected');
                            el_value.value  = option.getAttribute('data-value');
                            selected        = option;
                            $(selected).attr('data-selected', true);
                        }

                        $(option).
                        unbind('click').
                        click(()=>{
                            $(el_value).val(option.getAttribute('data-value')).change();
                            select[0].setAttribute('data-option-open', 'false');
                            $(selected).removeAttr('data-selected');
                            selected        = option;
                            $(selected).attr('data-selected', true);
                            onopen          = false;
                        });
                    }

                    return {
                        get             : ()=>{
                            return selected.getAttribute('data-value');
                        },
                        clear           : ()=>{
                            $(selected).removeAttr('data-selected');
                            el_value.value  = def_.getAttribute('data-value');
                            selected        = def_;
                            $(def_).attr('data-selected', true);
                        },
                    }
                },
            },
            radio           : (elements, onchange=()=>{})=>{
                const x     = {
                    value       : '',
                    onchange    : onchange,
                    clear       : ()=>{
                        def_.checked    = true;
                        x.value         = def_.value;
                    },
                };
                let def_;

                elements.forEach(e=>{
                    if (e.checked) {
                        def_        = e;
                        x.value     = e.value;
                    }

                    $(e).
                    unbind('click').
                    click(()=>{
                        x.value     = e.value;
                        onchange(x.value);
                    });
                })

                return x;
            },
        };
        f.sd_table          = {
            set         : (target, prop={})=>{
                const select        = $(`[data-sd-table-id="${target}"]`);

                if (!select[0])
                    return {};

                if (PARAM.mobileMode)
                    select[0].setAttribute('data-sd-table-mode', 'mobile');

                const elements      = {
                    select          : select,
                    search_input    : $($(`[data-sd-table-search="${target}"]`)[0]),
                    focus_toggle    : $(`[data-sd-table-toggle-focus="${target}"]`),
                    blur_toggle     : $(`[data-sd-table-toggle-blur="${target}"]`),
                    options_menu    : $(`[data-sd-table-options="${target}"]`),
                    table_body      : $(`[data-sd-table-body="${target}"]`),
                    load_more       : $(`[data-sd-table-more="${target}"]`),
                };
                const object        = {
                    insert          : content=>{
                        const row       = document.createElement('tr');

                        row.innerHTML   = content;

                        elements.table_body[0].appendChild(row);
                        select[0].setAttribute('data-sd-table-is-empty', 'false');

                        return row;
                    },
                    reset           : ()=>{
                        elements.table_body[0].innerHTML    = '';
                        select[0].setAttribute('data-sd-table-is-empty', 'true');
                        object.hasLoadMore(false);
                    },
                    onSearch        : ()=>{},
                    onLoadMore      : ()=>{},
                    hasLoadMore     : (bool=false)=>{
                        select[0].setAttribute('data-sd-table-has-more', bool+'');
                    },
                    hide            : ()=>{
                        select.addClass('d-none');
                    },
                    show            : ()=>{
                        select.removeClass('d-none');
                    },
                };
                let searchTyping;

                if (elements.focus_toggle) {
                    elements.focus_toggle.
                    unbind('click').
                    click(()=>{
                        app.navigator.hide();
                        select[0].setAttribute('data-sd-table-focus', 'true');
                    });
                    elements.blur_toggle.
                    unbind('click').
                    click(()=>{
                        app.navigator.show();
                        select[0].setAttribute('data-sd-table-focus', 'false');
                    });
                }
                if (elements.search_input[0]) {
                    elements.search_input   = $(elements.search_input[0].firstElementChild);
                    elements.search_input.
                    unbind('input').
                    on('input', ()=>{
                        select[0].setAttribute('data-sd-table-on-search', 'true');
                        if (searchTyping)
                            clearTimeout(searchTyping);
                        searchTyping    = setTimeout(()=>{
                            object.onSearch(elements.search_input.val());
                            select[0].setAttribute('data-sd-table-on-search', 'false');
                        }, 300);
                    });
                }
                if (elements.load_more) {
                    elements.load_more.
                    unbind('click').
                    click(()=>{
                        object.onLoadMore();
                    });
                }
                if (prop.hoverable)
                    select[0].setAttribute('data-sd-table-hoverable', 'true');
                if (prop.dataLabel) {
                    select.on('click', '[data-label]', e=>{
                        const label     = e.target.getAttribute('data-label');

                        if (elements.search_input.val() !== label) {
                            elements.search_input.val(label);
                            object.onSearch(label);
                        }
                    });
                }

                return object;
            },
        };
        f.formatter         = {
            currency    : amount=>{
                if (amount < 1000)
                    return amount + '';

                let res     = '';
                let segment = 0;
                amount      = (amount + '').split('');

                for (let i = amount.length-1; i>=0; i--) {
                    if (segment === 3) {
                        res     = '.' + res;
                        segment = 0;
                    }
                    res         = amount[i] + res;
                    segment++;
                }

                return res;
            },
        };
        f.validator         = {
            noEmpty         : text=>/^\s*$/m.exec(text)==null,
        };
        f.date              = (()=>{
            const days          = [
                'minggu',
                'senin',
                'selasa',
                'rabu',
                'kamis',
                'jumat',
                'sabtu'
            ];
            const timeFunctions = {
                timeMore            : (hour1, minute1, hour2, minute2)=>{
                    if (hour1 < hour2)
                        return false;
                    if (hour1 > hour2)
                        return true;

                    return minute1 >= minute2;
                },
                timeLess            : (hour1, minute1, hour2, minute2)=>{
                    if (hour1 > hour2)
                        return false;
                    if (hour1 < hour2)
                        return true;

                    return minute1 <= minute2;
                },
            };

            return {
                getToday            : ()=>{
                    return days[(new Date()).getDay()];
                },
                timeMore            : timeFunctions.timeMore,
                timeLess            : timeFunctions.timeLess,
                timeRange           : (hourSrc, minSrc, hourMin, minMin, hourMax, minMax)=>{
                    return timeFunctions.timeMore(hourSrc, minSrc, hourMin, minMin) && timeFunctions.timeLess(hourSrc, minSrc, hourMax, minMax);
                },
            };
        })();
        f.thread            = (()=>{
            const callbacks     = {};
            const setToken      = (()=>{
                const CHARACTERS        = 'abcdefghijklmnopqrstuvwxyz1234567890_';
                const CHAR_LEN          = CHARACTERS.length;

                return (len=6, prefix='', postfix='')=>{
                    let result          = '';

                    while (result.length < len)
                        result         += CHARACTERS.charAt(Math.floor(Math.random() * CHAR_LEN));

                    return `${prefix}${result}${postfix}`;
                };
            })();
            const createWorker  = path=>{
                return new Worker(path);
            };
            const workerData    = `${PARAM.path}/assets/script/processes/data/script.js`;

            return (path, functions=[])=>{
                if (!path)
                    path            = workerData;

                let running         = 0;
                const worker        = createWorker(path);

                worker.onmessage    = e=>{
                    const data      = e.data;
                    const fun       = callbacks[data.token];

                    if (fun) {
                        fun(data.data);
                        delete callbacks[data.token];
                        running--;
                    }
                };

                return {
                    run             : (command, data, callback=()=>{})=>{
                        if (functions.includes(command)) {
                            const token         = setToken();

                            running++;
                            callbacks[token]    = callback;
                            worker.postMessage({
                                token           : token,
                                data            : data,
                                command         : command,
                            });
                        }
                    },
                    terminate       : (callback=()=>{})=>{
                        worker.terminate();
                        callback();
                    },
                    totalRunning    : ()=>{return running;},
                };
            };
        })();
        f.extension         = (()=>{
            const thread        = f.thread(`${PARAM.path}assets/script/processes/plugin/script.js`, ['init', 'install']);
            const installed     = {};

            thread.run('init', `${PARAM.path}assets/script/plugins/`);

            return {
                install         : (key, callback=()=>{})=>{
                    if (!installed[key]) {
                        thread.run('install', key, res=>{
                            installed[key]  = eval(res);
                            callback(installed[key]);
                        });
                    }
                    else
                        callback(installed[key]);
                },
                get             : key=>installed[key]?installed[key]:{},
                uninstall       : (key, callback=()=>{})=>{
                    if (installed[key]) {
                        installed[key].destroy();
                        delete installed[key];
                        callback();
                    }
                },
            };
        })();

        return f;
    })();
    const app           = {
        elements        : {
            root        : $($('.landing')[0]),
            container   : $($('.app-content')[0]),
            footer      : $($('.footer')[0]),
        },
        theme           : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light',
        destroy         : ()=>{},
    };

    //set preloader
    (()=>{
        const preloader = $('.preloader');

        app.elements.preloader  = preloader;
        app.preloader   = {
            fadeIn      : (callback=()=>{})=>{
                preloader.addClass('onload');
                app.elements.root.addClass('block');
                (gsap.timeline()).to(preloader[0], {duration:0.3, opacity:1, oncomplete:()=>{
                    setTimeout(()=>{
                        callback();
                    }, 300);
                }});
            },
            fadeOut     : (callback=()=>{})=>{
                (gsap.timeline()).to(preloader[0], {duration:0.3, opacity:0, oncomplete:()=>{
                    setTimeout(()=>{
                        preloader.removeClass('onload');
                        app.elements.root.removeClass('block');
                        callback();
                    }, 300);
                }});
            },
        };
    })();

    //set theme
    (()=>{
        const preloader = app.elements.preloader;
        const root      = app.elements.root;

        preloader.attr('data-theme', app.theme);
        root.attr('data-theme', app.theme);

        $(`[data-theme-toggle="light"]`).click(()=>{
            preloader.attr('data-theme', 'light');
            root.attr('data-theme', 'light');
        });
        $(`[data-theme-toggle="dark"]`).click(()=>{
            preloader.attr('data-theme', 'dark');
            root.attr('data-theme', 'dark');
        });
    })();

    //set languages
    ((param=PARAM.languages)=>{
        const thread    = factory.thread(param.path, ['init', 'wereLoaded', 'get']);

        thread.run('init', {path:`${PARAM.path}assets/lang/`, lang:param.data}, ()=>{
            const total     = param.data.length;
            let loopCheck   = setInterval(()=>{
                thread.run('wereLoaded', {}, res=>{
                    if (res.length === total)
                        clearInterval(loopCheck);
                    res.forEach(lang=>{
                        const toggle    = param.toggles[lang];

                        if (!toggle.loaded) {
                            toggle.
                            removeClass('d-none').
                            unbind('click').
                            on('click', ()=>{
                                if (app.languages.used !== lang)
                                    app.languages.toggle(lang);
                            });

                            toggle.loaded   = true;
                        }
                    });
                });
            }, 500);
        });

        app.languages   = {
            used        : param.default,
            toggle      : (lang, activeContent=PARAM.contents.default)=>{
                thread.run('get', {id:lang}, res=>{
                    app.languages.used      = lang;
                    res.nav.forEach(l=>{
                        $(`[data-lang-id="${l.id}"]`).text(l.value);
                    });
                    res.footer.forEach(l=>{
                        $(`[data-lang-id="${l.id}"]`).text(l.value);
                    });
                    res.page[activeContent].forEach(l=>{
                        if (l.attr)
                            $(`[data-lang-id="${l.id}"]`).attr(l.attr, l.value);
                        else
                            $(`[data-lang-id="${l.id}"]`).text(l.value);
                    });

                    window.dispatchEvent(new Event('resize'));
                });
            },
        };
    })();

    //set navigator
    ((menuMap=PARAM.navigator, spaMap=PARAM.contents.elementKey, dynamicMap=PARAM.contents.dynamicMap)=>{
        if (!PARAM.mobileMode) {
            const readNavs      = str=>{
                const navBtn                = $(`[data-nav-menu-target="${str}"]`);
                const navMenu               = $(`[data-nav-menu-group="${str}"]`);
                const navContent            = $(`[data-nav-menu-content="${str}"]`);

                navMenu.addClass('d-none');
                navContent.addClass('d-none');

                elements.menus.navMenus     = elements.menus.navMenus.add(navMenu[0]);
                elements.menus.navContents  = elements.menus.navContents.add(navContent[0]);

                navBtn.on('mouseenter', ()=>{
                    onHover         = true;
                    elements.hoverContent.removeClass('d-none');
                    elements.menus.navMenus.addClass('d-none');
                    elements.menus.navContents.addClass('d-none');
                    navMenu.removeClass('d-none');
                    navContent.removeClass('d-none');
                });
            };
            const elements      = {
                container       : $('.nav-container'),
                hoverContent    : $('.nav-sub-menu'),
                menus           : {
                    navMenus    : $(),
                    navContents : $(),
                },
            };
            let onHover         = false;

            elements.hoverContent.addClass('d-none');
            elements.container.on('mouseleave', ()=>{
                onHover         = false;
                elements.menus.navMenus.addClass('d-none');
                elements.menus.navContents.addClass('d-none');
                elements.hoverContent.addClass('d-none');
            });

            menuMap.forEach(menu=>{
                readNavs(menu);
            });

            app.navigator       = {
                ready           : ()=>{elements.container.removeClass('d-none');},
                blur            : ()=>{},
            };
        }
        else {
            (()=>{
                const mobNav        = $('.navigator-mob');

                mobNav.addClass('reach-top');

                factory.event.scrollTop(
                    app.elements.container[0],
                    ()=>{
                        mobNav.addClass('reach-top');
                    },
                    ()=>{
                        mobNav.removeClass('reach-top');
                    },
                );
            })();
            const mobNav        = (()=>{
                const root              = app.elements.root;
                const navHeader         = $($(`.navigator-mob`)[0]);
                const navigator         = $($(`.navigator-mob-menu`)[0]);
                const menuBlocks        = {};
                const fun               = {
                    focus               : ()=>{
                        root.addClass('block');
                        (gsap.timeline()).to(navigator[0], {duration:0.3, left:'0vw', oncomplete:()=>{}});
                    },
                    blur                : ()=>{
                        if (activeMenu)
                            activeMenu.blur();
                        root.removeClass('block');
                        (gsap.timeline()).to(navigator[0], {duration:0.3, left:'-100vw', oncomplete:()=>{}});
                    },
                    hide                : ()=>{
                        navHeader.addClass('d-none');
                        app.elements.footer[0].style.maxHeight  = '0px';
                        app.elements.footer[0].style.overflow   = 'hidden';
                    },
                    show                : ()=>{
                        navHeader.removeClass('d-none');
                        app.elements.footer[0].style.maxHeight  = '';
                        app.elements.footer[0].style.overflow   = '';
                    },
                };
                let activeMenu          = undefined;

                PARAM.navigator.forEach(label=>{
                    let active          = false;
                    const toggle        = $(`[data-nav-mob-toggle="${label}"]`)[0];
                    const menus         = $(`[data-nav-mob-menu="${label}"]`)[0];
                    const signs         = {
                        plus            : toggle.firstElementChild.firstElementChild,
                        minus           : toggle.firstElementChild.lastElementChild,
                    };

                    $(signs.minus).addClass('d-none');
                    menus.style.maxHeight   = `0px`;

                    menuBlocks[label]   = {
                        label           : label,
                        focus           : ()=>{
                            if (!active) {
                                if (activeMenu)
                                    activeMenu.blur();

                                $(signs.plus).addClass('d-none');
                                $(signs.minus).removeClass('d-none');
                                (gsap.timeline()).to(menus, {duration:0.3, maxHeight:'400px', oncomplete:()=>{
                                    active              = true;
                                    activeMenu          = menuBlocks[label];
                                }});
                            }
                        },
                        blur            : ()=>{
                            if (active) {
                                $(signs.plus).removeClass('d-none');
                                $(signs.minus).addClass('d-none');
                                (gsap.timeline()).to(menus, {duration:0.3, maxHeight:'0px', oncomplete:()=>{
                                    active              = false;
                                    activeMenu          = undefined;
                                }});
                            }
                        },
                    };

                    $(toggle).
                    click(()=>{
                        if (!active)
                            menuBlocks[label].focus();
                        else
                            menuBlocks[label].blur();
                    });
                });

                $(`[data-nav-toggle="open"]`).click(fun.focus);
                $(`[data-nav-toggle="close"]`).click(fun.blur);

                return fun;
            })();

            app.navigator       = {
                ready           : ()=>{},
                blur            : mobNav.blur,
                hide            : mobNav.hide,
                show            : mobNav.show,
            };
        }

        $(`[${spaMap}]`).
        each((i, e)=>{
            $(e).
            unbind('click').
            click(()=>{
                app.navigator.blur();
                app.preloader.fadeIn(()=>{
                    app.contents.toggle(e.getAttribute(spaMap));
                });
            });
        });
        app.map         = {
            refresh     : ()=>{
                $(`[${dynamicMap}]`).
                each((i, e)=>{
                    $(e).
                    unbind('click').
                    click(()=>{
                        app.navigator.blur();
                        app.preloader.fadeIn(()=>{
                            app.contents.toggle(e.getAttribute(dynamicMap));
                        });
                    });
                });
            },
        };
    })();

    //set content
    ((param=PARAM.contents)=>{
        const thread    = factory.thread(param.path, ['init', 'isLoaded', 'get']);

        thread.run('init', {path:`${PARAM.path}contents/`, targets:param.pages}, ()=>{});

        app.contents    = {
            isLoaded    : (id, callback=()=>{})=>{
                thread.run('isLoaded', {id:id}, callback);
            },
            toggle      : (id, callback=()=>{})=>{
                if (!param.pages.includes(id))
                    return;
                app.contents.isLoaded(id, loaded=>{
                    if (!loaded)
                        return;

                    thread.run('get', {id:id}, content=>{
                        app.destroy();
                        app.elements.container[0].innerHTML     = content.content;
                        document.title                          = content.meta.title;

                        if (content.meta.navTransparent)
                            app.elements.root[0].setAttribute('data-nav-theme', 'transparent');
                        else
                            app.elements.root[0].setAttribute('data-nav-theme', '');

                        window.history.pushState(`${PARAM.path}${content.meta.path}`, content.meta.title, `${PARAM.path}${content.meta.path}`);
                        feather.replace();
                        eval(content.script);

                        app.languages.toggle(app.languages.used, id);
                        app.preloader.fadeOut();
                        app.navigator.ready();
                        app.map.refresh();
                        factory.href.update();
                        callback(id);
                    });
                });
            },
        };
    })();

    //test preload first initialization
    setTimeout(()=>{
        let waitContent     = setInterval(()=>{
            app.contents.isLoaded(PARAM.contents.default, loaded=>{
                if (loaded) {
                    clearInterval(waitContent);
                    app.contents.toggle(PARAM.contents.default, ()=>{});
                }
            });
        }, 500);
    }, 1000);

    window.app  = app;
})();

