import { LitElement, html, css } from 'https://esm.ext.archive.org/lit@3.2.1'

/* eslint-disable-next-line import/prefer-default-export */
customElements.define('item-stat', class ItemStat extends LitElement {
  static get properties() {
    return {
      glyph: { type: String },
      stat: { type: Number },
    }
  }

  constructor() {
    super()
    this.stat = -666
  }

  static get styles() {
    return css`
:host {
  /* css variables */
  --redMT:       #f1644b;
  --orangeMT:    #faab3c;
  --blueMT:      #00adef;
  --purpleMT:    #aa99c9;
  --yellowMT:    #ffcd27;
  --greenMT:     #9ecc4f;

  width: initial;
  display: inline-block;
  padding: 5px 0;
  border-right: 1px solid gray;
  color:#979797;
  font-size: 80%;
}

[class^="iconochive-"],[class*=" iconochive-"]{font-family:'Iconochive-Regular';speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.iconochive-Uplevel:before{content:"\\21b5"}.iconochive-exit:before{content:"\\1f6a3"}.iconochive-beta:before{content:"\\3b2"}.iconochive-logo:before{content:"\\1f3db"}.iconochive-audio:before{content:"\\1f568"}.iconochive-movies:before{content:"\\1f39e"}.iconochive-software:before{content:"\\1f4be"}.iconochive-texts:before{content:"\\1f56e"}.iconochive-etree:before{content:"\\1f3a4"}.iconochive-image:before{content:"\\1f5bc"}.iconochive-web:before{content:"\\1f5d4"}.iconochive-collection:before{content:"\\2211"}.iconochive-folder:before{content:"\\1f4c2"}.iconochive-data:before{content:"\\1f5c3"}.iconochive-tv:before{content:"\\1f4fa"}.iconochive-article:before{content:"\\1f5cf"}.iconochive-question:before{content:"\\2370"}.iconochive-question-dark:before{content:"\\3f"}.iconochive-info:before{content:"\\69"}.iconochive-info-small:before{content:"\\24d8"}.iconochive-comment:before{content:"\\1f5e9"}.iconochive-comments:before{content:"\\1f5ea"}.iconochive-person:before{content:"\\1f464"}.iconochive-people:before{content:"\\1f465"}.iconochive-eye:before{content:"\\1f441"}.iconochive-rss:before{content:"\\221e"}.iconochive-time:before{content:"\\1f551"}.iconochive-quote:before{content:"\\275d"}.iconochive-disc:before{content:"\\1f4bf"}.iconochive-tv-commercial:before{content:"\\1f4b0"}.iconochive-search:before{content:"\\1f50d"}.iconochive-search-star:before{content:"\\273d"}.iconochive-tiles:before{content:"\\229e"}.iconochive-list:before{content:"\\21f6"}.iconochive-list-bulleted:before{content:"\\2317"}.iconochive-latest:before{content:"\\2208"}.iconochive-left:before{content:"\\2c2"}.iconochive-right:before{content:"\\2c3"}.iconochive-left-solid:before{content:"\\25c2"}.iconochive-right-solid:before{content:"\\25b8"}.iconochive-up-solid:before{content:"\\25b4"}.iconochive-down-solid:before{content:"\\25be"}.iconochive-dot:before{content:"\\23e4"}.iconochive-dots:before{content:"\\25a6"}.iconochive-columns:before{content:"\\25af"}.iconochive-sort:before{content:"\\21d5"}.iconochive-atoz:before{content:"\\1f524"}.iconochive-ztoa:before{content:"\\1f525"}.iconochive-upload:before{content:"\\1f4e4"}.iconochive-download:before{content:"\\1f4e5"}.iconochive-favorite:before{content:"\\2605"}.iconochive-heart:before{content:"\\2665"}.iconochive-play:before{content:"\\25b6"}.iconochive-play-framed:before{content:"\\1f3ac"}.iconochive-fullscreen:before{content:"\\26f6"}.iconochive-mute:before{content:"\\1f507"}.iconochive-unmute:before{content:"\\1f50a"}.iconochive-share:before{content:"\\1f381"}.iconochive-edit:before{content:"\\270e"}.iconochive-reedit:before{content:"\\2710"}.iconochive-gear:before{content:"\\2699"}.iconochive-remove-circle:before{content:"\\274e"}.iconochive-plus-circle:before{content:"\\1f5d6"}.iconochive-minus-circle:before{content:"\\1f5d5"}.iconochive-x:before{content:"\\1f5d9"}.iconochive-fork:before{content:"\\22d4"}.iconochive-trash:before{content:"\\1f5d1"}.iconochive-warning:before{content:"\\26a0"}.iconochive-flash:before{content:"\\1f5f2"}.iconochive-world:before{content:"\\1f5fa"}.iconochive-lock:before{content:"\\1f512"}.iconochive-unlock:before{content:"\\1f513"}.iconochive-twitter:before{content:"\\1f426"}.iconochive-facebook:before{content:"\\66"}.iconochive-googleplus:before{content:"\\67"}.iconochive-reddit:before{content:"\\1f47d"}.iconochive-tumblr:before{content:"\\54"}.iconochive-pinterest:before{content:"\\1d4df"}.iconochive-popcorn:before{content:"\\1f4a5"}.iconochive-email:before{content:"\\1f4e7"}.iconochive-embed:before{content:"\\1f517"}.iconochive-gamepad:before{content:"\\1f579"}.iconochive-Zoom_In:before{content:"\\2b"}.iconochive-Zoom_Out:before{content:"\\2d"}.iconochive-RSS:before{content:"\\1f4e8"}.iconochive-Light_Bulb:before{content:"\\1f4a1"}.iconochive-Add:before{content:"\\2295"}.iconochive-Tab_Activity:before{content:"\\2318"}.iconochive-Forward:before{content:"\\23e9"}.iconochive-Backward:before{content:"\\23ea"}.iconochive-No_Audio:before{content:"\\1f508"}.iconochive-Pause:before{content:"\\23f8"}.iconochive-No_Favorite:before{content:"\\2606"}.iconochive-Unike:before{content:"\\2661"}.iconochive-Song:before{content:"\\266b"}.iconochive-No_Flag:before{content:"\\2690"}.iconochive-Flag:before{content:"\\2691"}.iconochive-Done:before{content:"\\2713"}.iconochive-Check:before{content:"\\2714"}.iconochive-Refresh:before{content:"\\27f3"}.iconochive-Headphones:before{content:"\\1f3a7"}.iconochive-Chart:before{content:"\\1f4c8"}.iconochive-Bookmark:before{content:"\\1f4d1"}.iconochive-Documents:before{content:"\\1f4da"}.iconochive-Newspaper:before{content:"\\1f4f0"}.iconochive-Podcast:before{content:"\\1f4f6"}.iconochive-Radio:before{content:"\\1f4fb"}.iconochive-Cassette:before{content:"\\1f4fc"}.iconochive-Shuffle:before{content:"\\1f500"}.iconochive-Loop:before{content:"\\1f501"}.iconochive-Low_Audio:before{content:"\\1f509"}.iconochive-First:before{content:"\\1f396"}.iconochive-Invisible:before{content:"\\1f576"}.iconochive-Computer:before{content:"\\1f5b3"}


.iconochive-audio    { color: var(--blueMT  ) }
.iconochive-etree    { color: var(--blueMT  ) }
.iconochive-texts    { color: var(--orangeMT) }
.iconochive-movies   { color: var(--redMT   ) }
.iconochive-tv       { color: var(--redMT   ) }
.iconochive-image    { color: var(--purpleMT) }
.iconochive-software { color: var(--greenMT ) }
.iconochive-web      { color: var(--yellowMT) }

  `
  }

  render() {
    return html`
<div class="iconochive-${this.glyph}">
</div>
${this.stat !== -666 ? this.stat : ''}
    `
  }
})
