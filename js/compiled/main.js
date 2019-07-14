"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(a, b, c) {
    _classCallCheck(this, Circle);

    this.a = a;
    this.b = b;
    this.c = c;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      console.log('hi draw');
    }
  }, {
    key: "update",
    value: function update() {
      console.log('hi update');
    }
  }]);

  return Circle;
}();

var ersem = new Circle(10, 20, 30);