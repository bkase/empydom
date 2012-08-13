const widgets = require("widget");
const tabs = require("tabs");
var pageMod = require("page-mod");
var data = require("self").data;


pageMod.PageMod({
    include: ['*'],
    contentScriptWhen: 'end',
    contentScriptFile: data.url("python.js")
});

console.log("The add-on is running.");
