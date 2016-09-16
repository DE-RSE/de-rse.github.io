document.write(
"    <nav class='navbar navbar-default navbar-fixed-top' data-nav-highlight='true'>"+
"      <div class='container'>"+
"        <div class='navbar-header'>"+
"          <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>"+
"            <span class='icon-bar'></span>"+
"            <span class='icon-bar'></span>"+
"            <span class='icon-bar'></span>"+
"          </button>"+
"          <a class='navbar-brand' href='index.html'>DERSE</a>"+
"        </div>"+
"        <div id='navbar' class='collapse navbar-collapse'>"+
"          <ul class='nav navbar-nav'>"+
"            <li><a href='about.html'>Über</a></li>"+
"          </ul>"+
"          <ul class='nav navbar-nav pull-right'>");
var languages = {'de': ['Deutsch'],
                 'en': ['English']};
var page = window.location.pathname.split('/').pop();
for (var lang in languages) {
  document.write(
"            <li><a href='../"+lang+"/"+page+"'>"+languages[lang]+"</a></li>");
}
document.write(
"          </ul>"+
"        </div><!--/.nav-collapse -->"+
"      </div>"+
"    </nav>"
);

$(function () {
    $("nav[data-nav-highlight='true']").find("li").children("a").each(function () {
        var language = window.location.pathname.match(/\/(de|en)\//)[1];
        if ($(this).attr("href") === window.location.pathname.split('/').pop() ||
            $(this).attr("href").match(new RegExp('\/('+language+')\/'))) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
});
