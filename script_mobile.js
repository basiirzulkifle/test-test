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
var script = {"gap":10,"watermark":false,"backgroundColor":["#333333"],"data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1},"history":{},"name":"Player736"},"scrollBarMargin":2,"id":"rootPlayer","backgroundColorRatios":[0],"hash": "5de9862999695f03d7b46ecd1391b7532c10049506e7e8011557bf7dcefee415", "definitions": [{"backgroundColor":[],"id":"IconButton_1925734D_076F_BD1C_4193_08C4092C3D14_mobile","data":{"name":"right"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1925734D_076F_BD1C_4193_08C4092C3D14_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55, {\"x\":-0.40059,\"yaw\":87.06,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton"},{"id":"video_2EC646B7_1CD9_CAB0_41B6_D268ECE103F7","label":trans('video_2EC646B7_1CD9_CAB0_41B6_D268ECE103F7.label'),"video":"this.videores_2CC69B5C_1CC6_BBF0_4168_04541BCC06B5","width":1920,"thumbnailUrl":"media/video_2EC646B7_1CD9_CAB0_41B6_D268ECE103F7_t.jpg","height":1080,"data":{"label":"LOADING ANIMATION 2"},"class":"Video"},{"backgroundColor":[],"id":"IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_mobile","data":{"name":"IconButton12096"},"verticalAlign":"middle","backgroundColorRatios":[],"pressedIconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_pressed.png","mode":"toggle","iconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA.png","horizontalAlign":"center","width":"10%","propagateClick":false,"height":"10%","minHeight":1,"minWidth":1,"transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_1D67AC18_071D_6B03_4191_3AF85675AAEE_mobile","data":{"name":"IconButton12096"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6.png","horizontalAlign":"center","width":"10%","propagateClick":false,"height":"10%","minHeight":1,"minWidth":1,"transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton"},{"id":"measure_1809A985_077E_AD0D_4163_5ED3CFAB6022","labelFontSize":"12px","data":{"label":"Object"},"displayAreaLabel":true,"pointMinRadius":5,"labelFontFamily":"Arial","type":"multiple","pointColor":"#FFFFFF","lineColor":"#FFFFFF","labelFontColor":"#FFFFFF","areaColor":"#FFFFFF","pointMaxRadius":5,"areaOpacity":0.5,"class":"MeasureModel3DObject"},{"gap":5,"id":"Container_15BBE0E7_06FF_BB0B_4183_B7823053528D_mobile","data":{"name":"HEADER"},"scrollBarMargin":1,"paddingLeft":5,"verticalAlign":"middle","paddingRight":5,"horizontalAlign":"center","scrollBarColor":"#000000","scrollBarOpacity":0,"width":"100%","propagateClick":false,"height":"10%","minHeight":10,"minWidth":10,"backgroundOpacity":0,"children":["this.Image_F0477102_FEB6_CF07_41E3_24B1BCA5F748_mobile","this.IconButton_0A5651FC_051B_BD03_417F_D883949C7802_mobile","this.IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7_mobile","this.IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA_mobile","this.Container_1FE1F75C_076D_E53C_4178_C579CFACEA11_mobile","this.IconButton_15F979A7_051D_AD0C_4162_4B4FE69CD5C1_mobile"],"scrollBarWidth":5,"layout":"horizontal","class":"Container"},{"backgroundColor":[],"id":"IconButton_1E7CE8DF_076D_6B3D_4190_099E5DC8D28E_mobile","data":{"name":"IconButton12096"},"verticalAlign":"middle","backgroundColorRatios":[],"pressedIconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_pressed.png","mode":"toggle","iconURL":"skin/IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA.png","horizontalAlign":"center","width":"15%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"transparencyActive":true,"click":"this.toggleMeasurementsVisibility(null)","backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_0A5651FC_051B_BD03_417F_D883949C7802_mobile","data":{"name":"IconButton3805"},"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_0A5651FC_051B_BD03_417F_D883949C7802_rollover.png","backgroundColorRatios":[],"iconURL":"skin/IconButton_0A5651FC_051B_BD03_417F_D883949C7802.png","horizontalAlign":"center","width":"10%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"transparencyActive":true,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_155609CD_06EB_AD1D_412B_D4D557925570, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_155739CD_06EB_AD1D_4174_A602B2B774D3, 'hideEffect', false)}.bind(this); if(!this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile.get('visible')){ visibleFunc(this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile) } else { invisibleFunc(this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile) }; if(!this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile.get('visible')){ visibleFunc(this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile) } else { invisibleFunc(this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile) }","backgroundOpacity":0.3,"visible":false,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_1921E5E4_076F_A503_4185_DFE9CA66E333_mobile","data":{"name":"rear"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1921E5E4_076F_A503_4185_DFE9CA66E333_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55, {\"x\":-0.40059,\"yaw\":-178.13,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_12E0B5EB_071F_A504_4186_40B81CFE8497_mobile","data":{"name":"IconButton12096"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_12E0B5EB_071F_A504_4186_40B81CFE8497.png","horizontalAlign":"center","width":"10%","propagateClick":false,"height":"10%","minHeight":1,"minWidth":1,"transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton"},{"gap":5,"id":"Container_146DF5B6_06FB_650C_4161_54FD0EAE5786_mobile","data":{"name":"BODY"},"scrollBarMargin":1,"scrollBarColor":"#000000","scrollBarOpacity":0,"width":"99.499%","propagateClick":false,"height":"96.692%","minHeight":10,"minWidth":10,"backgroundOpacity":0,"children":["this.Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile","this.Container_142CA210_06FD_9F03_4154_39561BB15C88_mobile","this.Container_1590F85E_06FE_AB3C_4182_32A7F6335917_mobile"],"scrollBarWidth":5,"layout":"vertical","class":"Container"},{"backgroundColor":[],"id":"IconButton_12056C57_072A_AB0D_4192_57F022B6B73E_mobile","data":{"name":"line"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_12056C57_072A_AB0D_4192_57F022B6B73E_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_197720D2_077B_9B04_4170_84C10EB92A53_mobile","data":{"name":"gf"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_197720D2_077B_9B04_4170_84C10EB92A53_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['2','1','0'], true); this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['3','4','5'], false)","backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA_mobile","data":{"name":"IconButton3805"},"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA_rollover.png","backgroundColorRatios":[],"iconURL":"skin/IconButton_0BA13CC8_051D_AB03_4188_E5CEED15E7AA.png","horizontalAlign":"center","width":"10%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_15F979A7_051D_AD0C_4162_4B4FE69CD5C1_mobile","data":{"name":"IconButton3805"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_12E0B5EB_071F_A504_4186_40B81CFE8497.png","horizontalAlign":"right","width":"20%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"transparencyActive":true,"click":"this.openLink(this.translate('LinkBehaviour_3B68294F_02ED_AD1D_4174_D36BF4E311E9.source'), '_top')","backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_1921E80B_076F_AB04_418F_90F2321FA9B5_mobile","data":{"name":"front"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1921E80B_076F_AB04_418F_90F2321FA9B5_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55, {\"x\":-0.40059,\"yaw\":-1.45,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_1CC23A79_076D_6F04_4172_A5B5E472DDE5_mobile","data":{"name":"IconButton12096"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1CC23A79_076D_6F04_4172_A5B5E472DDE5.png","horizontalAlign":"center","width":"15%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"transparencyActive":true,"click":"this.cleanAllMeasurements(null)","backgroundOpacity":0.3,"class":"IconButton"},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC","label":trans('model_3378E026_031D_FB0C_4179_2E6AB2F576DC.label'),"backgroundColor":"#333333","camera":"this.cam_F23E7803_FEDA_7D05_41AB_8BB05F7ECEE5","castShadow":true,"thumbnailUrl":"media/model_3378E026_031D_FB0C_4179_2E6AB2F576DC_t.jpg","bakedTextures":true,"floorHeight":-0.29,"surfaceReticleMinRadius":15,"floorColor":"#333333","class":"Model3D","objects":["this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_0","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_5","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_2","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_1","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_4","this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC_3","this.sprite_3E46DEDD_0325_673D_415D_E1B4A59C8A3C"],"surfaceSelectionCoef":2,"data":{"showOnlyHotspotsLineSightInPanoramas":true,"label":"SANUBARI TYPE A 2","showOnlyHotspotsLineSight":true},"model":"this.res_F23EE803_FEDA_7D05_41E5_E5843EB4D74A","surfaceReticleRadius":0.02,"surfaceReticleMaxRadius":50,"floorRadius":18,"lights":["this.light_0B9AC81A_1B3E_4570_419B_F0385DB31969"]},{"backgroundColor":[],"id":"IconButton_1921FAD5_076F_AF0D_4185_F1F76A95EB90_mobile","data":{"name":"perspective"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1921FAD5_076F_AF0D_4185_F1F76A95EB90_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55, {\"x\":0.90854,\"yaw\":33.48,\"distance\":38.51008,\"z\":-0.14853,\"y\":3.66607,\"pitch\":-9.16}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton"},{"gap":5,"id":"Container_1477745E_06FB_9B3F_4191_B2B1902BC600_mobile","data":{"name":"floor level"},"scrollBarMargin":1,"verticalAlign":"middle","horizontalAlign":"center","scrollBarColor":"#000000","scrollBarOpacity":0,"width":"100%","propagateClick":false,"height":"100%","minHeight":10,"minWidth":10,"backgroundOpacity":0,"children":["this.IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile","this.IconButton_197720D2_077B_9B04_4170_84C10EB92A53_mobile","this.IconButton_1EB227CA_077A_A507_4186_61BF63423D7E_mobile","this.IconButton_19148597_077A_A50D_4182_77BE9772694C_mobile"],"scrollBarWidth":5,"layout":"absolute","class":"Container"},{"backgroundColor":[],"id":"IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6_mobile","data":{"name":"IconButton12096"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6.png","horizontalAlign":"center","width":"15%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"transparencyActive":true,"click":"this.toggleMeasurement(null, this.measure_1809A985_077E_AD0D_4163_5ED3CFAB6022)","backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile","data":{"name":"line"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_156D5DDD_06ED_A53C_4190_C7636446465D_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"backgroundOpacity":0.3,"class":"IconButton"},{"gap":5,"id":"Container_15AAAD39_06FE_E505_4191_814D0D91CB10_mobile","data":{"name":"MAIN"},"scrollBarMargin":1,"verticalAlign":"middle","horizontalAlign":"center","scrollBarColor":"#000000","bottom":"0%","scrollBarOpacity":0,"init":"this.setOverlaysVisibility([this.sprite_3E46DEDD_0325_673D_415D_E1B4A59C8A3C], true, 0)","propagateClick":false,"height":"100%","minHeight":10,"minWidth":10,"backgroundOpacity":0,"children":["this.Container_15BBE0E7_06FF_BB0B_4183_B7823053528D_mobile","this.Container_146DF5B6_06FB_650C_4161_54FD0EAE5786_mobile"],"scrollBarWidth":5,"width":"100%","left":"0%","class":"Container","layout":"vertical"},{"backgroundColor":[],"id":"IconButton_18106FE8_076F_A503_4185_8590BD10FB65_mobile","data":{"name":"left"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_18106FE8_076F_A503_4185_8590BD10FB65_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55, {\"x\":-0.40059,\"yaw\":-90.36,\"distance\":34.384,\"z\":0.18815,\"y\":4.87,\"pitch\":0}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton"},{"id":"Image_F0477102_FEB6_CF07_41E3_24B1BCA5F748_mobile","data":{"name":"LOGO"},"verticalAlign":"middle","url":trans('Image_F0477102_FEB6_CF07_41E3_24B1BCA5F748_mobile.url'),"horizontalAlign":"center","scaleMode":"fit_inside","propagateClick":false,"height":"100%","minHeight":1,"width":"20%","minWidth":1,"click":"this.openLink(this.translate('LinkBehaviour_3C0FF0E0_02EE_BB03_4185_BF9360EA21BC.source'), '_top')","backgroundOpacity":0,"class":"Image"},{"id":"MainViewer_mobileModel3DPlayer","viewerArea":"this.MainViewer_mobile","class":"Model3DPlayer"},{"subtitlesTextShadowVerticalLength":1,"id":"MainViewer_mobile","progressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"progressRight":"33%","playbackBarProgressBorderRadius":0,"data":{"name":"Main Viewer"},"toolTipBorderRadius":1,"playbackBarProgressBackgroundColor":["#3399FF"],"progressOpacity":0.7,"toolTipFontFamily":"Arial","toolTipShadowColor":"#333138","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarRight":0,"toolTipTextShadowColor":"#000000","subtitlesGap":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","width":"100%","progressBarBackgroundColor":["#6EA4AE"],"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"subtitlesBottom":50,"progressBottom":2,"height":"100%","progressBorderSize":0,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadShadowBlurRadius":1.5,"subtitlesTextShadowHorizontalLength":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"progressBorderRadius":2,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","toolTipBorderColor":"#767676","progressLeft":"33%","playbackBarBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"toolTipTextShadowBlurRadius":1,"toolTipFontSize":"1.11vmin","firstTransitionDuration":0,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"minHeight":25,"vrPointerColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipPaddingLeft":3,"minWidth":50,"playbackBarBottom":5,"toolTipShadowBlurRadius":1,"toolTipPaddingRight":3,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"playbackBarHeight":10,"playbackBarHeadWidth":6,"class":"ViewerArea"},{"id":"mainPlayList","class":"PlayList","items":["this.Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55"]},{"gap":10,"id":"Container_1FE1F75C_076D_E53C_4178_C579CFACEA11_mobile","data":{"name":"Container12796"},"scrollBarMargin":1,"verticalAlign":"middle","horizontalAlign":"center","scrollBarColor":"#000000","scrollBarOpacity":0,"width":"76.832%","propagateClick":false,"height":"100%","minHeight":10,"minWidth":10,"backgroundOpacity":0,"children":["this.IconButton_1FBCB93A_076F_AD07_4191_AFF299F266A6_mobile","this.IconButton_1CC23A79_076D_6F04_4172_A5B5E472DDE5_mobile","this.IconButton_1E7CE8DF_076D_6B3D_4190_099E5DC8D28E_mobile"],"scrollBarWidth":5,"layout":"horizontal","class":"Container"},{"id":"effect_155739CD_06EB_AD1D_4174_A602B2B774D3","duration":500,"class":"FadeOutEffect"},{"backgroundColor":[],"id":"IconButton_19148597_077A_A50D_4182_77BE9772694C_mobile","data":{"name":"fm"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_19148597_077A_A50D_4182_77BE9772694C_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['3','2','4','1','0','5'], true)","backgroundOpacity":0.3,"class":"IconButton"},{"paddingBottom":5,"id":"Container_142CA210_06FD_9F03_4154_39561BB15C88_mobile","data":{"name":"centre"},"scrollBarMargin":1,"horizontalAlign":"center","scrollBarColor":"#000000","scrollBarOpacity":0,"width":"150%","propagateClick":false,"height":"100%","minHeight":10,"minWidth":10,"backgroundOpacity":0,"children":["this.IconButton_1D67AC18_071D_6B03_4191_3AF85675AAEE_mobile","this.IconButton_12E0B5EB_071F_A504_4186_40B81CFE8497_mobile","this.IconButton_1C70233A_071F_BD04_4182_6DA8CDED3DEA_mobile"],"scrollBarWidth":5,"layout":"horizontal","class":"Container"},{"backgroundColor":[],"id":"IconButton_192089A5_076F_AD0D_4187_491CD143D41A_mobile","data":{"name":"top"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_192089A5_076F_AD0D_4187_491CD143D41A_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55, {\"x\":-0.40059,\"yaw\":0.02,\"distance\":38.51008,\"z\":0.18815,\"y\":4.87,\"pitch\":-89.99}, 1, 'quint_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.3,"class":"IconButton"},{"backgroundColor":[],"id":"IconButton_1EB227CA_077A_A507_4186_61BF63423D7E_mobile","data":{"name":"1st"},"verticalAlign":"middle","backgroundColorRatios":[],"iconURL":"skin/IconButton_1EB227CA_077A_A507_4186_61BF63423D7E_mobile.png","horizontalAlign":"center","width":"100%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"click":"this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['3','2','4','1','0'], true); this.setObjectsVisibilityByID(this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC, ['5'], false)","backgroundOpacity":0.3,"class":"IconButton"},{"id":"effect_155609CD_06EB_AD1D_412B_D4D557925570","duration":500,"class":"FadeInEffect"},{"backgroundColor":[],"id":"IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7_mobile","data":{"name":"IconButton3805"},"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7_rollover.png","backgroundColorRatios":[],"iconURL":"skin/IconButton_0BDB8EDD_051D_A73D_4179_454C301C42B7.png","horizontalAlign":"center","width":"10%","propagateClick":false,"height":"100%","minHeight":1,"minWidth":1,"transparencyActive":true,"backgroundOpacity":0.3,"visible":false,"class":"IconButton"},{"id":"audio_3EA25283_1B4E_4551_41AA_070B06993A73","data":{"label":"alex-productions-i-feel-alive"},"class":"MediaAudio","autoplay":true,"audio":"this.audiores_32F7EF30_1B4F_DB4F_41BA_E3A5F46A15A7"},{"gap":5,"id":"Container_1590F85E_06FE_AB3C_4182_32A7F6335917_mobile","data":{"name":"view"},"scrollBarMargin":1,"scrollBarColor":"#000000","scrollBarOpacity":0,"width":"100%","propagateClick":false,"height":"100%","minHeight":10,"minWidth":10,"backgroundOpacity":0,"children":["this.IconButton_12056C57_072A_AB0D_4192_57F022B6B73E_mobile","this.IconButton_1921FAD5_076F_AF0D_4185_F1F76A95EB90_mobile","this.IconButton_192089A5_076F_AD0D_4187_491CD143D41A_mobile","this.IconButton_1921E80B_076F_AB04_418F_90F2321FA9B5_mobile","this.IconButton_1921E5E4_076F_A503_4185_DFE9CA66E333_mobile","this.IconButton_1925734D_076F_BD1C_4193_08C4092C3D14_mobile","this.IconButton_18106FE8_076F_A503_4185_8590BD10FB65_mobile"],"scrollBarWidth":5,"layout":"absolute","class":"Container"},{"id":"videores_2CC69B5C_1CC6_BBF0_4168_04541BCC06B5","height":1080,"levels":["this.videolevel_28FDDCCA_1CCA_5ED3_41BB_0C904D594D09"],"class":"VideoResource","width":1920},{"id":"cam_F23E7803_FEDA_7D05_41AB_8BB05F7ECEE5","maxX":59.01,"minDistance":8.85,"autoNearFar":true,"minPitch":-90,"initialZ":-0.14,"initialX":0.91,"initialYaw":33.48,"minZ":-66.53,"initialY":3.67,"minX":-61.81,"maxDistance":70.77,"initialPitch":-9.16,"maxPitch":0,"initialDistance":38.51,"maxZ":62.69,"class":"OrbitModel3DCamera","minY":-26.28,"maxY":36.04},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_0","class":"InnerModel3DObject","objectId":"0","data":{"label":"LAND"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_5","class":"InnerModel3DObject","objectId":"5","data":{"label":"ROOF"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_2","class":"InnerModel3DObject","objectId":"2","data":{"label":"GF.001"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_1","class":"InnerModel3DObject","objectId":"1","data":{"label":"GLASS.GF"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_4","class":"InnerModel3DObject","objectId":"4","data":{"label":"GLASS.1F"}},{"id":"model_3378E026_031D_FB0C_4179_2E6AB2F576DC_3","class":"InnerModel3DObject","objectId":"3","data":{"label":"1F.001"}},{"id":"sprite_3E46DEDD_0325_673D_415D_E1B4A59C8A3C","enabled":false,"data":{"label":"BUTTON VIEW AR-14"},"parentId":"0","image":"this.res_3E8C810B_031D_BD05_4184_7AF87F16417B","x":-4.639355088309015,"y":1.75,"z":3.0421777234404033,"width":100,"translationLength":32,"height":25,"click":"this.openLink(this.translate('LinkBehaviour_3DF7A241_02ED_7F04_419F_A6D2272FDAB8.source'), '_top')","class":"SpriteModel3DObject","translationY":1},{"id":"res_F23EE803_FEDA_7D05_41E5_E5843EB4D74A","levels":[{"class":"Model3DResourceLevel","url":"media/model_3378E026_031D_FB0C_4179_2E6AB2F576DC/scene.glb"},{"url":"media/model_3378E026_031D_FB0C_4179_2E6AB2F576DC/scene_mobile.glb","class":"Model3DResourceLevel","tags":"mobile"}],"class":"Model3DResource"},{"id":"light_0B9AC81A_1B3E_4570_419B_F0385DB31969","class":"AmbientLight","intensity":0.3},{"id":"Model3DPlayListItem_29518EEC_1CCA_5AD0_41A7_1E107BC79F55","player":"this.MainViewer_mobileModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewer_mobileModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_3378E026_031D_FB0C_4179_2E6AB2F576DC","class":"Model3DPlayListItem"},{"mp3Url":trans('audiores_32F7EF30_1B4F_DB4F_41BA_E3A5F46A15A7.mp3Url'),"id":"audiores_32F7EF30_1B4F_DB4F_41BA_E3A5F46A15A7","class":"AudioResource"},{"id":"videolevel_28FDDCCA_1CCA_5ED3_41BB_0C904D594D09","height":1080,"posterURL":trans('videolevel_28FDDCCA_1CCA_5ED3_41BB_0C904D594D09.posterURL'),"type":"video/mp4","framerate":60,"url":trans('videolevel_28FDDCCA_1CCA_5ED3_41BB_0C904D594D09.url'),"class":"VideoResourceLevel","width":1920,"bitrate":701},{"id":"res_3E8C810B_031D_BD05_4184_7AF87F16417B","levels":[{"height":50,"url":"media/res_3E8C810B_031D_BD05_4184_7AF87F16417B_0.png","class":"ImageResourceLevel","width":200}],"class":"ImageResource"}],"scrollBarColor":"#000000","width":"100%","propagateClick":false,"height":"100%","minHeight":0,"minWidth":0,"scripts":{"unregisterKey":TDV.Tour.Script.unregisterKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"registerKey":TDV.Tour.Script.registerKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"downloadFile":TDV.Tour.Script.downloadFile,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"existsKey":TDV.Tour.Script.existsKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMainViewer":TDV.Tour.Script.getMainViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMapLocation":TDV.Tour.Script.setMapLocation,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getKey":TDV.Tour.Script.getKey,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"shareSocial":TDV.Tour.Script.shareSocial,"init":TDV.Tour.Script.init,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"translate":TDV.Tour.Script.translate,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setValue":TDV.Tour.Script.setValue,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByName":TDV.Tour.Script.getMediaByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"clone":TDV.Tour.Script.clone,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"createTween":TDV.Tour.Script.createTween,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"executeJS":TDV.Tour.Script.executeJS,"getOverlays":TDV.Tour.Script.getOverlays,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showWindow":TDV.Tour.Script.showWindow,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizStart":TDV.Tour.Script.quizStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"openLink":TDV.Tour.Script.openLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer},"defaultMenu":[],"children":["this.MainViewer_mobile","this.Container_15AAAD39_06FE_E505_4191_814D0D91CB10_mobile"],"layout":"absolute","start":"this.playAudioList([this.audio_3EA25283_1B4E_4551_41AA_070B06993A73], true); this.init()","class":"Player"};
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
//Generated with v2023.1.9, Tue Aug 22 2023