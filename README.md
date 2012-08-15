# Empydom
---
Thanks to https://github.com/replit/empythoned for making Empythoned and https://github.com/max99x for
helping me out when I had some questions.

Thanks to Evan Shapiro for pair-coding with me on some of the core parts in the bridge

Thanks to Professor David Kosbie for providing the idea for and giving me the opportunity to work on this project

## About
Empydom is a Python-DOM bridge built on top of replit's empythoned
Empydom lets you use Python in `<script>` tags within an HTML document to manipulate the DOM


## How to build
Edit `tools/build.sh` and update the constants at the top of the file with your system's specific configuration.

Run `./tools/build.sh`.

Check `out/` for the output.

## How to use
Install the `empydom.user.js` for Chrome or `empydom.xpi` for Firefox by dragging and dropping the file into your chosen browser. Chrome updated, so now you have to go to `chrome://chrome/extensions/` and check the box on the upper right-hand side to enable developer mode and drop the user-script on this tab.

You can now visit pages that use Empydom.

* See `srv/test-bridge.html` for an example with a console for input and ouput
* See `srv/script-tag-example.html` for a large script-tag example with canvas
* See `srv/fast-clock.html` for a faster version of the same demo with most logic in JavaScript

Run your webserver from the `srv/` directory.
If you have Python 2.x installed you can use 
```python
python -m SimpleHTTPServer [port]
```
to start a server from the current directory.

### Programming with Empydom
Include 
```html
<div id='give_me_empydom_please'></div> 
```

somewhere in the body of your HTML page.
This ensures that the extension knows about Empydom.

---

Above your Python code, include any JavaScript libraries that you want to use within your Python code

---

Below your Python code, include this: 
```html
<script> window.onEmpydomReady = function() { window.empydom.executePythonScripts(); }; </script>`
```

The extension calls `window.onEmpydomReady()` when it finishes being loaded.
`window.empydom.executePythonScripts()` executes Python within all `<script text="text/python">`

If you pass a function to `executePythonScripts()` that function will be called with the character code to output as a buffer.
The default function which outputs each line to the console is:
```javascript
function(chr) {
   if (chr !== null) {
     realChar = String.fromCharCode(chr);
     charBuffer += realChar;
     if (realChar == '\n') {
       console.log(charBuffer);
       charBuffer = "";
     }
   }
};
```
Note: `charBuffer` is a variable declared as the empty string outside of the function body.

---

All of your Python code goes in `<script type="text/python">` tags.
Most Python modules are supported, a few are included within the extesion, but many more must be downloaded from whichever server is hosting the page from an `extern` folder

---

In Python, you have access to the JavaScript object `window` as a Python object.
* You add properties to `window`, you can read values from properties within `window`, and you can call functions from properties within `window`.
* You can pass Python strings, numbers, lists, dictionaries, and functions as parameters to any function in `window` and they will be interpreted
as JavaScript strings, numbers, arrays, objects, and functions respectively.
* JavaScript errors are percolated up to the Python stack trace and the output function is called for each character of
the JavaScript state

## Quirks

In Firefox, the page doesn't render until Empydom loads completely, while in Chrome it renders immediately then loads Empydom.

Firefox sometimes thinks the script is unresponsive. This is partly related to the overhead of initializing Empythoned and 
partly related to initializing the DOM bridge. Hopefully, with optimizations, this will stop soon.

These problems could be partially alleviated if Empydom worked in a web-worker since it would be running in the background in a dedicated thread.
See issue #7, most of the infrastructure of porting Empydom is there, the only problem is the lack of a blocking recieve or
a force check for messages for the web-worker.

Do not make calls passing functions as parameters in tight-loops. Function memory management is non-existant. The problem is that
JavaScript can call a passed function at anytime so we can't free it from Python.
Additionally, blobs are never freed from JavaScript -- but the overhead from this is much less than the function issue. Fixing
the blob memory issue will probably require including a reference to the parent blob object for each blob.

## Contribute

Pull-requests are very welcome!

I want to try to keep my history linear and organized, so I would like all pull-requests to be only one commit. I will cherry-pick your commit on top
of the tip of `origin/master`.
Before you send a pull-request and every time you change your code on a pull-request, 
sqash all the relevant commits together and `git push --force` on your fork. (read up on `git rebase -i` if you are not familiar with rewriting history). 

Feel free to contact me if you are confused at all -- this is an experiment, I want to see if I can maintain this repository structure using GitHub.

