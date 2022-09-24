# yenmoc-github-gitcalendar

# Cách sử dụng

1. Cài đặt thông qua npm
  ```bash
  npm install yenmoc-github-gitcalendar --save
  ```

2. Thêm đoạn code sau vào tệp `_config.butterfly.yml`

  ```yaml
  gitcalendar:
    enable: true
    priority: 5
    enable_page: / 
    # butterfly
    layout: # mount container type
      type: id
      name: recent-posts
      index: 0
    # volantis
    # layout:
    #   type: class
    #   name: l_main
    #   index: 0
    # matery
    # layout:
    #   type: id
    #   name: indexCard
    #   index: 0
    # mengd
    # layout:
    #   type: class
    #   name: content
    #   index: 0
    user: yenmoc
    apiurl: 'https://yenmoc-github-calendar.vercel.app'
    jsonurl: #For developers
    minheight:
      pc: 280px
      mibile: 0px
    color: "['#e4dfd7', '#f9f4dc', '#f7e8aa', '#f7e8aa', '#f8df72', '#fcd217', '#fcc515', '#f28e16', '#fb8b05', '#d85916', '#f43e06']" #orange tones
    # color: "['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f']" #light purple tone
    # color: "['#ebedf0', '#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620']" #emerald green hue
    # color: "['#ebedf0', '#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c']" #azure shades
    container: .recent-post-item(style='width:100%;height:auto;padding:10px;') #Parent element container, need to use pug syntax
    gitcalendar_css: https://cdn.jsdelivr.net/gh/yenmoc/yenmoc-github-calendar@1.0.0/lib/gitcalendar.css
    gitcalendar_js: https://cdn.jsdelivr.net/gh/yenmoc/yenmoc-github-calendar@1.0.0/lib/gitcalendar.js
  ```
