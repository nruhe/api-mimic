# api-mimic [![Project Status: Concept - Minimal or no implementation has been done yet.](http://www.repostatus.org/badges/latest/concept.svg)](http://www.repostatus.org/#concept)

>A client side API mocking server solution implementing HTML5 service workers.

## Introduction

Existing API mocking solutions require a server environment to handle client HTTP/HTTPS requests and often lack valuable tools needed to develop sophisticated REST applications. Api-mimic aims to change that by providing a server-less, light weight development tool that will intercept and mock your page's network requests according to your API specification.

### Planned Features

* Simulated latency to see how well your application performs in slower environments
* API mocking using the RAML format
* Request redirection to live development environments
  * Optional fallback to mock data when no response is present
* Automatic morphing of live data to match mock API formats (e.g., appending missing fields)
* Analytics to measure performance of requests

## FAQ

Will api-mimic support API Blueprint format?
>Initial release will use RAML, though future plans include supporting api-blueprint format as well

Will this work on both HTTPS and HTTP protocols?
>No, since the utility relies on service-workers, only requests over HTTPS will be captured.

Why are there no unit tests?!
>I swear! That will be my first goal as soon as I'm finished with the working PoC!

## License

The ISC License

Copyright (c) 2016, Natalie Ruhe

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
