/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
import particlesJS from './particlesjs/particles.js';

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log("Particles.js loaded successfully - callback");
  });