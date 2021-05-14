# page4streamersonglist

A cloudflare-pages-enabled repo for setting up an image overlay based on tags on streamersonglist.

This doesn't and won't ever replace the overlay functionality within streamersonglist, it just allows you to have another overlay that's based on tags.

For instance you might want an image to appear on your stream for your originals.

You probably don't need this repo, as it deploys to https://page4streamersonglist.pages.dev/ and you can put your images somewhere else, an s3 bucket, your website etc.  I wish it could point to your local filesystem but that's not a thing that works on the modern web :(

The script has fairly restrictive naming requirement of `{{tag id}}.png`, so using instagram images etc. unfortunately won't work.  There are a few s3-compatible storages that allow you to host a folder of images.  https://www.backblaze.com/ 's s3 compatible storage does, cloudflare pages (github backed) and a few others.

Why don't I do cleverness so you could use any image hosting and direct link?  Because this is entirely running in your browser, it's completely static, and that would require some kind of database hookup.  I'm keeping this simple.
