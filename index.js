'use strict'
// Global declaration plugin codename
const pluginname = 'gitcalendar'
// global declaration dependencies
const pug = require('pug')
const path = require('path')
const urlFor = require('hexo-util').url_for.bind(hexo)
const util = require('hexo-util')

hexo.extend.filter.register('after_generate', function () {
  // First get the overall configuration item name
  const config = hexo.config.gitcalendar ? hexo.config.gitcalendar : hexo.theme.config.gitcalendar
  // If the configuration is on
  if (!(config && config.enable)) return
    const data = {
      theme: hexo.config.theme,
      enable_page: config.enable_page ? config.enable_page : "/",
      user: config.user,
      layout_type: config.layout.type,
      layout_name: config.layout.name,
      layout_index: config.layout.index ? config.layout.index : 0,
      pc_minheight: config.minheight.pc ? config.minheight.pc : "280px",
      mobile_minheight: config.minheight.mobile ? config.minheight.mobile : "0px",
      color: config.color ? config.color : "['#e4dfd7', '#f9f4dc', '#f7e8aa', '#f7e8aa', '#f8df72', '#fcd217', '#fcc515', '#f28e16', '#fb8b05', '#d85916', '#f43e06']",
      apiurl: config.apiurl ? config.apiurl + "/api" : 'https://yenmoc-github-calendar.vercel.app/api',
      jsonurl: config.jsonurl ? config.jsonurl : config.apiurl + "/api?" + config.user,
      container: config.container,
      gitcalendar_css: config.gitcalendar_css ? urlFor(config.gitcalendar_css) : "https://cdn.jsdelivr.net/gh/yenmoc/yenmoc-github-calendar@1.0.0/lib/gitcalendar.css",
      gitcalendar_js: config.gitcalendar_js ? urlFor(config.gitcalendar_js) : "https://cdn.jsdelivr.net/gh/yenmoc/yenmoc-github-calendar@1.0.0/lib/gitcalendar.js"
    }

  const temple_html_text = pug.renderFile(path.join(__dirname, './lib/html.pug'),data);

  const css_text = `<link rel="stylesheet" href="${data.gitcalendar_css}" media="print" onload="this.media='all'">`
  const js_text = `<script data-pjax src="${data.gitcalendar_js}"></script>`

  var get_layout
  if (data.layout_type === 'class') {
    get_layout = `document.getElementsByClassName('${data.layout_name}')[${data.layout_index}]`
  }
  else if (data.layout_type === 'id') {
    get_layout = `document.getElementById('${data.layout_name}')`
  }
  else {
    get_layout = `document.getElementById('${data.layout_name}')`
  }

  var user_info_js = `<script data-pjax>
  function ${pluginname}_injector_config(){
      var parent_div_git = ${get_layout};
      var item_html = '${temple_html_text}';
      parent_div_git.insertAdjacentHTML("afterbegin",item_html)
      console.log('已挂载${pluginname}')
      }

    if( ${get_layout} && (location.pathname ==='${data.enable_page}'|| '${data.enable_page}' ==='all')){
        ${pluginname}_injector_config()
        GitCalendarInit("${data.jsonurl}",${data.color},'${data.user}')
    }
  </script>`
  hexo.extend.injector.register('head_end', css_text, "default");
  hexo.extend.injector.register('body_end', js_text, "default");
  hexo.extend.injector.register('body_end', user_info_js, "default");

},
hexo.extend.helper.register('priority', function(){
  const pre_priority = hexo.config.gitcalendar.priority ?  hexo.config.gitcalendar.priority : hexo.theme.config.gitcalendar.priority
  const priority = pre_priority ? pre_priority : 10
  return priority
})
)
