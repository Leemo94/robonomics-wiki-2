(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{Bfxs:function(t,e,s){"use strict";s.r(e);var o=s("KHd+"),i=s("UQSp"),r=s("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var m={VueRemarkRoot:i.a},d=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(m).forEach((function(t){"object"===a(m[t])&&"function"==typeof m[t].render||"function"==typeof m[t]&&"function"==typeof m[t].options.render?e[t]=m[t]:s[t]=function(){return m[t]}}))},n=r.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",l={excerpt:null,title:"Robonomics Liability Messages"};var c=function(t){t.options[_]&&(t.options[_]=l),r.a.util.defineReactive(t.options,_,l),t.options.computed=n.computed({$frontmatter:function(){return t.options[_]}},t.options.computed)},h=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("h1",{attrs:{id:"robonomics-liability-messages"}},[s("a",{attrs:{href:"#robonomics-liability-messages","aria-hidden":"true"}},[t._v("#")]),t._v("Robonomics Liability Messages")]),s("h2",{attrs:{id:"robonomics_liabilityliabilitymsg"}},[s("a",{attrs:{href:"#robonomics_liabilityliabilitymsg","aria-hidden":"true"}},[t._v("#")]),t._v("robonomics_liability/Liability.msg")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("address")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[t._v("ethereum_commom/Address")])]),s("td",[t._v("The Liability’s address")])]),s("tr",[s("td",[t._v("model")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[t._v("ipfs_commom/Multihash")])]),s("td",[t._v("CPS behavioral model Identifier")])]),s("tr",[s("td",[t._v("objective")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[t._v("ipfs_commom/Multihash")])]),s("td",[t._v("CPS behavioral model parameters in rosbag file")])]),s("tr",[s("td",[t._v("result")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[t._v("ipfs_commom/Multihash")])]),s("td",[t._v("Liability result hash")])]),s("tr",[s("td",[t._v("promisee")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[t._v("ethereum_commom/Address")])]),s("td",[t._v("The promisee address")])]),s("tr",[s("td",[t._v("promisor")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[t._v("ethereum_commom/Address")])]),s("td",[t._v("The promisor address (usually CPS)")])]),s("tr",[s("td",[t._v("lighthouse")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[t._v("ethereum_commom/Address")])]),s("td",[t._v("The address of lighthouse your CPS works on")])]),s("tr",[s("td",[t._v("token")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[t._v("ethereum_commom/Address")])]),s("td",[t._v("Operational token address")])]),s("tr",[s("td",[t._v("cost")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[t._v("ethereum_commom/UInt256")])]),s("td",[t._v("CPS behavioral model implementation cost")])]),s("tr",[s("td",[t._v("validator")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[t._v("ethereum_commom/Address")])]),s("td",[t._v("Observing network address")])]),s("tr",[s("td",[t._v("validatorFee")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[t._v("ethereum_commom/UInt256")])]),s("td",[t._v("Observing network commission")])])])]),s("h2",{attrs:{id:"robonomics_liabilitystartliabilitysrv"}},[s("a",{attrs:{href:"#robonomics_liabilitystartliabilitysrv","aria-hidden":"true"}},[t._v("#")]),t._v("robonomics_liability/StartLiability.srv")]),s("p",[s("strong",[t._v("Request")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("address")]),s("td",[t._v("std_msgs/String")]),s("td",[t._v("The address of Liability you are willing to execute")])])])]),s("p",[s("strong",[t._v("Response")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("success")]),s("td",[t._v("std_msgs/Bool")]),s("td",[t._v("Weather or not the Liability was started")])]),s("tr",[s("td",[t._v("msg")]),s("td",[t._v("std_msgs/String")]),s("td",[t._v("Status of launch")])])])]),s("h2",{attrs:{id:"robonomics_liabilityfinishliabilitysrv"}},[s("a",{attrs:{href:"#robonomics_liabilityfinishliabilitysrv","aria-hidden":"true"}},[t._v("#")]),t._v("robonomics_liability/FinishLiability.srv")]),s("p",[s("strong",[t._v("Request")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("address")]),s("td",[t._v("std_msgs/String")]),s("td",[t._v("The address of Liability to finish")])]),s("tr",[s("td",[t._v("success")]),s("td",[t._v("std_msgs/Bool")]),s("td",[t._v("The status of execution")])])])]),s("p",[s("strong",[t._v("Response")])]),s("p",[t._v("The response is empty")]),s("h2",{attrs:{id:"robonomics_liabilityreadliabilitysrv"}},[s("a",{attrs:{href:"#robonomics_liabilityreadliabilitysrv","aria-hidden":"true"}},[t._v("#")]),t._v("robonomics_liability/ReadLiability.srv")]),s("p",[s("strong",[t._v("Request")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("address")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[t._v("ethereum_commom/Address")])]),s("td",[t._v("The address of a liability")])])])]),s("p",[s("strong",[t._v("Response")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("read")]),s("td",[t._v("std_msgs/Bool")]),s("td",[t._v("Status of execution")])]),s("tr",[s("td",[t._v("liability")]),s("td",[s("a",{attrs:{href:"#robonomics_liabilityliabilitymsg"}},[t._v("robonomics_liability/Liability")])]),s("td",[t._v("Liability")])])])])])}),[],!1,null,null,null);"function"==typeof d&&d(h),"function"==typeof c&&c(h);e.default=h.exports},UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);