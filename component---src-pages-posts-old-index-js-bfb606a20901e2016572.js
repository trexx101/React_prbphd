webpackJsonp([0xaf86dbbe56ff],{206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(2),s=r(u),c=n(36),f=r(c),i=n(7),p=r(i),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data;return s.default.createElement("div",null,s.default.createElement("h1",null,"Posts"),e.allWordpressPost.edges.map(function(e){var t=e.node;return s.default.createElement("div",{key:t.slug,className:"post",style:{marginBottom:50}},s.default.createElement(f.default,{to:"post/"+t.slug},s.default.createElement("h3",null,t.title)),s.default.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.excerpt}}),t.date)}))},t}(u.Component);d.propTypes={data:p.default.object.isRequired,edges:p.default.array},t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-posts-old-index-js-bfb606a20901e2016572.js.map