// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
//OWL CAROUSEL LAG MUST BE FIXED on fillDocDetail function

(()=>{
    let mediaDetailLoader;

    const root          = $('meta[name="data-root"]').attr('content');
    const win_          = $(window);
    const mobileAct     = mobile_act(true);
    const makeLoader    = ()=>{
        return '<div class="mgt-3 mgb-2"><div class="loader01"></div></div>';
    };
    const cards         = {
        detail          : $('.detail-card'),
        qr              : $('.qr-card'),
        docControl      : $('.doc-modal-control'),
    };
    const fillDoc       = (s,t={},)=>{
        t.id            = s.id;
        t.did           = s.did;
        t.token         = s.token;
        t.letter_num    = s.letter_num;
        t.type          = doctype[s.type];
        t.created_at    = s.created_at;
        t.attributes    = {...s.attributes};
        t.district      = districts.data[s.publish_district];
        t.region        = districts.data[t.district.did].regions[s.publish_region];
        t.published_by  = {...s.published_by};
        t.medias        = s.medias.slice();
        t.traces        = s.traces.slice();
        t.ui            = createDoc(t);
        t.content       = {
            medias      : docContent.doc_images(t),
            info        : docContent.doc_info(t),
        };
        createBase64(t, 'code', root + s.code);

        return t;
    };
    const fillDocDetail = (()=>{
        const text      = 'innerText';
        const html      = 'innerHTML';
        const add       = 'appendChild';
        const com       = {
            title       : $('#doc-detail-title')[0],
            alias       : $('#doc-detail-alias')[0],
            token       : $('#doc-detail-token')[0],
            media       : $('#doc-detail-image')[0],
            info_mob    : $('#doc-detail-info-mob')[0],
            info_pc     : $('#doc-detail-info-pc')[0],
        };

        return doc=>{
            com.title[text]     = doc.type.name;
            com.alias[text]     = doc.type['alias'];
            com.token[text]     = doc.token;
            com.info_mob[html]  = '';
            com.info_pc[html]   = '';
            com.info_mob[add](doc.content.info.mob);
            com.info_pc[add](doc.content.info.pc);

            if (doc.medias.length > 0)
                com.media[html] = makeLoader();
            else
                com.media[html] = '';
        };
    })();
    const fillDocQr     = (()=>{
        const doc_type      = $('#qr-doc-type')[0];
        const doc_pic       = $('#qr-doc-qr')[0];
        const doc_token     = $('#qr-doc-token')[0];
        const text          = 'innerText';

        return doc=>{
            doc_type[text]      = doc.type.name;
            doc_token[text]     = doc.token;
            doc_pic.setAttribute('src', doc.code);
        };
    })();
    const createDoc     = doc=>{
        const card      = document.createElement('div');

        card.setAttribute('class', 'r-card mgb-2 mob-min');
        card.innerHTML  = `
            <div class="r-card-body">
                <div class="r-data">
                    <div class="r-data-prim">
                        <span class="r-data-title">
                            <span class="text-capitalize fns-11 fnw-700 txt-dark">`+doc.type.name+`</span>
                            <span class="txt-muted mgr-2 fns-11 fnw-500 text-uppercase">(`+doc.type['alias']+`)</span>
                            <span class="r-data-info fns-10-5">
                                <span class="text-capitalize fns-10 fnw-500 r-info-value">`+doc.district.name+`</span>
                                <span class="txt-muted"></span>
                                <span class="txt-muted fns-10 fnw-500 r-info-value"></span>
                            </span>
                        </span>
                    <div class="r-data-detail-mob mob" data-modal-open="document"></div>
                </div>
                <div class="r-data-detail pc">
                    <div class="but"><i data-feather="download"></i></div>
                    <div class="but txt-info"><i data-feather="info"></i></div>
                </div>
                    <div class="r-data-qr but">
                        <svg viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.145455,2.81795e-33,-2.81795e-33,-0.145455,-21.8182,117.818)"><path d="M150,810L150,570L180,570C207,570 210,567 210,540C210,513 207,510 180,510C153,510 150,507 150,480C150,453 153,450 180,450C207,450 210,453 210,480C210,507 213,510 240,510C267,510 270,507 270,480C270,453 273,450 300,450C327,450 330,447 330,420L330,390L150,390L150,150L390,150L390,390L570,390L570,420C570,447 567,450 540,450C513,450 510,453 510,480L510,510L630,510L630,480C630,453 633,450 660,450C687,450 690,447 690,420C690,393 687,390 660,390C633,390 630,387 630,360L630,330L480,330L480,150L540,150L540,270L660,270L660,240C660,213 657,210 630,210C603,210 600,207 600,180C600,153 603,150 630,150C657,150 660,153 660,180C660,207 663,210 690,210C717,210 720,213 720,240C720,260 725,270 735,270C745,270 750,280 750,300C750,327 753,330 780,330C807,330 810,333 810,360C810,387 807,390 780,390C753,390 750,393 750,420C750,447 753,450 780,450C807,450 810,453 810,480C810,507 807,510 780,510C753,510 750,513 750,540C750,567 753,570 780,570L810,570L810,810L570,810L570,570L390,570L390,810L150,810ZM330,750L330,630L210,630L210,750L330,750ZM750,750L750,630L630,630L630,750L750,750ZM390,540C390,513 393,510 420,510C447,510 450,507 450,480L450,450L330,450L330,480C330,507 327,510 300,510C273,510 270,513 270,540L270,570L390,570L390,540ZM690,540C690,513 693,510 720,510C747,510 750,507 750,480C750,453 747,450 720,450C693,450 690,453 690,480C690,507 687,510 660,510C633,510 630,513 630,540C630,567 633,570 660,570C687,570 690,567 690,540ZM750,360C750,333 747,330 720,330C693,330 690,333 690,360C690,387 693,390 720,390C747,390 750,387 750,360ZM330,330L330,210L210,210L210,330L330,330Z" style="fill-rule:nonzero;"/></g><g transform="matrix(0.145455,2.81795e-33,-2.81795e-33,-0.145455,-21.8182,117.818)"><path d="M240,690C240,663 243,660 270,660C297,660 300,663 300,690C300,717 297,720 270,720C243,720 240,717 240,690Z" style="fill-rule:nonzero;"/></g><g transform="matrix(0.145455,2.81795e-33,-2.81795e-33,-0.145455,-21.8182,117.818)"><path d="M660,690C660,663 663,660 690,660C717,660 720,663 720,690C720,717 717,720 690,720C663,720 660,717 660,690Z" style="fill-rule:nonzero;"/></g><g transform="matrix(0.145455,2.81795e-33,-2.81795e-33,-0.145455,-21.8182,117.818)"><path d="M240,270C240,243 243,240 270,240C297,240 300,243 300,270C300,297 297,300 270,300C243,300 240,297 240,270Z" style="fill-rule:nonzero;"/></g><g transform="matrix(0.145455,2.81795e-33,-2.81795e-33,-0.145455,-21.8182,117.818)"><path d="M450,750C450,703 447,690 435,690C425,690 420,680 420,660C420,640 425,630 435,630C443,630 450,623 450,615C450,605 460,600 480,600C509,600 510,602 510,645C510,678 514,690 525,690C535,690 540,700 540,720C540,740 535,750 525,750C515,750 510,760 510,780C510,807 507,810 480,810L450,810L450,750Z" style="fill-rule:nonzero;"/></g><g transform="matrix(0.145455,2.81795e-33,-2.81795e-33,-0.145455,-21.8182,117.818)"><path d="M750,180C750,153 753,150 780,150C807,150 810,153 810,180C810,207 807,210 780,210C753,210 750,207 750,180Z" style="fill-rule:nonzero;"/></g></svg>
                    </div>
                </div>
            </div>
        `;

        $(card.firstElementChild.firstElementChild.firstElementChild.lastElementChild).click(()=>{
            documents.focus     = documents.docs[doc.did];
            fillDocDetail(documents.focus);
            modal.show('document');
        });
        $(card.firstElementChild.firstElementChild.children[1].firstElementChild).click(()=>{
            documents.focus     = documents.docs[doc.did];
            //construct generate document
            //create blob file
            //download created blob document
        });
        $(card.firstElementChild.firstElementChild.children[1].lastElementChild).click(()=>{
            documents.focus     = documents.docs[doc.did];
            fillDocDetail(documents.focus);
            cards.detail.removeClass('d-none');
            cards.docControl.addClass('active');
        });
        $(card.firstElementChild.firstElementChild.lastElementChild).click(()=>{
            documents.focus     = documents.docs[doc.did];
            fillDocDetail(documents.focus);
            fillDocQr(documents.focus);
            if (win_.width() < 768) {
                mobileAct.modalAct();
                card_swiper_open(cards.qr[0], ()=>{
                    cards.qr.removeClass('d-none');
                });
            }
            else
                cards.qr.removeClass('d-none');
            cards.docControl.addClass('active');
        });
        date_format.formatSince(card.firstElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild,doc.created_at, 3);

        return card;
    };
    const docContent    = {
        doc_images      : (doc, carousel=document.createElement('div'), modalMedia=document.createElement('div'))=>{
            let iter    = 0;

            doc.medias.forEach(m=>{
                iter++;
                const a     = document.createElement('div');
                const b     = document.createElement('div');
                carousel.appendChild(a);
                modalMedia.appendChild(b);
                a.innerHTML = '<img src="'+m+'" alt="">';
                b.innerHTML = '<img src="'+m+'" alt="">';

                $(a.firstElementChild).click(()=>{
                    modal.show('media');
                    $(modalMedia).trigger('to.owl.carousel', [iter, 1]);
                });
            });
            if (iter !== 0) {
                carousel.setAttribute('class', 'image-carousel owl-carousel');
                modalMedia.setAttribute('class', 'image-carousel owl-carousel');
                $(carousel).owlCarousel({
                    items       : 1,
                    loop        : false,
                    margin      : 10,
                    mouseDrag   : mobileAct.mouseDrag,
                    touchDrag   : mobileAct.touchDrag,
                });
                $(modalMedia).owlCarousel({
                    items       : 1,
                    loop        : false,
                    margin      : 10,
                    mouseDrag   : mobileAct.mouseDrag,
                    touchDrag   : mobileAct.touchDrag,
                });
            }

            return {
                media   : carousel,
                modal   : modalMedia,
            };
        },
        doc_info        : (doc, mob=document.createElement('div'), pc=document.createElement('div'))=>{

            const info      = (()=>{
                let x       = '';

                [
                    {label:'nomor', value:doc.did, icon:feather['icons']['file'].toSvg()},
                    {label:'pemilik', value:window.data_user.account.name, icon:feather['icons']['user'].toSvg()},
                    {label:'dibuat oleh', value:doc.published_by.name, icon:feather['icons']['briefcase'].toSvg()},
                    {label:'tempat / tanggal', value:date_format.formatDate(doc.created_at), icon:feather['icons']['calendar'].toSvg()},
                ].forEach(d=>{
                    x      += '<div class="mgb-2"><div class="d-flex flex-row align-items-center justify-content-center"><div class="mgr-2 txt-muted">'+d.icon+'</div><div class="flex-grow-1"><div class="fnw-500 fns-9 txt-muted">'+d.label+'</div><div class="fnw-600 fns-11">'+d.value+'</div></div></div></div>';
                });

                return {
                    mob     : '<div class="item-slider"><div class="mgt-4 pdb-1 mgb-2 bor-bottom-lightgrey text-capitalize"><span class="fnw-700 fns-11">informasi umum</span></div><div>'+x+'</div></div>',
                    pc      : '<div class="mgt-4 pdb-1 mgb-2 bor-bottom-lightgrey text-capitalize"><span class="fnw-700 fns-11">informasi umum</span></div><div>'+x+'</div>',
                };
            })();
            const detail    = ((account = window.data_user.account, attributes=doc.attributes)=>{
                let x       = '<tr class="r-table-row"><td class="text-capitalize fnw-700 fns-10 pdb-2" colspan="2">identitas dokumen</td></tr><tr><td class="fns-10 fnw-600">nomor</td><td class="fns-10 fnw-500">'+doc.did+'</td></tr><tr><td class="fns-10 fnw-600">token</td><td class="fns-10 fnw-500">'+doc.token+'</td></tr><tr class="r-table-row"><td class="text-capitalize fnw-700 fns-10 pdb-2" colspan="2">pemilik</td></tr><tr><td class="fns-10 fnw-600">nama lengkap</td><td class="fns-10 fnw-500">'+account.name+'</td></tr>';

                if (account.province) {
                    const d = districts.data[account.district];
                    const r = d.regions[account.region];

                    x      += '<tr><td class="fns-10 fnw-600">alamat</td><td class="fns-10 fnw-500">'+account.address+', '+r.name+', '+d.name+', Provinsi Maluku</td></tr>';
                }
                else
                    x      += '<tr><td class="fns-10 fnw-600">alamat</td><td class="fns-10 fnw-500">'+account.address+'</td></tr>';

                if (account.phone)
                    x      += '<tr><td class="fns-10 fnw-600">nomor telp</td><td class="fns-10 fnw-500">'+account.phone+'</td></tr>';
                if (account.email)
                    x      += '<tr><td class="fns-10 fnw-600">email</td><td class="fns-10 fnw-500">'+account.email+'</td></tr>';

                x          += '<tr class="r-table-row"><td class="text-capitalize fnw-700 fns-10 pdb-2" colspan="2">rincian dokumen</td></tr><tr><td class="fns-10 fnw-600">nama dokumen</td><td class="fns-10 fnw-500">'+doc.type.name+'</td></tr>'
                            + '<tr><td class="fns-10 fnw-600">tempat pembuatan</td><td class="fns-10 fnw-500">'+doc.region.name+', '+doc.district.name+',Provinsi Maluku</td></tr>'
                            + '<tr><td class="fns-10 fnw-600">tanggal/waktu</td><td class="fns-10 fnw-500">'+date_format.formatDate(doc.created_at, true)+'</td></tr>';

                for (let key in attributes)
                    x      += '<tr><td class="fns-10 fnw-600">'+key+'</td><td class="fns-10 fnw-500">'+attributes[key]+',Provinsi Maluku</td></tr>';

                x          += '<tr><td class="fns-10 fnw-600">dibuat oleh</td><td class="fns-10 fnw-500">'+doc.published_by.name+'</td></tr>'
                            + '<tr><td class="fns-10 fnw-600">jabatan</td><td class="fns-10 fnw-500">'+doc.published_by.official.name+'</td></tr>';

                return {
                    mob     : '<div class="item-slider"><div class="mgt-4 pdb-1 mgb-2 bor-bottom-lightgrey text-capitalize"><span class="fnw-700 fns-11">detail</span></div><div><table class="r-table-stripped wpc-100"><tbody>' + x + '</tbody></table></div></div>',
                    pc      : '<div class="mgt-4 pdb-1 mgb-2 bor-bottom-lightgrey text-capitalize"><span class="fnw-700 fns-11">detail</span></div><div><table class="r-table-stripped wpc-100"><tbody>' + x + '</tbody></table></div>',
                };
            })();
            const trace     = ((traces=doc.traces)=>{
                let x       = '';

                if (traces.length) {
                    traces.forEach(trc=>{
                        const time  = trc.created_at;
                        const dist  = districts.data[trc.district];
                        const reg   = dist.regions[trc.region];

                        x  += '<tr><td style="padding-right: 0!important;"><div class="d-flex flex-row align-items-center justify-content-center"><div class="fnw-700 fns-24 txt-center txt-muted">'+date_format.getDay(time)+'</div></div></td>'
                            + '<td><div class="d-flex flex-row align-items-center justify-content-center"><div class="d-flex flex-column align-items-center justify-content-center"><div class="fnw-700 fns-9 txt-center text-uppercase">'+date_format.getMonth(time)+'</div><div class="fnw-700 fns-9 txt-center">'+date_format.getYear(time)+'</div></div></div></td>'
                            + '<td><div><div class="fnw-500 fns-10 text-capitalize">'+trc.officer.official.name+'</div><div class="fnw-500 fns-10 text-capitalize"><span>'+reg.name+'</span><span>'+dist.name+'</span></div></div></td></tr>';
                    });

                    x       = '<table class="r-table-stripped wpc-100"><tbody>' + x + '</tbody></table>';
                }
                else
                    x       = '<div class="pdt-5 pdb-5 fnw-600 txt-muted txt-center">tidak ada riwayat pengecekan</div>';

                return {
                    mob     : '<div class="item-slider"><div class="mgt-4 pdb-1 mgb-2 bor-bottom-lightgrey text-capitalize"><span class="fnw-700 fns-11">riwayat pengecekan</span></div><div>' + x + '</div></div>',
                    pc      : '<div class="mgt-4 pdb-1 mgb-2 bor-bottom-lightgrey text-capitalize"><span class="fnw-700 fns-11">riwayat pengecekan</span></div><div>' + x + '</div>',
                };
            })();

            mob.setAttribute('class', 'info-carousel owl-carousel');
            mob.innerHTML   = info.mob + detail.mob + trace.mob;
            pc.innerHTML    = info.pc + detail.pc + trace.pc;

            $(mob).owlCarousel({
                items               : 1,
                itemsDesktop        : false,
                itemsDesktopSmall   : false,
                itemsTablet         : false,
                itemsMobile         : false,
                mouseDrag           : mobileAct.mouseDrag,
                touchDrag           : mobileAct.touchDrag,
            });

            return {
                mob     : mob,
                pc      : pc,
            };
        },
    };
    const createBase64  = (e, attrLoc, url)=>{
        const img       = new Image();

        img.setAttribute('crossOrigin', 'anonymous');
        img.onload      = ()=>{
            const cvs   = document.createElement('canvas');
            cvs.width   = img.width;
            cvs.height  = img.height;

            const ctx   = cvs.getContext('2d');
            ctx.drawImage(img, 0, 0);
            e[attrLoc]  = cvs.toDataURL('image/png');
        };

        img.src         = url;
    };
    const downloadQR    = ()=>{
        const focus     = documents.focus;

        qr_print.setValue(focus.type.name, focus.code, focus.letter_num).print(focus.type.name);
    };
    const districts     = window.read_district_(true);
    const doctype       = window.read_doctype_(true);
    const documents     = ((docs=window.data_user.documents, len=window.data_user.total_docs)=>{
        const x         = {
            body        : $('#document-lists')[0],
            focus       : undefined,
            head        : undefined,
            tail        : undefined,
            docs        : {},
            forEach     : (callback=()=>{})=>{
                let ptr = x.head;

                while (ptr !== undefined) {
                    const node  = ptr;

                    callback(node);
                    ptr         = node.next;
                }
            },
        };

        if (len > 0) {
            const wrapper       = $('#document-tags');
            (()=>{
                const createEl  = (t='semua', html='innerHTML')=>{
                    const tag   = document.createElement('div');

                    tag.setAttribute('class', 'bls');
                    tag[html]   = '<div><span>'+t+'</span></div>';

                    return {
                        button  : tag,
                    };
                };

                x.types     = {
                    isOn    : 0,
                    size    : 0,
                    data    : {},
                    allDocs : $(),
                    allBtn  : $(),
                    wrapper : wrapper,
                    set     : (k, t)=>{
                        const ins_          = x.types;
                        let obj             = ins_.data[k];

                        if (!obj) {
                            const els       = createEl(t);

                            obj             = {
                                button      : $(els.button),
                                add         : d=>{
                                    obj.elements = obj.elements.add(d);
                                    ins_.allDocs = ins_.allDocs.add(d);
                                },
                                elements    : $(),
                            };
                            obj.button.click(()=>{
                                ins_.focus(k);
                            });
                            ins_.wrapper[0].appendChild(els.button);
                            ins_.allBtn     = ins_.allBtn.add(els.button);
                            ins_.data[k]    = obj;
                            ins_.size++;
                        }

                        return obj;
                    },
                    default : (()=>{
                        const els       = createEl('semua');
                        wrapper[0].appendChild(els.button);
                        return          $(els.button).
                        addClass('default active').
                        click(()=>{
                            x.types.default.addClass('active');
                            x.types.allBtn.addClass('active');
                            x.types.isOn = x.types.size;
                            x.types.focAll();
                        });
                    })(),
                    focus   : k=>{
                        const ins_      = x.types;
                        const data      = ins_.data[k];

                        ins_.allDocs.addClass('d-none');

                        if (data.button.hasClass('active')) {
                            data.button.removeClass('active');
                            ins_.isOn--;
                        }
                        else {
                            data.button.addClass('active');
                            ins_.isOn++;
                        }
                        if ((ins_.isOn === 0) || (ins_.isOn === ins_.size)) {
                            ins_.focAll();
                        }
                        else {
                            ins_.default.removeClass('active');
                            for (let key in ins_.data) {
                                const el    = ins_.data[key];

                                if (el.button.hasClass('active'))
                                    el.elements.removeClass('d-none');
                            }
                        }
                    },
                    focAll  : ()=>{
                        const ins_      = x.types;

                        ins_.default.addClass('active');
                        ins_.allDocs.removeClass('d-none');
                    },
                    refresh : ()=>{},
                };
            })();
            (()=>{
                const d     = docs.shift();

                if (d) {
                    const o         = fillDoc(d);

                    o.prev          = undefined;
                    o.next          = undefined;
                    x.docs[o.did]   = o;
                    x.head          = o;
                    x.tail          = o;

                    x.types.set(o.type.tid, o.type['alias']).add(o.ui);
                    x.body.appendChild(o.ui);
                }
            })();

            docs.forEach(d=>{
                const o         = fillDoc(d);

                x.docs[o.did]   = o;
                o.prev          = x.tail;
                x.tail.next     = o;
                x.tail          = o;

                x.types.set(o.type.tid, o.type['alias']).add(o.ui);
                x.body.appendChild(o.ui);
            });
            wrapper.owlCarousel({
                items: 6,
                loop: false,
                margin: 10,
                autoWidth: true,
                mouseDrag: mobileAct.mouseDrag,
                touchDrag: mobileAct.touchDrag,
            });
        }
        else {
            x.body.innerHTML = `
            <div class="d-flex align-items-center justify-content-center position-absolute wpc-100 hpc-100 txt-center txt-muted fns-12 fnw-600 pdr-4 pdb-4">
                    <div class="wpc-70">
                        tidak ada dokumen<br>
                        dokumen yang telah dipublish oleh dinas BKP<br>akan ditampilkan disini
                    </div>
                </div>
            `;
        }

        delete window.data_user.documents;
        delete window.data_user.total_docs;

        return x;
    })();

    //init document tag, detail, modal & card swiping
    (()=>{
        const mediaDetailCtr    = $('#doc-detail-image')[0];
        const mediaModal        = $('#doc-detail-media-modal')[0];
        const mediaLoader       = ()=>{
            mediaDetailLoader   = setTimeout(()=>{
                const content   = documents.focus.content.medias;
                mediaDetailCtr.innerHTML    = '';
                mediaModal.innerHTML        = '';
                mediaDetailCtr.appendChild(content.media);
                mediaModal.appendChild(content.modal);
            },1000);
        };

        $('#doc-modal-detail').click(()=>{
            mobileAct.modalAct();
            card_swiper_open(cards.detail[0], ()=>{
                cards.detail.removeClass('d-none');
                cards.docControl.addClass('active');
                mediaLoader();
            });
        });
        $('#doc-modal-download').click(()=>{

        });
        $('.qr-code-download').click(()=>{downloadQR();});
        $('.qr-detail-btn').click(()=>{
            card_swiper_close(cards.detail[0], ()=>{
                cards.detail.addClass('d-none');
            });
            card_swiper_open(cards.qr[0], ()=>{
                cards.qr.removeClass('d-none');
                mediaLoader();
            });
        });
        $('.close-detail-card').click(()=>{
            cards.detail.addClass('d-none');
            cards.docControl.removeClass('active');
        });
        $('.close-qr-card').click(()=>{
            cards.qr.addClass('d-none');
            cards.docControl.removeClass('active');
        });
        card_swiper('.detail-card-swiper', {
            swipedBot   : ()=>{
                mobileAct.modalClose();
                cards.detail.addClass('d-none');
                cards.docControl.removeClass('active');
                if (mediaDetailLoader)
                    clearTimeout(mediaDetailLoader);
            },
        });
        card_swiper('.qr-card-swiper', {
            swipedBot   : ()=>{
                mobileAct.modalClose();
                cards.qr.addClass('d-none');
                cards.docControl.removeClass('active');
            },
        });

        cards.detail.addClass('d-none');
        cards.qr.addClass('d-none');
    })();

    //init general components
    (()=>{
        feather.replace();
        page_switcher.focus('documents');
    })();

    //make mobile welcome and preloader fadeOut
    (()=>{
        preloader_.fadeOut();
        setTimeout(()=>{
            if (win_.width() < 576) {
                let close;
                const bg        = $('meta[name="data-root"]').attr('content') + 'assets/img/landing/side-bg.jpg';
                const welcome   = document.createElement('div');
                const closeFn   = ()=>{
                    clearTimeout(close);
                    $(document.body).unbind('touchstart');
                    $(documents.body.parentNode).animate({'padding-top':0}, 600);
                    $(welcome).animate({top:'-210px'}, 600, ()=>{
                        if (welcome)
                            welcome.parentNode.removeChild(welcome);
                    });
                };

                welcome.setAttribute('class', 'mgb-2 bkg-success wpc-100 position-fixed');
                welcome.setAttribute('style', 'z-index:500;top:-210px;height:210px;border-bottom-right-radius:50%;overflow:hidden;');
                welcome.innerHTML   = `<div style="position:absolute;top:0;width:100%;height:100%;background-image:url('${bg}');background-size: cover;background-position: top"></div><div style="position:absolute;width:100%;height:100%;background-color:var(--success);opacity:0.5;"></div><div class="position-absolute d-flex flex-column-reverse hpc-100 wpc-10 pdl-5 txt-white"><div class="mgb-4"><div class="fns-14 fnw-500">Halo,</div><div class="fns-14 fnw-500" style="white-space: nowrap">selamat ${date_format.formatTimeSituation()}</div><div class="text-capitalize fns-24 fnw-800">${(data_user.account.name.split(' '))[0]}</div></div></div>`;

                documents.body.setAttribute('style', 'margin-top:0');
                document.body.appendChild(welcome);

                $(welcome).animate({top:0},600);
                $(documents.body.parentNode).animate({'padding-top':'210px'},600);
                $(document.body).on('touchstart', ()=>{closeFn();});
                close   = setTimeout(()=>{
                    closeFn();
                }, 6000);
            }
        },1000);
    })();
})();