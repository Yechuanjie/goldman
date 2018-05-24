/* eslint-disable */
(function(global) {
	var time = Date.now || function() {
		return +new Date();
	};
	var desiredFrames = 60;
	var millisecondsPerSecond = 1000;
	var running = {};
	var counter = 1;
	// Create namespaces
	if (!global.core) {
		global.core = {
			effect: {}
		};
	}
	else if (!core.effect) {
		core.effect = {};
	}

	core.effect.Animate = {
		/**
		 * A requestAnimationFrame wrapper / polyfill.
		 *
		 * @param callback {Function} The callback to be invoked before the next repaint.
		 * @param root {HTMLElement} The root element for the repaint
		 */
		requestAnimationFrame: (function() {
			// Check for request animation Frame support
			var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;
			var isNative = !!requestFrame;
			if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
				isNative = false;
			}
			if (isNative) {
				return function(callback, root) {
					requestFrame(callback, root)
				};
			}
			var TARGET_FPS = 60;
			var requests = {};
			var requestCount = 0;
			var rafHandle = 1;
			var intervalHandle = null;
			var lastActive = +new Date();
			return function(callback, root) {
				var callbackHandle = rafHandle++;
				// Store callback
				requests[callbackHandle] = callback;
				requestCount++;
				// Create timeout at first request
				if (intervalHandle === null) {
					intervalHandle = setInterval(function() {
						var time = +new Date();
						var currentRequests = requests;
						// Reset data structure before executing callbacks
						requests = {};
						requestCount = 0;
						for (var key in currentRequests) {
							if (currentRequests.hasOwnProperty(key)) {
								currentRequests[key](time);
								lastActive = time;
							}
						}
						// Disable the timeout when nothing happens for a certain
						// period of time
						if (time - lastActive > 2500) {
							clearInterval(intervalHandle);
							intervalHandle = null;
						}

					}, 1000 / TARGET_FPS);
				}
				return callbackHandle;
			};
		})(),
		/**
		 * Stops the given animation.
		 *
		 * @param id {Integer} Unique animation ID
		 * @return {Boolean} Whether the animation was stopped (aka, was running before)
		 */
		stop: function(id) {
			var cleared = running[id] != null;
			if (cleared) {
				running[id] = null;
			}

			return cleared;
		},
		/**
		 * Whether the given animation is still running.
		 *
		 * @param id {Integer} Unique animation ID
		 * @return {Boolean} Whether the animation is still running
		 */
		isRunning: function(id) {
			return running[id] != null;
		},
		/**
		 * Start the animation.
		 *
		 * @param stepCallback {Function} Pointer to function which is executed on every step.
		 *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
		 * @param verifyCallback {Function} Executed before every animation step.
		 *   Signature of the method should be `function() { return continueWithAnimation; }`
		 * @param completedCallback {Function}
		 *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
		 * @param duration {Integer} Milliseconds to run the animation
		 * @param easingMethod {Function} Pointer to easing function
		 *   Signature of the method should be `function(percent) { return modifiedValue; }`
		 * @param root {Element ? document.body} Render root, when available. Used for internal
		 *   usage of requestAnimationFrame.
		 * @return {Integer} Identifier of animation. Can be used to stop it any time.
		 */
		start: function(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
			var start = time();
			var lastFrame = start;
			var percent = 0;
			var dropCounter = 0;
			var id = counter += 1;
			if (!root) {
				root = document.body;
			}
			// Compacting running db automatically every few new animations
			if (id % 20 === 0) {
				var newRunning = {};
				for (var usedId in running) {
					newRunning[usedId] = true;
				}
				running = newRunning;
			}
			// This is the internal step method which is called every few milliseconds
			var step = function(virtual) {
				// Normalize virtual value
				var render = virtual !== true;
				// Get current time
				var now = time();
				// Verification is executed before next animation step
				if (!running[id] || (verifyCallback && !verifyCallback(id))) {

					running[id] = null;
					completedCallback && completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, false);
					return;
				}
				// For the current rendering to apply let's update omitted steps in memory.
				// This is important to bring internal state variables up-to-date with progress in time.
				if (render) {
					var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
					for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
						step(true);
						dropCounter++;
					}
				}
				// Compute percent value
				if (duration) {
					percent = (now - start) / duration;
					if (percent > 1) {
						percent = 1;
					}
				}
				// Execute step callback, then...
				var value = easingMethod ? easingMethod(percent) : percent;
				if ((stepCallback(value, now, render) === false || percent === 1) && render) {
					running[id] = null;
					completedCallback && completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, percent === 1 || duration == null);
				}
				else if (render) {
					lastFrame = now;
					core.effect.Animate.requestAnimationFrame(step, root);
				}
			};
			// Mark as running
			running[id] = true;
			// Init first step
			core.effect.Animate.requestAnimationFrame(step, root);
			// Return unique animation ID
			return id;
		}
	};

})(window);
var Scroller;
(function(window) {
	/**
	 * A pure logic 'component' for 'virtual' scrolling/zooming.
	 */
	Scroller = function(callback, options) {
		this.__callback = callback;
		this.options = {
			/** Multiply or decrease scrolling speed **/
			speedMultiplier: 1,
			bouncing: true
		};
		for (var key in options) {
			this.options[key] = options[key];
		}
		var members = {
			__isAnimating: false,
			/** duration for animations triggered by scrollTo/zoomTo */
			animationDuration: 250,
			/* {Number} Scheduled left position (final position when animating) */
			__scheduledLeft: 0,
			/* {Number} Scheduled top position (final position when animating) */
			__scheduledTop: 0,
			/** {Number} Scroll position on x-axis */
			__scrollLeft: 0,
			/** {Number} Scroll position on y-axis */
			__scrollTop: 0,
			/**
			 * Applies the scroll position to the content element
			 *
			 * @param left {Number} Left scroll position
			 * @param top {Number} Top scroll position
			 * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
			 */
			__publish: function(left, top, animate) {
				var self = this;
				// Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
				var wasAnimating = self.__isAnimating;
				if (wasAnimating) {
					core.effect.Animate.stop(wasAnimating);
					self.__isAnimating = false;
				}
				if (animate) {
					self.__scheduledLeft = left;
					self.__scheduledTop = top;
					var oldLeft = self.__scrollLeft;
					var oldTop = self.__scrollTop;
					var diffLeft = left - oldLeft;
					var diffTop = top - oldTop;
					var step = function(percent, now, render) {
						if (render) {
							self.__scrollLeft = oldLeft + (diffLeft * percent);
							self.__scrollTop = oldTop + (diffTop * percent);
							// Push values out
							if (self.__callback) {
								self.__callback(self.__scrollLeft, self.__scrollTop);
							}
						}
					};
					var verify = function(id) {
						return self.__isAnimating === id;
					};
					var completed = function(renderedFramesPerSecond, animationId, wasFinished) {
						if (animationId === self.__isAnimating) {
							self.__isAnimating = false;
						}
						if (wasFinished && self.scrollingComplete) {
							self.scrollingComplete();
						}
					};
					// When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
					self.__isAnimating = core.effect.Animate.start(step, verify, completed, self.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
				}
				else {
					self.__scheduledLeft = self.__scrollLeft = left;
					self.__scheduledTop = self.__scrollTop = top;
					// Push values out
					if (self.__callback) {
						self.__callback(left, top);
					}
				}
			},
			/**
			 * Signalizes that pull-to-refresh is finished.
			 */
			finishPullToRefresh: function() {
				var self = this;
				self.__publish(0, 0, true);
			}
		}
		/**
		 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
		 **/
		var easeOutCubic = function(pos) {
			return (Math.pow((pos - 1), 3) + 1);
		};
		/**
		 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
		 **/
		var easeInOutCubic = function(pos) {
			if ((pos /= 0.5) < 1) {
				return 0.5 * Math.pow(pos, 3);
			}
			return 0.5 * (Math.pow((pos - 2), 3) + 2);
		};
		// Copy over members to prototype
		for (var key in members) {
			Scroller.prototype[key] = members[key];
		}
	};
	// if (typeof module != 'undefined' && module.exports) {
	// 	module.exports = Scroller;
	// }
	// else if (typeof define == 'function' && define.amd) {
	// 	define(function() {
	// 		return Scroller;
	// 	});
	// }
	// else {
	// 	window.Scroller = Scroller;
	// }
})(window);
export default Scroller;