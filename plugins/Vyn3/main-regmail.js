const _0x29b68c=_0x3962;(function(_0x3fb6e1,_0x3ff37a){const _0xb28d4=_0x3962,_0x425e67=_0x3fb6e1();while(!![]){try{const _0x22d28f=-parseInt(_0xb28d4(0x14c))/0x1+-parseInt(_0xb28d4(0x149))/0x2*(-parseInt(_0xb28d4(0x132))/0x3)+-parseInt(_0xb28d4(0x157))/0x4*(parseInt(_0xb28d4(0x133))/0x5)+-parseInt(_0xb28d4(0x131))/0x6+-parseInt(_0xb28d4(0x151))/0x7*(-parseInt(_0xb28d4(0x13f))/0x8)+parseInt(_0xb28d4(0x144))/0x9*(-parseInt(_0xb28d4(0x140))/0xa)+parseInt(_0xb28d4(0x152))/0xb*(parseInt(_0xb28d4(0x148))/0xc);if(_0x22d28f===_0x3ff37a)break;else _0x425e67['push'](_0x425e67['shift']());}catch(_0x26e71b){_0x425e67['push'](_0x425e67['shift']());}}}(_0x55f6,0x90821));function _0x3962(_0x18eb82,_0x35084c){const _0x55f68f=_0x55f6();return _0x3962=function(_0x3962cd,_0x127b7a){_0x3962cd=_0x3962cd-0x130;let _0x6a0fd5=_0x55f68f[_0x3962cd];return _0x6a0fd5;},_0x3962(_0x18eb82,_0x35084c);}import{createHash}from'crypto';import _0x565792 from'nodemailer';let Reg=/\|?(.*)([.|] *?)([0-9]*)$/i,handler=async function(_0x47cfe6,{text:_0x167995,usedPrefix:_0xc97b0d}){const _0x4ed252=_0x3962;let _0x174780=global['db'][_0x4ed252(0x139)][_0x4ed252(0x156)][_0x47cfe6[_0x4ed252(0x14f)]];if(_0x174780[_0x4ed252(0x145)]===!![])throw _0x4ed252(0x154);let _0x3de3ab=_0x167995[_0x4ed252(0x135)]();if(!isValidEmail(_0x3de3ab))throw _0x4ed252(0x14a);let _0x56b0dc=generateVerificationCode(),_0x2874d3=_0x565792[_0x4ed252(0x143)]({'service':_0x4ed252(0x13e),'auth':{'user':_0x4ed252(0x130),'pass':'ctgoyinxwfbwtjrq'}}),_0x5544da={'from':_0x4ed252(0x130),'to':_0x3de3ab,'subject':'Skyline\x20Verification\x20Code','html':'\x0a<!DOCTYPE\x20html\x20PUBLIC\x20\x22-//W3C//DTD\x20XHTML\x201.0\x20Transitional//EN\x22\x20\x22http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\x22>\x0a<html\x20xmlns=\x22http://www.w3.org/1999/xhtml\x22\x20xmlns:o=\x22urn:schemas-microsoft-com:office:office\x22\x20style=\x22font-family:arial,\x20\x27helvetica\x20neue\x27,\x20helvetica,\x20sans-serif\x22>\x0a<head>\x0a<meta\x20charset=\x22UTF-8\x22>\x0a<meta\x20content=\x22width=device-width,\x20initial-scale=1\x22\x20name=\x22viewport\x22>\x0a<meta\x20name=\x22x-apple-disable-message-reformatting\x22>\x0a<meta\x20http-equiv=\x22X-UA-Compatible\x22\x20content=\x22IE=edge\x22>\x0a<meta\x20content=\x22telephone=no\x22\x20name=\x22format-detection\x22>\x0a<title>Finish\x20registration</title><!--[if\x20(mso\x2016)]>\x0a<style\x20type=\x22text/css\x22>\x0aa\x20{text-decoration:\x20none;}\x0a</style>\x0a<![endif]--><!--[if\x20gte\x20mso\x209]><style>sup\x20{\x20font-size:\x20100%\x20!important;\x20}</style><![endif]--><!--[if\x20gte\x20mso\x209]>\x0a<xml>\x0a<o:OfficeDocumentSettings>\x0a<o:AllowPNG></o:AllowPNG>\x0a<o:PixelsPerInch>96</o:PixelsPerInch>\x0a</o:OfficeDocumentSettings>\x0a</xml>\x0a<![endif]--><!--[if\x20!mso]><!--\x20-->\x0a<link\x20href=\x22https://fonts.googleapis.com/css2?family=Poppins&display=swap\x22\x20rel=\x22stylesheet\x22><!--<![endif]-->\x0a<style\x20type=\x22text/css\x22>\x0a#outlook\x20a\x20{\x0apadding:0;\x0a}\x0a.es-button\x20{\x0amso-style-priority:100!important;\x0atext-decoration:none!important;\x0a}\x0aa[x-apple-data-detectors]\x20{\x0acolor:inherit!important;\x0atext-decoration:none!important;\x0afont-size:inherit!important;\x0afont-family:inherit!important;\x0afont-weight:inherit!important;\x0aline-height:inherit!important;\x0a}\x0a.es-desk-hidden\x20{\x0adisplay:none;\x0afloat:left;\x0aoverflow:hidden;\x0awidth:0;\x0amax-height:0;\x0aline-height:0;\x0amso-hide:all;\x0a}\x0a@media\x20only\x20screen\x20and\x20(max-width:600px)\x20{p,\x20ul\x20li,\x20ol\x20li,\x20a\x20{\x20line-height:150%!important\x20}\x20h1,\x20h2,\x20h3,\x20h1\x20a,\x20h2\x20a,\x20h3\x20a\x20{\x20line-height:120%\x20}\x20h1\x20{\x20font-size:30px!important;\x20text-align:center!important\x20}\x20h2\x20{\x20font-size:24px!important;\x20text-align:center!important\x20}\x20h3\x20{\x20font-size:20px!important;\x20text-align:center!important\x20}\x20.es-header-body\x20h1\x20a,\x20.es-content-body\x20h1\x20a,\x20.es-footer-body\x20h1\x20a\x20{\x20font-size:30px!important;\x20text-align:center!important\x20}\x20.es-header-body\x20h2\x20a,\x20.es-content-body\x20h2\x20a,\x20.es-footer-body\x20h2\x20a\x20{\x20font-size:24px!important;\x20text-align:center!important\x20}\x20.es-header-body\x20h3\x20a,\x20.es-content-body\x20h3\x20a,\x20.es-footer-body\x20h3\x20a\x20{\x20font-size:20px!important;\x20text-align:center!important\x20}\x20.es-menu\x20td\x20a\x20{\x20font-size:14px!important\x20}\x20.es-header-body\x20p,\x20.es-header-body\x20ul\x20li,\x20.es-header-body\x20ol\x20li,\x20.es-header-body\x20a\x20{\x20font-size:14px!important\x20}\x20.es-content-body\x20p,\x20.es-content-body\x20ul\x20li,\x20.es-content-body\x20ol\x20li,\x20.es-content-body\x20a\x20{\x20font-size:14px!important\x20}\x20.es-footer-body\x20p,\x20.es-footer-body\x20ul\x20li,\x20.es-footer-body\x20ol\x20li,\x20.es-footer-body\x20a\x20{\x20font-size:14px!important\x20}\x20.es-infoblock\x20p,\x20.es-infoblock\x20ul\x20li,\x20.es-infoblock\x20ol\x20li,\x20.es-infoblock\x20a\x20{\x20font-size:12px!important\x20}\x20*[class=\x22gmail-fix\x22]\x20{\x20display:none!important\x20}\x20.es-m-txt-c,\x20.es-m-txt-c\x20h1,\x20.es-m-txt-c\x20h2,\x20.es-m-txt-c\x20h3\x20{\x20text-align:center!important\x20}\x20.es-m-txt-r,\x20.es-m-txt-r\x20h1,\x20.es-m-txt-r\x20h2,\x20.es-m-txt-r\x20h3\x20{\x20text-align:right!important\x20}\x20.es-m-txt-l,\x20.es-m-txt-l\x20h1,\x20.es-m-txt-l\x20h2,\x20.es-m-txt-l\x20h3\x20{\x20text-align:left!important\x20}\x20.es-m-txt-r\x20img,\x20.es-m-txt-c\x20img,\x20.es-m-txt-l\x20img\x20{\x20display:inline!important\x20}\x20.es-button-border\x20{\x20display:inline-block!important\x20}\x20a.es-button,\x20button.es-button\x20{\x20font-size:18px!important;\x20display:inline-block!important\x20}\x20.es-adaptive\x20table,\x20.es-left,\x20.es-right\x20{\x20width:100%!important\x20}\x20.es-content\x20table,\x20.es-header\x20table,\x20.es-footer\x20table,\x20.es-content,\x20.es-footer,\x20.es-header\x20{\x20width:100%!important;\x20max-width:600px!important\x20}\x20.es-adapt-td\x20{\x20display:block!important;\x20width:100%!important\x20}\x20.adapt-img\x20{\x20width:100%!important;\x20height:auto!important\x20}\x20.es-m-p0\x20{\x20padding:0!important\x20}\x20.es-m-p0r\x20{\x20padding-right:0!important\x20}\x20.es-m-p0l\x20{\x20padding-left:0!important\x20}\x20.es-m-p0t\x20{\x20padding-top:0!important\x20}\x20.es-m-p0b\x20{\x20padding-bottom:0!important\x20}\x20.es-m-p20b\x20{\x20padding-bottom:20px!important\x20}\x20.es-mobile-hidden,\x20.es-hidden\x20{\x20display:none!important\x20}\x20tr.es-desk-hidden,\x20td.es-desk-hidden,\x20table.es-desk-hidden\x20{\x20width:auto!important;\x20overflow:visible!important;\x20float:none!important;\x20max-height:inherit!important;\x20line-height:inherit!important\x20}\x20tr.es-desk-hidden\x20{\x20display:table-row!important\x20}\x20table.es-desk-hidden\x20{\x20display:table!important\x20}\x20td.es-desk-menu-hidden\x20{\x20display:table-cell!important\x20}\x20.es-menu\x20td\x20{\x20width:1%!important\x20}\x20table.es-table-not-adapt,\x20.esd-block-html\x20table\x20{\x20width:auto!important\x20}\x20table.es-social\x20{\x20display:inline-block!important\x20}\x20table.es-social\x20td\x20{\x20display:inline-block!important\x20}\x20.es-desk-hidden\x20{\x20display:table-row!important;\x20width:auto!important;\x20overflow:visible!important;\x20max-height:inherit!important\x20}\x20.es-m-p5\x20{\x20padding:5px!important\x20}\x20.es-m-p5t\x20{\x20padding-top:5px!important\x20}\x20.es-m-p5b\x20{\x20padding-bottom:5px!important\x20}\x20.es-m-p5r\x20{\x20padding-right:5px!important\x20}\x20.es-m-p5l\x20{\x20padding-left:5px!important\x20}\x20.es-m-p10\x20{\x20padding:10px!important\x20}\x20.es-m-p10t\x20{\x20padding-top:10px!important\x20}\x20.es-m-p10b\x20{\x20padding-bottom:10px!important\x20}\x20.es-m-p10r\x20{\x20padding-right:10px!important\x20}\x20.es-m-p10l\x20{\x20padding-left:10px!important\x20}\x20.es-m-p15\x20{\x20padding:15px!important\x20}\x20.es-m-p15t\x20{\x20padding-top:15px!important\x20}\x20.es-m-p15b\x20{\x20padding-bottom:15px!important\x20}\x20.es-m-p15r\x20{\x20padding-right:15px!important\x20}\x20.es-m-p15l\x20{\x20padding-left:15px!important\x20}\x20.es-m-p20\x20{\x20padding:20px!important\x20}\x20.es-m-p20t\x20{\x20padding-top:20px!important\x20}\x20.es-m-p20r\x20{\x20padding-right:20px!important\x20}\x20.es-m-p20l\x20{\x20padding-left:20px!important\x20}\x20.es-m-p25\x20{\x20padding:25px!important\x20}\x20.es-m-p25t\x20{\x20padding-top:25px!important\x20}\x20.es-m-p25b\x20{\x20padding-bottom:25px!important\x20}\x20.es-m-p25r\x20{\x20padding-right:25px!important\x20}\x20.es-m-p25l\x20{\x20padding-left:25px!important\x20}\x20.es-m-p30\x20{\x20padding:30px!important\x20}\x20.es-m-p30t\x20{\x20padding-top:30px!important\x20}\x20.es-m-p30b\x20{\x20padding-bottom:30px!important\x20}\x20.es-m-p30r\x20{\x20padding-right:30px!important\x20}\x20.es-m-p30l\x20{\x20padding-left:30px!important\x20}\x20.es-m-p35\x20{\x20padding:35px!important\x20}\x20.es-m-p35t\x20{\x20padding-top:35px!important\x20}\x20.es-m-p35b\x20{\x20padding-bottom:35px!important\x20}\x20.es-m-p35r\x20{\x20padding-right:35px!important\x20}\x20.es-m-p35l\x20{\x20padding-left:35px!important\x20}\x20.es-m-p40\x20{\x20padding:40px!important\x20}\x20.es-m-p40t\x20{\x20padding-top:40px!important\x20}\x20.es-m-p40b\x20{\x20padding-bottom:40px!important\x20}\x20.es-m-p40r\x20{\x20padding-right:40px!important\x20}\x20.es-m-p40l\x20{\x20padding-left:40px!important\x20}\x20.h-auto\x20{\x20height:auto!important\x20}\x20}\x0a</style>\x0a</head>\x0a<body\x20style=\x22width:100%;font-family:arial,\x20\x27helvetica\x20neue\x27,\x20helvetica,\x20sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0\x22>\x0a<div\x20class=\x22es-wrapper-color\x22\x20style=\x22background-color:#FFFFFF\x22><!--[if\x20gte\x20mso\x209]>\x0a<v:background\x20xmlns:v=\x22urn:schemas-microsoft-com:vml\x22\x20fill=\x22t\x22>\x0a<v:fill\x20type=\x22tile\x22\x20color=\x22#ffffff\x22></v:fill>\x0a</v:background>\x0a<![endif]-->\x0a<table\x20class=\x22es-wrapper\x22\x20width=\x22100%\x22\x20cellspacing=\x220\x22\x20cellpadding=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center\x20top;background-color:#FFFFFF\x22>\x0a<tr>\x0a<td\x20valign=\x22top\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20class=\x22es-header\x22\x20align=\x22center\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed\x20!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center\x20top\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20bgcolor=\x22#fad939\x22\x20class=\x22es-header-body\x22\x20align=\x22center\x22\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:510px\x22>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22padding:0;Margin:0;padding-left:20px;padding-right:20px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20valign=\x22top\x22\x20style=\x22padding:0;Margin:0;width:470px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20role=\x22presentation\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20height=\x2240\x22\x20style=\x22padding:0;Margin:0\x22></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table>\x0a<table\x20class=\x22es-content\x22\x20cellspacing=\x220\x22\x20cellpadding=\x220\x22\x20align=\x22center\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed\x20!important;width:100%\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20class=\x22es-content-body\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:510px\x22\x20cellspacing=\x220\x22\x20cellpadding=\x220\x22\x20align=\x22center\x22\x20bgcolor=\x22#FAD939\x22>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22padding:0;Margin:0;padding-left:20px;padding-right:20px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20valign=\x22top\x22\x20style=\x22padding:0;Margin:0;width:470px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20role=\x22presentation\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22><h1\x20style=\x22Margin:0;line-height:46px;mso-line-height-rule:exactly;font-family:Poppins,\x20sans-serif;font-size:38px;font-style:normal;font-weight:bold;color:#efefef\x22>Please\x20confirm<br>your\x20email\x20address</h1></td>\x0a</tr>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0;padding-top:40px;padding-bottom:40px\x22><h3\x20style=\x22Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:Poppins,\x20sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#efefef\x22>'+_0x56b0dc+_0x4ed252(0x146)+global[_0x4ed252(0x136)]+'?text=.vercode%20'+_0x56b0dc+_0x4ed252(0x150)+global['nomorbot']+_0x4ed252(0x13c)+_0x56b0dc+'\x22\x0astyle=\x22height:49px;\x20v-text-anchor:middle;\x20width:288px\x22\x20arcsize=\x2250%\x22\x20stroke=\x22f\x22\x20fillcolor=\x22#9fc5e8\x22>\x0a<w:anchorlock></w:anchorlock>\x0a<center\x20style=\x27color:#ffffff;\x20font-family:Poppins,\x20sans-serif;\x20font-size:16px;\x20font-weight:700;\x20line-height:16px;\x20mso-text-raise:1px\x27>Click\x20Here\x20for\x20Verification</center>\x0a</v:roundrect></a>\x0a<![endif]--><!--[if\x20!mso]><!--\x20--><span\x20class=\x22msohide\x20es-button-border\x22\x20style=\x22border-style:solid;border-color:#2CB543;background:#9fc5e8;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all\x22><a\x20href=\x22https://wa.me/'+global[_0x4ed252(0x136)]+_0x4ed252(0x13c)+_0x56b0dc+_0x4ed252(0x155)};try{await _0x2874d3[_0x4ed252(0x13b)](_0x5544da),_0x174780[_0x4ed252(0x138)]=_0x3de3ab,_0x174780[_0x4ed252(0x14b)]=_0x56b0dc,_0x174780[_0x4ed252(0x153)]=+new Date()+0x927c0,_0x174780[_0x4ed252(0x141)]=+new Date(),_0x174780['registered']=![],global['db'][_0x4ed252(0x139)]['users'][_0x47cfe6[_0x4ed252(0x14f)]]=_0x174780,_0x47cfe6[_0x4ed252(0x142)](_0x4ed252(0x134));}catch(_0x47c7fb){console[_0x4ed252(0x147)](_0x47c7fb),_0x47cfe6[_0x4ed252(0x142)]('*Failed\x20to\x20send\x20the\x20verification\x20code\x20to\x20your\x20email,*\x20please\x20register\x20manually\x20by\x20typing\x20*.verify\x20skyline.17*');}};handler[_0x29b68c(0x14e)]=[_0x29b68c(0x13d)],handler['tags']=[_0x29b68c(0x137)],handler['command']=/^(regmail)$/i;function _0x55f6(){const _0x372093=['\x22\x20class=\x22es-button\x22\x20target=\x22_blank\x22\x20style=\x22mso-style-priority:100\x20!important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;padding:15px\x2035px\x2015px\x2035px;display:inline-block;background:#9fc5e8;border-radius:30px;font-family:Poppins,\x20sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px\x20solid\x20#660099\x22>Click\x20Here\x20for\x20Verification</a></span><!--<![endif]--></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:40px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22padding:0;Margin:0;width:470px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20role=\x22presentation\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22><p\x20style=\x22Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Poppins,\x20sans-serif;line-height:21px;color:#cccccc;font-size:14px\x22>Thanks,</p><p\x20style=\x22Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Poppins,\x20sans-serif;line-height:21px;color:#cccccc;font-size:14px\x22>Skyline\x20Internity</p></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20class=\x22es-header\x22\x20align=\x22center\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed\x20!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center\x20top\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20bgcolor=\x22#fad939\x22\x20class=\x22es-header-body\x22\x20align=\x22center\x22\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:510px\x22>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22padding:0;Margin:0;padding-left:20px;padding-right:20px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20valign=\x22top\x22\x20style=\x22padding:0;Margin:0;width:470px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0;display:none\x22></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20class=\x22es-content\x22\x20align=\x22center\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed\x20!important;width:100%\x22>\x0a<tr>\x0a<td\x20class=\x22es-info-area\x22\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20class=\x22es-content-body\x22\x20align=\x22center\x22\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;border-radius:50px;width:510px\x22>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20valign=\x22top\x22\x20style=\x22padding:0;Margin:0;width:470px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0;display:none\x22></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20class=\x22es-header\x22\x20align=\x22center\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed\x20!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center\x20top\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20bgcolor=\x22#fad939\x22\x20class=\x22es-header-body\x22\x20align=\x22center\x22\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:510px\x22>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22padding:0;Margin:0;padding-left:20px;padding-right:20px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20valign=\x22top\x22\x20style=\x22padding:0;Margin:0;width:470px\x22>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20width=\x22100%\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0;display:none\x22></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table>\x0a<table\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20class=\x22es-content\x22\x20align=\x22center\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed\x20!important;width:100%\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20class=\x22es-content-body\x22\x20align=\x22center\x22\x20cellpadding=\x220\x22\x20cellspacing=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:510px\x22>\x0a<tr>\x0a<td\x20align=\x22left\x22\x20style=\x22padding:0;Margin:0\x22>\x0a<table\x20width=\x22100%\x22\x20cellspacing=\x220\x22\x20cellpadding=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20class=\x22es-m-p0r\x22\x20valign=\x22top\x22\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0;width:510px\x22>\x0a<table\x20width=\x22100%\x22\x20cellspacing=\x220\x22\x20cellpadding=\x220\x22\x20style=\x22mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\x22>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0;display:none\x22></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table></td>\x0a</tr>\x0a</table>\x0a</div>\x0a</body>\x0a</html>\x0a\x20\x20\x20\x20','users','2223908glyRBa','vynaachan@gmail.com','1207206qrdfvv','24MXjjPl','5MUhaLy','Successfull\x20send\x20a\x20verification\x20code\x20to\x20your\x20email,\x20please\x20type\x20*.vercode\x20⧼code⧽*','trim','nomorbot','main','email','data','test','sendMail','?text=.vercode%20','regmail\x20*⧼email⧽*','gmail','152NNyoEK','20XsNPgM','regTime','reply','createTransport','2086839Hjqyzv','registered','</h3><p\x20style=\x22Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Poppins,\x20sans-serif;line-height:27px;color:#efefef;font-size:18px\x22><br></p><p\x20style=\x22Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Poppins,\x20sans-serif;line-height:27px;color:#efefef;font-size:18px\x22>To\x20finish\x20signing\x20up,\x20please\x20confirm\x20your\x20email\x20address.\x20This\x20ensures\x20we\x20have\x20the\x20right\x20email\x20in\x20case\x20we\x20need\x20to\x20contact\x20you.</p></td>\x0a</tr>\x0a<tr>\x0a<td\x20align=\x22center\x22\x20style=\x22padding:0;Margin:0\x22><!--[if\x20mso]><a\x20href=\x22https://wa.me/','log','99924SvkXFc','144382nfJvsJ','*The\x20email\x20format\x20you\x20entered\x20is\x20incorrect.*','verificationCode','100289dzrhSw','random','help','sender','\x22\x20target=\x22_blank\x22\x20hidden>\x0a<v:roundrect\x20xmlns:v=\x22urn:schemas-microsoft-com:vml\x22\x20xmlns:w=\x22urn:schemas-microsoft-com:office:word\x22\x20esdevVmlButton\x20href=\x22https://wa.me/','433769lVERSB','209YdFtJP','verificationExp','*you\x20are\x20already\x20registered\x20in\x20the\x20database,\x20please\x20type\x20.unreg\x20⧼sn⧽\x20to\x20delete\x20your\x20data.*'];_0x55f6=function(){return _0x372093;};return _0x55f6();}export default handler;function isValidEmail(_0x4ec4de){const _0x33065b=_0x29b68c,_0x2d573b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return _0x2d573b[_0x33065b(0x13a)](_0x4ec4de);}function generateVerificationCode(){const _0x44d926=_0x29b68c;return Math['floor'](Math[_0x44d926(0x14d)]()*0x15f90)+0x2710;}