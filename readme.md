faqjs
=====

A JavaScript FAQ lib that accepts FAQ JSON input and outputs an interactive FAQ HTML view.

Usage instructions
------------------

Ensure that jQuery and SproutCore 2 libs are included in your html then add faqjs.min.js

    <script src='/faqjs.min.js'></script>

Then call

    FaqJs.CreateFaq(document.getElementById('faqContainer'), faqData);

For an example of faqData, please see sample.html.

Build
-----

Precompile handlebars templates, coffee scripts and minify into single file

    jake

Watch .coffee and .handlebars scripts and auto compile on change

    jake dev

License
-------

faqjs is released under the MIT license.