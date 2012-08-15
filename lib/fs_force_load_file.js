// This is the partial function forceLoadFile in FS

function(g){
  var getFromCore = function(urlWanted) {
    for (var url in Module.core) {
      if (url === urlWanted) {
        return intArrayFromString(Module.core[url], true);
      }
    }
    return undefined;
  }

  if(g.isDevice||g.isFolder||g.link||"contents"in g)return!0;

  var e=!0;
  /* load plugins included with the extension */
  var contents = getFromCore(g.url);
  if (contents !== undefined) {
    g.contents = contents;
    console.log("Loaded " + g.url + " from internal plugin");
    return true;
  }

