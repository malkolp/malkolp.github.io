// noinspection JSUnresolvedVariable,JSUnfilteredForInLoop,JSUnresolvedFunction

window._sys = {
    init            : function () {
        window.temp_error_handler = {};
        _sys['root'] = $('meta[name=root]').attr('content');
    },
    keywords        : function (element) {
        element.setAttribute('data-sys-render', 'true');
        const keywords = element.innerText.split(',');
        const art      = $('meta[name=root]').attr('content') + '/search;type=keys;val=';
        let res        = '';

        keywords.forEach(item=>{
            item = (item.toLowerCase()).replace(/^ /, '');
            res += '<a href="'+art+item+'"><span class="badge text-capitalize badge-success opacity-7 badge-hover" type="button" style="margin-left: 0.1rem; margin-right: 0.1rem">' + item + '</span></a>';
        });

        element.innerHTML = res;
    },
    package         : function (element, withArticle=false) {
        element.setAttribute('data-sys-render', 'true');
        const url      = $('meta[name=pkg_dir]').attr('content');
        const art      = $('meta[name=root]').attr('content') + '/detail';
        const packages = element.innerText.split('.');
        let article;
        if (withArticle)
            article    = packages.pop();
        let pkg_dir    = packages.shift();
        let res        = '<span class="text-dark pkg-hover" type="button"><a href="'+url+'/'+pkg_dir+'">' + pkg_dir + '</a></span>';

        packages.forEach(item=>{
            pkg_dir += '.'+item;
            res += '<span>.</span>' + '<span class="text-dark pkg-hover" type="button"><a href="'+url+'/'+pkg_dir+'">' + item + '</a></span>';
        });
        if (article !== undefined) {
            pkg_dir += '.'+article;
            res += '<span>.</span>' + '<span class="text-dark pkg-hover" type="button"><a href="'+art+'/'+pkg_dir+'">' + article + '</a></span>';
        }

        element.innerHTML = '<code class="text-muted" style="word-spacing: -0.25rem">' + res + '</code>';
    },
    url             : function (element) {
        element.setAttribute('data-sys-render', 'true');
        element.innerHTML = '<a class="text-dark pkg-hover" type="button" target="_blank" href="'+element.innerHTML+'" style="word-spacing: -0.25rem">' + element.innerHTML + '</a>';
    },
    mark_inline     : function (element) {
        element.setAttribute('data-sys-render', 'true');
        const REG_BOLD      = /\*\*([\w\S ]+)\*\*/;
        const REG_EMPHASIS  = /\*([\w\S ]+)\*/;
        const REG_UNDERLINE = /__([\w\S ]+)__/;
        let res = element.innerHTML;
        let result;
        while ((result = REG_BOLD.exec(res)) != null) {
            if (result[1].includes('**')) {
                let inside = result[1].split('**');
                result[1]  = inside[1];
            }
            res = res.replace('**' + result[1] + '**', '<strong>' + result[1] + '</strong>');
        }
        while ((result = REG_EMPHASIS.exec(res)) != null) {
            if (result[1].includes('*')) {
                let inside = result[1].split('*');
                result[1]  = inside[1];
            }
            res = res.replace('*' + result[1] + '*', '<em>' + result[1] + '</em>');
        }
        while ((result = REG_UNDERLINE.exec(res)) != null) {
            if (result[1].includes('__')) {
                let inside = result[1].split('__');
                result[1]  = inside[1];
            }
            res = res.replace('__' + result[1] + '__', '<u>' + result[1] + '</u>');
        }
        element.innerHTML = res;
    },
    error_handler   : function (package_) {
        if (window.temp_error_handler[package_.id] === undefined) {
            const MAPPING = {
                'bab i'   : 'chapter_1',
                'bab ii'  : 'chapter_2',
                'bab iii' : 'chapter_3',
                'bab iv'  : 'chapter_4',
                'bab v'   : 'chapter_5',
            };
            const required_variable    = package_.required_var;
            const required_section     = package_.required_section;
            const required_sub_section = package_.required_sub_section;

            const prefix        = 'window.total_error=0;';
            let result_meta     = '';
            let result_section  = '';
            const hash_section  = {};
            const stack_section = [];
            const section_keys  = [];

            for (let item in required_variable) {
                const identifier = `${item}`;
                const message    = required_variable[identifier];
                result_meta     += 'if(doc.variables["'+identifier+'"] === undefined)create_error("'+message+'");';
            }
            for (let item in required_section) {
                const section    = `${item}`;
                const message    = required_section[section];
                stack_section.push('if(doc.toc.has.'+MAPPING[section]+' === undefined)create_error("'+message+'");');
                section_keys.push(section);
                hash_section[section] = '';
            }
            for (let item in required_sub_section) {
                const sub        = required_sub_section[`${item}`];
                hash_section[sub['for']] += 'if(doc.toc.has.'+MAPPING[sub['for']]+'["'+`${item}`+'"] === undefined)create_error("'+sub['msg']+'");';
            }
            section_keys.forEach((key, index)=>{
                const condition = stack_section[index];
                const sub       = hash_section[key];
                if (sub === '')
                    result_section += condition;
                else
                    result_section += condition + ' else {' + sub + '}';
            });

            result_section = 'if(doc.toc !== undefined){' + result_section + '}else create_error("tidak ada isi");';

            window.temp_error_handler[package_.id] = new Function('create_error', 'doc', (prefix + ' ' + result_meta + ' ' + result_section));
        }
        window.err_detect_fun = window.temp_error_handler[package_.id];
    },
    style_handler   : function (package_) {
        const editor_link   = $('#editor-preview').get(0);
        const head          = editor_link.parentNode;
        const editor_new    = document.createElement('link');

        editor_new.setAttribute('id','editor-preview');
        editor_new.setAttribute('rel','stylesheet');
        editor_new.setAttribute('type','text/css');
        editor_new.setAttribute('href',_sys.root + '/' + package_.style_path + '/style.css');
        editor_new.setAttribute('media','all');

        $(editor_link).attr('id', 'no-id');
        head.insertBefore(editor_new, editor_link);
        head.removeChild(editor_link);
    },
    _citations      : function (citation_package) {
        function createPrep(attributes) {
            let capitalize=attributes.capitalize,uppercase=attributes.uppercase,bold=attributes.bold,italic=attributes.emphasis,prefix=attributes.prefix,postfix=attributes.postfix;
            let result = '';
            if (attributes.type === 'array')
                result += 'if(prepInput===undefined)prepInput=[];\n';
            else
                result += 'if(prepInput===undefined)prepInput="";\n';
            if (capitalize === undefined) capitalize = false;
            if (uppercase === undefined) uppercase = false;
            if (bold === undefined) bold = false;
            if (italic === undefined) italic = false;
            if (prefix === undefined) prefix = '';
            if (postfix === undefined) postfix = '';
            if (attributes.useInverse)
                result += 'prepInput=_cc_control.inverse(prepInput);';
            if (attributes.useInitialLast)
                result += 'prepInput=_cc_control.initialLast(prepInput,"'+attributes.initialSeparator+'");';
            if (attributes.useMaxSize)
                result += 'prepInput=_cc_control.maxSize(prepInput,'+attributes.maxSize+',"'+attributes.maxSizeContent+'");';
            if (attributes.useLastSeparator)
                result += 'prepInput=_cc_control.lastSeparator(prepInput,'+attributes.lastSeparatorStart+',"'+attributes.separator+'","'+attributes.lastSeparator+'");';
            if (attributes.type === 'array')
                result += 'prepInput=_cc_control.clearArray(prepInput, "'+attributes.separator+'");';
            result += 'prepInput=_cc_control.clearAttr(prepInput,"'+prefix+'","'+postfix+'",'+uppercase+','+capitalize+','+bold+','+italic+');'
            result += 'return prepInput;';
            result = 'function prep_'+attributes.name+'(prepInput){'+result+'}\n';

            return result;
        }
        const citation          = citation_package.citation;
        const attr_types        = citation.attr_types;
        const types             = citation.types;
        const funGetRefCondition= [];
        const template          = {};


        for (let type in types) {
            const type_id       = type;
            type                = types[type];
            const attributes    = type.attributes;
            const structures    = type.structures;
            const separator     = type.separator;
            let prepRefBody     = '';
            let prepRefFunction = '';
            let refBodyScript   = 'return res_'+structures.shift();

            structures.forEach(structure=>{
                refBodyScript   += '+\''+separator+'\'+res_'+structure;
            });
            attributes.forEach(attribute=>{
                prepRefFunction += createPrep(attribute);
                prepRefBody += 'const res_'+attribute.name+'=prep_'+attribute.name+'(this.'+attribute.name+');';
            });

            refBodyScript = 'const _cc_control = _sys._cite_control;'+prepRefFunction+'\n'+prepRefBody+'\n'+refBodyScript+';';

            funGetRefCondition.push('if(this.doc_type===\''+type_id+'\'){'+refBodyScript+'}');
        }
        attr_types.forEach(attr=>{
            if (attr.type === 'array')
                template[attr.attr] = [];
            else
                template[attr.attr] = '';
        });
        window._citation_factory={
            make                : function (type) {
                const cite_obj  = {};
                cite_obj['doc_type']= type;
                cite_obj['add'] = function (attribute, value) {
                    if (Array.isArray(cite_obj[attribute])) {
                        if (!cite_obj[attribute].includes(value))
                            cite_obj[attribute].push(value);
                    }
                    else
                        cite_obj[attribute]=value;
                };
                cite_obj['getCite'] = function (arrange=undefined,page=undefined) {
                    function set_last_name(name) {
                        if (name.split(' ').length === 1)
                            return name.charAt(0).toUpperCase() + name.slice(1);
                        let temp = name.split(' ');
                        return temp[temp.length - 1].charAt(0).toUpperCase() + temp[temp.length - 1].slice(1);
                    }

                    let author = '';
                    if (page === undefined) {
                        if (citation['pageStart'] === undefined)
                            page = '1';
                        else
                            page = citation['page_start'];
                    }

                    if (cite_obj['author'].length === 1 && cite_obj['author'][0] !== undefined)
                        author = set_last_name(cite_obj['author'][0]);
                    else if (cite_obj['author'].length > 1 && cite_obj['author'].length < 3)
                        author = set_last_name(cite_obj['author'][0]) + ' dan ' + set_last_name(cite_obj['author'][1]);
                    else if (citation['author'].length > 2)
                        author = set_last_name(cite_obj['author'][0]) + '<em> et al</em>.';

                    if (arrange === 'front')
                        return author + ' (' + cite_obj['year'] + ': ' + cite_obj['page'] + ')';
                    return '(' + author + ', ' + cite_obj['year'] + ': ' + page + ')';
                };
                cite_obj['getReference']=new Function(funGetRefCondition.join('\n'));

                return cite_obj;
            },
        };

        return window._citation_factory;
    },
    _cite_control   : {
        inverse     : function (text) {
            function set(input) {
                input  = input.replaceAll(/ +/g, ' ');
                input  = input.split(' ');
                input.unshift(input.pop());

                return input.join(' ');
            }
            if (Array.isArray(text)) {
                const temp_arr = [];
                text.forEach(item=>{
                    temp_arr.push(set(item));
                });
                text = temp_arr;
            }
            else
                text = set(text);

            return text;
        },
        initialLast : function (text, separator) {
            function set(input) {
                input = input.split(' ');
                if (input.length > 1) {
                    const temp  = input.shift();
                    let charTmp = [];
                    input.forEach(word=>{
                        charTmp.push(word.charAt(0).toUpperCase());
                    });
                    charTmp.unshift(temp);
                    input = charTmp.join(separator);
                }

                return input;
            }
            if (Array.isArray(text)) {
                const temp_arr = [];
                text.forEach(item=>{
                    temp_arr.push(set(item));
                });
                text = temp_arr;
            }
            else
                text = set(text);

            return text;
        },
        lastSeparator : function (items, size, separator, content) {
            if (Array.isArray(items) && items.length > size) {
                const last  = items.pop();
                let lines   = items.shift();
                items.forEach(item=>{
                    lines += separator + item;
                });
                items = lines + content + last;
            }

            return items;
        },
        maxSize     : function (items, size, content) {
            if (Array.isArray(items) && items.length > size)
                items = items[0] + ' <span style="text-transform: lowercase">' + content + '</span>';

            return items;
        },
        wrapQuote   : function (text, separator) {
            if (text.includes(separator))
                text = '"' + text + '"';

            return text;
        },
        clearArray  : function (items, separator) {
            if (Array.isArray(items))
                items = items.join(separator);

            return items;
        },
        clearAttr   : function (text, prefix, postfix,uppercase, capitalize, bold, emphasis) {
            let classes = '';
            text = prefix + text + postfix;
            if (uppercase) classes += 'text-transform:uppercase;';
            if (capitalize) classes += 'text-transform:capitalize;';
            if (bold) classes += 'font-weight:bold;';
            if (emphasis) classes += 'font-style:italic;';

            return '<span style="'+classes+'">' + text + '</span>';
        },
    },
};

window._doc_style   = {
    cover           : function (package_) {
        if (window.temp_cover_handler === undefined)
            window.temp_cover_handler = {};
        if (window.temp_cover_handler[package_.id] === undefined) {
            let cover   = package_.config.cover.style;
            const info  = package_.config.cover.info;

            for (let item in info) {
                cover = cover.replaceAll('##REP-'+info[item]+'##', 'doc.variables.'+info[item]);
            }

            cover = 'return '+cover;
            window.temp_cover_handler[package_.id] = new Function('doc', cover);
        }
        window.cover_fun = window.temp_cover_handler[package_.id];
        return window.cover_fun;
    },
    logo            : function (package_) {
        return document.location.origin + '/' + package_.style_path + '/' + package_.config.logo;
    }
}
