// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const cards         = {
        detail          : $('.detail-card'),
        qr              : $('.qr-card'),
        docControl      : $('.doc-modal-control'),
    };
    const root          = $('meta[name="data-root"]').attr('content');
    const contents      = content_switcher['dashboard'];
    const mobileAct     = mobile_act(true);
    const districts     = read_district_(false, true);
    const comTypes      = read_comtype_(true);
    const docTypes      = read_doctype_(true);
    const carItem       = (()=>{
        let focus;
        const carousels = {
            users       : $('#carousel-item-user'),
            documents   : $('#carousel-item-document'),
            commodities : $('#carousel-item-commodity'),
            traffics    : $('#carousel-item-traffic'),
            all         : $('.carousel-item-content'),
        };

        return {
            focus       : k=>{
                focus   = k;
                carousels.all.addClass('d-none');
                carousels[k].removeClass('d-none');
            },
            getFocus    : ()=>{
                return focus;
            },
        };
    })();
    const fillContent   = (()=>{
        const con_loader    = $('#content-loader-container');
        const con_label     = $('#list-content-title-label');
        const con_container = $('#list-content-container');

        return (label, cache, makeCache=()=>{})=>{
            con_label.text(label);
            window.scrollTo(0, 0);
            con_loader.removeClass('d-none');
            con_container.html('');
            contents.focus('list');
            if (!cache) {
                //load data from server and store to cache
                setTimeout(()=>{
                    //load data and foreach data make cache
                    makeCache();
                    con_loader.addClass('d-none');
                }, 1000);
            }
            else {
                //display data from cache
                setTimeout(()=>{
                    con_loader.addClass('d-none');
                }, 200);
            }
        };
    })();
    const users         = ((list_parent=$('#user-list'), list_context=$('#modal-user-list-selector'))=>{
        const data_user = window.data_user.users;
        const readUser  = o=>{
            const a     = {
                id          : o.id,
                uid         : o.uid,
                name        : o.name,
                email       : o.email,
                phone       : o.phone,
                address     : o.address,
                fullAddress : o.address,
                province    : o.province,
                amount      : o.amount,
                cache       : {
                    documents   : linkedList(),
                    commodities : linkedList(),
                    traffics    : linkedList(),
                },
            };
            a.ui        = makeList(a);

            if (a.province) {
                a.district  = districts.data[o.district];
                a.region    = a.district.regions[o.region];
            }

            return a;
        };
        const makeList  = o=>{
            const list  = document.createElement('div');

            list.setAttribute('class', 'r-list text-capitalize fnw-600');
            list.innerHTML  = '<div><div class="d-flex flex-row txt-right wpc-100 txt-dark"><label class="group-checkbox group-checkbox-sm group-checkbox-success"><span><input type="checkbox"></span></label></div></div><div>'+o.name+'</div><div><div><span class="txt-muted"><i data-feather="file-text"></i></span> <span class="mgr-2">'+o.amount.documents+'</span><span class="txt-muted"><i data-feather="package"></i></span> <span class="mgr-2">'+o.amount.commodities+'</span><span class="txt-muted"><i data-feather="corner-up-left"></i></span> <span class="mgr-1">'+o.amount.traffics+'</span></div></div>';

            const tmp_stat  = list.lastElementChild.firstElementChild;
            const name_list = list.children[1];
            const check     = list.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
            const statDoc   = tmp_stat.firstElementChild;
            const statCom   = tmp_stat.children[2];
            const statTra   = tmp_stat.lastElementChild.previousElementSibling;

            $(name_list).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    modal.show('user-detail');
                }
            });
            $(statDoc).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    fillContent('dokumen', o.cache.documents);
                }
            });
            $(statCom).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    fillContent('komoditas', o.cache.commodities);
                }
            });
            $(statTra).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    fillContent('lalulintas', o.cache.traffics);
                }
            });

            return {
                list        : list,
                check       : check,
                statDoc     : statDoc,
                statCom     : statCom,
                statTra     : statTra,
            };
        };
        const x         = linkedList([
            {
                label   : 'body',
                value   : list_parent,
            },
            {
                label   : 'selector',
                value   : list_selector($('#user-table-selector'), $('#user-table-selected-label'), $('#user-table-select-all'), list_context, list_parent),
            },
        ]);

        x.selector.toggle();
        mob_touch_hold(list_parent[0], ()=>{
            x.selector.toggle(true);
        });
        $('#close-user-list-selector').click(()=>{
            x.selector.toggle();
        });
        $('#user-selector-modal-excel').click(()=>{
            console.log(x.selector.getSelected());
        });
        $('#user-selector-modal-csv').click(()=>{
            console.log(x.selector.getSelected());
        });

        data_user.forEach(u=>{
            const o     = readUser(u);

            x.add(o.uid, o, o=>{
                x.body[0].appendChild(o.ui.list);
                x.selector.addList(o.ui.check, o.ui.list, o);
            });
        });

        return x;
    })();
    const documents     = ((list_parent=$('#document-list'), list_context=$('#modal-document-list-selector'))=>{
        const data_docs = window.data_user.documents;
        const readDoc   = o=>{
            const a                 = {
                id                  : o.id,
                did                 : o.did,
                token               : o.token,
                type                : docTypes[o.type],
                created_at          : o.created_at,
                publish_district    : districts.data[o.publish_district],
                publish_region      : districts.regions[o.publish_region],
                published_by        : o.published_by,
                owner               : o.owner,
                commodity           : o.commodity,
                traces              : [],
                medias              : [],
                attributes          : o.attributes,
                letter_num          : o.letter_num,
                code                : root + o.code,
            };
            a.ui                    = makeList(a);

            o.traces.forEach(t=>{
                a.traces.push({
                    district        : districts.data[t.district],
                    region          : districts.regions[t.region],
                    officer         : t.officer,
                    created_at      : t.created_at,
                });
            });
            o.medias.forEach(m=>{
                a.medias.push(root + m);
            });

            return a;
        };
        const makeList  = o=>{
            const list  = document.createElement('div');

            list.setAttribute('class', 'r-list r-list-single text-capitalize fnw-600');
            list.innerHTML  = '<div><div class="d-flex flex-row txt-right wpc-100 txt-dark"><label class="group-checkbox group-checkbox-sm group-checkbox-success"><span><input type="checkbox"></span></label></div></div><div><span><span class="'+o.type.format+'">'+o.type['alias']+'</span> '+o.commodity.name+'</span><span class="fns-9 txt-muted">'+o.owner.name+'<span> . </span><span>'+o.created_at+'</span></div><div><div><span class=""></span> <span class=""></span><span class=""></span> <span class=""></span><span class=""></span> <span class=""></span></div></div>';

            const title_list    = list.children[1];
            const check         = list.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;

            date_format.formatSince(title_list.lastElementChild.lastElementChild, o.created_at, 3600);

            $(title_list).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    modal.show('document');
                }
            });

            return {
                list        : list,
                check       : check,
            };
        };
        const x         = linkedList([
            {
                label   : 'body',
                value   : list_parent,
            },
            {
                label   : 'selector',
                value   : list_selector($('#document-table-selector'), $('#document-table-selected-label'), $('#document-table-select-all'), list_context, list_parent),
            },
        ]);

        x.selector.toggle();
        mob_touch_hold(list_parent[0], ()=>{
            x.selector.toggle(true);
        });
        $('#close-document-list-selector').click(()=>{
            x.selector.toggle();
        });
        $('#document-selector-modal-excel').click(()=>{
            console.log(x.selector.getSelected());
        });
        $('#document-selector-modal-csv').click(()=>{
            console.log(x.selector.getSelected());
        });

        data_docs.forEach(d=>{
            const o     = readDoc(d);

            x.add(o.did, o, o=>{
                x.body[0].appendChild(o.ui.list);
                x.selector.addList(o.ui.check, o.ui.list, o);
            });
        });

        return x;
    })();
    const commodities   = ((list_parent=$('#commodity-list'), list_context=$('#modal-commodity-list-selector'))=>{
        const data_com  = window.data_user.commodities;
        const readCom   = o=>{
            const a         = {
                id              : o.id,
                cid             : o.cid,
                name            : o.name,
                owner           : o.owner,
                type            : comTypes.data[o.type],
                district        : districts.data[o.district],
                region          : districts.regions[o.region],
                amount          : {
                    documents   : o.amount.documents,
                    traffics    : o.amount.traffics,
                },
                cache           : {
                    documents   : linkedList(),
                    traffics    : linkedList(),
                },
            };

            if (a.owner.province) {
                a.owner.district    = districts.data[a.owner.district];
                a.owner.region      = districts.regions[a.owner.region];
            }

            a.ui            = makeList(a);
            a.medias        = [];
            o.medias.forEach(m=>{
                a.medias.push(root + m);
            });

            return a;
        };
        const makeList  = o=>{
            const list  = document.createElement('div');

            list.setAttribute('class', 'r-list text-capitalize fnw-600');
            list.innerHTML  = '<div><div class="d-flex flex-row txt-right wpc-100 txt-dark"><label class="group-checkbox group-checkbox-sm group-checkbox-success"><span><input type="checkbox"></span></label></div></div><div><div>'+o.name+'</div><div class="txt-muted fns-9">'+o.type.type+'</div></div><div><div><span class="txt-muted"><i data-feather="file-text"></i></span> <span class="mgr-2">'+o.amount.documents+'</span><span class="txt-muted"><i data-feather="corner-up-left"></i></span> <span class="mgr-1">'+o.amount.traffics+'</span></div></div>';

            const tmp_stat  = list.lastElementChild.firstElementChild;
            const name_list = list.children[1];
            const check     = list.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
            const statDoc   = tmp_stat.firstElementChild;
            const statTra   = tmp_stat.children[2];

            $(name_list).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    modal.show('commodity-detail');
                }
            });
            $(statTra).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    fillContent('lalulintas', o.cache.traffics);
                }
            });
            $(statDoc).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    fillContent('dokumen', o.cache.documents);
                }
            });

            return {
                list        : list,
                check       : check,
            };
        };
        const x         = linkedList([
            {
                label   : 'body',
                value   : list_parent,
            },
            {
                label   : 'selector',
                value   : list_selector($('#commodity-table-selector'), $('#commodity-table-selected-label'), $('#commodity-table-select-all'), list_context, list_parent),
            },
        ]);

        x.selector.toggle();
        mob_touch_hold(list_parent[0], ()=>{
            x.selector.toggle(true);
        });
        $('#close-commodity-list-selector').click(()=>{
            x.selector.toggle();
        });
        $('#commodity-selector-modal-excel').click(()=>{
            console.log(x.selector.getSelected());
        });
        $('#commodity-selector-modal-csv').click(()=>{
            console.log(x.selector.getSelected());
        });

        data_com.forEach(c=>{
            const commodity     = readCom(c);

            x.add(commodity.cid, commodity, c=>{
                x.body[0].appendChild(c.ui.list)
                x.selector.addList(c.ui.check, c.ui.list, c);
            });
        });

        delete window.data_user.commodities;

        return x;
    })();
    const traffics      = ((list_parent=$('#traffic-list'), list_context=$('#modal-traffic-list-selector'))=>{
        const data_trf  = window.data_user.traffics;
        const setAdr    = (a, key='from')=>{
            if (a[key + '_province']) {
                const regionKey     = a[key];

                a[key]              = {
                    district        : districts.regions[regionKey].district,
                    region          : districts.regions[regionKey],
                };
                a[key + '_address'] = a[key].district.name + ', ' + a[key].region.name;
            }
            else {
                a[key]              = {
                    district        : undefined,
                    region          : undefined,
                };
            }
        };
        const readTrf   = o=>{
            const a         = {
                id              : o.id,
                tid             : o.tid,
                commodity       : o.commodity,
                from_province   : o.from_province,
                to_province     : o.to_province,
                from_address    : o.from_address,
                to_address      : o.to_address,
                from            : o.from,
                to              : o.to,
                time            : o.time,
            };

            setAdr(a);
            setAdr(a, 'to');
            a.commodity.type                = comTypes.data[a.commodity.type];

            if (a.commodity.province) {
                a.commodity.district        = districts.data[a.commodity.district];
                a.commodity.region          = districts.regions[a.commodity.region];
            }
            if (a.commodity.owner.province) {
                a.commodity.owner.district  = districts.data[a.commodity.owner.district];
                a.commodity.owner.region    = districts.regions[a.commodity.owner.region];
            }
            a.ui            = makeList(a);

            return a;
        };
        const makeList  = o=>{
            const list  = document.createElement('div');

            list.setAttribute('class', 'r-list r-list-none text-capitalize fnw-600');
            list.innerHTML      = '<div><div class="d-flex flex-row txt-right wpc-100 txt-dark"><label class="group-checkbox group-checkbox-sm group-checkbox-success"><span><input type="checkbox"></span></label></div></div><div><div class="r-list-traffic-grid"><span>'+o.from.district['original']+', '+o.from.region['original']+'</span><span class="mgl-1 mgr-1 txt-info"><i data-feather="arrow-right"></i></span><span>'+o.to.district['original']+', '+o.to.region['original']+'</span></div><div class="fns-9 txt-muted"><span>'+o.commodity.name+'</span><span class="mgl-1 mgr-1">.</span><span></span></div></div><div><div></div></div>';

            const check     = list.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
            const name_list = list.children[1];
            const timeEl    = name_list.lastElementChild.lastElementChild;

            date_format.formatSince(timeEl, o.time, 3600);
            $(name_list).click(()=>{
                if (!x.selector.onToggle()) {
                    x.focus     = o;
                    modal.show('traffic-detail');
                }
            });

            return {
                list        : list,
                check       : check,
            };
        };
        const x         = linkedList([
            {
                label   : 'body',
                value   : list_parent,
            },
            {
                label   : 'selector',
                value   : list_selector($('#traffic-table-selector'), $('#traffic-table-selected-label'), $('#traffic-table-select-all'), list_context, list_parent),
            },
        ]);

        x.selector.toggle();
        mob_touch_hold(list_parent[0], ()=>{
            x.selector.toggle(true);
        });
        $('#close-traffic-list-selector').click(()=>{
            x.selector.toggle();
        });
        $('#traffic-selector-modal-excel').click(()=>{
            console.log(x.selector.getSelected());
        });
        $('#traffic-selector-modal-csv').click(()=>{
            console.log(x.selector.getSelected());
        });

        data_trf.forEach(t=>{
            const traffic   = readTrf(t);

            x.add(traffic.tid, traffic, traffic=>{
                x.body[0].appendChild(traffic.ui.list);
                x.selector.addList(traffic.ui.check, traffic.ui.list, traffic);
            });
        });

        delete window.data_user.traffics;

        return x;
    })();

    //stats carousel
    (()=>{
        const   car_usr     = $('#carousel_users'),
                car_doc     = $('#carousel_documents'),
                car_com     = $('#carousel_commodities'),
                car_tra     = $('#carousel_traffics');
        const stats         = data_user.stats;
        let sec_active      = users;
        let car_active      = car_usr;
        let usr             = stats.total_users;
        let doc             = stats.total_docs;
        let com             = stats.total_com;
        let tra             = stats.total_tra;

        if (usr === 0)
            usr             = 'tidak ada';
        if (doc === 0)
            doc             = 'tidak ada';
        if (com === 0)
            com             = 'tidak ada';
        if (tra === 0)
            tra             = 'tidak ada';

        $('#total_users').text(usr);
        $('#total_documents').text(doc);
        $('#total_commodities').text(com);
        $('#total_traffics').text(tra);

        [[car_usr, 'users', users], [car_doc, 'documents', documents], [car_com, 'commodities', commodities], [car_tra, 'traffics', traffics]].forEach(car=>{
            car[0].click(()=>{
                if (car[0] !== car_active) {
                    sec_active.selector.toggle();
                    carItem.focus(car[1]);
                    car_active.removeClass('active');
                    car[0].addClass('active');
                    car_active  = car[0];
                    sec_active  = car[2];
                }
            });
        });

        carItem.focus('users');

        delete window.data_user.stats;
    })();

    //cards, charts and modals initialization
    (()=>{
        const contents      = $('.doc-section');
        const dashboard     = contents[0];
        const dashCard      = $('.dashboard-card').addClass('extra');
        const scanner       = contents[1];
        const scanCard      = $('.scanner-card').addClass('extra');

        //LINE CHART
        // const chart1        = chart_.line($('#chart-test')[0], 'testing chart', {count:7, reverse:true});
        // const set1          = chart1.addSet('kota ambon', [20, 30, 40, 50, 60, 70, 80]);
        // const set2          = chart1.addSet('kabupaten buru', [20, 10, 40, 60, 50, 10, 20]);
        // const set3          = chart1.addSet('kabupaten buru selatan', [10, 10, 20, 10, 30, 70, 690]);

        $('.r-item-slider').owlCarousel({
            items       : 4,
            loop        : false,
            margin      : 10,
            autoWidth   : true,
            mouseDrag   : mobileAct.mouseDrag,
            touchDrag   : mobileAct.touchDrag,
        });
        static_swiper('.dashboard-card-swiper', {
            low     : ()=>{
                dashboard.setAttribute('style', '');
                dashCard.addClass('extra');
            },
            mid     : ()=>{
                dashboard.setAttribute('style', 'overflow:hidden');
                dashCard.removeClass('extra');
            },
            high    : ()=>{
                dashboard.setAttribute('style', 'overflow:hidden');
                dashCard.removeClass('extra');
            },
            anchor  : 90,
        });
        static_swiper('.scanner-card-swiper', {
            low     : ()=>{
                scanner.setAttribute('style', '');
                scanCard.addClass('extra');
            },
            mid     : ()=>{
                scanner.setAttribute('style', 'overflow:hidden');
                scanCard.removeClass('extra');
            },
            high    : ()=>{
                scanner.setAttribute('style', 'overflow:hidden');
                scanCard.removeClass('extra');
            },
        });
        cards.detail.addClass('d-none');
        cards.qr.addClass('d-none');
    })();

    //chart and stat initialization
    (()=>{
        const dis_max   = window.districts_max;
        const reg_max   = window.regions_max;

        window.districts_stat.forEach(stat=>{
            const dist      = districts.data[stat.did];

            dist.stat       = {
                users       : stat.users,
                employees   : stat.employees,
                documents   : stat.documents,
                commodities : stat.commodities,
                traffics    : stat.traffics,
            };
        });
        window.regions_stat.forEach(stat=>{
            districts.regions[stat.rid].stat    = {
                users       : stat.users,
                employees   : stat.employees,
                documents   : stat.documents,
                commodities : stat.commodities,
                traffics    : stat.traffics,
            };
        });
        districts.max   = {
            region          : {
                users       : districts.regions[reg_max.users.id],
                employees   : districts.regions[reg_max.employees.id],
                documents   : districts.regions[reg_max.documents.id],
                commodities : districts.regions[reg_max.commodities.id],
                traffics    : {
                    in      : districts.regions[reg_max.traffics.in.id],
                    out     : districts.regions[reg_max.traffics.out.id],
                },
            },
            district        : {
                users       : districts.data[dis_max.users.id],
                employees   : districts.data[dis_max.employees.id],
                documents   : districts.data[dis_max.documents.id],
                commodities : districts.data[dis_max.commodities.id],
                traffics    : {
                    in      : districts.data[dis_max.traffics.in.id],
                    out     : districts.data[dis_max.traffics.out.id],
                },
            },
        };

        delete window.districts_max;
        delete window.regions_max;
        delete window.districts_stat;
        delete window.regions_stat;
    })();

    //init map
    (()=>{
        districts.forEach(d=>{
            map_lib_.hover(d);
        });
        map_lib_.
        toggleLabel().
        toggleValue().
        togglePoint().
        initDataTrans().
        mapBgColor($('.r-map')[0], 'transparent').
        draggable().
        scalable();
    })();

    //finish initialization
    (()=>{
        // noinspection JSUnresolvedVariable
        feather.replace();
        page_switcher.focus('dashboard');
        preloader_.fadeOut();
    })();
})();