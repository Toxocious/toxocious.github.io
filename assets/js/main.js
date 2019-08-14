/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function($) {
	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie') {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {

					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		}

	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial) {

				var $article = $main_articles.filter('#' + id);

				// No such article? Bail.
					if ($article.length == 0)
						return;

				// Handle lock.

					// Already locked? Speed through "show" steps w/o delays.
						if (locked || (typeof initial != 'undefined' && initial === true)) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Mark as visible.
								$body.addClass('is-article-visible');

							// Deactivate all articles (just in case one's already active).
								$main_articles.removeClass('active');

							// Hide header, footer.
								$header.hide();
								$footer.hide();

							// Show main, article.
								$main.show();
								$article.show();

							// Activate article.
								$article.addClass('active');

							// Unlock.
								locked = false;

							// Unmark as switching.
								setTimeout(function() {
									$body.removeClass('is-switching');
								}, (initial ? 1000 : 0));

							return;

						}

					// Lock.
						locked = true;

				// Article already visible? Just swap articles.
					if ($body.hasClass('is-article-visible')) {

						// Deactivate current article.
							var $currentArticle = $main_articles.filter('.active');

							$currentArticle.removeClass('active');

						// Show article.
							setTimeout(function() {

								// Hide current article.
									$currentArticle.hide();

								// Show article.
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

				// Otherwise, handle as normal.
					else {

						// Mark as visible.
							$body
								.addClass('is-article-visible');

						// Show article.
							setTimeout(function() {

								// Hide header, footer.
									$header.hide();
									$footer.hide();

								// Show main, article.
									$main.show();
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

			};

			$main._hide = function(addState) {

				var $article = $main_articles.filter('.active');

				// Article not visible? Bail.
					if (!$body.hasClass('is-article-visible'))
						return;

				// Add state?
					if (typeof addState != 'undefined'
					&&	addState === true)
						history.pushState(null, null, '#');

				// Handle lock.

					// Already locked? Speed through "hide" steps w/o delays.
						if (locked) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Deactivate article.
								$article.removeClass('active');

							// Hide article, main.
								$article.hide();
								$main.hide();

							// Show footer, header.
								$footer.show();
								$header.show();

							// Unmark as visible.
								$body.removeClass('is-article-visible');

							// Unlock.
								locked = false;

							// Unmark as switching.
								$body.removeClass('is-switching');

							// Window stuff.
								$window
									.scrollTop(0)
									.triggerHandler('resize.flexbox-fix');

							return;

						}

					// Lock.
						locked = true;

				// Deactivate article.
					$article.removeClass('active');

				// Hide article.
					setTimeout(function() {

						// Hide article, main.
							$article.hide();
							$main.hide();

						// Show footer, header.
							$footer.show();
							$header.show();

						// Unmark as visible.
							setTimeout(function() {

								$body.removeClass('is-article-visible');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);


			};

		// Articles.
			$main_articles.each(function() {

				var $this = $(this);

				// Close.
					$('<div class="close">Close</div>')
						.appendTo($this)
						.on('click', function() {
							location.hash = '';
						});

				// Prevent clicks from inside article from bubbling.
					$this.on('click', function(event) {
						event.stopPropagation();
					});

			});

		// Events.
			$body.on('click', function(event) {

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

			});

			$window.on('keyup', function(event) {

				switch (event.keyCode) {

					case 27:

						// Article visible? Hide.
							if ($body.hasClass('is-article-visible'))
								$main._hide(true);

						break;

					default:
						break;

				}

			});

			$window.on('hashchange', function(event) {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#') {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Hide.
							$main._hide();

					}

				// Otherwise, check for a matching article.
					else if ($main_articles.filter(location.hash).length > 0) {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Show article.
							$main._show(location.hash.substr(1));

					}

			});

		// Scroll restoration.
		// This prevents the page from scrolling back to the top on a hashchange.
			if ('scrollRestoration' in history)
				history.scrollRestoration = 'manual';
			else {

				var	oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body');

				$window
					.on('scroll', function() {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop();

					})
					.on('hashchange', function() {
						$window.scrollTop(oldScrollPos);
					});

			}

		// Initialize.

			// Hide main, articles.
				$main.hide();
				$main_articles.hide();

			// Initial article.
				if (location.hash != ''
				&&	location.hash != '#')
					$window.on('load', function() {
						$main._show(location.hash.substr(1), true);
					});
})(jQuery);

/**
 * Setup the Particle.js configuration.
 */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":true},"autoA11y":{"enabled":true},"baseUrl":"https://kit-free.fontawesome.com","detectConflictsUntil":null,"license":"free","method":"css","minify":{"enabled":true},"v4FontFaceShim":{"enabled":true},"v4shim":{"enabled":true},"version":"latest"};
!function(){function r(e){var t,n=[],i=document,o=i.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(i.readyState);a||i.addEventListener(r,t=function(){for(i.removeEventListener(r,t),a=1;t=n.shift();)t()}),a?setTimeout(e,0):n.push(e)}!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var e,t,n,i=Array.prototype,o=i.push,r=i.splice,a=i.join;d.prototype={add:function(e){this.contains(e)||(o.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!=e;t++);r.call(this,t,1),this.el.className=this.toString()}},toString:function(){return a.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=d,e=Element.prototype,t="classList",n=function(){return new d(this)},Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}function d(e){for(var t=(this.el=e).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<t.length;n++)o.call(this,t[n])}}();function a(e){var t,n,i,o;prefixesArray=e||["fa"],prefixesSelectorString="."+Array.prototype.join.call(e,",."),t=document.querySelectorAll(prefixesSelectorString),Array.prototype.forEach.call(t,function(e){n=e.getAttribute("title"),e.setAttribute("aria-hidden","true"),i=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only"),n&&i&&((o=document.createElement("span")).innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling))})}var d=function(e,t){var n=document.createElement("link");n.href=e,n.media="all",n.rel="stylesheet",n.id="font-awesome-5-kit-css",t&&t.detectingConflicts&&t.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),document.getElementsByTagName("head")[0].appendChild(n)},c=function(e,t){!function(e,t){var n,i=t&&t.before||void 0,o=t&&t.media||void 0,r=window.document,a=r.createElement("link");if(t&&t.detectingConflicts&&t.detectionIgnoreAttr&&a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),i)n=i;else{var d=(r.body||r.getElementsByTagName("head")[0]).childNodes;n=d[d.length-1]}var c=r.styleSheets;a.rel="stylesheet",a.href=e,a.media="only x",function e(t){if(r.body)return t();setTimeout(function(){e(t)})}(function(){n.parentNode.insertBefore(a,i?n:n.nextSibling)});var s=function(e){for(var t=a.href,n=c.length;n--;)if(c[n].href===t)return e();setTimeout(function(){s(e)})};function l(){a.addEventListener&&a.removeEventListener("load",l),a.media=o||"all"}a.addEventListener&&a.addEventListener("load",l),(a.onloadcssdefined=s)(l)}(e,t)},e=function(e,t,n){var i=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,o=t&&void 0!==t.async?t.async:void 0,r=t&&void 0!==t.autoA11y?t.autoA11y:void 0,a=document.createElement("script"),d=document.scripts[0];a.src=e,void 0!==r&&a.setAttribute("data-auto-a11y",r?"true":"false"),i&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",t.fetchSvgFrom)),o&&a.setAttributeNode(document.createAttribute("defer")),n&&n.detectingConflicts&&n.detectionIgnoreAttr&&a.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),d.parentNode.appendChild(a)};function s(e,t){var n=t&&t.addOn||"",i=t&&t.baseFilename||e.license+n,o=t&&t.minify?".min":"",r=t&&t.fileSuffix||e.method,a=t&&t.subdir||e.method;return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+a+"/"+i+o+"."+r}var t,n,i,o,l;try{if(window.FontAwesomeKitConfig){var u,f=window.FontAwesomeKitConfig,m={detectingConflicts:f.detectConflictsUntil&&new Date<=new Date(f.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",detectionTimeoutAttr:"data-fa-detection-timeout",detectionTimeout:null};"js"===f.method&&(o=m,l={async:(i=f).asyncLoading.enabled,autoA11y:i.autoA11y.enabled},"pro"===i.license&&(l.autoFetchSvg=!0,l.fetchSvgFrom=i.baseUrl+"/releases/"+("latest"===i.version?"latest":"v".concat(i.version))+"/svgs"),i.v4shim.enabled&&e(s(i,{addOn:"-v4-shims",minify:i.minify.enabled})),e(s(i,{minify:i.minify.enabled}),l,o)),"css"===f.method&&function(e,t){var n,i=a.bind(a,["fa","fab","fas","far","fal"]);e.autoA11y.enabled&&(r(i),n=i,"undefined"!=typeof MutationObserver&&new MutationObserver(n).observe(document,{childList:!0,subtree:!0})),e.v4shim.enabled&&(e.license,e.asyncLoading.enabled?c(s(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t):d(s(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t));e.v4FontFaceShim.enabled&&(e.asyncLoading.enabled?c(s(e,{addOn:"-v4-font-face",minify:e.minify.enabled}),t):d(s(e,{addOn:"-v4-font-face",minify:e.minify.enabled}),t));var o=s(e,{minify:e.minify.enabled});e.asyncLoading.enabled?c(o,t):d(o,t)}(f,m),m.detectingConflicts&&((u=document.currentScript.getAttribute(m.detectionTimeoutAttr))&&(m.detectionTimeout=u),document.currentScript.setAttributeNode(document.createAttribute(m.detectionIgnoreAttr)),t=f,n=m,r(function(){var e=document.createElement("script");n&&n.detectionIgnoreAttr&&e.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),n&&n.detectionTimeoutAttr&&n.detectionTimeout&&e.setAttribute(n.detectionTimeoutAttr,n.detectionTimeout),e.src=s(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),e.async=!0,document.body.appendChild(e)}))}}catch(e){}}();