const highlight_ = text=>{

    text = text.replace(/\n\n/g, '\n');

    const REG_BOLD    = /\*\*([ \w\S\u00A0]+)\*\*/;
    const REG_EMP     = /\*([ \w\S\u00A0]+)\*/;
    const REG_UND     = /__([ \w\S\u00A0]+)__/;
    const REG_UPPER   = /\bupper\(([ \w\S\u00A0]+)\)/;
    const REG_LOWER   = /\blower\(([ \w\S\u00A0]+)\)/;
    const REG_CAPITAL = /\bcapital\(([ \w\S\u00A0]+)\)/;
    const REG_MARK    = /\bmark\(([ \w\S\u00A0]+)\)/;
    const REG_VAR     = /\$([A-z][\w]*)/;
    const REG_VAR_PPT = /\$[A-Za-z_][\w]*(->[A-Za-z_][\w]*)+/;
    const REG_CITE_F  = /\['([A-Za-z_][\w]*)]/;
    const REG_CITE_B  = /\["([A-Za-z_][\w]*)]/;
    const REG_CITE_I  = /\[([A-Za-z_][\w]*)]/;
    const REG_SOURCE  = /^([ \u00A0]*)(\[([ \u00A0]*)([A-Z-a-z_][\w]*)([ \u00A0]*)]([ \u00A0]*))?ref([ \u00A0]+)([\w\S]+)([ \u00A0]*)$/m;
    const REG_COMMENT = /^([ \u00A0]*)\/\/([\w\S\u00A0 ]+ *)$/m;
    const REG_EMPTY   = /^([ \u00A0]+)$/m;
    const REG_META    = /^([ \u00A0]*)(@[\w\S ']+):([ \u00A0]*)(DATE|NUM|HTML|LIST|IMG|)([\w\S ']+)$/m;
    const REG_M_BLOCK = /^([ \u00A0]*)(@[\w\S ']+):([ \u00A0]*)$/m;
    const REG_DIAG    = /^(MATH|CODE|DIAGRAM)(\(([\w\S ]+)\))?```$/;
    const REG_DIAG_CL = /^```$/;
    const REG_CHAPTER = /^([ \u00A0]*)bab (v|iv|iii|ii|i)([ \u00A0]*)$/m;
    const REG_SUB     = /^([ \u00A0]*)(#6|#5|#4|#3|#2|#)([ \u00A0]+)([\w,.* )(<\/>$#-]+)([ \u00A0]*)$/m
    const REG_LIST    = /^([ \u00A0]*)(1\.|a\)|>|\.|-)([ \u00A0]+)([\w\S][\w\S ]*)$/m;
    const REG_ATTACH  = /^([ \u00A0]*)attach([ \u00A0]+)([\w\S][\w\S\u00A0 ]*)$/m;
    const REG_IMAGE   = /^([ \u00A0]*)img\[([\w\S ]+)]([ \u00A0]*)\(([\w\S ]+)\)([ \u00A0]*)(xs|sm|md|lg|xl)?([ \u00A0]*)$/m;
    const REG_THEAD   = /^([ \u00A0]*)\|([\w\S ]+)\|([ \u00A0]*)\(([\w\S ]+)\)([ \u00A0]*)(xs|sm|md|lg|xl)?([ \u00A0]*)$/m;
    const REG_REFER   = /^([ \u00A0]*)\[([ \u00A0]*)([A-Za-z_][A-Za-z0-9_]*)([ \u00A0]*)]([ \u00A0]*)cite([ \u00A0]*)(JOURNAL|BOOK)([ \u00A0]*)with([ \u00A0]*)$/m;
    const REG_TBODY   = /^([ \u00A0]*)\|([\w\S ]+)\|([ \u00A0]*)$/m;
    const lines       = text.split('\n');

    const diagram_stack = [];
    let diagram_block   = '';

    let on_table      = false;
    let on_diagram    = false;
    let result;

    let output = '';

    lines.forEach((line)=>{

        if (line === '') {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block"><br></div>';
                return;
            }
            output  += '<br>';
            on_table = false;
        }
        else if ((result = REG_META.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            let out;
            if (result[4] === 'LIST')
                out = result[5].replace(/,/g, '<span class="sd5-syntax">,</span>');
            else if (result[4] === 'IMG')
                out = '<span class="sd5-url">' + result[5] + '</span>';
            else if (result[4] === 'DATE' || result[4] === 'NUM' || result[4] === 'HTML')
                out = '<span class="sd5-constant">' + result[5] + '</span>';
            else
                out = result[5];

            output  += '<div>' + result[1] + '<span class="sd5-inline-var">' + result[2] + '</span>' + '<span class="sd5-syntax">:</span>' + result[3] + '<span class="sd5-syntax">' + result[4] + '</span>' + out + '</div>';
            on_table = false;
        }
        else if ((result = REG_M_BLOCK.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output += '<div>' + result[1] + '<span class="sd5-inline-var">' + result[2] + '</span><span class="sd5-syntax">:</span>' + result[3] + '</div>';
            on_table = false;
        }
        else if ((result = REG_DIAG.exec(line)) != null) {
            let desc     = '';
            if (result[2] !== undefined)
                desc     = '<span class="sd5-syntax">(</span>' + result[4] + '<span class="sd5-syntax">(</span>';
            output += '<div><span class="sd5-constant">' + result[1] + '</span>' + desc + '<span class="sd5-syntax">\`\`\`</span></div>';
            on_diagram = true;
        }
        else if ((result = REG_DIAG_CL.exec(line)) != null) {
            diagram_stack.push(diagram_block);
            diagram_block = '';
            output += '###DIAGRAM###<div><span class="sd5-syntax">\`\`\`</span></div>';
            on_diagram = false;
        }
        else if ((result = REG_SOURCE.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            if (result[1] === undefined) result[1] = '';
            if (result[3] === undefined) result[3] = '';
            if (result[5] === undefined) result[5] = '';
            if (result[6] === undefined) result[6] = '';
            if (result[9] === undefined) result[9] = '';
            if (result[2] !== undefined)
                output += '<div>' + result[1] + '<span class="sd5-syntax">[</span>' + result[3] + '<span class="sd5-inline-var">' + result[4] + '</span>' + result[5] + '<span class="sd5-syntax">]</span>' + result[6] + '<span class="sd5-syntax">ref</span>' + result[7] + '<span class="sd5-url">' + result[8] + '</span>' + result[9] + '</div>';
            else
                output += '<div>' + result[1] + '<span class="sd5-syntax">ref</span>' + result[7] + '<span class="sd5-url">' + result[8] + '</span>' + result[9] + '</div>';
            on_table = false;
        }
        else if ((result = REG_EMPTY.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output  += '<div>' + result[1] + '</div>';
            on_table = false;
        }
        else if ((result = REG_COMMENT.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output  += result[1] + '<div class="sd5-comment">//' + result[2] + '</div>';
            on_table = false;
        }
        else if ((result = REG_CHAPTER.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output  += result[1] + '<div class="sd5-chapter">bab ' + result[2] + result[3] + '</div>';
            on_table = false;
        }
        else if ((result = REG_SUB.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output  += result[1] + '<div class="sd5-sub"><span class="sd5-syntax">' + result[2] + '</span>' + result[3] + result[4] + result[5] + '</div>';
            on_table = false;
        }
        else if ((result = REG_LIST.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output  += result[1] + '<div><span class="sd5-syntax">' + result[2] + result[3] + '</span>' + result[4] + '</div>';
            on_table = false;
        }
        else if ((result = REG_ATTACH.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output  += result[1] + '<div class="sd5-chapter"><span class="sd5-syntax">attach</span>' + result[2] + result[3] + '</div>';
            on_table = false;
        }
        else if ((result = REG_IMAGE.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            let size;
            if (result[6] === undefined)
                size = '';
            else
                size = '<span class="sd5-syntax">' + result[6] + '</span>';

            output  += result[1] + '<div><span class="sd5-syntax">img[</span><span class="sd5-url">' + result[2] + '</span><span class="sd5-syntax">]</span>' + result[3] + '<span class="sd5-syntax">(</span>' + result[4] + '<span class="sd5-syntax">)</span>' + result[5] + size + result[7] + '</div>';
            on_table = false;
        }
        else if ((result = REG_THEAD.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            let size;
            if (result[6] === undefined)
                size = '';
            else
                size = '<span class="sd5-syntax">' + result[6] + '</span>';
            let temp_res = result[2];
            temp_res     = temp_res.replaceAll(/\|>/g,'##DBL##');
            temp_res     = temp_res.replaceAll(/\|/g, '##SGL##');
            temp_res     = temp_res.replaceAll(/##DBL##/g, '<span class="sd5-syntax">|></span>');
            temp_res     = temp_res.replaceAll(/##SGL##/g, '<span class="sd5-syntax">|</span>');
            if (temp_res.charAt(0) === '>')
                temp_res = '<span class="sd5-syntax">|></span>' + temp_res + '<span class="sd5-syntax">|</span>';
            else
                temp_res = '<span class="sd5-syntax">|</span>' + temp_res + '<span class="sd5-syntax">|</span>';
            output  += result[1] + '<div>' + temp_res + result[3] + '<span class="sd5-syntax">(</span>' + result[4] + '<span class="sd5-syntax">)</span>' + result[5] + size + result[7] + '</div>';
            on_table = true;
        }
        else if ((result = REG_TBODY.exec(line)) != null && on_table) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            let temp_res = result[2];
            temp_res     = temp_res.replaceAll(/\|>/g,'##DBLB##');
            temp_res     = temp_res.replaceAll(/\|/g, '##SGLB##');
            temp_res     = temp_res.replaceAll(/##DBLB##/g, '<span class="sd5-syntax">|></span>');
            temp_res     = temp_res.replaceAll(/##SGLB##/g, '<span class="sd5-syntax">|</span>');
            if (temp_res.charAt(0) === '>')
                temp_res = '<span class="sd5-syntax">|></span>' + temp_res + '<span class="sd5-syntax">|</span>';
            else
                temp_res = '<span class="sd5-syntax">|</span>' + temp_res + '<span class="sd5-syntax">|</span>';
            output  += result[1] + '<div>' + temp_res + '</div>' + result[3];
        }
        else if ((result = REG_REFER.exec(line)) != null) {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output += '<div>' + result[1] + '<span class="sd5-syntax">[</span>' + result[2] + '<span class="sd5-inline-var">' + result[3] + '</span>' + result[4] + '<span class="sd5-syntax">]</span>' + result[5] + '<span class="sd5-syntax">cite</span>' + result[6] + '<span class="sd5-constant">' + result[7] + '</span>' + result[8] + '<span class="sd5-syntax">with</span>' + result[9] + '</div>';
        }
        else {
            if (on_diagram) {
                diagram_block += '<div class="sd5-diagram-block">' + line + '</div>';
                return;
            }
            output  += '<div>' + line + '</div>';
            on_table = false;
        }
    });

    while ((result = REG_VAR_PPT.exec(output)) != null) {
        let text = result[0];
        text     = text.split('->');
        let tmp  = text.shift();
        text.forEach((item)=>{
            tmp += '<span class="sd5-syntax">-></span><span class="sd5-inline-var">' + item + '</span>';
        });
        output = output.replace(result[0], tmp);
    }
    while ((result = REG_BOLD.exec(output)) != null) {
        if (result[1].includes('**')) {
            let inside = result[1].split('**');
            result[1]  = inside[0];
        }
        output = output.replace('**' + result[1] + '**', '<span class="sd5-bold"><span class="sd5-syntax">##REP-BLD##</span>' + result[1] + '<span class="sd5-syntax">##REP-BLD##</span></span>');
    }
    while ((result = REG_EMP.exec(output)) != null) {
        if (result[1].includes('*')) {
            let inside = result[1].split('*');
            result[1]  = inside[0];
        }
        output = output.replace('*' + result[1] + '*', '<span class="sd5-emphasis"><span class="sd5-syntax">##REP-EMP##</span>' + result[1] + '<span class="sd5-syntax">##REP-EMP##</span></span>');
    }
    while ((result = REG_UND.exec(output)) != null) {
        if (result[1].includes('__')) {
            let inside = result[1].split('__');
            result[1]  = inside[0];
        }
        output = output.replace('__' + result[1] + '__', '<span class="sd5-underline"><span class="sd5-syntax">##REP-UND##</span>' + result[1] + '<span class="sd5-syntax">##REP-UND##</span></span>');
    }
    while ((result = REG_LOWER.exec(output)) != null) {
        if (result[1].includes(')')) {
            let inside = result[1].split(')');
            result[1]  = inside[0];
        }
        output = output.replace('lower(' + result[1] + ')', '<span class="sd5-inline-fun-param"><span class="sd5-syntax">##REP-LOW##</span>' + result[1] + '<span class="sd5-syntax">)</span></span>');
    }
    while ((result = REG_UPPER.exec(output)) != null) {
        if (result[1].includes(')')) {
            let inside = result[1].split(')');
            result[1]  = inside[0];
        }
        output = output.replace('upper(' + result[1] + ')', '<span class="sd5-inline-fun-param"><span class="sd5-syntax">##REP-UPR##</span>' + result[1] + '<span class="sd5-syntax">)</span></span>');
    }
    while ((result = REG_CAPITAL.exec(output)) != null) {
        if (result[1].includes(')')) {
            let inside = result[1].split(')');
            result[1]  = inside[0];
        }
        output = output.replace('capital(' + result[1] + ')', '<span class="sd5-inline-fun-param"><span class="sd5-syntax">##REP-CAP##</span>' + result[1] + '<span class="sd5-syntax">)</span></span>');
    }
    while ((result = REG_MARK.exec(output)) != null) {
        if (result[1].includes(')')) {
            let inside = result[1].split(')');
            result[1]  = inside[0];
        }
        output = output.replace('mark(' + result[1] + ')', '<span class="sd5-inline-fun-param"><span class="sd5-syntax">##REP-MAR##</span><span class="sd5-mark">' + result[1] + '</span><span class="sd5-syntax">)</span></span>');
    }
    while ((result = REG_CITE_F.exec(output)) != null) {
        output = output.replace('[\''+result[1]+']','<span class="sd5-syntax">##REP-CF##</span><span class="sd5-inline-var">' + result[1] + '</span><span class="sd5-syntax">]</span>');
    }
    while ((result = REG_CITE_B.exec(output)) != null) {
        output = output.replace('["'+result[1]+']','<span class="sd5-syntax">##REP-CB##</span><span class="sd5-inline-var">' + result[1] + '</span><span class="sd5-syntax">]</span>');
    }
    while ((result = REG_CITE_I.exec(output)) != null) {
        output = output.replace('['+result[1]+']','<span class="sd5-syntax">##REP-CI##</span><span class="sd5-inline-var">' + result[1] + '</span><span class="sd5-syntax">]</span>');
    }
    while ((result = REG_VAR.exec(output)) != null) {
        output = output.replace('$' + result[1], '<span class="sd5-inline-var">##VAR-' + result[1] + '</span>');
    }

    output = output.replace(/##REP-BLD##/g, '**');
    output = output.replace(/##REP-EMP##/g, '*');
    output = output.replace(/##REP-UND##/g, '__');
    output = output.replace(/##REP-LOW##/g, 'lower(');
    output = output.replace(/##REP-UPR##/g, 'upper(');
    output = output.replace(/##REP-CAP##/g, 'capital(');
    output = output.replace(/##REP-MAR##/g, 'mark(');
    output = output.replace(/##REP-CF##/g, '[\'');
    output = output.replace(/##REP-CB##/g, '["');
    output = output.replace(/##REP-CI##/g, '[');
    output = output.replace(/##VAR-/g, '$');

    output = output.split('###DIAGRAM###');

    let temp = output[0];
    for (let i = 1; i < output.length; i++) {
        temp += diagram_stack.shift() + output[i];
    }

    output = temp;

    output = output.replace(/[ \u00A0][ \u00A0]/g, ' &nbsp;');

    return output;
}
