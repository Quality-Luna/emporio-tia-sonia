/*! For license information please see 347205251a1eb6c8e661.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{244:function(e,t,s){var i=s(252);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(194).default)("a2bf3292",i,!0,{})},250:function(e,t,s){"use strict";var i={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:e,zIndex:t,transitionMs:s,opacity:i}=this;return{top:e,transition:"opacity ".concat(s,"ms linear"),opacity:i,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(e){e?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(e){0===e?setTimeout(()=>{this.top=this.zIndex=null},this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout(()=>{this.opacity=null},this.transitionMs),this.lockBodyScroll())}},a=(s(251),s(61)),r=Object(a.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"backdrop",style:this.style,on:{click:this.hide}})}),[],!1,null,null,null);t.a=r.exports},251:function(e,t,s){"use strict";var i=s(244);s.n(i).a},252:function(e,t,s){(t=s(193)(!1)).push([e.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}",""]),e.exports=t},253:function(e,t,s){var i=s(270);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(194).default)("0abd20ed",i,!0,{})},269:function(e,t,s){"use strict";var i=s(253);s.n(i).a},270:function(e,t,s){(t=s(193)(!1)).push([e.i,'.search-engine__nav{padding:var(--spacer-2);margin-bottom:var(--spacer-3);background:var(--light);color:var(--gray)}.search-engine__nav>div{display:flex;align-items:center;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{margin-left:var(--spacer-1);color:var(--secondary)}.search-engine__count{position:relative}.search-engine__spinner{position:absolute;top:50%;right:-3rem;width:1.75rem;height:1.75rem;margin-top:-.875rem;color:var(--secondary)}.search-engine__aside{position:fixed;width:280px;max-width:100%;height:100%;top:0;right:0;z-index:1100;border-radius:0}.search-engine__aside .card-body{overflow-y:auto}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{padding-left:0;color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light)}.search-engine__filter button i,.search-engine__filter button svg{font-size:var(--font-size);margin-right:var(--spacer-1);color:var(--gray);opacity:.5;transition:opacity .25s}.search-engine__filter button .fa-chevron-up,.search-engine__filter button[aria-expanded=true] .fa-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .fa-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}',""]),e.exports=t},271:function(e,t,s){var i=s(309);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(194).default)("26bd2512",i,!0,{})},290:function(e,t,s){"use strict";s(23),s(54),s(13);var i=s(37),a=s(45),r=s(83),n=s(186),o=s(250),c=s(210);const l=({ecomSearch:e,term:t,page:s})=>{e.reset(),t&&e.setSearchTerm(t),s&&e.setPageNumber(s)};var h={name:"SearchEngine",components:{ABackdrop:o.a,ProductCard:c.a},props:{term:String,page:{type:Number,default:1},pageSize:{type:Number,default:24},brands:Array,categories:Array,autoFixScore:{type:Number,default:.6},isFilterable:{type:Boolean,default:!0},hasPopularItems:{type:Boolean,default:!0},canLoadMore:{type:Boolean,default:!0},canRetry:{type:Boolean,default:!0},productCardProps:Object,gridsData:{type:Array,default(){if("object"==typeof window&&window.storefront&&window.storefront.data)return window.storefront.data.grids}}},data:()=>({suggestedTerm:"",resultItems:[],totalSearchResults:0,hasSearched:!1,noResultsTerm:"",keepNoResultsTerm:!1,filters:[],lastSelectedFilter:null,selectedOptions:{},selectedSortOption:null,countOpenRequests:0,lastRequestId:null,isScheduled:!1,isLoadingMore:!1,hasNetworkError:!1,popularItems:[],hasSetPopularItems:!1,isAsideVisible:!1,searchFilterId:0}),computed:{i19clearFilters:()=>Object(a.a)(i.v),i19closeFilters:()=>Object(a.a)(i.x),i19didYouMean:()=>Object(a.a)(i.K),i19filter:()=>Object(a.a)(i.W),i19itemsFound:()=>Object(a.a)(i.rb),i19noResultsFor:()=>Object(a.a)(i.Eb),i19popularProducts:()=>Object(a.a)(i.Ub),i19relevance:()=>Object(a.a)(i.cc),i19refineSearch:()=>Object(a.a)(i.ac),i19results:()=>Object(a.a)(i.fc),i19searchAgain:()=>Object(a.a)(i.ic),i19searchingFor:()=>Object(a.a)(i.lc),i19searchOfflineErrorMsg:()=>Object(a.a)(i.jc),i19sort:()=>Object(a.a)(i.wc),ecomSearch:()=>new n.a,isSearching(){return this.countOpenRequests>0},hasEmptyResult(){return this.hasSearched&&!this.resultItems.length},sortOptions:()=>[{value:null,label:Object(a.a)(i.cc)},{value:"sales",label:Object(a.a)(i.gc)},{value:"lowest_price",label:Object(a.a)(i.wb)},{value:"highest_price",label:Object(a.a)(i.gb)}],hasSelectedOptions(){for(const e in this.selectedOptions)if(this.selectedOptions[e]&&this.selectedOptions[e].length)return!0;return!1},isNavVisible(){return this.hasSearched&&this.isFilterable&&(this.isSearching||this.totalSearchResults>8||this.hasSelectedOptions)},isResultsVisible(){return this.hasSearched&&!this.isSearching||this.suggestedItems.length},hasFilters(){return this.hasSelectedOptions||this.filters.find(({options:e})=>e.length)},suggestedItems(){return this.resultItems.length?this.resultItems:this.popularItems},loadObserver(){return this.canLoadMore&&Object(r.a)("#search-engine-load-more",{load:()=>{this.isLoadingMore=!0,this.fetchItems()}})}},methods:{fetchItems(e,t){const s=t?new n.a:this.ecomSearch,i=Date.now();this.countOpenRequests++,this.lastRequestId=i,this.isLoadingMore&&s.setPageNumber(this.page+Math.ceil(this.resultItems.length/this.pageSize));const a=s.setPageSize(this.pageSize).fetch().then(()=>{this.lastRequestId===i&&(this.hasNetworkError=!1,t||this.handleSearchResult()),!t&&(this.term||this.brands||this.categories)||(this.hasSetPopularItems=!0,this.popularItems=s.getItems())}).catch(s=>{console.error(s),(this.lastRequestId===i||t)&&(!this.canRetry||e||s.response&&400===s.response.status?this.hasNetworkError=!0:this.fetchItems(!0,t))}).finally(()=>{this.countOpenRequests--,this.isLoadingMore=!1});this.$emit("fetch",{ecomSearch:s,fetching:a})},updateFilters(){const e=[],t=(t,s,i)=>{let a=this.filters.findIndex(e=>e.filter===t);if(t!==this.lastSelectedFilter){-1===a&&(a=this.filters.length),this.filters[a]={filter:t,options:s,isSpec:i};const e=this.selectedOptions[t]?this.selectedOptions[t].filter(e=>s.find(({key:t})=>t===e)):[];this.$set(this.selectedOptions,t,e)}e.push(a)};t("Brands",this.ecomSearch.getBrands()),t("Categories",this.ecomSearch.getCategories()),this.ecomSearch.getSpecs().forEach(({key:e,options:s},i)=>{t(e,s,!0)}),this.filters=this.filters.filter((t,s)=>e.includes(s)),this.searchFilterId=Date.now()},handleSuggestions(){const{ecomSearch:e,term:t}=this;let s=t,i=!1;this.suggestedTerm="",e.getTermSuggestions().forEach(({options:e,text:a})=>{if(e.length){const r=e[0];!this.totalSearchResults&&this.autoFixScore>0&&r.score>=this.autoFixScore&&-1===r.text.indexOf(t)&&(i=!0),s=s.replace(a,r.text)}}),this.keepNoResultsTerm?this.keepNoResultsTerm=!1:this.noResultsTerm="",s!==t&&(i?(this.noResultsTerm=t,this.keepNoResultsTerm=!0,this.$emit("update:term",s)):this.suggestedTerm=s,e.history.shift())},handleSearchResult(){const{ecomSearch:e}=this;this.totalSearchResults=e.getTotalCount(),this.resultItems=this.isLoadingMore?this.resultItems.concat(e.getItems()):e.getItems(),this.updateFilters(),this.handleSuggestions(),this.hasSearched=!0,this.totalSearchResults||!this.hasPopularItems||this.hasSetPopularItems||this.fetchItems(!1,!0),this.$emit(this.isLoadingMore?"load-more":"search",{ecomSearch:e})},scheduleFetch(){this.isScheduled||(this.isScheduled=!0,this.$nextTick(()=>{setTimeout(()=>{this.fetchItems(),this.isScheduled=!1},30)}))},resetAndFetch(){l(this),this.handlePresetedOptions(),this.scheduleFetch()},toggleFilters(e){this.isAsideVisible="boolean"==typeof e?e:!this.isAsideVisible},getFilterLabel(e){switch(e){case"Brands":return Object(a.a)(i.l);case"Categories":return Object(a.a)(i.s);default:if(this.gridsData){const t=this.gridsData.find(t=>t.grid_id===e);if(t)return t.title||t.grid_id}}return e},handlePresetedOptions(){["brands","categories"].forEach(e=>{if(this[e]&&this[e].length){const t=e.charAt(0).toUpperCase()+e.slice(1);this.selectedOptions[t]=this[e],this.updateSearchFilter(t)}})},updateSearchFilter(e){const{ecomSearch:t}=this;let s=this.selectedOptions[e];switch(s.length||(s=null),e){case"Brands":t.setBrandNames(s);break;case"Categories":t.setCategoryNames(s);break;default:t.setSpec(e,s)}},setFilterOption(e,t,s){const{selectedOptions:i}=this,a=i[e];if(s)this.lastSelectedFilter=e,a.push(t);else{const s=a.indexOf(t);s>-1&&a.splice(s,1),a.length||this.lastSelectedFilter!==e||(this.lastSelectedFilter=null)}this.updateSearchFilter(e),this.scheduleFetch()},clearFilters(){const{selectedOptions:e}=this;for(const t in e)e[t]&&(e[t]=[],this.updateSearchFilter(t));this.fetchItems()}},watch:{term(){this.resetAndFetch()},brands(){this.resetAndFetch()},categories(){this.resetAndFetch()},page(e){this.ecomSearch.setPageNumber(e),this.scheduleFetch()},isSearching(e){!e&&this.loadObserver&&this.$nextTick(()=>{this.loadObserver.observe()})}},created(){l(this),this.handlePresetedOptions(),this.fetchItems()}},d=(s(269),s(61)),u=Object(d.a)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"search-engine"},[s("a-backdrop",{attrs:{"is-visible":e.isAsideVisible},on:{"update:isVisible":function(t){e.isAsideVisible=t},"update:is-visible":function(t){e.isAsideVisible=t}}}),s("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[s("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"search-engine__aside card shadow"},[e._t("filters",[s("header",{staticClass:"card-header"},[e._v(" "+e._s(e.i19refineSearch)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":e.i19closeFilters},on:{click:e.toggleFilters}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),s("div",{key:e.searchFilterId,staticClass:"card-body"},e._l(e.filters,(function(t,i){var a=t.filter,r=t.options,n=t.isSpec;return r.length?s("div",{key:"filters-"+a,staticClass:"search-engine__filter",class:"search-engine__filter--"+a},[e._o([s("button",{staticClass:"btn",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-"+a,"aria-expanded":i<5?"true":"false","aria-controls":"collapse-"+a}},[s("i",{staticClass:"fas fa-chevron-down"}),s("i",{staticClass:"fas fa-chevron-up"}),e._v(" "+e._s(e.getFilterLabel(a))+" ")]),s("div",{staticClass:"collapse",class:i<5?"show":null,attrs:{id:"collapse-"+a}},e._l(r,(function(t,i){return s("div",{key:a+"-"+i,staticClass:"search-engine__option custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:a+"-"+i},domProps:{checked:e.selectedOptions[a].indexOf(t.key)>-1},on:{change:function(s){return e.setFilterOption(a,t.key,s.target.checked)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:a+"-"+i}},[e._v(" "+e._s(t.key)+" "),n?e._e():s("small",[e._v(" ("+e._s(t.doc_count)+") ")])])])})),0)],0,"filters-"+a)],2):e._e()})),0),s("footer",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-block btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[s("span",{staticClass:"mr-1"},[s("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "+e._s(e.i19clearFilters)+" ")])])])],2)]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast position-absolute"}},[e.isNavVisible?s("div",{staticClass:"search-engine__nav"},[s("div",{staticClass:"container"},[e._t("nav",[s("div",{staticClass:"search-engine__count"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.i19itemsFound)+" "),e.isSearching?s("div",{staticClass:"search-engine__spinner spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()]),e.isFilterable?s("div",{staticClass:"search-engine__toggles"},[e.hasFilters?s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){return e.toggleFilters(!0)}}},[s("i",{staticClass:"fas fa-filter mr-1"}),e._v(" "+e._s(e.i19filter)+" "),s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.i19results.toLowerCase())+" ")])]):e._e(),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"search-engine-sort","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-sort mr-1"}),e._v(" "+e._s(e.i19sort)+" ")]),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"search-engine-sort"}},e._l(e.sortOptions,(function(t,i){var a=t.value,r=t.label;return s("a",{key:"sort-"+i,staticClass:"dropdown-item",attrs:{href:"#",active:e.selectedSortOption===a},on:{click:function(t){return t.preventDefault(),e.setSortOrder(a)}}},[e._v(" "+e._s(r)+" ")])})),0)])]):e._e()],null,{totalSearchResults:e.totalSearchResults,toggleFilters:e.toggleFilters})],2)]):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[e.isResultsVisible?s("div",{staticClass:"search-engine__results fade",style:{opacity:e.isSearching&&!e.isLoadingMore?.4:1}},[s("div",{staticClass:"container"},[s("div",{staticClass:"search-engine__info px-lg-4"},[e.term?[e.hasEmptyResult?s("div",{staticClass:"search-engine__no-results"},[s("div",{staticClass:"lead mb-2"},[e.suggestedTerm?s("span",[e._v(" "+e._s(e.i19didYouMean)+" "),s("a",{attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.$emit("update:term",e.suggestedTerm)}}}),e._v(" ? ")]):e._e(),e._v(" "+e._s(e.i19noResultsFor)+" "),s("em",[e._v(e._s(e.term))])]),e.popularItems.length?s("h4",[e._v(" "+e._s(e.i19popularProducts)+" ")]):e._e()]):s("div",{staticClass:"search-engine__terms"},[e.noResultsTerm?s("span",{staticClass:"d-none d-lg-inline"},[e._v(" "+e._s(e.i19noResultsFor)+" "),s("s",[e._v(e._s(e.noResultsTerm))]),e._v(". ")]):e._e(),s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.i19searchingFor)+": ")]),s("h1",[e._v(e._s(e.term))])])]:e.popularItems.length?s("h3",[e._v(" "+e._s(e.i19popularProducts)+" ")]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[e.hasSelectedOptions&&e.isFilterable?s("div",[s("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[s("i",{staticClass:"fas fa-trash-alt mr-1"}),e._v(" "+e._s(e.i19clearFilters)+" ")]),e._l(e.selectedOptions,(function(t,i){return e._l(t,(function(t){return s("button",{staticClass:"search-engine__selected btn btn-sm btn-light",attrs:{type:"button"},on:{click:function(s){return e.setFilterOption(i,t,!1)}}},[s("i",{staticClass:"fas fa-times mr-1"}),e._v(" "+e._s(t)+" "),s("small",[e._v(e._s(e.getFilterLabel(i)))])])}))}))],2):e._e()])],2),s("article",{staticClass:"search-engine__retail"},[s("div",{staticClass:"row"},e._l(e.suggestedItems,(function(t){return s("div",{key:t._id,staticClass:"col-6 col-md-4 col-lg-3"},[e._t("product-card",[s("product-card",e._b({staticClass:"search-engine__item",attrs:{product:t}},"product-card",e.productCardProps,!1))],null,{product:t})],2)})),0)]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[e.hasNetworkError?s("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[s("i",{staticClass:"fas fa-wifi mr-2"}),e._v(" "+e._s(e.i19searchOfflineErrorMsg)+" "),s("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.fetchItems(t)}}},[e._v(" "+e._s(e.i19searchAgain)+" ")])]):e._e()])],1)]):e._e()]),s("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[!e.hasSearched||e.isLoadingMore?e._t("default"):e._e()],2),e.resultItems.length<e.totalSearchResults?s("div",{key:e.lastRequestId,staticStyle:{width:"100%","margin-top":"20px",height:"5px"},attrs:{id:"search-engine-load-more"}}):e._e()],1)}),[],!1,null,null,null);t.a=u.exports},308:function(e,t,s){"use strict";var i=s(271);s.n(i).a},309:function(e,t,s){(t=s(193)(!1)).push([e.i,".search__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;max-height:100vh;border-radius:0}@media (min-width:576px){.search__box{width:90vw;margin-left:5vw;max-height:90vh;margin-top:5vh;border-radius:var(--border-radius)}}@media (min-width:992px){.search__box{width:80vw;margin-left:10vw}}.search__header{position:relative;display:flex;align-items:center}.search__status .close{transition:opacity .2s}.search__status .close:not(:only-child){opacity:0}.search__spinner{position:absolute;height:2rem;width:2rem;top:50%;margin-top:-1rem;right:1rem}.search__input-group{position:relative;width:100%;padding-right:var(--spacer-3)}.search__input{padding-right:var(--spacer-5)}.search__submit{border:none;background:none;position:absolute;top:50%;margin-top:-1.25rem;right:var(--spacer-4);font-size:1.5rem;line-height:1;padding:.5rem;color:var(--secondary-lighter);transition:color .15s}.search__submit svg{vertical-align:top}.search__submit:hover{color:var(--primary-light)}.search__body{overflow-y:auto;overflow-x:hidden;min-height:7rem;padding-left:0;padding-right:0}@media (min-width:576px){.search__body{padding-left:var(--spacer-2);padding-right:var(--spacer-2)}}@media (min-width:992px){.search__body{min-height:10rem}}.search__loading{display:block;height:3rem;width:3rem;margin:var(--spacer-5)}.search__footer{display:flex;align-items:center;justify-content:space-between}.search__count{color:var(--text-muted);line-height:var(--line-height-lg);min-width:250px}.search__history{overflow-x:auto;white-space:nowrap;font-weight:var(--font-light);font-size:var(--font-size-lg);color:var(--text-muted)}.search__history-link{margin-left:var(--spacer-2)}",""]),e.exports=t},353:function(e,t,s){"use strict";s.r(t);var i=s(57),a=s.n(i),r=(s(23),s(54),s(37)),n=s(45),o=s(250),c=s(290),l={name:"InstantSearch",components:{ABackdrop:o.a,SearchEngine:c.a},props:{term:{type:String,default:""},isVisible:{type:Boolean,default:!0},pageSize:{type:Number,default:8},autoFixScore:{type:Number,default:.83},searchEngineProps:Object,productCardProps:{type:Object,default:()=>({isSmall:!0})}},data(){return{localTerm:this.term,searchTriggerTimer:null,searchTerm:"",history:[],totalSearchResults:0,isSearching:!1,hasSearched:!1}},computed:{i19close:()=>Object(n.a)(r.w),i19items:()=>Object(n.a)(r.qb),i19search:()=>Object(n.a)(r.hc),i19searchProducts:()=>Object(n.a)(r.kc),i19seeAll:()=>Object(n.a)(r.nc)},methods:{hide(){this.$emit("update:is-visible",!1)},setSearchTerm(e){const t=this.$el.parentElement;if(t&&"FORM"===t.tagName){const s=t.elements;for(let t=0;t<s.length;t++)if("term"===s[t].name){s[t].value=e;break}t.submit()}else this.localTerm=e},handleFetching({fetching:e}){this.isSearching=!0,e.finally(()=>{this.isSearching=!1})},handleSearch({ecomSearch:e}){this.totalSearchResults=e.getTotalCount(),this.history=e.history.filter(e=>e.length>2&&-1===this.localTerm.indexOf(e)).slice(0,6),this.hasSearched||(this.hasSearched=!0)}},watch:{isVisible:{handler(e){e&&this.$nextTick(()=>{this.$refs.input&&this.$refs.input.focus()})},immediate:!0},localTerm:{handler(e){const t=e.length>2?e:"";t!==this.searchTerm&&(clearTimeout(this.searchTriggerTimer),this.searchTriggerTimer=setTimeout(()=>{this.searchTerm=t},400)),this.$emit("update:term",e)},immediate:!0}}},h=(s(308),s(61)),d=Object(h.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("a-backdrop",{attrs:{"is-visible":e.isVisible},on:{hide:e.hide}}),s("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[e.isVisible||e.hasSearched?s("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}],staticClass:"search__box card"},[e._t("header",[s("header",{staticClass:"search__header card-header"},[s("div",{staticClass:"search__input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localTerm,expression:"localTerm"}],ref:"input",staticClass:"search__input form-control form-control-lg",attrs:{type:"search",autocomplete:"off",placeholder:e.i19searchProducts},domProps:{value:e.localTerm},on:{input:function(t){t.target.composing||(e.localTerm=t.target.value)}}}),s("button",{staticClass:"search__submit",attrs:{type:"submit","aria-label":e.i19search}},[s("i",{staticClass:"fas fa-search"})])]),s("div",{staticClass:"search__status"},[e.isSearching?s("div",{staticClass:"search__spinner spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e(),s("button",{staticClass:"close",attrs:{type:"button","aria-label":e.i19close},on:{click:e.hide}},[s("i",{staticClass:"fas fa-times-circle"})])])])],null,{isSearching:e.isSearching}),s("article",{staticClass:"search__body card-body"},[e._t("search-engine",[s("SearchEngine",e._b({attrs:{term:e.searchTerm,"is-filterable":!1,"product-card-props":e.productCardProps},on:{"update:term":function(t){e.searchTerm=t},fetch:e.handleFetching,search:e.handleSearch}},"SearchEngine",Object.assign({},e.searchEngineProps,{pageSize:e.pageSize,autoFixScore:e.autoFixScore}),!1),[s("div",{staticClass:"search__loading spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])])])],null,{term:e.searchTerm})],2),s("footer",{staticClass:"search__footer card-footer"},[e._t("count-results",[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[e.hasSearched?s("div",{staticClass:"search__count"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.i19items.toLowerCase())+" "),e.totalSearchResults>e.pageSize?s("button",{staticClass:"ml-2 btn btn-primary",attrs:{type:"submit"}},[e._v(" "+e._s(e.i19seeAll)+" ")]):e._e()]):e._e()])],null,{hasSearched:e.hasSearched,totalSearchResults:e.totalSearchResults}),e._t("history",[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[e.history.length?s("div",{staticClass:"search__history d-none d-lg-block"},[s("i",{staticClass:"fas fa-history"}),e._l(e.history,(function(t){return s("a",{staticClass:"search__history-link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(s){return s.preventDefault(),e.setSearchTerm(t)}}})}))],2):e._e()])],null,{history:e.history})],2)],2):e._e()])],1)}),[],!1,null,null,null).exports;function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function p(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){g(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function g(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}t.default=(e={},t="instant-search",s="search-input")=>{const i=document.getElementById(t),r=document.getElementById(s);if(i&&r){const s=window.storefront&&window.storefront.getScopedSlots;new a.a({data:{isVisible:!1,term:""},created(){r.addEventListener("focusin",()=>{this.isVisible=!0,this.term=r.value})},render(a){const n=this;return a(d,{attrs:{id:t},props:p(p({},e.props),{},{term:n.term,isVisible:n.isVisible}),on:{"update:is-visible"(e){n.isVisible=e},"update:term"(e){r.value=e}},scopedSlots:"function"==typeof s?s(i,a):void 0})}}).$mount(i)}}}}]);
//# sourceMappingURL=347205251a1eb6c8e661.js.map