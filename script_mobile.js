(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","watermark":false,"backgroundColor":["#333333"],"minHeight":0,"data":{"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"rate":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player736","history":{}},"minWidth":0,"backgroundColorRatios":[0],"scrollBarMargin":2,"scrollBarColor":"#000000","hash": "b893e01886462a549e6dddd7857295c0c21d5acf8b85cfca57fe7acf3a923a5e", "definitions": [{"id":"MainViewer_mobileModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer_mobile"},{"id":"IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton12096"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA.png","pressedIconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_pressed.png","mode":"toggle","verticalAlign":"middle","width":"10%","propagateClick":false,"height":"10%","transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton3805"},"backgroundColorRatios":[],"rollOverIconURL":"skin/IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7_rollover.png","iconURL":"skin/IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7.png","verticalAlign":"middle","width":"10%","propagateClick":false,"height":"100%","transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton","horizontalAlign":"center"},{"id":"Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile","minHeight":10,"minWidth":10,"data":{"name":"floor level"},"scrollBarMargin":1,"verticalAlign":"middle","scrollBarColor":"#000000","layout":"absolute","width":"100%","propagateClick":false,"height":"100%","backgroundOpacity":0,"scrollBarOpacity":0,"gap":5,"children":["this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile","this.IconButton_197720D2_077B_9B04_4170_84C10EB92A53_mobile","this.IconButton_1EB227CA_077A_A507_4186_61BF63423D7E_mobile","this.IconButton_19148597_077A_A50D_4182_77BE9772694C_mobile"],"scrollBarWidth":5,"class":"Container","horizontalAlign":"center"},{"id":"IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton12096"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6.png","verticalAlign":"middle","width":"15%","propagateClick":false,"height":"100%","transparencyActive":true,"click":"this.startMeasurement(null, this.measure_1809A985_077E_AD0D_4163_5ED3CFAB6022)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_12056C57_072A_AB0D_4192_57F022B6B73E_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"line"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_12056C57_072A_AB0D_4192_57F022B6B73E_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"MainViewer_mobile","minHeight":25,"progressBackgroundColorRatios":[0],"minWidth":50,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderRadius":0,"data":{"name":"Main Viewer"},"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":"33%","toolTipBorderRadius":1,"toolTipFontFamily":"Arial","toolTipShadowColor":"#333138","progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","toolTipTextShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","width":"100%","progressBarBackgroundColor":["#6EA4AE"],"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBottom":50,"height":"100%","progressBottom":2,"subtitlesTop":0,"progressHeight":2,"progressBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":2,"playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarHeadShadowBlurRadius":1.5,"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":2,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"progressLeft":"33%","toolTipFontSize":"1.11vmin","surfaceReticleSelectionColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarBorderSize":0,"toolTipTextShadowBlurRadius":1,"playbackBarHeadBorderSize":0,"toolTipPaddingRight":3,"firstTransitionDuration":0,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"vrPointerColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipPaddingLeft":3,"toolTipShadowBlurRadius":1,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"playbackBarHeight":10,"class":"ViewerArea","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowVerticalLength":1,"playbackBarHeadWidth":6},{"id":"Container_1FE1F75C_076D_E53C_4178_C579CFACEA11_mobile","minHeight":10,"minWidth":10,"data":{"name":"Container12796"},"scrollBarMargin":1,"verticalAlign":"middle","scrollBarColor":"#000000","layout":"horizontal","width":"76.832%","propagateClick":false,"height":"100%","backgroundOpacity":0,"scrollBarOpacity":0,"gap":10,"children":["this.IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6_mobile","this.IconButton_1CC23A79_076D_6F04_4172_A5B5E472DDE5_mobile","this.IconButton_1E7CE8DF_076D_6B3D_4190_099E5DC8D28E_mobile"],"scrollBarWidth":5,"class":"Container","horizontalAlign":"center"},{"duration":500,"id":"effect_155739CD_06EB_AD1D_4174_A602B2B774D3","class":"FadeOutEffect"},{"id":"Container_1590F85E_06FE_AB3C_4182_32A7F6335917_mobile","minHeight":10,"minWidth":10,"data":{"name":"view"},"scrollBarMargin":1,"scrollBarColor":"#000000","layout":"absolute","width":"100%","propagateClick":false,"height":"100%","backgroundOpacity":0,"scrollBarOpacity":0,"gap":5,"children":["this.IconButton_12056C57_072A_AB0D_4192_57F022B6B73E_mobile","this.IconButton_1921FAD5_076F_AF0D_4185_F1F76A95EB90_mobile","this.IconButton_192089A5_076F_AD0D_4187_491CD143D41A_mobile","this.IconButton_1921E80B_076F_AB04_418F_90F2321FA9B5_mobile","this.IconButton_1921E5E4_076F_A503_4185_DFE9CA66E333_mobile","this.IconButton_1925734D_076F_BD1C_4193_08C4092C3D14_mobile","this.IconButton_18106FE8_076F_A503_4185_8590BD10FB65_mobile"],"scrollBarWidth":5,"class":"Container"},{"duration":500,"id":"effect_155609CD_06EB_AD1D_412B_D4D557925570","class":"FadeInEffect"},{"id":"IconButton_0A5651FC_051B_BD03_417F_D883949C7802_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton3805"},"backgroundColorRatios":[],"rollOverIconURL":"skin/IconButton_0A5651FC_051B_BD03_417F_D883949C7802_rollover.png","iconURL":"skin/IconButton_0A5651FC_051B_BD03_417F_D883949C7802.png","verticalAlign":"middle","width":"10%","propagateClick":false,"height":"100%","transparencyActive":true,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_155609CD_06EB_AD1D_412B_D4D557925570, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_155739CD_06EB_AD1D_4174_A602B2B774D3, 'hideEffect', false)}.bind(this); if(!this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile.get('visible')){ visibleFunc(this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile) } else { invisibleFunc(this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile) }; if(!this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile.get('visible')){ visibleFunc(this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile) } else { invisibleFunc(this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile) }","backgroundOpacity":0.3,"visible":false,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_192089A5_076F_AD0D_4187_491CD143D41A_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"top"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_192089A5_076F_AD0D_4187_491CD143D41A_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0, {\"x\":-0.40059,\"yaw\":0.02,\"distance\":38.51008,\"z\":0.18815,\"y\":4.87,\"pitch\":-89.99}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"measure_1809A985_077E_AD0D_4163_5ED3CFAB6022","data":{"label":"Object"},"displayAreaLabel":true,"labelFontFamily":"Arial","pointColor":"#FFFFFF","pointMinRadius":5,"labelFontSize":"12px","type":"multiple","labelFontColor":"#FFFFFF","pointMaxRadius":5,"areaColor":"#FFFFFF","class":"MeasureModel3DObject","lineColor":"#FFFFFF","areaOpacity":0.5},{"id":"Container_146DF5B6_06FB_650C_4161_54FD0EAE5786_mobile","minHeight":10,"minWidth":10,"data":{"name":"BODY"},"scrollBarMargin":1,"scrollBarColor":"#000000","layout":"vertical","width":"99.499%","propagateClick":false,"height":"96.692%","backgroundOpacity":0,"scrollBarOpacity":0,"gap":5,"children":["this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile","this.Container_142CA210_06FD_9F03_4154_39561BB15C88_mobile","this.Container_1590F85E_06FE_AB3C_4182_32A7F6335917_mobile"],"scrollBarWidth":5,"class":"Container"},{"id":"IconButton_197720D2_077B_9B04_4170_84C10EB92A53_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"gf"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_197720D2_077B_9B04_4170_84C10EB92A53_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['2','1','0'], true); this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['3','4','5'], false)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_1CC23A79_076D_6F04_4172_A5B5E472DDE5_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton12096"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1CC23A79_076D_6F04_4172_A5B5E472DDE5.png","verticalAlign":"middle","width":"15%","propagateClick":false,"height":"100%","transparencyActive":true,"click":"this.cleanAllMeasurements(null)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"Container_142CA210_06FD_9F03_4154_39561BB15C88_mobile","minHeight":10,"minWidth":10,"data":{"name":"centre"},"scrollBarMargin":1,"scrollBarColor":"#000000","layout":"horizontal","width":"150%","propagateClick":false,"height":"100%","backgroundOpacity":0,"scrollBarOpacity":0,"children":["this.IconButton_1D67AC18_071D_6B03_4191_3AF85675AAEE_mobile","this.IconButton_12E0B5EB_071F_A504_4186_40B81CFE8497_mobile","this.IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_mobile"],"scrollBarWidth":5,"class":"Container","horizontalAlign":"center","paddingBottom":5},{"id":"IconButton_19148597_077A_A50D_4182_77BE9772694C_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"fm"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_19148597_077A_A50D_4182_77BE9772694C_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['3','2','4','1','0','5'], true)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"Image_F0477102_FEB6_CF07_41E3_24B1BCA5F748_mobile","minHeight":1,"minWidth":1,"data":{"name":"LOGO"},"scaleMode":"fit_inside","verticalAlign":"middle","url":trans('Image_F0477102_FEB6_CF07_41E3_24B1BCA5F748_mobile.url'),"width":"20%","propagateClick":false,"height":"100%","click":"this.openLink(this.translate('LinkBehaviour_3C0FF0E0_02EE_BB03_4185_BF9360EA21BC.source'), '_top')","backgroundOpacity":0,"class":"Image","horizontalAlign":"center"},{"id":"IconButton_1D67AC18_071D_6B03_4191_3AF85675AAEE_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton12096"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6.png","verticalAlign":"middle","width":"10%","propagateClick":false,"height":"10%","transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton3805"},"backgroundColorRatios":[],"rollOverIconURL":"skin/IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA_rollover.png","iconURL":"skin/IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA.png","verticalAlign":"middle","width":"10%","propagateClick":false,"height":"100%","transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton","horizontalAlign":"center"},{"id":"Container_15BBE0E7_06FF_BB0B_4183_B7823053528D_mobile","minHeight":10,"minWidth":10,"data":{"name":"HEADER"},"scrollBarMargin":1,"verticalAlign":"middle","scrollBarColor":"#000000","layout":"horizontal","paddingLeft":5,"paddingRight":5,"width":"100%","propagateClick":false,"height":"10%","backgroundOpacity":0,"scrollBarOpacity":0,"gap":5,"children":["this.Image_F0477102_FEB6_CF07_41E3_24B1BCA5F748_mobile","this.IconButton_0A5651FC_051B_BD03_417F_D883949C7802_mobile","this.IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7_mobile","this.IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA_mobile","this.Container_1FE1F75C_076D_E53C_4178_C579CFACEA11_mobile","this.IconButton_15F979A7_051D_AD0C_4162_4B4FE69CD5C1_mobile"],"scrollBarWidth":5,"class":"Container","horizontalAlign":"center"},{"id":"IconButton_12E0B5EB_071F_A504_4186_40B81CFE8497_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton12096"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_15F979A7_051D_AD0C_4162_4B4FE69CD5C1.png","verticalAlign":"middle","width":"10%","propagateClick":false,"height":"10%","transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_15F979A7_051D_AD0C_4162_4B4FE69CD5C1_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton3805"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_15F979A7_051D_AD0C_4162_4B4FE69CD5C1.png","verticalAlign":"middle","width":"20%","propagateClick":false,"height":"100%","transparencyActive":true,"click":"this.openLink(this.translate('LinkBehaviour_3B68294F_02ED_AD1D_4174_D36BF4E311E9.source'), '_top')","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"right"},{"id":"IconButton_1921E5E4_076F_A503_4185_DFE9CA66E333_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"rear"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1921E5E4_076F_A503_4185_DFE9CA66E333_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0, {\"x\":-0.40059,\"yaw\":-178.13,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"mainPlayList","class":"PlayList","items":["this.Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0"]},{"id":"IconButton_1925734D_076F_BD1C_4193_08C4092C3D14_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"right"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1925734D_076F_BD1C_4193_08C4092C3D14_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0, {\"x\":-0.40059,\"yaw\":87.06,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_1921E80B_076F_AB04_418F_90F2321FA9B5_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"front"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1921E80B_076F_AB04_418F_90F2321FA9B5_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0, {\"x\":-0.40059,\"yaw\":-1.45,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"Container_15AAAD39_06FE_E505_4191_814D0D91CB10_mobile","minHeight":10,"minWidth":10,"data":{"name":"MAIN"},"scrollBarMargin":1,"verticalAlign":"middle","scrollBarColor":"#000000","layout":"vertical","bottom":"0%","init":"this.setOverlaysVisibility([this.sprite_3E46DEDD_0325_673D_415D_E1B4A59C8A3C], true, 0)","propagateClick":false,"height":"100%","width":"100%","backgroundOpacity":0,"scrollBarOpacity":0,"gap":5,"children":["this.Container_15BBE0E7_06FF_BB0B_4183_B7823053528D_mobile","this.Container_146DF5B6_06FB_650C_4161_54FD0EAE5786_mobile"],"scrollBarWidth":5,"class":"Container","horizontalAlign":"center","left":"0%"},{"id":"IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"line"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_1EB227CA_077A_A507_4186_61BF63423D7E_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"1st"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1EB227CA_077A_A507_4186_61BF63423D7E_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['3','2','4','1','0'], true); this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['5'], false)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC","label":trans('model_3378E026_031D_FB0C_4179_2E6AB2F576DC.label'),"backgroundColor":"#333333","camera":"this.cam_F23E7803_FEDA_7D05_41AB_8BB05F7ECEE5","objects":["this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_0","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_5","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_2","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_1","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_4","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_3","this.sprite_3E46DEDD_0325_673D_415D_E1B4A59C8A3C"],"floorColor":"#333333","thumbnailUrl":"media/model_3378E026_031D_FB0C_4179_2E6AB2F576DC_t.jpg","bakedTextures":true,"floorHeight":-0.29,"surfaceReticleMinRadius":15,"castShadow":true,"model":"this.res_F23EE803_FEDA_7D05_41E5_E5843EB4D74A","data":{"showOnlyHotspotsLineSightInPanoramas":true,"label":"SANUBARI TYPE A 2","showOnlyHotspotsLineSight":true},"surfaceSelectionCoef":2,"surfaceReticleRadius":0.02,"class":"Model3D","floorRadius":18,"lights":["this.light_F23E0803_FEDA_7D05_41DB_CEDB3F122613"],"surfaceReticleMaxRadius":50},{"id":"IconButton_18106FE8_076F_A503_4185_8590BD10FB65_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"left"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_18106FE8_076F_A503_4185_8590BD10FB65_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0, {\"x\":-0.40059,\"yaw\":-90.36,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_1E7CE8DF_076D_6B3D_4190_099E5DC8D28E_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"IconButton12096"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA.png","pressedIconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_pressed.png","mode":"toggle","verticalAlign":"middle","width":"15%","propagateClick":false,"height":"100%","transparencyActive":true,"click":"this.toggleMeasurementsVisibility(null)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_1921FAD5_076F_AF0D_4185_F1F76A95EB90_mobile","backgroundColor":[],"minHeight":1,"minWidth":1,"data":{"name":"perspective"},"backgroundColorRatios":[],"iconURL":"skin/IconButton_1921FAD5_076F_AF0D_4185_F1F76A95EB90_mobile.png","verticalAlign":"middle","width":"100%","propagateClick":false,"height":"100%","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0, {\"x\":0.90854,\"yaw\":33.48,\"distance\":38.51008,\"z\":-0.14853,\"y\":3.66607,\"pitch\":-9.16}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton","horizontalAlign":"center"},{"id":"Model3DPlayListItem_4C4552DA_0D25_BF07_4192_7C5896D415B0","class":"Model3DPlayListItem","player":"this.MainViewer_mobileModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewer_mobileModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC"},{"id":"cam_F23E7803_FEDA_7D05_41AB_8BB05F7ECEE5","maxX":59.01,"minDistance":8.85,"autoNearFar":true,"minPitch":-90,"initialZ":-0.14,"initialX":0.91,"minZ":-66.53,"minX":-61.81,"initialY":3.67,"maxDistance":70.77,"initialYaw":33.48,"maxPitch":0,"class":"OrbitModel3DCamera","maxZ":62.69,"initialPitch":-9.16,"initialDistance":38.51,"minY":-26.28,"maxY":36.04},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_0","objectId":"0","class":"InnerModel3DObject","data":{"label":"LAND"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_5","objectId":"5","class":"InnerModel3DObject","data":{"label":"ROOF"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_2","objectId":"2","class":"InnerModel3DObject","data":{"label":"GF.001"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_1","objectId":"1","class":"InnerModel3DObject","data":{"label":"GLASS.GF"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_4","objectId":"4","class":"InnerModel3DObject","data":{"label":"GLASS.1F"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_3","objectId":"3","class":"InnerModel3DObject","data":{"label":"1F.001"}},{"id":"sprite_3E46DEDD_0325_673D_415D_E1B4A59C8A3C","enabled":false,"data":{"label":"BUTTON VIEW AR-14"},"parentId":"0","image":"this.res_3E8C810B_031D_BD05_4184_7AF87F16417B","x":-4.639355088309015,"y":1.75,"z":3.0421777234404033,"width":100,"translationLength":32,"height":25,"click":"this.openLink(this.translate('LinkBehaviour_3DF7A241_02ED_7F04_419F_A6D2272FDAB8.source'), '_top')","class":"SpriteModel3DObject","translationY":1},{"class":"Model3DResource","levels":[{"class":"Model3DResourceLevel","url":"media/model_3378E026_031D_FB0C_4179_2E6AB2F576DC/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_3378E026_031D_FB0C_4179_2E6AB2F576DC/scene_mobile.glb","tags":"mobile"}],"id":"res_F23EE803_FEDA_7D05_41E5_E5843EB4D74A"},{"id":"light_F23E0803_FEDA_7D05_41DB_CEDB3F122613","intensity":0.5,"mode":"fixed_to_camera","pitch":45,"class":"OrbitLight","yaw":-45,"castShadow":true,"shadowTolerance":2},{"id":"res_3E8C810B_031D_BD05_4184_7AF87F16417B","class":"ImageResource","levels":[{"height":50,"class":"ImageResourceLevel","url":"media/res_3E8C810B_031D_BD05_4184_7AF87F16417B_0.png","width":200}]}],"layout":"absolute","width":"100%","propagateClick":false,"height":"100%","scripts":{"startMeasurement":TDV.Tour.Script.startMeasurement,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getKey":TDV.Tour.Script.getKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"translate":TDV.Tour.Script.translate,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMapLocation":TDV.Tour.Script.setMapLocation,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setValue":TDV.Tour.Script.setValue,"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setLocale":TDV.Tour.Script.setLocale,"executeJS":TDV.Tour.Script.executeJS,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"isPanorama":TDV.Tour.Script.isPanorama,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"mixObject":TDV.Tour.Script.mixObject,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"clone":TDV.Tour.Script.clone,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"textToSpeech":TDV.Tour.Script.textToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"registerKey":TDV.Tour.Script.registerKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizFinish":TDV.Tour.Script.quizFinish,"quizStart":TDV.Tour.Script.quizStart,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playAudioList":TDV.Tour.Script.playAudioList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"createTween":TDV.Tour.Script.createTween,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"openLink":TDV.Tour.Script.openLink,"showPopupImage":TDV.Tour.Script.showPopupImage,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPixels":TDV.Tour.Script.getPixels},"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"children":["this.MainViewer_mobile","this.Container_15AAAD39_06FE_E505_4191_814D0D91CB10_mobile"],"class":"Player","start":"this.init()"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.9.js.map
})();
//Generated with v2023.1.9, Fri Aug 18 2023