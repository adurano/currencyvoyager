/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Version: 0.7.0 (17-11-2013)
*
* Copyright (c) 2013 Vincent Brouté (http://www.neveldo.fr/mapael)
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
*
*/(function(e){"use strict";e.fn.mapael=function(t){t=e.extend(!0,{},e.fn.mapael.defaultOptions,t);return this.each(function(){var n=e(this),r=e("<div>").addClass(t.map.tooltip.cssClass).css("display","none"),i=e("."+t.map.cssClass,this).empty().append(r),s=e.fn.mapael.maps[t.map.name],o=new Raphael(i[0],s.width,s.height),u={},a=0,f={},l={},c={},h={},p=0;t.map.tooltip.css&&r.css(t.map.tooltip.css);o.setViewBox(0,0,s.width,s.height,!1);for(p in s.elems){u=e.fn.mapael.getElemOptions(t.map.defaultArea,t.areas[p]?t.areas[p]:{},t.legend.area);f[p]={mapElem:o.path(s.elems[p]).attr(u.attrs)}}for(p in s.elems){u=e.fn.mapael.getElemOptions(t.map.defaultArea,t.areas[p]?t.areas[p]:{},t.legend.area);e.fn.mapael.initElem(o,f[p],u,r,p)}for(p in t.plots)l[p]=e.fn.mapael.drawPlot(p,t,s,o,r);t.map.zoom.enabled&&e.fn.mapael.initZoom(i,o,s.width,s.height,t.map.zoom);t.legend.area.slices&&t.legend.area.display&&(c=e.fn.mapael.createLegend(n,t,"area",f,1));n.on("update",function(i,u,a,p,d){var v=0,m=0,g=0,y={},b=function(t){typeof t.hidden!="undefined"&&t.hidden==1&&e(t.node).trigger("click")};c.forEach&&c.forEach(b);h.forEach&&h.forEach(b);if(typeof d!="undefined"){d.resetAreas&&(t.areas={});d.resetPlots&&(t.plots={});d.animDuration&&(g=d.animDuration)}e.extend(!0,t,u);if(typeof p=="object")for(;v<p.length;v++)if(typeof l[p[v]]!="undefined"){if(g>0)(function(e){e.mapElem.animate({opacity:0},g,"linear",function(){e.mapElem.remove()});e.textElem&&e.textElem.animate({opacity:0},g,"linear",function(){e.textElem.remove()})})(l[p[v]]);else{l[p[v]].mapElem.remove();l[p[v]].textElem&&l[p[v]].textElem.remove()}delete l[p[v]]}if(typeof a=="object")for(m in a)if(typeof l[m]=="undefined"){t.plots[m]=a[m];l[m]=e.fn.mapael.drawPlot(m,t,s,o,r);if(g>0){l[m].mapElem.attr({opacity:0});l[m].textElem.attr({opacity:0});l[m].mapElem.animate({opacity:typeof l[m].mapElem.originalAttrs.opacity!="undefined"?l[m].mapElem.originalAttrs.opacity:1},g);l[m].textElem.animate({opacity:typeof l[m].textElem.originalAttrs.opacity!="undefined"?l[m].textElem.originalAttrs.opacity:1},g)}}for(m in f){y=e.fn.mapael.getElemOptions(t.map.defaultArea,t.areas[m]?t.areas[m]:{},t.legend.area);e.fn.mapael.updateElem(y,f[m],r,g)}for(m in l){y=e.fn.mapael.getElemOptions(t.map.defaultPlot,t.plots[m]?t.plots[m]:{},t.legend.plot);if("square"==y.type){y.attrs.width=y.size;y.attrs.height=y.size;y.attrs.x=l[m].mapElem.attrs.x-(y.size-l[m].mapElem.attrs.width)/2;y.attrs.y=l[m].mapElem.attrs.y-(y.size-l[m].mapElem.attrs.height)/2}else y.attrs.r=y.size/2;e.fn.mapael.updateElem(y,l[m],r,g)}d.afterUpdate&&d.afterUpdate(n,o,f,l,t)});if(t.map.width){o.setSize(t.map.width,s.height*(t.map.width/s.width));t.legend.plot.slices&&t.legend.plot.display&&(h=e.fn.mapael.createLegend(n,t,"plot",l,t.map.width/s.width))}else{e(window).on("resize",function(){clearTimeout(a);a=setTimeout(function(){i.trigger("resizeEnd")},150)});var d=function(){t.legend.plot.slices&&t.legend.plot.display&&(h=e.fn.mapael.createLegend(n,t,"plot",l,i.width()/s.width));i.unbind("resizeEnd",d)};i.on("resizeEnd",function(){var e=i.width();o.width!=e&&o.setSize(e,s.height*(e/s.width))}).on("resizeEnd",d).trigger("resizeEnd")}t.map.afterInit&&t.map.afterInit(n,o,f,l,t);e(o.desc).append(" and Mapael (http://neveldo.fr/mapael)")})};e.fn.mapael.initElem=function(t,n,r,i,s){var o={},u={};e.fn.mapael.setHoverOptions(n.mapElem,r.attrs,r.attrsHover);if(r.text&&typeof r.text.content!="undefined"){o=n.mapElem.getBBox();u=e.fn.mapael.getTextPosition(o,r.text.position,r.text.margin);r.text.attrs["text-anchor"]=u.textAnchor;n.textElem=t.text(u.x,u.y,r.text.content).attr(r.text.attrs);e.fn.mapael.setHoverOptions(n.textElem,r.text.attrs,r.text.attrsHover);e.fn.mapael.setHover(t,n.mapElem,n.textElem);r.eventHandlers&&e.fn.mapael.setEventHandlers(s,r,n.mapElem,n.textElem);e(n.textElem.node).attr("data-id",s)}else{e.fn.mapael.setHover(t,n.mapElem);r.eventHandlers&&e.fn.mapael.setEventHandlers(s,r,n.mapElem)}if(r.tooltip&&r.tooltip.content){n.mapElem.tooltipContent=r.tooltip.content;e.fn.mapael.setTooltip(n.mapElem,i);if(r.text&&typeof r.text.content!="undefined"){n.textElem.tooltipContent=r.tooltip.content;e.fn.mapael.setTooltip(n.textElem,i)}}if(r.href){n.mapElem.href=r.href;e.fn.mapael.setHref(n.mapElem);if(r.text&&typeof r.text.content!="undefined"){n.textElem.href=r.href;e.fn.mapael.setHref(n.textElem)}}typeof r.value!="undefined"&&(n.value=r.value);e(n.mapElem.node).attr("data-id",s)};e.fn.mapael.updateElem=function(t,n,r,i){var s,o,u;typeof t.value!="undefined"&&(n.value=t.value);if(n.textElem){typeof t.text!="undefined"&&typeof t.text.content!="undefined"&&t.text.content!=n.textElem.attrs.text&&n.textElem.attr({text:t.text.content});s=n.mapElem.getBBox();if(t.size){u=(t.size-s.height)/2;s.x-=u;s.x2+=u;s.y-=u;s.y2+=u}o=e.fn.mapael.getTextPosition(s,t.text.position,t.text.margin);if(o.x!=n.textElem.attrs.x||o.y!=n.textElem.attrs.y)if(i>0){n.textElem.attr({"text-anchor":o.textAnchor});n.textElem.animate({x:o.x,y:o.y},i)}else n.textElem.attr({x:o.x,y:o.y,"text-anchor":o.textAnchor});e.fn.mapael.setHoverOptions(n.textElem,t.text.attrs,t.text.attrsHover);i>0?n.textElem.animate(t.text.attrs,i):n.textElem.attr(t.text.attrs)}e.fn.mapael.setHoverOptions(n.mapElem,t.attrs,t.attrsHover);i>0?n.mapElem.animate(t.attrs,i):n.mapElem.attr(t.attrs);if(t.tooltip&&typeof t.tooltip.content!="undefined"){if(typeof n.mapElem.tooltipContent=="undefined"){e.fn.mapael.setTooltip(n.mapElem,r);n.textElem&&e.fn.mapael.setTooltip(n.textElem,r)}n.mapElem.tooltipContent=t.tooltip.content;n.textElem&&(n.textElem.tooltipContent=t.tooltip.content)}if(typeof t.href!="undefined"){if(typeof n.mapElem.href=="undefined"){e.fn.mapael.setHref(n.mapElem);n.textElem&&e.fn.mapael.setHref(n.textElem)}n.mapElem.href=t.href;n.textElem&&(n.textElem.href=t.href)}};e.fn.mapael.drawPlot=function(t,n,r,i,s){var o={},u={},a=e.fn.mapael.getElemOptions(n.map.defaultPlot,n.plots[t]?n.plots[t]:{},n.legend.plot);a.x&&a.y?u={x:a.x,y:a.y}:u=r.getCoords(a.latitude,a.longitude);"square"==a.type?o={mapElem:i.rect(u.x-a.size/2,u.y-a.size/2,a.size,a.size).attr(a.attrs)}:o={mapElem:i.circle(u.x,u.y,a.size/2).attr(a.attrs)};e.fn.mapael.initElem(i,o,a,s,t);return o};e.fn.mapael.setHref=function(t){t.attr({cursor:"pointer"});e(t.node).bind("click",function(){!e.fn.mapael.panning&&t.href&&(window.location=t.href)})};e.fn.mapael.setTooltip=function(t,n){var r=0,i=n.parent(),s=i.offset().left+i.width();e(t.node).on("mouseover",function(i){r=setTimeout(function(){t.tooltipContent&&n.html(t.tooltipContent).css("display","block");n.css({left:Math.min(s-n.outerWidth()-5,i.pageX+12),top:i.pageY+23-e(window).scrollTop()})},120)}).on("mouseout",function(e){clearTimeout(r);n.css("display","none")}).on("mousemove",function(t){n.css({left:Math.min(s-n.outerWidth()-5,t.pageX+12),top:t.pageY+23-e(window).scrollTop()})})};e.fn.mapael.setEventHandlers=function(t,n,r,i){for(var s in n.eventHandlers)(function(s){e(r.node).on(s,function(o){!e.fn.mapael.panning&&n.eventHandlers[s](o,t,r,i)});i&&e(i.node).on(s,function(o){!e.fn.mapael.panning&&n.eventHandlers[s](o,t,r,i)})})(s)};e.fn.mapael.panning=!1;e.fn.mapael.initZoom=function(t,n,r,i,s){var o=t.parent(),u=e("<div>").addClass(s.zoomInCssClass).html("+"),a=e("<div>").addClass(s.zoomOutCssClass).html("&#x2212;"),f=!1,l=0,c=0;o.data("zoomLevel",0);t.append(u).append(a);o.on("zoom",function(e,t,u,a){var f=Math.min(Math.max(t,0),s.maxLevel);o.data("zoomLevel",f);typeof u=="undefined"&&(u=n._viewBox[0]+n._viewBox[2]/2);typeof a=="undefined"&&(a=n._viewBox[1]+n._viewBox[3]/2);f==0?n.setViewBox(0,0,r,i):n.setViewBox(Math.min(Math.max(0,u-r/(1+f*s.step)/2),r-r/(1+f*s.step)),Math.min(Math.max(0,a-i/(1+f*s.step)/2),i-i/(1+f*s.step)),r/(1+f*s.step),i/(1+f*s.step))});u.on("click",function(){o.trigger("zoom",o.data("zoomLevel")+1)});a.on("click",function(){o.trigger("zoom",o.data("zoomLevel")-1)});e("body").on("mouseup",function(t){f=!1;setTimeout(function(){e.fn.mapael.panning=!1},50)});t.on("mousedown",function(e){f=!0;l=e.pageX;c=e.pageY;return!1}).on("mousemove",function(t){var u=o.data("zoomLevel");if(f&&u!=0){var a=(l-t.pageX)/(1+u*s.step)*(r/n.width),h=(c-t.pageY)/(1+u*s.step)*(i/n.height);if(Math.abs(a)>5||Math.abs(h)>5){n.setViewBox(Math.min(Math.max(0,n._viewBox[0]+a),r-n._viewBox[2]),Math.min(Math.max(0,n._viewBox[1]+h),i-n._viewBox[3]),n._viewBox[2],n._viewBox[3]);l=t.pageX;c=t.pageY;e.fn.mapael.panning=!0}}return!1})};e.fn.mapael.createLegend=function(t,n,r,i,s){var o=n.legend[r],u=r=="plot"?e("."+n.legend.plot.cssClass,t).empty():e("."+n.legend.area.cssClass,t).empty(),a=new Raphael(u.get(0)),f=5,l=5,c={},h={},p={},d={};if(o.title){c=a.text(o.marginLeftTitle,o.marginBottom,o.title).attr(o.titleAttrs);f=o.marginLeftTitle+c.getBBox().width;l+=o.marginBottom+c.getBBox().height}for(var v=0,m=o.slices.length;v<m;++v)if(typeof o.slices[v].display=="undefined"||o.slices[v].display==1){h=r=="plot"?n.map.defaultPlot:n.map.defaultArea;o.slices[v].attrs=e.extend({},h.attrs,o.slices[v].attrs);o.slices[v].attrsHover=e.extend({},h.attrsHover,o.slices[v].attrsHover);if(r=="area"||o.slices[v].type=="square"){!o.slices[v].size&&(o.slices[v].size=20);p=a.rect(o.marginLeft,l,s*o.slices[v].size,s*o.slices[v].size).attr(o.slices[v].attrs)}else p=a.circle(o.marginLeft+s*(o.slices[v].size/2),l+s*(o.slices[v].size/2),s*(o.slices[v].size/2)).attr(o.slices[v].attrs);d=a.text(o.marginLeft+s*o.slices[v].size+o.marginLeftLabel,l+s*(o.slices[v].size/2),o.slices[v].label).attr(o.labelAttrs);l+=o.marginBottom+s*o.slices[v].size;f=Math.max(f,o.marginLeft+s*o.slices[v].size+o.marginLeftLabel+d.getBBox().width);if(o.hideElemsOnClick.enabled){d.attr({cursor:"pointer"});e.fn.mapael.setHoverOptions(p,o.slices[v].attrs,o.slices[v].attrs);e.fn.mapael.setHoverOptions(d,o.labelAttrs,o.labelAttrsHover);e.fn.mapael.setHover(a,p,d);d.hidden=!1;(function(t,n,r){e(r.node).on("click",function(){r.hidden?r.animate({opacity:1},300):r.animate({opacity:.5},300);for(var e in i)(typeof o.slices[t].min=="undefined"||i[e].value>=o.slices[t].min)&&(typeof o.slices[t].max=="undefined"||i[e].value<o.slices[t].max)&&function(e){if(!r.hidden){i[e].mapElem.animate({opacity:o.hideElemsOnClick.opacity},300,"linear",function(){o.hideElemsOnClick.opacity==0&&i[e].mapElem.hide()});i[e].textElem&&i[e].textElem.animate({opacity:o.hideElemsOnClick.opacity},300,"linear",function(){o.hideElemsOnClick.opacity==0&&i[e].textElem.hide()})}else{if(o.hideElemsOnClick.opacity==0){i[e].mapElem.show();i[e].textElem&&i[e].textElem.show()}i[e].mapElem.animate({opacity:typeof i[e].mapElem.originalAttrs.opacity!="undefined"?i[e].mapElem.originalAttrs.opacity:1},300);i[e].textElem&&i[e].textElem.animate({opacity:typeof i[e].textElem.originalAttrs.opacity!="undefined"?i[e].textElem.originalAttrs.opacity:1},300)}}(e);r.hidden=!r.hidden})})(v,p,d)}}Raphael.type!="SVG"&&o.VMLWidth&&(f=o.VMLWidth);a.setSize(f,l);return a};e.fn.mapael.setHoverOptions=function(t,n,r){Raphael.type!="SVG"&&delete r.transform;t.attrsHover=r;t.attrsHover.transform?t.originalAttrs=e.extend({transform:"s1"},n):t.originalAttrs=n};e.fn.mapael.setHover=function(t,n,r){var i={},s={},o=0,u=function(){o=setTimeout(function(){e.fn.mapael.elemHover(t,n,r)},120)},a=function(){clearTimeout(o);e.fn.mapael.elemOut(t,n,r)};i=e(n.node);i.on("mouseover",u);i.on("mouseout",a);if(r){s=e(r.node);s.on("mouseover",u);e(r.node).on("mouseout",a)}};e.fn.mapael.elemHover=function(e,t,n){t.animate(t.attrsHover,t.attrsHover.animDuration);n&&n.animate(n.attrsHover,n.attrsHover.animDuration);e.safari()};e.fn.mapael.elemOut=function(e,t,n){t.animate(t.originalAttrs,t.attrsHover.animDuration);n&&n.animate(n.originalAttrs,n.attrsHover.animDuration);e.safari()};e.fn.mapael.getElemOptions=function(t,n,r){var i=e.extend(!0,{},t,n);typeof i.value!="undefined"&&e.extend(!0,i,e.fn.mapael.getLegendSlice(i.value,r));return i};e.fn.mapael.getTextPosition=function(e,t,n){var r=0,i=0,s="";switch(t){case"bottom":r=(e.x+e.x2)/2;i=e.y2+n;s="middle";break;case"top":r=(e.x+e.x2)/2;i=e.y-n;s="middle";break;case"left":r=e.x-n;i=(e.y+e.y2)/2;s="end";break;case"right":r=e.x2+n;i=(e.y+e.y2)/2;s="start";break;default:r=(e.x+e.x2)/2;i=(e.y+e.y2)/2;s="middle"}return{x:r,y:i,textAnchor:s}};e.fn.mapael.getLegendSlice=function(e,t){for(var n=0,r=t.slices.length;n<r;++n)if((typeof t.slices[n].min=="undefined"||e>=t.slices[n].min)&&(typeof t.slices[n].max=="undefined"||e<t.slices[n].max))return t.slices[n];return{}};e.fn.mapael.defaultOptions={map:{cssClass:"map",tooltip:{cssClass:"mapTooltip"},defaultArea:{attrs:{fill:"#777777",stroke:"#777777","stroke-width":1,"stroke-linejoin":"round"},attrsHover:{fill:"#FFFFFF",stroke:"#FFFFFF",animDuration:200},text:{position:"inner",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:100}}},defaultPlot:{type:"circle",size:15,attrs:{fill:"#0088db",stroke:"#000000","stroke-width":0,"stroke-linejoin":"round"},attrsHover:{"stroke-width":0,animDuration:300},text:{position:"right",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:300}}},zoom:{enabled:!1,maxLevel:5,step:.25,zoomInCssClass:"zoomIn",zoomOutCssClass:"zoomOut"}},legend:{area:{cssClass:"areaLegend",display:!1,marginLeft:15,marginLeftTitle:5,marginLeftLabel:10,marginBottom:15,titleAttrs:{"font-size":18,fill:"#343434","text-anchor":"start"},labelAttrs:{"font-size":15,fill:"#343434","text-anchor":"start"},labelAttrsHover:{fill:"#787878",animDuration:300},hideElemsOnClick:{enabled:!0,opacity:.2},slices:[]},plot:{cssClass:"plotLegend",display:!1,marginLeft:15,marginLeftTitle:5,marginLeftLabel:10,marginBottom:15,titleAttrs:{"font-size":18,fill:"#343434","text-anchor":"start"},labelAttrs:{"font-size":15,fill:"#343434","text-anchor":"start"},labelAttrsHover:{fill:"#787878",animDuration:300},hideElemsOnClick:{enabled:!0,opacity:.2},slices:[]}},areas:{},plots:{}}})(jQuery);