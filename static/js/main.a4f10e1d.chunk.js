(this.webpackJsonpfunbox=this.webpackJsonpfunbox||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),Q=a.n(s),n=a(7),o=a.n(n),r=(a(13),a(1)),i=a(2),c=a(4),l=a(3),p=a(5),d=(a(14),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={addition:a.props.addition,portion:a.props.portion,portionText:a.props.portionText,weight:a.props.weight,phrase:a.props.phrase,disabled:a.props.disabled,mouseCount:a.props.mouseCount,mouseText:a.props.mouseText,selected:!1,additionalText:a.props.additionalText},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"portionString",value:function(){var e=[];return e.push(Q.a.createElement("strong",null,this.props.portion)),e.push(" ".concat(this.props.portionText)),e}},{key:"mouseString",value:function(){var e=[];return this.props.mouseCount>1?(e.push(Q.a.createElement("strong",null,this.props.mouseCount)),e.push(" ".concat(this.props.mouseText))):e.push("".concat(this.props.mouseText)),e}},{key:"selectItem",value:function(){this.props.disabled||(this.state.selected?this.setState({selected:!1}):this.setState({selected:!0}))}},{key:"setupEndPhrase",value:function(){var e=this,t=[];return this.props.disabled?t="\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ".concat(this.props.addition," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."):this.state.selected?t=this.props.phrase:(t.push("\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c, \u043f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, "),t.push(Q.a.createElement("a",{href:"",onClick:function(){return e.selectItem()}},"\u043a\u0443\u043f\u0438"))),t}},{key:"render",value:function(){var e=this;return Q.a.createElement("div",{className:"catfood ".concat(this.props.disabled?"disabled":""," ").concat(this.state.selected?"selected":"")},Q.a.createElement("svg",{width:"320px",onClick:function(){return e.selectItem()},height:"480px",viewBox:"0 0 320 480",version:"1.1",xlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",className:"catfood__svg catfood__svg-border"},Q.a.createElement("defs",null,Q.a.createElement("path",{d:"M0 42.6762L0 468.001Q0 468.296 0.0144533 468.59Q0.0289066 468.884 0.0577785 469.177Q0.0866503 469.47 0.129871 469.762Q0.173092 470.053 0.230557 470.342Q0.288023 470.631 0.359595 470.916Q0.431167 471.202 0.516673 471.484Q0.602179 471.766 0.701413 472.043Q0.800647 472.321 0.913369 472.593Q1.02609 472.865 1.15203 473.131Q1.27797 473.397 1.41683 473.657Q1.55568 473.917 1.70711 474.17Q1.85855 474.422 2.0222 474.667Q2.18584 474.912 2.36131 475.149Q2.53678 475.385 2.72365 475.613Q2.91051 475.841 3.10833 476.059Q3.30614 476.277 3.51443 476.486Q3.72271 476.694 3.94096 476.892Q4.15922 477.089 4.38691 477.276Q4.61461 477.463 4.8512 477.639Q5.0878 477.814 5.33271 477.978Q5.57763 478.141 5.83028 478.293Q6.08293 478.444 6.34271 478.583Q6.60249 478.722 6.86877 478.848Q7.13504 478.974 7.40718 479.087Q7.67932 479.199 7.95666 479.299Q8.234 479.398 8.51587 479.483Q8.79775 479.569 9.08348 479.64Q9.36921 479.712 9.65811 479.769Q9.94701 479.827 10.2384 479.87Q10.5298 479.913 10.8229 479.942Q11.116 479.971 11.4102 479.986Q11.7044 480 11.999 480L308.001 480Q308.296 480 308.59 479.986Q308.884 479.971 309.177 479.942Q309.47 479.913 309.762 479.87Q310.053 479.827 310.342 479.769Q310.631 479.712 310.917 479.64Q311.202 479.569 311.484 479.483Q311.766 479.398 312.043 479.299Q312.321 479.199 312.593 479.087Q312.865 478.974 313.131 478.848Q313.397 478.722 313.657 478.583Q313.917 478.444 314.17 478.293Q314.422 478.141 314.667 477.978Q314.912 477.814 315.149 477.639Q315.385 477.463 315.613 477.276Q315.841 477.089 316.059 476.892Q316.277 476.694 316.486 476.486Q316.694 476.277 316.892 476.059Q317.089 475.841 317.276 475.613Q317.463 475.385 317.639 475.149Q317.814 474.912 317.978 474.667Q318.141 474.422 318.293 474.17Q318.444 473.917 318.583 473.657Q318.722 473.397 318.848 473.131Q318.974 472.865 319.087 472.593Q319.199 472.321 319.298 472.043Q319.398 471.766 319.483 471.484Q319.569 471.202 319.64 470.916Q319.712 470.631 319.769 470.342Q319.827 470.053 319.87 469.762Q319.913 469.47 319.942 469.177Q319.971 468.884 319.986 468.59Q320 468.296 320 468.001L320 11.999Q320 11.7044 319.986 11.4102Q319.971 11.116 319.942 10.8229Q319.913 10.5298 319.87 10.2384Q319.827 9.94701 319.769 9.65811Q319.712 9.36921 319.64 9.08348Q319.569 8.79775 319.483 8.51587Q319.398 8.234 319.298 7.95666Q319.199 7.67932 319.087 7.40718Q318.974 7.13504 318.848 6.86877Q318.722 6.60249 318.583 6.34271Q318.444 6.08293 318.293 5.83028Q318.141 5.57763 317.978 5.33271Q317.814 5.0878 317.639 4.8512Q317.463 4.61461 317.276 4.38692Q317.089 4.15922 316.892 3.94096Q316.694 3.72271 316.486 3.51443Q316.277 3.30614 316.059 3.10833Q315.841 2.91051 315.613 2.72365Q315.385 2.53678 315.149 2.36131Q314.912 2.18584 314.667 2.0222Q314.422 1.85855 314.17 1.70711Q313.917 1.55568 313.657 1.41683Q313.397 1.27797 313.131 1.15203Q312.865 1.02609 312.593 0.913369Q312.321 0.800647 312.043 0.701413Q311.766 0.602179 311.484 0.516673Q311.202 0.431167 310.917 0.359595Q310.631 0.288023 310.342 0.230557Q310.053 0.173092 309.762 0.129871Q309.47 0.0866503 309.177 0.0577785Q308.884 0.0289066 308.59 0.0144533Q308.296 0 308.001 0L42.6762 0L-1.77636e-15 42.6762L0 42.6762Z",id:"path_1"}),Q.a.createElement("clipPath",{id:"mask_1"},Q.a.createElement("use",{href:"#path_1"}))),Q.a.createElement("g",{id:"Border"},Q.a.createElement("g",{clipPath:"url(#mask_1)"},Q.a.createElement("use",{href:"#path_1",fill:"none",stroke:"#1698D9",strokeWidth:"8"})))),Q.a.createElement("svg",{width:"320px",height:"480px",xlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",className:"catfood__svg catfood__svg-fill"},Q.a.createElement("path",{d:"M0 42.6762L0 468.001Q0 468.296 0.0144533 468.59Q0.0289066 468.884 0.0577785 469.177Q0.0866503 469.47 0.129871 469.762Q0.173092 470.053 0.230557 470.342Q0.288023 470.631 0.359595 470.916Q0.431167 471.202 0.516673 471.484Q0.602179 471.766 0.701413 472.043Q0.800647 472.321 0.913369 472.593Q1.02609 472.865 1.15203 473.131Q1.27797 473.397 1.41683 473.657Q1.55568 473.917 1.70711 474.17Q1.85855 474.422 2.0222 474.667Q2.18584 474.912 2.36131 475.149Q2.53678 475.385 2.72365 475.613Q2.91051 475.841 3.10833 476.059Q3.30614 476.277 3.51443 476.486Q3.72271 476.694 3.94096 476.892Q4.15922 477.089 4.38691 477.276Q4.61461 477.463 4.8512 477.639Q5.0878 477.814 5.33271 477.978Q5.57763 478.141 5.83028 478.293Q6.08293 478.444 6.34271 478.583Q6.60249 478.722 6.86877 478.848Q7.13504 478.974 7.40718 479.087Q7.67932 479.199 7.95666 479.299Q8.234 479.398 8.51587 479.483Q8.79775 479.569 9.08348 479.64Q9.36921 479.712 9.65811 479.769Q9.94701 479.827 10.2384 479.87Q10.5298 479.913 10.8229 479.942Q11.116 479.971 11.4102 479.986Q11.7044 480 11.999 480L308.001 480Q308.296 480 308.59 479.986Q308.884 479.971 309.177 479.942Q309.47 479.913 309.762 479.87Q310.053 479.827 310.342 479.769Q310.631 479.712 310.917 479.64Q311.202 479.569 311.484 479.483Q311.766 479.398 312.043 479.299Q312.321 479.199 312.593 479.087Q312.865 478.974 313.131 478.848Q313.397 478.722 313.657 478.583Q313.917 478.444 314.17 478.293Q314.422 478.141 314.667 477.978Q314.912 477.814 315.149 477.639Q315.385 477.463 315.613 477.276Q315.841 477.089 316.059 476.892Q316.277 476.694 316.486 476.486Q316.694 476.277 316.892 476.059Q317.089 475.841 317.276 475.613Q317.463 475.385 317.639 475.149Q317.814 474.912 317.978 474.667Q318.141 474.422 318.293 474.17Q318.444 473.917 318.583 473.657Q318.722 473.397 318.848 473.131Q318.974 472.865 319.087 472.593Q319.199 472.321 319.298 472.043Q319.398 471.766 319.483 471.484Q319.569 471.202 319.64 470.916Q319.712 470.631 319.769 470.342Q319.827 470.053 319.87 469.762Q319.913 469.47 319.942 469.177Q319.971 468.884 319.986 468.59Q320 468.296 320 468.001L320 11.999Q320 11.7044 319.986 11.4102Q319.971 11.116 319.942 10.8229Q319.913 10.5298 319.87 10.2384Q319.827 9.94701 319.769 9.65811Q319.712 9.36921 319.64 9.08348Q319.569 8.79775 319.483 8.51587Q319.398 8.234 319.298 7.95666Q319.199 7.67932 319.087 7.40718Q318.974 7.13504 318.848 6.86877Q318.722 6.60249 318.583 6.34271Q318.444 6.08293 318.293 5.83028Q318.141 5.57763 317.978 5.33271Q317.814 5.0878 317.639 4.8512Q317.463 4.61461 317.276 4.38692Q317.089 4.15922 316.892 3.94096Q316.694 3.72271 316.486 3.51443Q316.277 3.30614 316.059 3.10833Q315.841 2.91051 315.613 2.72365Q315.385 2.53678 315.149 2.36131Q314.912 2.18584 314.667 2.0222Q314.422 1.85855 314.17 1.70711Q313.917 1.55568 313.657 1.41683Q313.397 1.27797 313.131 1.15203Q312.865 1.02609 312.593 0.913369Q312.321 0.800647 312.043 0.701413Q311.766 0.602179 311.484 0.516673Q311.202 0.431167 310.917 0.359595Q310.631 0.288023 310.342 0.230557Q310.053 0.173092 309.762 0.129871Q309.47 0.0866503 309.177 0.0577785Q308.884 0.0289066 308.59 0.0144533Q308.296 0 308.001 0L42.6762 0L-1.77636e-15 42.6762L0 42.6762Z",id:"path_1"}),Q.a.createElement("g",{id:"Back"},Q.a.createElement("use",{stroke:"none",fill:"#F2F2F2",href:"#path_1",fillRule:"evenodd"}))),Q.a.createElement("div",{className:"catfood__wrap"},Q.a.createElement("div",{className:"catfood__content"},Q.a.createElement("p",{className:"catfood__descr"},"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),Q.a.createElement("h2",{className:"catfood__title"},"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),Q.a.createElement("span",{className:"catfood__addition"},this.props.addition),Q.a.createElement("p",{className:"catfood__count"},this.portionString()),Q.a.createElement("p",{className:"catfood__gift"},this.mouseString()),Q.a.createElement("p",{className:"catfood__additional-text"},this.props.additionalText),Q.a.createElement("div",{className:"catfood__weight"},Q.a.createElement("strong",null,this.props.weight),"\u043a\u0433"))),Q.a.createElement("div",{className:"catfood__footer"},Q.a.createElement("span",null,this.setupEndPhrase())))}}]),t}(s.Component)),u=(a(15),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return Q.a.createElement("div",{className:"products"},Q.a.createElement("div",{className:"products__container"},Q.a.createElement("div",{className:"products__header"},Q.a.createElement("h2",null,"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?")),Q.a.createElement("div",{className:"products__content"},Q.a.createElement("div",{className:"products__column"},Q.a.createElement(d,{addition:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",weight:"0,5",portion:"10",portionText:"\u043f\u043e\u0440\u0446\u0438\u0439",phrase:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",mouseCount:"1",mouseText:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",disabled:!1,additionalText:""})),Q.a.createElement("div",{className:"products__column"},Q.a.createElement(d,{addition:"\u0441 \u0440\u044b\u0431\u043e\u0439",weight:"2",portion:"40",portionText:"\u043f\u043e\u0440\u0446\u0438\u0439",phrase:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",mouseCount:"2",mouseText:"\u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",disabled:!1,additionalText:""})),Q.a.createElement("div",{className:"products__column"},Q.a.createElement(d,{addition:"\u0441 \u043a\u0443\u0440\u043e\u0439",weight:"5",portion:"100",portionText:"\u043f\u043e\u0440\u0446\u0438\u0439",phrase:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",mouseCount:"5",mouseText:"\u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",disabled:!0,additionalText:"\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"})))))}}]),t}(s.Component));a(16);var m=function(){return Q.a.createElement(u,null)};o.a.render(Q.a.createElement(m,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a4f10e1d.chunk.js.map