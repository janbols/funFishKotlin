if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var getCallableRef = Kotlin.getCallableRef;
  var Pair = Kotlin.kotlin.Pair;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var throwCCE = Kotlin.throwCCE;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var drop_0 = Kotlin.kotlin.text.drop_6ic1pp$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var unboxChar = Kotlin.unboxChar;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Triple = Kotlin.kotlin.Triple;
  Polygon.prototype = Object.create(Shape.prototype);
  Polygon.prototype.constructor = Polygon;
  Curve.prototype = Object.create(Shape.prototype);
  Curve.prototype.constructor = Curve;
  Path.prototype = Object.create(Shape.prototype);
  Path.prototype.constructor = Path;
  Line.prototype = Object.create(Shape.prototype);
  Line.prototype.constructor = Line;
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  StyleColor.prototype = Object.create(Enum.prototype);
  StyleColor.prototype.constructor = StyleColor;
  Hue.prototype = Object.create(Enum.prototype);
  Hue.prototype.constructor = Hue;
  function Box(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  Box.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Box',
    interfaces: []
  };
  Box.prototype.component1 = function () {
    return this.a;
  };
  Box.prototype.component2 = function () {
    return this.b;
  };
  Box.prototype.component3 = function () {
    return this.c;
  };
  Box.prototype.copy_epkc61$ = function (a, b, c) {
    return new Box(a === void 0 ? this.a : a, b === void 0 ? this.b : b, c === void 0 ? this.c : c);
  };
  Box.prototype.toString = function () {
    return 'Box(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', c=' + Kotlin.toString(this.c)) + ')';
  };
  Box.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  Box.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.c, other.c)))));
  };
  function Boxes() {
    Boxes_instance = this;
  }
  Boxes.prototype.turn_es3rdf$ = function (box) {
    return new Box(box.a.plus_jxo2pn$(box.b), box.c, box.b.unaryMinus());
  };
  Boxes.prototype.flip_es3rdf$ = function (box) {
    return new Box(box.a.plus_jxo2pn$(box.b), box.b.unaryMinus(), box.c);
  };
  Boxes.prototype.toss_es3rdf$ = function (box) {
    return new Box(box.a.plus_jxo2pn$(box.b.plus_jxo2pn$(box.c).div_za3lpa$(2)), box.b.plus_jxo2pn$(box.c).div_za3lpa$(2), box.c.minus_jxo2pn$(box.b).div_za3lpa$(2));
  };
  Boxes.prototype.scaleHorizontally_esg2in$ = function (s, box) {
    return new Box(box.a, box.b.times_14dthe$(s), box.c);
  };
  Boxes.prototype.scaleVertically_esg2in$ = function (s, box) {
    return new Box(box.a, box.b, box.c.times_14dthe$(s));
  };
  Boxes.prototype.moveHorizontally_esg2in$ = function (offset, box) {
    return new Box(box.a.plus_jxo2pn$(box.b.times_14dthe$(offset)), box.b, box.c);
  };
  Boxes.prototype.moveVertically_esg2in$ = function (offset, box) {
    return new Box(box.a.plus_jxo2pn$(box.c.times_14dthe$(offset)), box.b, box.c);
  };
  Boxes.prototype.splitHorizontally_esg2in$ = function (f, box) {
    var $receiver = invoke(getCallableRef('moveVertically', function ($receiver, offset, box) {
      return $receiver.moveVertically_esg2in$(offset, box);
    }.bind(null, Boxes_getInstance())), 1.0 - f)(box);
    var top = invoke(getCallableRef('scaleVertically', function ($receiver, s, box) {
      return $receiver.scaleVertically_esg2in$(s, box);
    }.bind(null, Boxes_getInstance())), f)($receiver);
    var bottom = invoke(getCallableRef('scaleVertically', function ($receiver, s, box) {
      return $receiver.scaleVertically_esg2in$(s, box);
    }.bind(null, Boxes_getInstance())), 1.0 - f)(box);
    return new Pair(top, bottom);
  };
  Boxes.prototype.splitVertically_esg2in$ = function (f, box) {
    var left = invoke(getCallableRef('scaleHorizontally', function ($receiver, s, box) {
      return $receiver.scaleHorizontally_esg2in$(s, box);
    }.bind(null, Boxes_getInstance())), f)(box);
    var $receiver = invoke(getCallableRef('moveHorizontally', function ($receiver, offset, box) {
      return $receiver.moveHorizontally_esg2in$(offset, box);
    }.bind(null, Boxes_getInstance())), f)(box);
    var right = invoke(getCallableRef('scaleHorizontally', function ($receiver, s, box) {
      return $receiver.scaleHorizontally_esg2in$(s, box);
    }.bind(null, Boxes_getInstance())), 1.0 - f)($receiver);
    return new Pair(left, right);
  };
  Boxes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Boxes',
    interfaces: []
  };
  var Boxes_instance = null;
  function Boxes_getInstance() {
    if (Boxes_instance === null) {
      new Boxes();
    }
    return Boxes_instance;
  }
  function getColor(styleColor) {
    if (equals(styleColor, StyleColor$Black_getInstance()))
      return 'black';
    else if (equals(styleColor, StyleColor$Grey_getInstance()))
      return 'grey';
    else if (equals(styleColor, StyleColor$White_getInstance()))
      return 'white';
    else if (equals(styleColor, StyleColor$Red_getInstance()))
      return 'orangeRed';
    else if (equals(styleColor, StyleColor$Brown_getInstance()))
      return 'tan';
    else if (equals(styleColor, StyleColor$Beige_getInstance()))
      return 'beige';
    else if (equals(styleColor, StyleColor$Green_getInstance()))
      return 'green';
    else if (equals(styleColor, StyleColor$Yellow_getInstance()))
      return 'yellow';
    else
      return Kotlin.noWhenBranchMatched();
  }
  function applyStyle(strokeStyle, fillStyle, context) {
    var tmp$, tmp$_0, tmp$_1;
    context.strokeStyle = (tmp$ = strokeStyle != null ? strokeStyle.strokeColor : null) != null ? getColor(tmp$) : null;
    if ((tmp$_0 = strokeStyle != null ? strokeStyle.strokeWidth : null) != null) {
      context.lineWidth = tmp$_0;
    }
    context.fillStyle = (tmp$_1 = fillStyle != null ? fillStyle.fillColor : null) != null ? getColor(tmp$_1) : null;
    if (strokeStyle != null) {
      context.stroke();
    }
    if (fillStyle != null) {
      context.fill();
    }
  }
  var blackStrokeStyle;
  function render$adjustHeight(closure$height) {
    return function (y) {
      return closure$height - y;
    };
  }
  function render$drawShape(closure$context, closure$adjustHeight) {
    return function (shape, style) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (Kotlin.isType(shape, Polygon)) {
        var first_0 = first(shape.points);
        closure$context.beginPath();
        closure$context.moveTo(first_0.x, closure$adjustHeight(first_0.y));
        var $receiver = drop(shape.points, 1);
        var tmp$_4;
        tmp$_4 = $receiver.iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          closure$context.lineTo(element.x, closure$adjustHeight(element.y));
        }
        closure$context.closePath();
        applyStyle((tmp$ = style.stroke) != null ? tmp$ : blackStrokeStyle, style.fill, closure$context);
      }
       else if (Kotlin.isType(shape, Curve)) {
        closure$context.beginPath();
        closure$context.moveTo(shape.point1.x, closure$adjustHeight(shape.point1.y));
        closure$context.bezierCurveTo(shape.point2.x, closure$adjustHeight(shape.point2.y), shape.point3.x, closure$adjustHeight(shape.point3.y), shape.point4.x, closure$adjustHeight(shape.point4.y));
        applyStyle((tmp$_0 = style.stroke) != null ? tmp$_0 : blackStrokeStyle, style.fill, closure$context);
      }
       else if (Kotlin.isType(shape, Path)) {
        closure$context.beginPath();
        closure$context.moveTo(shape.start.x, closure$adjustHeight(shape.start.y));
        var $receiver_0 = shape.beziers;
        var tmp$_5;
        tmp$_5 = $receiver_0.iterator();
        while (tmp$_5.hasNext()) {
          var element_0 = tmp$_5.next();
          var closure$context_0 = closure$context;
          var closure$adjustHeight_0 = closure$adjustHeight;
          closure$context_0.bezierCurveTo(element_0.controlPoint1.x, closure$adjustHeight_0(element_0.controlPoint1.y), element_0.controlPoint2.x, closure$adjustHeight_0(element_0.controlPoint2.y), element_0.endPoint.x, closure$adjustHeight_0(element_0.endPoint.y));
        }
        closure$context.closePath();
        applyStyle(style.stroke, style.fill, closure$context);
      }
       else if (Kotlin.isType(shape, Line)) {
        closure$context.beginPath();
        closure$context.moveTo(shape.lineStart.x, closure$adjustHeight(shape.lineStart.y));
        closure$context.lineTo(shape.lineStart.x, closure$adjustHeight(shape.lineStart.y));
        applyStyle((tmp$_1 = style.stroke) != null ? tmp$_1 : blackStrokeStyle, style.fill, closure$context);
      }
       else if (Kotlin.isType(shape, Circle)) {
        closure$context.beginPath();
        closure$context.ellipse(shape.center.x, closure$adjustHeight(shape.center.y), shape.radius.size(), shape.radius.size(), 0.0, 0.0, 0.0);
        applyStyle((tmp$_2 = style.stroke) != null ? tmp$_2 : blackStrokeStyle, (tmp$_3 = style.fill) != null ? tmp$_3 : new FillStyle(StyleColor$Yellow_getInstance()), closure$context);
      }
       else
        Kotlin.noWhenBranchMatched();
    };
  }
  function render(width, height, context, styledShapes) {
    var adjustHeight = render$adjustHeight(height);
    var drawShape = render$drawShape(context, adjustHeight);
    context.canvas.height = height;
    context.canvas.width = width;
    var tmp$;
    tmp$ = styledShapes.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var shape = element.component1()
      , style = element.component2();
      drawShape(shape, style);
    }
  }
  var defaultWidth;
  var defaultHeight;
  var pages;
  function fittedBox(width, height) {
    return new Box(new Vector(0.0, 0.0), new Vector(width, 0.0), new Vector(0.0, height));
  }
  function expandedBox(width, height) {
    return new Box(new Vector(width / 4.0, height / 4.0), new Vector(width / 2.0, 0.0), new Vector(0.0, height / 2.0));
  }
  function bandBox(width, height) {
    return new Box(new Vector(width / 8.0, height / 8.0), new Vector(3200.0, 0.0), new Vector(0.0, 600.0));
  }
  function draw$lambda(closure$width, closure$height, closure$boxFactory, closure$picture) {
    return function (renderer) {
      var tmp$ = closure$width;
      var tmp$_0 = closure$height;
      var $receiver = closure$boxFactory(closure$width, closure$height);
      renderer(tmp$, tmp$_0, closure$picture($receiver));
      return Unit;
    };
  }
  function draw(boxFactory, picture, width, height) {
    if (width === void 0)
      width = defaultWidth;
    if (height === void 0)
      height = defaultHeight;
    return draw$lambda(width, height, boxFactory, picture);
  }
  function draw$lambda_0(closure$width, closure$height, closure$boxFactory, closure$hue, closure$lensPicture) {
    return function (renderer) {
      var tmp$ = closure$width;
      var tmp$_0 = closure$height;
      var $receiver = new Lens(closure$boxFactory(closure$width, closure$height), closure$hue);
      renderer(tmp$, tmp$_0, closure$lensPicture($receiver));
      return Unit;
    };
  }
  function draw_0(boxFactory, hue, lensPicture, width, height) {
    if (width === void 0)
      width = defaultWidth;
    if (height === void 0)
      height = defaultHeight;
    return draw$lambda_0(width, height, boxFactory, hue, lensPicture);
  }
  function main$lambda(closure$context) {
    return function (width, height, styledShapes) {
      render(width, height, closure$context, styledShapes);
      return Unit;
    };
  }
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var page = getPage(window.location.search);
    if (page > 1) {
      setPage(Kotlin.isType(tmp$ = document.getElementById('prev'), HTMLDivElement) ? tmp$ : throwCCE(), page - 1 | 0);
    }
    if (page < pages.size) {
      setPage(Kotlin.isType(tmp$_0 = document.getElementById('next'), HTMLDivElement) ? tmp$_0 : throwCCE(), page + 1 | 0);
    }
    setTitle('page ' + page);
    var canvas = Kotlin.isType(tmp$_1 = document.getElementById('myCanvas'), HTMLCanvasElement) ? tmp$_1 : throwCCE();
    var context = Kotlin.isType(tmp$_2 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_2 : throwCCE();
    var renderer = main$lambda(context);
    (tmp$_3 = pages.get_11rb$(page - 1 | 0)) != null ? tmp$_3(renderer) : null;
  }
  var toBoxedChar = Kotlin.toBoxedChar;
  function getPage(search) {
    var baseIx = indexOf(search, 'page=');
    var offset = 'page='.length;
    var tmp$;
    if (baseIx < 0)
      tmp$ = 1;
    else {
      var $receiver = drop_0(search, baseIx + offset | 0);
      var takeWhile$result;
      takeWhile$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.length - 1 | 0;
        for (var index = 0; index <= tmp$_0; index++) {
          var it = toBoxedChar($receiver.charCodeAt(index));
          if (!(new CharRange(48, 57)).contains_mef7kx$(unboxChar(it))) {
            takeWhile$result = $receiver.substring(0, index);
            break takeWhile$break;
          }
        }
        takeWhile$result = $receiver;
      }
       while (false);
      tmp$ = toInt(takeWhile$result);
    }
    return tmp$;
  }
  function setPage(div, pageNr) {
    var tmp$;
    var a = Kotlin.isType(tmp$ = document.createElement('a'), HTMLAnchorElement) ? tmp$ : throwCCE();
    div.appendChild(a);
    a.href = 'index.html?page=' + pageNr + '&ts=' + (new Date()).getTime();
    a.text = 'to page ' + pageNr;
  }
  function setTitle(value) {
    var tmp$;
    var div = Kotlin.isType(tmp$ = document.getElementById('title'), HTMLDivElement) ? tmp$ : throwCCE();
    div.textContent = value;
  }
  function Shape() {
  }
  Shape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shape',
    interfaces: []
  };
  function Polygon(points) {
    Shape.call(this);
    this.points = points;
  }
  Polygon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polygon',
    interfaces: [Shape]
  };
  Polygon.prototype.component1 = function () {
    return this.points;
  };
  Polygon.prototype.copy_t0b9zq$ = function (points) {
    return new Polygon(points === void 0 ? this.points : points);
  };
  Polygon.prototype.toString = function () {
    return 'Polygon(points=' + Kotlin.toString(this.points) + ')';
  };
  Polygon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  Polygon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.points, other.points))));
  };
  function Curve(point1, point2, point3, point4) {
    Shape.call(this);
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.point4 = point4;
  }
  Curve.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Curve',
    interfaces: [Shape]
  };
  Curve.prototype.component1 = function () {
    return this.point1;
  };
  Curve.prototype.component2 = function () {
    return this.point2;
  };
  Curve.prototype.component3 = function () {
    return this.point3;
  };
  Curve.prototype.component4 = function () {
    return this.point4;
  };
  Curve.prototype.copy_rg5ehk$ = function (point1, point2, point3, point4) {
    return new Curve(point1 === void 0 ? this.point1 : point1, point2 === void 0 ? this.point2 : point2, point3 === void 0 ? this.point3 : point3, point4 === void 0 ? this.point4 : point4);
  };
  Curve.prototype.toString = function () {
    return 'Curve(point1=' + Kotlin.toString(this.point1) + (', point2=' + Kotlin.toString(this.point2)) + (', point3=' + Kotlin.toString(this.point3)) + (', point4=' + Kotlin.toString(this.point4)) + ')';
  };
  Curve.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.point1) | 0;
    result = result * 31 + Kotlin.hashCode(this.point2) | 0;
    result = result * 31 + Kotlin.hashCode(this.point3) | 0;
    result = result * 31 + Kotlin.hashCode(this.point4) | 0;
    return result;
  };
  Curve.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.point1, other.point1) && Kotlin.equals(this.point2, other.point2) && Kotlin.equals(this.point3, other.point3) && Kotlin.equals(this.point4, other.point4)))));
  };
  function Bezier(controlPoint1, controlPoint2, endPoint) {
    this.controlPoint1 = controlPoint1;
    this.controlPoint2 = controlPoint2;
    this.endPoint = endPoint;
  }
  Bezier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bezier',
    interfaces: []
  };
  Bezier.prototype.component1 = function () {
    return this.controlPoint1;
  };
  Bezier.prototype.component2 = function () {
    return this.controlPoint2;
  };
  Bezier.prototype.component3 = function () {
    return this.endPoint;
  };
  Bezier.prototype.copy_epkc61$ = function (controlPoint1, controlPoint2, endPoint) {
    return new Bezier(controlPoint1 === void 0 ? this.controlPoint1 : controlPoint1, controlPoint2 === void 0 ? this.controlPoint2 : controlPoint2, endPoint === void 0 ? this.endPoint : endPoint);
  };
  Bezier.prototype.toString = function () {
    return 'Bezier(controlPoint1=' + Kotlin.toString(this.controlPoint1) + (', controlPoint2=' + Kotlin.toString(this.controlPoint2)) + (', endPoint=' + Kotlin.toString(this.endPoint)) + ')';
  };
  Bezier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.controlPoint1) | 0;
    result = result * 31 + Kotlin.hashCode(this.controlPoint2) | 0;
    result = result * 31 + Kotlin.hashCode(this.endPoint) | 0;
    return result;
  };
  Bezier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.controlPoint1, other.controlPoint1) && Kotlin.equals(this.controlPoint2, other.controlPoint2) && Kotlin.equals(this.endPoint, other.endPoint)))));
  };
  function Path(start, beziers) {
    Shape.call(this);
    this.start = start;
    this.beziers = beziers;
  }
  Path.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Path',
    interfaces: [Shape]
  };
  Path.prototype.component1 = function () {
    return this.start;
  };
  Path.prototype.component2 = function () {
    return this.beziers;
  };
  Path.prototype.copy_lfi4vr$ = function (start, beziers) {
    return new Path(start === void 0 ? this.start : start, beziers === void 0 ? this.beziers : beziers);
  };
  Path.prototype.toString = function () {
    return 'Path(start=' + Kotlin.toString(this.start) + (', beziers=' + Kotlin.toString(this.beziers)) + ')';
  };
  Path.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.beziers) | 0;
    return result;
  };
  Path.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.beziers, other.beziers)))));
  };
  function Line(lineStart, lineEnd) {
    Shape.call(this);
    this.lineStart = lineStart;
    this.lineEnd = lineEnd;
  }
  Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Shape]
  };
  Line.prototype.component1 = function () {
    return this.lineStart;
  };
  Line.prototype.component2 = function () {
    return this.lineEnd;
  };
  Line.prototype.copy_xigc8m$ = function (lineStart, lineEnd) {
    return new Line(lineStart === void 0 ? this.lineStart : lineStart, lineEnd === void 0 ? this.lineEnd : lineEnd);
  };
  Line.prototype.toString = function () {
    return 'Line(lineStart=' + Kotlin.toString(this.lineStart) + (', lineEnd=' + Kotlin.toString(this.lineEnd)) + ')';
  };
  Line.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lineStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineEnd) | 0;
    return result;
  };
  Line.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lineStart, other.lineStart) && Kotlin.equals(this.lineEnd, other.lineEnd)))));
  };
  function Circle(center, radius) {
    Shape.call(this);
    this.center = center;
    this.radius = radius;
  }
  Circle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Circle',
    interfaces: [Shape]
  };
  Circle.prototype.component1 = function () {
    return this.center;
  };
  Circle.prototype.component2 = function () {
    return this.radius;
  };
  Circle.prototype.copy_xigc8m$ = function (center, radius) {
    return new Circle(center === void 0 ? this.center : center, radius === void 0 ? this.radius : radius);
  };
  Circle.prototype.toString = function () {
    return 'Circle(center=' + Kotlin.toString(this.center) + (', radius=' + Kotlin.toString(this.radius)) + ')';
  };
  Circle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.center) | 0;
    result = result * 31 + Kotlin.hashCode(this.radius) | 0;
    return result;
  };
  Circle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.center, other.center) && Kotlin.equals(this.radius, other.radius)))));
  };
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  Vector.prototype.plus_jxo2pn$ = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
  };
  Vector.prototype.minus_jxo2pn$ = function (other) {
    return new Vector(this.x - other.x, this.y - other.y);
  };
  Vector.prototype.unaryMinus = function () {
    return new Vector(-this.x, -this.y);
  };
  Vector.prototype.div_za3lpa$ = function (divisor) {
    return new Vector(this.x / divisor, this.y / divisor);
  };
  Vector.prototype.times_14dthe$ = function (t) {
    return new Vector(this.x * t, this.y * t);
  };
  var Math_0 = Math;
  Vector.prototype.size = function () {
    var x = this.x * this.x + this.y * this.y;
    return Math_0.sqrt(x);
  };
  Vector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector',
    interfaces: []
  };
  Vector.prototype.component1 = function () {
    return this.x;
  };
  Vector.prototype.component2 = function () {
    return this.y;
  };
  Vector.prototype.copy_lu1900$ = function (x, y) {
    return new Vector(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vector.prototype.toString = function () {
    return 'Vector(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Vector.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vector.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Fishy() {
    Fishy_instance = this;
    this.hendersonFishShapes = listOf([new Curve(new Vector(0.116, 0.702), new Vector(0.26, 0.295), new Vector(0.33, 0.258), new Vector(0.815, 0.078)), new Curve(new Vector(0.564, 0.032), new Vector(0.73, 0.056), new Vector(0.834, 0.042), new Vector(1.0, 0.0)), new Curve(new Vector(0.25, 0.25), new Vector(0.372, 0.194), new Vector(0.452, 0.132), new Vector(0.564, 0.032)), new Curve(new Vector(0.0, 0.0), new Vector(0.11, 0.11), new Vector(0.175, 0.175), new Vector(0.25, 0.25)), new Curve(new Vector(-0.25, 0.25), new Vector(-0.15, 0.15), new Vector(-0.09, 0.09), new Vector(0.0, 0.0)), new Curve(new Vector(-0.25, 0.25), new Vector(-0.194, 0.372), new Vector(-0.132, 0.452), new Vector(-0.032, 0.564)), new Curve(new Vector(-0.032, 0.564), new Vector(0.055, 0.355), new Vector(0.08, 0.33), new Vector(0.25, 0.25)), new Curve(new Vector(-0.032, 0.564), new Vector(-0.056, 0.73), new Vector(-0.042, 0.834), new Vector(0.0, 1.0)), new Curve(new Vector(0.0, 1.0), new Vector(0.104, 0.938), new Vector(0.163, 0.893), new Vector(0.234, 0.798)), new Curve(new Vector(0.234, 0.798), new Vector(0.368, 0.65), new Vector(0.232, 0.54), new Vector(0.377, 0.377)), new Curve(new Vector(0.377, 0.377), new Vector(0.4, 0.35), new Vector(0.45, 0.3), new Vector(0.5, 0.25)), new Curve(new Vector(0.5, 0.25), new Vector(0.589, 0.217), new Vector(0.66, 0.208), new Vector(0.766, 0.202)), new Curve(new Vector(0.766, 0.202), new Vector(0.837, 0.107), new Vector(0.896, 0.062), new Vector(1.0, 0.0)), new Curve(new Vector(0.234, 0.798), new Vector(0.34, 0.792), new Vector(0.411, 0.783), new Vector(0.5, 0.75)), new Curve(new Vector(0.5, 0.75), new Vector(0.5, 0.625), new Vector(0.5, 0.575), new Vector(0.5, 0.5)), new Curve(new Vector(0.5, 0.5), new Vector(0.46, 0.46), new Vector(0.41, 0.41), new Vector(0.377, 0.377)), new Curve(new Vector(0.315, 0.71), new Vector(0.378, 0.732), new Vector(0.426, 0.726), new Vector(0.487, 0.692)), new Curve(new Vector(0.34, 0.605), new Vector(0.4, 0.642), new Vector(0.435, 0.647), new Vector(0.489, 0.626)), new Curve(new Vector(0.348, 0.502), new Vector(0.4, 0.564), new Vector(0.422, 0.568), new Vector(0.489, 0.563)), new Curve(new Vector(0.451, 0.418), new Vector(0.465, 0.4), new Vector(0.48, 0.385), new Vector(0.49, 0.381)), new Curve(new Vector(0.421, 0.388), new Vector(0.44, 0.35), new Vector(0.455, 0.335), new Vector(0.492, 0.325)), new Curve(new Vector(-0.17, 0.237), new Vector(-0.125, 0.355), new Vector(-0.065, 0.405), new Vector(0.002, 0.436)), new Curve(new Vector(-0.121, 0.188), new Vector(-0.06, 0.3), new Vector(-0.03, 0.33), new Vector(0.04, 0.375)), new Curve(new Vector(-0.058, 0.125), new Vector(-0.01, 0.24), new Vector(0.03, 0.28), new Vector(0.1, 0.321)), new Curve(new Vector(-0.022, 0.063), new Vector(0.06, 0.2), new Vector(0.1, 0.24), new Vector(0.16, 0.282)), new Curve(new Vector(0.053, 0.658), new Vector(0.075, 0.677), new Vector(0.085, 0.687), new Vector(0.098, 0.7)), new Curve(new Vector(0.053, 0.658), new Vector(0.042, 0.71), new Vector(0.042, 0.76), new Vector(0.053, 0.819)), new Curve(new Vector(0.053, 0.819), new Vector(0.085, 0.812), new Vector(0.092, 0.752), new Vector(0.098, 0.7)), new Curve(new Vector(0.13, 0.718), new Vector(0.15, 0.73), new Vector(0.175, 0.745), new Vector(0.187, 0.752)), new Curve(new Vector(0.13, 0.718), new Vector(0.11, 0.795), new Vector(0.11, 0.81), new Vector(0.112, 0.845)), new Curve(new Vector(0.112, 0.845), new Vector(0.15, 0.805), new Vector(0.172, 0.78), new Vector(0.187, 0.752))]);
  }
  Fishy.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Fishy',
    interfaces: []
  };
  var Fishy_instance = null;
  function Fishy_getInstance() {
    if (Fishy_instance === null) {
      new Fishy();
    }
    return Fishy_instance;
  }
  function Letter() {
    Letter_instance = this;
    this.f = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.4, 0.2), new Vector(0.4, 0.45), new Vector(0.6, 0.45), new Vector(0.6, 0.55), new Vector(0.4, 0.55), new Vector(0.4, 0.7), new Vector(0.7, 0.7), new Vector(0.7, 0.8), new Vector(0.3, 0.8)]));
    this.h = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.4, 0.2), new Vector(0.4, 0.45), new Vector(0.6, 0.45), new Vector(0.6, 0.2), new Vector(0.7, 0.2), new Vector(0.7, 0.8), new Vector(0.6, 0.8), new Vector(0.6, 0.55), new Vector(0.4, 0.55), new Vector(0.4, 0.8), new Vector(0.3, 0.8)]));
    this.e = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.7, 0.2), new Vector(0.7, 0.3), new Vector(0.4, 0.3), new Vector(0.4, 0.45), new Vector(0.6, 0.45), new Vector(0.6, 0.55), new Vector(0.4, 0.55), new Vector(0.4, 0.7), new Vector(0.7, 0.7), new Vector(0.7, 0.8), new Vector(0.3, 0.8)]));
    this.n = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.4, 0.2), new Vector(0.4, 0.6), new Vector(0.6, 0.2), new Vector(0.7, 0.2), new Vector(0.7, 0.8), new Vector(0.6, 0.8), new Vector(0.6, 0.4), new Vector(0.4, 0.8), new Vector(0.3, 0.8)]));
    this.d1 = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.55, 0.2), new Vector(0.7, 0.35), new Vector(0.7, 0.65), new Vector(0.55, 0.8), new Vector(0.3, 0.8)]));
    this.d2 = new Polygon(listOf([new Vector(0.4, 0.3), new Vector(0.52, 0.3), new Vector(0.6, 0.38), new Vector(0.6, 0.62), new Vector(0.52, 0.7), new Vector(0.4, 0.7)]));
    this.r1 = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.4, 0.2), new Vector(0.4, 0.45), new Vector(0.45, 0.45), new Vector(0.6, 0.2), new Vector(0.7, 0.2), new Vector(0.55, 0.45), new Vector(0.7, 0.45), new Vector(0.7, 0.8), new Vector(0.3, 0.8)]));
    this.r2 = new Polygon(listOf([new Vector(0.4, 0.55), new Vector(0.6, 0.55), new Vector(0.6, 0.7), new Vector(0.4, 0.7)]));
    this.s = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.7, 0.2), new Vector(0.7, 0.55), new Vector(0.4, 0.55), new Vector(0.4, 0.7), new Vector(0.7, 0.7), new Vector(0.7, 0.8), new Vector(0.3, 0.8), new Vector(0.3, 0.45), new Vector(0.6, 0.45), new Vector(0.6, 0.3), new Vector(0.3, 0.3)]));
    this.o1 = new Polygon(listOf([new Vector(0.3, 0.2), new Vector(0.7, 0.2), new Vector(0.7, 0.8), new Vector(0.3, 0.8)]));
    this.o2 = new Polygon(listOf([new Vector(0.4, 0.3), new Vector(0.6, 0.3), new Vector(0.6, 0.7), new Vector(0.4, 0.7)]));
  }
  Letter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Letter',
    interfaces: []
  };
  var Letter_instance = null;
  function Letter_getInstance() {
    if (Letter_instance === null) {
      new Letter();
    }
    return Letter_instance;
  }
  function Limited() {
    Limited_instance = this;
    this.blank = Limited$blank$lambda;
    this.aboveBand = invoke_2(getCallableRef('bandify', function ($receiver, combineRatio, n, first, middle, last) {
      return $receiver.bandify_sa2nic$(combineRatio, n, first, middle, last);
    }.bind(null, Limited_getInstance())), getCallableRef('aboveRatio', function (m, n, p1, p2) {
      return Pictures_getInstance().aboveRatio_15ywoe$(m, n, p1, p2);
    }));
    this.besideBand = invoke_2(getCallableRef('bandify', function ($receiver, combineRatio, n, first, middle, last) {
      return $receiver.bandify_sa2nic$(combineRatio, n, first, middle, last);
    }.bind(null, Limited_getInstance())), getCallableRef('besideRatio', function (m, n, p1, p2) {
      return Pictures_getInstance().besideRatio_15ywoe$(m, n, p1, p2);
    }));
  }
  Limited.prototype.ttile_yrm8pt$ = function (f) {
    var $receiver = Pictures_getInstance().toss_yrm8pt$(f);
    var fishN = Pictures_getInstance().flip_yrm8pt$($receiver);
    var $receiver_0 = Pictures_getInstance().turn_yrm8pt$(fishN);
    var $receiver_1 = Pictures_getInstance().turn_yrm8pt$($receiver_0);
    var fishE = Pictures_getInstance().turn_yrm8pt$($receiver_1);
    return Pictures_getInstance().over_9ur9hu$(f, Pictures_getInstance().over_9ur9hu$(fishN, fishE));
  };
  Limited.prototype.utile_yrm8pt$ = function (f) {
    var $receiver = Pictures_getInstance().toss_yrm8pt$(f);
    var fishN = Pictures_getInstance().flip_yrm8pt$($receiver);
    var fishW = Pictures_getInstance().turn_yrm8pt$(fishN);
    var fishS = Pictures_getInstance().turn_yrm8pt$(fishW);
    var fishE = Pictures_getInstance().turn_yrm8pt$(fishS);
    return Pictures_getInstance().over_9ur9hu$(Pictures_getInstance().over_9ur9hu$(fishN, fishW), Pictures_getInstance().over_9ur9hu$(fishE, fishS));
  };
  Limited.prototype.quartet_dq4sug$ = function (p, q, r, s) {
    return Pictures_getInstance().above_9ur9hu$(Pictures_getInstance().beside_9ur9hu$(p, q), Pictures_getInstance().beside_9ur9hu$(r, s));
  };
  Limited.prototype.side_jsytn9$ = function (n, p) {
    var s = n === 1 ? this.blank : this.side_jsytn9$(n - 1 | 0, p);
    var t = this.ttile_yrm8pt$(p);
    return this.quartet_dq4sug$.call(this, s, s, Pictures_getInstance().turn_yrm8pt$(t), t);
  };
  Limited.prototype.corner_jsytn9$ = function (n, p) {
    var tmp$ = n === 1 ? new Pair(this.blank, this.blank) : new Pair(this.corner_jsytn9$(n - 1 | 0, p), this.side_jsytn9$(n - 1 | 0, p));
    var c = tmp$.component1()
    , s = tmp$.component2();
    var u = this.utile_yrm8pt$(p);
    return this.quartet_dq4sug$.call(this, c, s, Pictures_getInstance().turn_yrm8pt$(s), u);
  };
  Limited.prototype.nonet_ydnit3$ = function (p, q, r, s, t, u, v, w, x) {
    return Pictures_getInstance().aboveRatio_15ywoe$(1, 2, Pictures_getInstance().besideRatio_15ywoe$(1, 2, p, Pictures_getInstance().beside_9ur9hu$(q, r)), Pictures_getInstance().aboveRatio_15ywoe$(1, 1, Pictures_getInstance().besideRatio_15ywoe$(1, 2, s, Pictures_getInstance().beside_9ur9hu$(t, u)), Pictures_getInstance().besideRatio_15ywoe$(1, 2, v, Pictures_getInstance().beside_9ur9hu$(w, x))));
  };
  function Limited$bandify$lambda(closure$combineRatio) {
    return function (item, f) {
      var p = f.component1()
      , ratio = f.component2();
      return new Pair(closure$combineRatio(1, ratio, item, p), ratio + 1 | 0);
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Limited.prototype.bandify_sa2nic$ = function (combineRatio, n, first, middle, last) {
    var tmp$ = listOf_0(first);
    var size = n - 2 | 0;
    var list = ArrayList_init(size);
    var tmp$_0;
    tmp$_0 = size - 1 | 0;
    for (var index = 0; index <= tmp$_0; index++) {
      list.add_11rb$(middle);
    }
    var pictures = plus(tmp$, list);
    var operation = Limited$bandify$lambda(combineRatio);
    var accumulator = new Pair(last, 1);
    if (!pictures.isEmpty()) {
      var iterator = pictures.listIterator_za3lpa$(pictures.size);
      while (iterator.hasPrevious()) {
        accumulator = operation(iterator.previous(), accumulator);
      }
    }
    var result = accumulator.component1();
    return result;
  };
  Limited.prototype.egg_8to6zl$ = function (n, m, p) {
    var sideN = this.side_jsytn9$(n, p);
    var $receiver = Pictures_getInstance().turn_yrm8pt$(sideN);
    var sideS = Pictures_getInstance().turn_yrm8pt$($receiver);
    var center = this.utile_yrm8pt$(p);
    var topband = this.besideBand(m, sideN, sideN, sideN);
    var midband = this.besideBand(m, center, center, center);
    var botband = this.besideBand(m, sideS, sideS, sideS);
    var band = this.aboveBand(n, topband, midband, botband);
    return band;
  };
  Limited.prototype.eggband_jsytn9$ = function (n, picture) {
    var theSide = this.side_jsytn9$(n, picture);
    var q = theSide;
    var t = getCallableRef('utile', function ($receiver, f) {
      return $receiver.utile_yrm8pt$(f);
    }.bind(null, Limited_getInstance()))(picture);
    var $receiver = Pictures_getInstance().turn_yrm8pt$(theSide);
    var w = Pictures_getInstance().turn_yrm8pt$($receiver);
    return this.nonet_ydnit3$(q, q, q, t, t, t, w, w, w);
  };
  Limited.prototype.squareLimit_jsytn9$ = function (n, p) {
    var cornerNW = this.corner_jsytn9$(n, p);
    var cornerSW = Pictures_getInstance().turn_yrm8pt$(cornerNW);
    var cornerSE = Pictures_getInstance().turn_yrm8pt$(cornerSW);
    var cornerNE = Pictures_getInstance().turn_yrm8pt$(cornerSE);
    var sideN = this.side_jsytn9$(n, p);
    var sideW = Pictures_getInstance().turn_yrm8pt$(sideN);
    var sideS = Pictures_getInstance().turn_yrm8pt$(sideW);
    var sideE = Pictures_getInstance().turn_yrm8pt$(sideS);
    var center = this.utile_yrm8pt$(p);
    return this.nonet_ydnit3$(cornerNW, sideN, cornerNE, sideW, center, sideE, cornerSW, sideS, cornerSE);
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function Limited$blank$lambda(f) {
    return emptyList();
  }
  Limited.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Limited',
    interfaces: []
  };
  var Limited_instance = null;
  function Limited_getInstance() {
    if (Limited_instance === null) {
      new Limited();
    }
    return Limited_instance;
  }
  function Pictures() {
    Pictures_instance = this;
  }
  Pictures.prototype.lift_0 = function (f, p) {
    return andThen_0(f, p);
  };
  Pictures.prototype.turn_yrm8pt$ = function (p) {
    return this.lift_0(getCallableRef('turn', function ($receiver, box) {
      return $receiver.turn_es3rdf$(box);
    }.bind(null, Boxes_getInstance())), p);
  };
  Pictures.prototype.flip_yrm8pt$ = function (p) {
    return this.lift_0(getCallableRef('flip', function ($receiver, box) {
      return $receiver.flip_es3rdf$(box);
    }.bind(null, Boxes_getInstance())), p);
  };
  Pictures.prototype.toss_yrm8pt$ = function (p) {
    return this.lift_0(getCallableRef('toss', function ($receiver, box) {
      return $receiver.toss_es3rdf$(box);
    }.bind(null, Boxes_getInstance())), p);
  };
  function Pictures$besideRatio$lambda(closure$m, closure$n, closure$p1, closure$p2) {
    return function (box) {
      var factor = closure$m / (closure$m + closure$n | 0);
      var tmp$ = Boxes_getInstance().splitVertically_esg2in$(factor, box);
      var b1 = tmp$.component1()
      , b2 = tmp$.component2();
      return plus(closure$p1(b1), closure$p2(b2));
    };
  }
  Pictures.prototype.besideRatio_15ywoe$ = function (m, n, p1, p2) {
    return Pictures$besideRatio$lambda(m, n, p1, p2);
  };
  Pictures.prototype.beside_9ur9hu$ = function (p1, p2) {
    return this.besideRatio_15ywoe$(1, 1, p1, p2);
  };
  function Pictures$aboveRatio$lambda(closure$m, closure$n, closure$p1, closure$p2) {
    return function (box) {
      var factor = closure$m / (closure$m + closure$n | 0);
      var tmp$ = Boxes_getInstance().splitHorizontally_esg2in$(factor, box);
      var b1 = tmp$.component1()
      , b2 = tmp$.component2();
      return plus(closure$p1(b1), closure$p2(b2));
    };
  }
  Pictures.prototype.aboveRatio_15ywoe$ = function (m, n, p1, p2) {
    return Pictures$aboveRatio$lambda(m, n, p1, p2);
  };
  Pictures.prototype.above_9ur9hu$ = function (p1, p2) {
    return this.aboveRatio_15ywoe$(1, 1, p1, p2);
  };
  function Pictures$over$lambda(closure$p1, closure$p2) {
    return function (box) {
      return plus(closure$p1(box), closure$p2(box));
    };
  }
  Pictures.prototype.over_9ur9hu$ = function (p1, p2) {
    return Pictures$over$lambda(p1, p2);
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Pictures.prototype.createPicture_8q43mq$ = function (shapes) {
    return this.createPicture_gbxftc$.call(this, copyToArray(shapes).slice());
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function Pictures$createPicture$lambda(closure$shapes) {
    return function (box) {
      var m = invoke(getCallableRef('mapper', function (box, v) {
        return mapper(box, v);
      }), box);
      var style = getStyle(box);
      var $receiver = closure$shapes;
      var transform = mapShape(m);
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(transform(item));
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        destination_0.add_11rb$(new Pair(item_0, style));
      }
      return destination_0;
    };
  }
  Pictures.prototype.createPicture_gbxftc$ = function (shapes) {
    return Pictures$createPicture$lambda(shapes);
  };
  Pictures.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Pictures',
    interfaces: []
  };
  var Pictures_instance = null;
  function Pictures_getInstance() {
    if (Pictures_instance === null) {
      new Pictures();
    }
    return Pictures_instance;
  }
  function mapper(box, v) {
    return box.a.plus_jxo2pn$(box.b.times_14dthe$(v.x)).plus_jxo2pn$(box.c.times_14dthe$(v.y));
  }
  function mapShape$lambda$lambda(closure$m) {
    return function (it) {
      return new Bezier(closure$m(it.controlPoint1), closure$m(it.controlPoint2), closure$m(it.endPoint));
    };
  }
  function mapShape$lambda(closure$m) {
    return function (it) {
      if (Kotlin.isType(it, Polygon)) {
        var $receiver = it.points;
        var transform = closure$m;
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(transform(item));
        }
        return new Polygon(destination);
      }
       else if (Kotlin.isType(it, Curve))
        return new Curve(closure$m(it.point1), closure$m(it.point2), closure$m(it.point3), closure$m(it.point4));
      else if (Kotlin.isType(it, Path)) {
        var bezierMapper = mapShape$lambda$lambda(closure$m);
        var tmp$_0 = closure$m(it.start);
        var $receiver_0 = it.beziers;
        var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          destination_0.add_11rb$(bezierMapper(item_0));
        }
        return new Path(tmp$_0, destination_0);
      }
       else if (Kotlin.isType(it, Line))
        return new Line(closure$m(it.lineStart), closure$m(it.lineEnd));
      else if (Kotlin.isType(it, Circle))
        return new Circle(closure$m(it.center), closure$m(it.center.plus_jxo2pn$(it.radius)).minus_jxo2pn$(closure$m(it.center)));
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  function mapShape(m) {
    return mapShape$lambda(m);
  }
  function getStrokeWidth(box) {
    var a = box.b.size();
    var b = box.c.size();
    return Math_0.min(a, b) / 80;
  }
  function getStyle(box) {
    var sw = getStrokeWidth(box);
    return new Style(new StrokeStyle(sw, StyleColor$Black_getInstance()), null);
  }
  function StyleColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StyleColor_initFields() {
    StyleColor_initFields = function () {
    };
    StyleColor$Black_instance = new StyleColor('Black', 0);
    StyleColor$Grey_instance = new StyleColor('Grey', 1);
    StyleColor$White_instance = new StyleColor('White', 2);
    StyleColor$Red_instance = new StyleColor('Red', 3);
    StyleColor$Brown_instance = new StyleColor('Brown', 4);
    StyleColor$Beige_instance = new StyleColor('Beige', 5);
    StyleColor$Green_instance = new StyleColor('Green', 6);
    StyleColor$Yellow_instance = new StyleColor('Yellow', 7);
  }
  var StyleColor$Black_instance;
  function StyleColor$Black_getInstance() {
    StyleColor_initFields();
    return StyleColor$Black_instance;
  }
  var StyleColor$Grey_instance;
  function StyleColor$Grey_getInstance() {
    StyleColor_initFields();
    return StyleColor$Grey_instance;
  }
  var StyleColor$White_instance;
  function StyleColor$White_getInstance() {
    StyleColor_initFields();
    return StyleColor$White_instance;
  }
  var StyleColor$Red_instance;
  function StyleColor$Red_getInstance() {
    StyleColor_initFields();
    return StyleColor$Red_instance;
  }
  var StyleColor$Brown_instance;
  function StyleColor$Brown_getInstance() {
    StyleColor_initFields();
    return StyleColor$Brown_instance;
  }
  var StyleColor$Beige_instance;
  function StyleColor$Beige_getInstance() {
    StyleColor_initFields();
    return StyleColor$Beige_instance;
  }
  var StyleColor$Green_instance;
  function StyleColor$Green_getInstance() {
    StyleColor_initFields();
    return StyleColor$Green_instance;
  }
  var StyleColor$Yellow_instance;
  function StyleColor$Yellow_getInstance() {
    StyleColor_initFields();
    return StyleColor$Yellow_instance;
  }
  StyleColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyleColor',
    interfaces: [Enum]
  };
  function StyleColor$values() {
    return [StyleColor$Black_getInstance(), StyleColor$Grey_getInstance(), StyleColor$White_getInstance(), StyleColor$Red_getInstance(), StyleColor$Brown_getInstance(), StyleColor$Beige_getInstance(), StyleColor$Green_getInstance(), StyleColor$Yellow_getInstance()];
  }
  StyleColor.values = StyleColor$values;
  function StyleColor$valueOf(name) {
    switch (name) {
      case 'Black':
        return StyleColor$Black_getInstance();
      case 'Grey':
        return StyleColor$Grey_getInstance();
      case 'White':
        return StyleColor$White_getInstance();
      case 'Red':
        return StyleColor$Red_getInstance();
      case 'Brown':
        return StyleColor$Brown_getInstance();
      case 'Beige':
        return StyleColor$Beige_getInstance();
      case 'Green':
        return StyleColor$Green_getInstance();
      case 'Yellow':
        return StyleColor$Yellow_getInstance();
      default:throwISE('No enum constant com.github.janbols.funfish.limited.StyleColor.' + name);
    }
  }
  StyleColor.valueOf_61zpoe$ = StyleColor$valueOf;
  function StrokeStyle(strokeWidth, strokeColor) {
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
  }
  StrokeStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StrokeStyle',
    interfaces: []
  };
  StrokeStyle.prototype.component1 = function () {
    return this.strokeWidth;
  };
  StrokeStyle.prototype.component2 = function () {
    return this.strokeColor;
  };
  StrokeStyle.prototype.copy_8y9vsg$ = function (strokeWidth, strokeColor) {
    return new StrokeStyle(strokeWidth === void 0 ? this.strokeWidth : strokeWidth, strokeColor === void 0 ? this.strokeColor : strokeColor);
  };
  StrokeStyle.prototype.toString = function () {
    return 'StrokeStyle(strokeWidth=' + Kotlin.toString(this.strokeWidth) + (', strokeColor=' + Kotlin.toString(this.strokeColor)) + ')';
  };
  StrokeStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.strokeWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.strokeColor) | 0;
    return result;
  };
  StrokeStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.strokeWidth, other.strokeWidth) && Kotlin.equals(this.strokeColor, other.strokeColor)))));
  };
  function FillStyle(fillColor) {
    this.fillColor = fillColor;
  }
  FillStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FillStyle',
    interfaces: []
  };
  FillStyle.prototype.component1 = function () {
    return this.fillColor;
  };
  FillStyle.prototype.copy_pg2qv2$ = function (fillColor) {
    return new FillStyle(fillColor === void 0 ? this.fillColor : fillColor);
  };
  FillStyle.prototype.toString = function () {
    return 'FillStyle(fillColor=' + Kotlin.toString(this.fillColor) + ')';
  };
  FillStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fillColor) | 0;
    return result;
  };
  FillStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.fillColor, other.fillColor))));
  };
  function Style(stroke, fill) {
    this.stroke = stroke;
    this.fill = fill;
  }
  Style.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Style',
    interfaces: []
  };
  Style.prototype.component1 = function () {
    return this.stroke;
  };
  Style.prototype.component2 = function () {
    return this.fill;
  };
  Style.prototype.copy_4tw5tv$ = function (stroke, fill) {
    return new Style(stroke === void 0 ? this.stroke : stroke, fill === void 0 ? this.fill : fill);
  };
  Style.prototype.toString = function () {
    return 'Style(stroke=' + Kotlin.toString(this.stroke) + (', fill=' + Kotlin.toString(this.fill)) + ')';
  };
  Style.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stroke) | 0;
    result = result * 31 + Kotlin.hashCode(this.fill) | 0;
    return result;
  };
  Style.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.stroke, other.stroke) && Kotlin.equals(this.fill, other.fill)))));
  };
  var pipe = defineInlineFunction('app.com.github.janbols.funfish.pipe_96jf0l$', function ($receiver, t) {
    return t($receiver);
  });
  function andThen$lambda(closure$f, this$andThen) {
    return function () {
      return closure$f(this$andThen());
    };
  }
  function andThen($receiver, f) {
    return andThen$lambda(f, $receiver);
  }
  function andThen$lambda_0(closure$f, this$andThen) {
    return function (p1) {
      return closure$f(this$andThen(p1));
    };
  }
  function andThen_0($receiver, f) {
    return andThen$lambda_0(f, $receiver);
  }
  function andThen$lambda_1(closure$f, this$andThen) {
    return function (p1, p2) {
      return closure$f(this$andThen(p1, p2));
    };
  }
  function andThen_1($receiver, f) {
    return andThen$lambda_1(f, $receiver);
  }
  function invoke$lambda(this$invoke, closure$p1) {
    return function (p2) {
      return this$invoke(closure$p1, p2);
    };
  }
  function invoke($receiver, p1, partial2) {
    if (partial2 === void 0)
      partial2 = partial();
    return invoke$lambda($receiver, p1);
  }
  function invoke$lambda_0(this$invoke, closure$p1) {
    return function (p2, p3) {
      return this$invoke(closure$p1, p2, p3);
    };
  }
  function invoke_0($receiver, p1, partial2, partial3) {
    if (partial2 === void 0)
      partial2 = partial();
    if (partial3 === void 0)
      partial3 = partial();
    return invoke$lambda_0($receiver, p1);
  }
  function invoke$lambda_1(this$invoke, closure$p1) {
    return function (p2, p3, p4) {
      return this$invoke(closure$p1, p2, p3, p4);
    };
  }
  function invoke_1($receiver, p1, partial2, partial3, partial4) {
    if (partial2 === void 0)
      partial2 = partial();
    if (partial3 === void 0)
      partial3 = partial();
    if (partial4 === void 0)
      partial4 = partial();
    return invoke$lambda_1($receiver, p1);
  }
  function invoke$lambda_2(this$invoke, closure$p1) {
    return function (p2, p3, p4, p5) {
      return this$invoke(closure$p1, p2, p3, p4, p5);
    };
  }
  function invoke_2($receiver, p1, partial2, partial3, partial4, partial5) {
    if (partial2 === void 0)
      partial2 = partial();
    if (partial3 === void 0)
      partial3 = partial();
    if (partial4 === void 0)
      partial4 = partial();
    if (partial5 === void 0)
      partial5 = partial();
    return invoke$lambda_2($receiver, p1);
  }
  function Partial() {
  }
  Partial.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Partial',
    interfaces: []
  };
  function partial() {
    return new Partial();
  }
  function Fishier() {
    Fishier_instance = this;
    this.fishyBeziers_0 = listOf([new Bezier(new Vector(0.11, 0.11), new Vector(0.175, 0.175), new Vector(0.25, 0.25)), new Bezier(new Vector(0.372, 0.194), new Vector(0.452, 0.132), new Vector(0.564, 0.032)), new Bezier(new Vector(0.73, 0.056), new Vector(0.834, 0.042), new Vector(1.0, 0.0)), new Bezier(new Vector(0.896, 0.062), new Vector(0.837, 0.107), new Vector(0.766, 0.202)), new Bezier(new Vector(0.66, 0.208), new Vector(0.589, 0.217), new Vector(0.5, 0.25)), new Bezier(new Vector(0.5, 0.41), new Vector(0.5, 0.46), new Vector(0.5, 0.5)), new Bezier(new Vector(0.5, 0.575), new Vector(0.5, 0.625), new Vector(0.5, 0.75)), new Bezier(new Vector(0.411, 0.783), new Vector(0.34, 0.792), new Vector(0.234, 0.798)), new Bezier(new Vector(0.163, 0.893), new Vector(0.104, 0.938), new Vector(0.0, 1.0)), new Bezier(new Vector(-0.042, 0.834), new Vector(-0.056, 0.73), new Vector(-0.032, 0.564)), new Bezier(new Vector(-0.132, 0.452), new Vector(-0.194, 0.372), new Vector(-0.25, 0.25)), new Bezier(new Vector(-0.15, 0.15), new Vector(-0.05, 0.05), new Vector(0.0, 0.0))]);
    this.fishyPath_0 = new Path(new Vector(0.0, 0.0), this.fishyBeziers_0);
    this.fishyLeftEyeBeziers_0 = listOf([new Bezier(new Vector(0.04, 0.772), new Vector(0.068, 0.696), new Vector(0.074, 0.685)), new Bezier(new Vector(0.045, 0.66), new Vector(0.01, 0.617), new Vector(-0.008, 0.592)), new Bezier(new Vector(-0.017, 0.685), new Vector(-0.012, 0.77), new Vector(0.004, 0.8))]);
    this.leftEyePath_0 = new Path(new Vector(0.004, 0.8), this.fishyLeftEyeBeziers_0);
    this.fishyInnerLeftEyeBeziers_0 = listOf([new Bezier(new Vector(0.038, 0.708), new Vector(0.053, 0.684), new Vector(0.057, 0.674)), new Bezier(new Vector(0.035, 0.652), new Vector(0.01, 0.622), new Vector(0.008, 0.618)), new Bezier(new Vector(0.005, 0.685), new Vector(0.01, 0.7), new Vector(0.018, 0.72))]);
    this.innerLeftEyePath_0 = new Path(new Vector(0.018, 0.72), this.fishyInnerLeftEyeBeziers_0);
    this.fishyRightEyeBeziers_0 = listOf([new Bezier(new Vector(0.16, 0.84), new Vector(0.2, 0.79), new Vector(0.205, 0.782)), new Bezier(new Vector(0.165, 0.76), new Vector(0.14, 0.74), new Vector(0.115, 0.715)), new Bezier(new Vector(0.095, 0.775), new Vector(0.09, 0.83), new Vector(0.095, 0.87))]);
    this.rightEyePath_0 = new Path(new Vector(0.095, 0.87), this.fishyRightEyeBeziers_0);
    this.fishyInnerRightEyeBeziers_0 = listOf([new Bezier(new Vector(0.15, 0.805), new Vector(0.174, 0.783), new Vector(0.185, 0.774)), new Bezier(new Vector(0.154, 0.756), new Vector(0.139, 0.74), new Vector(0.132, 0.736)), new Bezier(new Vector(0.126, 0.76), new Vector(0.122, 0.795), new Vector(0.128, 0.81))]);
    this.innerRightEyePath_0 = new Path(new Vector(0.128, 0.81), this.fishyInnerRightEyeBeziers_0);
    this.fishySpineCurves_0 = listOf([new Curve(new Vector(0.84, 0.07), new Vector(0.35, 0.12), new Vector(0.14, 0.5), new Vector(0.025, 0.9)), new Curve(new Vector(-0.015, 0.52), new Vector(0.04, 0.4), new Vector(0.12, 0.3), new Vector(0.21, 0.26)), new Curve(new Vector(0.475, 0.27), new Vector(0.32, 0.35), new Vector(0.34, 0.6), new Vector(0.24, 0.77)), new Curve(new Vector(0.377, 0.377), new Vector(0.41, 0.41), new Vector(0.46, 0.46), new Vector(0.495, 0.495)), new Curve(new Vector(0.43, 0.165), new Vector(0.48, 0.175), new Vector(0.49, 0.22), new Vector(0.49, 0.23)), new Curve(new Vector(0.452, 0.178), new Vector(0.51, 0.13), new Vector(0.54, 0.11), new Vector(0.6, 0.08)), new Curve(new Vector(0.482, 0.215), new Vector(0.52, 0.2), new Vector(0.6, 0.16), new Vector(0.74, 0.15)), new Curve(new Vector(-0.17, 0.237), new Vector(-0.125, 0.355), new Vector(-0.065, 0.405), new Vector(0.01, 0.48)), new Curve(new Vector(-0.11, 0.175), new Vector(-0.06, 0.25), new Vector(-0.03, 0.3), new Vector(0.08, 0.365)), new Curve(new Vector(-0.045, 0.115), new Vector(0.01, 0.18), new Vector(0.06, 0.23), new Vector(0.17, 0.28)), new Curve(new Vector(0.27, 0.7), new Vector(0.34, 0.72), new Vector(0.426, 0.71), new Vector(0.474, 0.692)), new Curve(new Vector(0.31, 0.57), new Vector(0.4, 0.622), new Vector(0.435, 0.618), new Vector(0.474, 0.615)), new Curve(new Vector(0.35, 0.435), new Vector(0.4, 0.505), new Vector(0.422, 0.52), new Vector(0.474, 0.538))]);
    var tmp$ = listOf([new Pair('primary', this.fishyPath_0), new Pair('eye-outer', this.leftEyePath_0), new Pair('eye-outer', this.rightEyePath_0), new Pair('eye-inner', this.innerLeftEyePath_0), new Pair('eye-inner', this.innerRightEyePath_0)]);
    var $receiver = this.fishySpineCurves_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new Pair('secondary', item));
    }
    this.fishShapes = plus(tmp$, destination);
  }
  Fishier.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Fishier',
    interfaces: []
  };
  var Fishier_instance = null;
  function Fishier_getInstance() {
    if (Fishier_instance === null) {
      new Fishier();
    }
    return Fishier_instance;
  }
  function Hue(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Hue_initFields() {
    Hue_initFields = function () {
    };
    Hue$Blackish_instance = new Hue('Blackish', 0);
    Hue$Greyish_instance = new Hue('Greyish', 1);
    Hue$Whiteish_instance = new Hue('Whiteish', 2);
    Hue$Hollow_instance = new Hue('Hollow', 3);
    Hue$Redish_instance = new Hue('Redish', 4);
    Hue$Brownish_instance = new Hue('Brownish', 5);
    Hue$Beige_instance = new Hue('Beige', 6);
  }
  var Hue$Blackish_instance;
  function Hue$Blackish_getInstance() {
    Hue_initFields();
    return Hue$Blackish_instance;
  }
  var Hue$Greyish_instance;
  function Hue$Greyish_getInstance() {
    Hue_initFields();
    return Hue$Greyish_instance;
  }
  var Hue$Whiteish_instance;
  function Hue$Whiteish_getInstance() {
    Hue_initFields();
    return Hue$Whiteish_instance;
  }
  var Hue$Hollow_instance;
  function Hue$Hollow_getInstance() {
    Hue_initFields();
    return Hue$Hollow_instance;
  }
  var Hue$Redish_instance;
  function Hue$Redish_getInstance() {
    Hue_initFields();
    return Hue$Redish_instance;
  }
  var Hue$Brownish_instance;
  function Hue$Brownish_getInstance() {
    Hue_initFields();
    return Hue$Brownish_instance;
  }
  var Hue$Beige_instance;
  function Hue$Beige_getInstance() {
    Hue_initFields();
    return Hue$Beige_instance;
  }
  Hue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hue',
    interfaces: [Enum]
  };
  function Hue$values() {
    return [Hue$Blackish_getInstance(), Hue$Greyish_getInstance(), Hue$Whiteish_getInstance(), Hue$Hollow_getInstance(), Hue$Redish_getInstance(), Hue$Brownish_getInstance(), Hue$Beige_getInstance()];
  }
  Hue.values = Hue$values;
  function Hue$valueOf(name) {
    switch (name) {
      case 'Blackish':
        return Hue$Blackish_getInstance();
      case 'Greyish':
        return Hue$Greyish_getInstance();
      case 'Whiteish':
        return Hue$Whiteish_getInstance();
      case 'Hollow':
        return Hue$Hollow_getInstance();
      case 'Redish':
        return Hue$Redish_getInstance();
      case 'Brownish':
        return Hue$Brownish_getInstance();
      case 'Beige':
        return Hue$Beige_getInstance();
      default:throwISE('No enum constant com.github.janbols.funfish.unlimited.Hue.' + name);
    }
  }
  Hue.valueOf_61zpoe$ = Hue$valueOf;
  function Lens(box, hue) {
    this.box = box;
    this.hue = hue;
  }
  Lens.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lens',
    interfaces: []
  };
  Lens.prototype.component1 = function () {
    return this.box;
  };
  Lens.prototype.component2 = function () {
    return this.hue;
  };
  Lens.prototype.copy_tlp61g$ = function (box, hue) {
    return new Lens(box === void 0 ? this.box : box, hue === void 0 ? this.hue : hue);
  };
  Lens.prototype.toString = function () {
    return 'Lens(box=' + Kotlin.toString(this.box) + (', hue=' + Kotlin.toString(this.hue)) + ')';
  };
  Lens.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.box) | 0;
    result = result * 31 + Kotlin.hashCode(this.hue) | 0;
    return result;
  };
  Lens.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.box, other.box) && Kotlin.equals(this.hue, other.hue)))));
  };
  function Lenses() {
    Lenses_instance = this;
  }
  Lenses.prototype.lift_0 = function (f, l) {
    return l.copy_tlp61g$(f(l.box));
  };
  Lenses.prototype.turn_44f0pv$ = function (l) {
    return this.lift_0(getCallableRef('turn', function ($receiver, box) {
      return $receiver.turn_es3rdf$(box);
    }.bind(null, Boxes_getInstance())), l);
  };
  Lenses.prototype.flip_44f0pv$ = function (l) {
    return this.lift_0(getCallableRef('flip', function ($receiver, box) {
      return $receiver.flip_es3rdf$(box);
    }.bind(null, Boxes_getInstance())), l);
  };
  Lenses.prototype.toss_44f0pv$ = function (l) {
    return this.lift_0(getCallableRef('toss', function ($receiver, box) {
      return $receiver.toss_es3rdf$(box);
    }.bind(null, Boxes_getInstance())), l);
  };
  function Lenses$scaleHorizontally$lambda(closure$s) {
    return function (box) {
      return Boxes_getInstance().scaleHorizontally_esg2in$(closure$s, box);
    };
  }
  Lenses.prototype.scaleHorizontally_p2zwi3$ = function (s, l) {
    return this.lift_0(Lenses$scaleHorizontally$lambda(s), l);
  };
  function Lenses$scaleVertically$lambda(closure$s) {
    return function (box) {
      return Boxes_getInstance().scaleVertically_esg2in$(closure$s, box);
    };
  }
  Lenses.prototype.scaleVertically_p2zwi3$ = function (s, l) {
    return this.lift_0(Lenses$scaleVertically$lambda(s), l);
  };
  function Lenses$moveHorizontally$lambda(closure$offset) {
    return function (box) {
      return Boxes_getInstance().moveHorizontally_esg2in$(closure$offset, box);
    };
  }
  Lenses.prototype.moveHorizontally_p2zwi3$ = function (offset, l) {
    return this.lift_0(Lenses$moveHorizontally$lambda(offset), l);
  };
  function Lenses$moveVertically$lambda(closure$offset) {
    return function (box) {
      return Boxes_getInstance().moveVertically_esg2in$(closure$offset, box);
    };
  }
  Lenses.prototype.moveVertically_p2zwi3$ = function (offset, l) {
    return this.lift_0(Lenses$moveVertically$lambda(offset), l);
  };
  Lenses.prototype.splitHorizontally_p2zwi3$ = function (f, l) {
    var tmp$ = Boxes_getInstance().splitHorizontally_esg2in$(f, l.box);
    var b1 = tmp$.component1()
    , b2 = tmp$.component2();
    return new Pair(l.copy_tlp61g$(b1), l.copy_tlp61g$(b2));
  };
  Lenses.prototype.splitVertically_p2zwi3$ = function (f, l) {
    var tmp$ = Boxes_getInstance().splitVertically_esg2in$(f, l.box);
    var b1 = tmp$.component1()
    , b2 = tmp$.component2();
    return new Pair(l.copy_tlp61g$(b1), l.copy_tlp61g$(b2));
  };
  Lenses.prototype.rehue_44f0pv$ = function (l) {
    var tmp$, tmp$_0;
    tmp$ = l.hue;
    if (equals(tmp$, Hue$Blackish_getInstance()))
      tmp$_0 = Hue$Greyish_getInstance();
    else if (equals(tmp$, Hue$Greyish_getInstance()))
      tmp$_0 = Hue$Whiteish_getInstance();
    else if (equals(tmp$, Hue$Whiteish_getInstance()))
      tmp$_0 = Hue$Blackish_getInstance();
    else if (equals(tmp$, Hue$Redish_getInstance()))
      tmp$_0 = Hue$Brownish_getInstance();
    else if (equals(tmp$, Hue$Brownish_getInstance()))
      tmp$_0 = Hue$Beige_getInstance();
    else if (equals(tmp$, Hue$Beige_getInstance()))
      tmp$_0 = Hue$Redish_getInstance();
    else if (equals(tmp$, Hue$Hollow_getInstance()))
      tmp$_0 = Hue$Hollow_getInstance();
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return l.copy_tlp61g$(void 0, tmp$_0);
  };
  Lenses.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Lenses',
    interfaces: []
  };
  var Lenses_instance = null;
  function Lenses_getInstance() {
    if (Lenses_instance === null) {
      new Lenses();
    }
    return Lenses_instance;
  }
  function LensPictures() {
    LensPictures_instance = this;
    this.beside = LensPictures$beside$lambda(this);
    this.above = LensPictures$above$lambda(this);
  }
  function LensPictures$turn$lambda(closure$p) {
    return function (it) {
      var $receiver = Lenses_getInstance().turn_44f0pv$(it);
      return closure$p($receiver);
    };
  }
  LensPictures.prototype.turn_m1kazt$ = function (p) {
    return LensPictures$turn$lambda(p);
  };
  function LensPictures$flip$lambda(closure$p) {
    return function (it) {
      var $receiver = Lenses_getInstance().flip_44f0pv$(it);
      return closure$p($receiver);
    };
  }
  LensPictures.prototype.flip_m1kazt$ = function (p) {
    return LensPictures$flip$lambda(p);
  };
  function LensPictures$toss$lambda(closure$p) {
    return function (it) {
      var $receiver = Lenses_getInstance().toss_44f0pv$(it);
      return closure$p($receiver);
    };
  }
  LensPictures.prototype.toss_m1kazt$ = function (p) {
    return LensPictures$toss$lambda(p);
  };
  function LensPictures$besideRatio$lambda(closure$m, closure$n, closure$p1, closure$p2) {
    return function (lens) {
      var factor = closure$m / (closure$m + closure$n | 0);
      var tmp$ = Lenses_getInstance().splitVertically_p2zwi3$(factor, lens);
      var b1 = tmp$.component1()
      , b2 = tmp$.component2();
      return plus(closure$p1(b1), closure$p2(b2));
    };
  }
  LensPictures.prototype.besideRatio_jqh47g$ = function (m, n, p1, p2) {
    return LensPictures$besideRatio$lambda(m, n, p1, p2);
  };
  function LensPictures$aboveRatio$lambda(closure$m, closure$n, closure$p1, closure$p2) {
    return function (lens) {
      var factor = closure$m / (closure$m + closure$n | 0);
      var tmp$ = Lenses_getInstance().splitHorizontally_p2zwi3$(factor, lens);
      var b1 = tmp$.component1()
      , b2 = tmp$.component2();
      return plus(closure$p1(b1), closure$p2(b2));
    };
  }
  LensPictures.prototype.aboveRatio_jqh47g$ = function (m, n, p1, p2) {
    return LensPictures$aboveRatio$lambda(m, n, p1, p2);
  };
  function LensPictures$over$lambda(closure$p1, closure$p2) {
    return function (lens) {
      return plus(closure$p1(lens), closure$p2(lens));
    };
  }
  LensPictures.prototype.over_7e4ek4$ = function (p1, p2) {
    return LensPictures$over$lambda(p1, p2);
  };
  function LensPictures$rehue$lambda(closure$p) {
    return function (lens) {
      var $receiver = Lenses_getInstance().rehue_44f0pv$(lens);
      return closure$p($receiver);
    };
  }
  LensPictures.prototype.rehue_m1kazt$ = function (p) {
    return LensPictures$rehue$lambda(p);
  };
  LensPictures.prototype.createLensPicture_gakodf$ = function (shapes) {
    return this.createLensPicture_bziy1h$.call(this, copyToArray(shapes).slice());
  };
  function LensPictures$createLensPicture$lambda(closure$shapes) {
    return function (lens) {
      var $receiver = closure$shapes;
      var transform = mapNamedShape(lens);
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(transform(item));
      }
      return destination;
    };
  }
  LensPictures.prototype.createLensPicture_bziy1h$ = function (shapes) {
    return LensPictures$createLensPicture$lambda(shapes);
  };
  function LensPictures$beside$lambda(this$LensPictures) {
    return function (p1, p2) {
      return this$LensPictures.besideRatio_jqh47g$(1, 1, p1, p2);
    };
  }
  function LensPictures$above$lambda(this$LensPictures) {
    return function (p1, p2) {
      return this$LensPictures.aboveRatio_jqh47g$(1, 1, p1, p2);
    };
  }
  LensPictures.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LensPictures',
    interfaces: []
  };
  var LensPictures_instance = null;
  function LensPictures_getInstance() {
    if (LensPictures_instance === null) {
      new LensPictures();
    }
    return LensPictures_instance;
  }
  function getDefaultColor(name, hue) {
    if (equals(name, 'secondary')) {
      if (equals(hue, Hue$Blackish_getInstance()))
        return StyleColor$White_getInstance();
      else if (equals(hue, Hue$Greyish_getInstance()))
        return StyleColor$White_getInstance();
      else if (equals(hue, Hue$Whiteish_getInstance()))
        return StyleColor$Black_getInstance();
      else if (equals(hue, Hue$Redish_getInstance()))
        return StyleColor$Beige_getInstance();
      else if (equals(hue, Hue$Brownish_getInstance()))
        return StyleColor$Beige_getInstance();
      else if (equals(hue, Hue$Beige_getInstance()))
        return StyleColor$Red_getInstance();
      else if (equals(hue, Hue$Hollow_getInstance()))
        return StyleColor$Black_getInstance();
      else
        return Kotlin.noWhenBranchMatched();
    }
     else {
      if (equals(hue, Hue$Blackish_getInstance()))
        return StyleColor$Black_getInstance();
      else if (equals(hue, Hue$Greyish_getInstance()))
        return StyleColor$Grey_getInstance();
      else if (equals(hue, Hue$Whiteish_getInstance()))
        return StyleColor$White_getInstance();
      else if (equals(hue, Hue$Redish_getInstance()))
        return StyleColor$Red_getInstance();
      else if (equals(hue, Hue$Brownish_getInstance()))
        return StyleColor$Brown_getInstance();
      else if (equals(hue, Hue$Beige_getInstance()))
        return StyleColor$Beige_getInstance();
      else if (equals(hue, Hue$Hollow_getInstance()))
        return StyleColor$White_getInstance();
      else
        return Kotlin.noWhenBranchMatched();
    }
  }
  function getDefaultStyle(name, sw, hue) {
    return new Style(new StrokeStyle(sw, getDefaultColor(name, hue)), null);
  }
  function getCircleStyle(name, sw, hue) {
    return new Style(null, new FillStyle(getDefaultColor(name, hue)));
  }
  function isInnerEye(name) {
    return endsWith(name, '-inner');
  }
  function isOuterEye(name) {
    return endsWith(name, '-outer');
  }
  function getFillPathColor(name, hue) {
    if (equals(hue, Hue$Blackish_getInstance()))
      if (equals(name, 'primary'))
        return StyleColor$Black_getInstance();
      else if (isOuterEye(name))
        return StyleColor$White_getInstance();
      else if (isInnerEye(name))
        return StyleColor$Black_getInstance();
      else
        return StyleColor$White_getInstance();
    else if (equals(hue, Hue$Greyish_getInstance()))
      if (equals(name, 'primary'))
        return StyleColor$Grey_getInstance();
      else if (isOuterEye(name))
        return StyleColor$White_getInstance();
      else if (isInnerEye(name))
        return StyleColor$Grey_getInstance();
      else
        return StyleColor$White_getInstance();
    else if (equals(hue, Hue$Whiteish_getInstance()))
      if (equals(name, 'primary'))
        return StyleColor$White_getInstance();
      else if (isOuterEye(name))
        return StyleColor$White_getInstance();
      else if (isInnerEye(name))
        return StyleColor$Black_getInstance();
      else
        return StyleColor$Black_getInstance();
    else if (equals(hue, Hue$Redish_getInstance()))
      if (equals(name, 'primary'))
        return StyleColor$Red_getInstance();
      else if (isOuterEye(name))
        return StyleColor$Beige_getInstance();
      else if (isInnerEye(name))
        return StyleColor$Red_getInstance();
      else
        return StyleColor$Beige_getInstance();
    else if (equals(hue, Hue$Brownish_getInstance()))
      if (equals(name, 'primary'))
        return StyleColor$Brown_getInstance();
      else if (isOuterEye(name))
        return StyleColor$Beige_getInstance();
      else if (isInnerEye(name))
        return StyleColor$Brown_getInstance();
      else
        return StyleColor$Beige_getInstance();
    else if (equals(hue, Hue$Beige_getInstance()))
      if (equals(name, 'primary'))
        return StyleColor$Beige_getInstance();
      else if (isOuterEye(name))
        return StyleColor$Beige_getInstance();
      else if (isInnerEye(name))
        return StyleColor$Red_getInstance();
      else
        return StyleColor$Red_getInstance();
    else if (equals(hue, Hue$Hollow_getInstance()))
      if (equals(name, 'primary'))
        return StyleColor$White_getInstance();
      else if (isOuterEye(name))
        return StyleColor$White_getInstance();
      else if (isInnerEye(name))
        return StyleColor$Black_getInstance();
      else
        return StyleColor$Black_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
  }
  function getPathStyle(name, sw, hue) {
    if (equals(hue, Hue$Hollow_getInstance()))
      return new Style(new StrokeStyle(sw, getFillPathColor('secondary', hue)), isInnerEye(name) ? new FillStyle(StyleColor$Black_getInstance()) : null);
    else
      return new Style(isOuterEye(name) ? new StrokeStyle(sw, getFillPathColor('secondary', hue)) : null, new FillStyle(getFillPathColor(name, hue)));
  }
  function mapNamedShape$lambda(closure$lens) {
    return function (pair) {
      var tmp$;
      var tmp$_0 = closure$lens;
      var box = tmp$_0.component1()
      , hue = tmp$_0.component2();
      var name = pair.component1()
      , shape = pair.component2();
      var m = invoke(getCallableRef('mapper', function (box, v) {
        return mapper(box, v);
      }), box);
      var sw = getStrokeWidth(box);
      if (Kotlin.isType(shape, Path))
        tmp$ = getPathStyle(name, sw, hue);
      else if (Kotlin.isType(shape, Circle))
        tmp$ = getCircleStyle(name, sw, hue);
      else
        tmp$ = getDefaultStyle(name, sw, hue);
      var style = tmp$;
      return new Pair(mapShape(m)(shape), style);
    };
  }
  function mapNamedShape(lens) {
    return mapNamedShape$lambda(lens);
  }
  function Lizard() {
    Lizard_instance = this;
    this.lizardBeziers_0 = listOf([new Bezier(new Vector(0.02, 0.05), new Vector(0.03, 0.12), new Vector(0.025, 0.185)), new Bezier(new Vector(0.1, 0.12), new Vector(0.2, 0.085), new Vector(0.31, 0.09)), new Bezier(new Vector(0.31, 0.0), new Vector(0.31, -0.1), new Vector(0.31, -0.313)), new Bezier(new Vector(0.45, -0.17), new Vector(0.5, -0.1), new Vector(0.625, 0.07)), new Bezier(new Vector(0.7, 0.04), new Vector(0.78, 0.01), new Vector(0.85, 0.0)), new Bezier(new Vector(0.7, -0.07), new Vector(0.563, -0.18), new Vector(0.563, -0.313)), new Bezier(new Vector(0.68, -0.31), new Vector(0.78, -0.41), new Vector(0.813, -0.375)), new Bezier(new Vector(0.792, -0.333), new Vector(0.771, -0.292), new Vector(0.75, -0.25)), new Bezier(new Vector(0.8, -0.2), new Vector(0.9, -0.1), new Vector(1.0, 0.0)), new Bezier(new Vector(0.9, 0.1), new Vector(0.8, 0.2), new Vector(0.75, 0.25)), new Bezier(new Vector(0.9, 0.65), new Vector(1.05, 0.75), new Vector(1.25, 0.85)), new Bezier(new Vector(1.2, 0.94), new Vector(1.1, 0.98), new Vector(1.0, 1.0)), new Bezier(new Vector(0.98, 0.9), new Vector(0.94, 0.8), new Vector(0.85, 0.75)), new Bezier(new Vector(0.75, 0.95), new Vector(0.65, 1.1), new Vector(0.25, 1.25)), new Bezier(new Vector(0.2, 1.2), new Vector(0.1, 1.1), new Vector(0.0, 1.0)), new Bezier(new Vector(0.05, 0.95), new Vector(0.15, 0.85), new Vector(0.25, 0.75)), new Bezier(new Vector(0.375, 0.813), new Vector(0.375, 0.813), new Vector(0.375, 0.813)), new Bezier(new Vector(0.41, 0.78), new Vector(0.31, 0.68), new Vector(0.313, 0.563)), new Bezier(new Vector(0.18, 0.563), new Vector(0.07, 0.7), new Vector(0.0, 0.85)), new Bezier(new Vector(-0.01, 0.78), new Vector(-0.04, 0.7), new Vector(-0.07, 0.625)), new Bezier(new Vector(0.1, 0.5), new Vector(0.17, 0.45), new Vector(0.313, 0.31)), new Bezier(new Vector(0.1, 0.31), new Vector(0.0, 0.31), new Vector(-0.09, 0.31)), new Bezier(new Vector(-0.085, 0.2), new Vector(-0.12, 0.1), new Vector(-0.185, 0.025)), new Bezier(new Vector(-0.12, 0.03), new Vector(-0.05, 0.02), new Vector(0.0, 0.0))]);
    this.lizardPath_0 = new Path(new Vector(0.0, 0.0), this.lizardBeziers_0);
    this.lizardEyeOuterCircles_0 = listOf([new Circle(new Vector(0.26, 1.1), new Vector(0.07, 0.0)), new Circle(new Vector(0.26, 0.9), new Vector(0.07, 0.0))]);
    this.lizardEyeInnerCircles_0 = listOf([new Circle(new Vector(0.26, 1.1), new Vector(0.05, 0.0)), new Circle(new Vector(0.26, 0.9), new Vector(0.05, 0.0))]);
    this.mainSpineCurves_0 = listOf_0(new Curve(new Vector(0.35, -0.2), new Vector(0.7, 0.9), new Vector(0.65, 1.0), new Vector(0.075, 1.0)));
    this.mainSpine_0 = this.namedShapes_0('secondary', this.mainSpineCurves_0);
    this.lizardEyesOuter_0 = this.namedShapes_0('secondary', this.lizardEyeOuterCircles_0);
    this.lizardEyesInner_0 = this.namedShapes_0('primary', this.lizardEyeInnerCircles_0);
    this.lizardShapes = plus(plus(plus(listOf_0(new Pair('primary', this.lizardPath_0)), this.mainSpine_0), this.lizardEyesOuter_0), this.lizardEyesInner_0);
  }
  Lizard.prototype.namedShapes_0 = function (name, shapes) {
    var destination = ArrayList_init(collectionSizeOrDefault(shapes, 10));
    var tmp$;
    tmp$ = shapes.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Pair(name, item));
    }
    return destination;
  };
  Lizard.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Lizard',
    interfaces: []
  };
  var Lizard_instance = null;
  function Lizard_getInstance() {
    if (Lizard_instance === null) {
      new Lizard();
    }
    return Lizard_instance;
  }
  function Unlimited() {
    Unlimited_instance = this;
    this.blank = Unlimited$blank$lambda;
    this.side0 = invoke_0(invoke_1(invoke_2(getCallableRef('side', function ($receiver, tt, hueSW, hueSE, n, p) {
      return $receiver.side_n5ozpb$(tt, hueSW, hueSE, n, p);
    }.bind(null, Unlimited_getInstance())), getCallableRef('ttile0', function ($receiver, f) {
      return $receiver.ttile0_m1kazt$(f);
    }.bind(null, Unlimited_getInstance()))), Unlimited$side0$lambda), Unlimited$side0$lambda_0);
    this.side1 = invoke_0(invoke_1(invoke_2(getCallableRef('side', function ($receiver, tt, hueSW, hueSE, n, p) {
      return $receiver.side_n5ozpb$(tt, hueSW, hueSE, n, p);
    }.bind(null, Unlimited_getInstance())), getCallableRef('ttile1', function ($receiver, f) {
      return $receiver.ttile1_m1kazt$(f);
    }.bind(null, Unlimited_getInstance()))), Unlimited$side1$lambda), Unlimited$side1$lambda_0);
    this.side2 = invoke_0(invoke_1(invoke_2(getCallableRef('side', function ($receiver, tt, hueSW, hueSE, n, p) {
      return $receiver.side_n5ozpb$(tt, hueSW, hueSE, n, p);
    }.bind(null, Unlimited_getInstance())), getCallableRef('ttile2', function ($receiver, f) {
      return $receiver.ttile2_m1kazt$(f);
    }.bind(null, Unlimited_getInstance()))), Unlimited$side2$lambda), Unlimited$side2$lambda_0);
    this.corner1 = invoke_0(invoke_1(invoke_2(getCallableRef('corner', function ($receiver, ut, sideNE, sideSW, n, p) {
      return $receiver.corner_inr1iv$(ut, sideNE, sideSW, n, p);
    }.bind(null, Unlimited_getInstance())), getCallableRef('utile3', function ($receiver, f) {
      return $receiver.utile3_m1kazt$(f);
    }.bind(null, Unlimited_getInstance()))), this.side1), this.side2);
    this.corner2 = invoke_0(invoke_1(invoke_2(getCallableRef('corner', function ($receiver, ut, sideNE, sideSW, n, p) {
      return $receiver.corner_inr1iv$(ut, sideNE, sideSW, n, p);
    }.bind(null, Unlimited_getInstance())), getCallableRef('utile2', function ($receiver, f) {
      return $receiver.utile2_m1kazt$(f);
    }.bind(null, Unlimited_getInstance()))), this.side2), this.side1);
    this.aboveBand = invoke_2(getCallableRef('bandify', function ($receiver, combineRatio, n, first, middle, last) {
      return $receiver.bandify_1qzbic$(combineRatio, n, first, middle, last);
    }.bind(null, Unlimited_getInstance())), getCallableRef('aboveRatio', function (m, n, p1, p2) {
      return LensPictures_getInstance().aboveRatio_jqh47g$(m, n, p1, p2);
    }));
    this.besideBand = invoke_2(getCallableRef('bandify', function ($receiver, combineRatio, n, first, middle, last) {
      return $receiver.bandify_1qzbic$(combineRatio, n, first, middle, last);
    }.bind(null, Unlimited_getInstance())), getCallableRef('besideRatio', function (m, n, p1, p2) {
      return LensPictures_getInstance().besideRatio_jqh47g$(m, n, p1, p2);
    }));
  }
  Unlimited.prototype.ttile_gse2xr$ = function (hueN, hueE, f) {
    var $receiver = LensPictures_getInstance().toss_m1kazt$(f);
    var fishN = LensPictures_getInstance().flip_m1kazt$($receiver);
    var $receiver_0 = LensPictures_getInstance().turn_m1kazt$(fishN);
    var $receiver_1 = LensPictures_getInstance().turn_m1kazt$($receiver_0);
    var fishE = LensPictures_getInstance().turn_m1kazt$($receiver_1);
    return LensPictures_getInstance().over_7e4ek4$(f, LensPictures_getInstance().over_7e4ek4$(hueN(fishN), hueE(fishE)));
  };
  function Unlimited$ttile0$lambda(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    var $receiver_0 = LensPictures_getInstance().rehue_m1kazt$($receiver);
    return LensPictures_getInstance().rehue_m1kazt$($receiver_0);
  }
  function Unlimited$ttile0$lambda_0(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    var $receiver_0 = LensPictures_getInstance().rehue_m1kazt$($receiver);
    return LensPictures_getInstance().rehue_m1kazt$($receiver_0);
  }
  Unlimited.prototype.ttile0_m1kazt$ = function (f) {
    return this.ttile_gse2xr$(Unlimited$ttile0$lambda, Unlimited$ttile0$lambda_0, f);
  };
  function Unlimited$ttile1$lambda(it) {
    return LensPictures_getInstance().rehue_m1kazt$(it);
  }
  function Unlimited$ttile1$lambda_0(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  Unlimited.prototype.ttile1_m1kazt$ = function (f) {
    return this.ttile_gse2xr$(Unlimited$ttile1$lambda, Unlimited$ttile1$lambda_0, f);
  };
  function Unlimited$ttile2$lambda(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  function Unlimited$ttile2$lambda_0(it) {
    return LensPictures_getInstance().rehue_m1kazt$(it);
  }
  Unlimited.prototype.ttile2_m1kazt$ = function (f) {
    return this.ttile_gse2xr$(Unlimited$ttile2$lambda, Unlimited$ttile2$lambda_0, f);
  };
  Unlimited.prototype.utile_4500wp$ = function (hueN, hueW, hueS, hueE, f) {
    var $receiver = LensPictures_getInstance().toss_m1kazt$(f);
    var fishN = LensPictures_getInstance().flip_m1kazt$($receiver);
    var fishW = LensPictures_getInstance().turn_m1kazt$(fishN);
    var fishS = LensPictures_getInstance().turn_m1kazt$(fishW);
    var fishE = LensPictures_getInstance().turn_m1kazt$(fishS);
    return LensPictures_getInstance().over_7e4ek4$(LensPictures_getInstance().over_7e4ek4$(hueN(fishN), hueW(fishW)), LensPictures_getInstance().over_7e4ek4$(hueE(fishE), hueS(fishS)));
  };
  function Unlimited$utile0$lambda(it) {
    return it;
  }
  function Unlimited$utile0$lambda_0(it) {
    return it;
  }
  function Unlimited$utile0$lambda_1(it) {
    return it;
  }
  function Unlimited$utile0$lambda_2(it) {
    return it;
  }
  Unlimited.prototype.utile0_m1kazt$ = function (f) {
    return this.utile_4500wp$(Unlimited$utile0$lambda, Unlimited$utile0$lambda_0, Unlimited$utile0$lambda_1, Unlimited$utile0$lambda_2, f);
  };
  function Unlimited$utile1$lambda(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  function Unlimited$utile1$lambda_0(it) {
    return it;
  }
  function Unlimited$utile1$lambda_1(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  function Unlimited$utile1$lambda_2(it) {
    return it;
  }
  Unlimited.prototype.utile1_m1kazt$ = function (f) {
    return this.utile_4500wp$(Unlimited$utile1$lambda, Unlimited$utile1$lambda_0, Unlimited$utile1$lambda_1, Unlimited$utile1$lambda_2, f);
  };
  function Unlimited$utile2$lambda(it) {
    return it;
  }
  function Unlimited$utile2$lambda_0(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  function Unlimited$utile2$lambda_1(it) {
    return LensPictures_getInstance().rehue_m1kazt$(it);
  }
  function Unlimited$utile2$lambda_2(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  Unlimited.prototype.utile2_m1kazt$ = function (f) {
    return this.utile_4500wp$(Unlimited$utile2$lambda, Unlimited$utile2$lambda_0, Unlimited$utile2$lambda_1, Unlimited$utile2$lambda_2, f);
  };
  function Unlimited$utile3$lambda(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  function Unlimited$utile3$lambda_0(it) {
    return it;
  }
  function Unlimited$utile3$lambda_1(it) {
    return LensPictures_getInstance().rehue_m1kazt$(it);
  }
  function Unlimited$utile3$lambda_2(it) {
    return it;
  }
  Unlimited.prototype.utile3_m1kazt$ = function (f) {
    return this.utile_4500wp$(Unlimited$utile3$lambda, Unlimited$utile3$lambda_0, Unlimited$utile3$lambda_1, Unlimited$utile3$lambda_2, f);
  };
  Unlimited.prototype.quartet_y8zffw$ = function (p, q, r, s) {
    return LensPictures_getInstance().above(LensPictures_getInstance().beside(p, q), LensPictures_getInstance().beside(r, s));
  };
  function Unlimited$quartet2$qquartet(this$Unlimited) {
    return function closure$qquartet(n, p) {
      var p2 = n === 1 ? p : closure$qquartet(n - 1 | 0, p);
      return this$Unlimited.quartet_y8zffw$(p2, p2, p2, p2);
    };
  }
  Unlimited.prototype.quartet2_6l2pn1$ = function (depth, p) {
    var qquartet = Unlimited$quartet2$qquartet(this);
    var pNW = p;
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(p);
    var pNE = LensPictures_getInstance().turn_m1kazt$($receiver);
    var $receiver_0 = LensPictures_getInstance().rehue_m1kazt$(p);
    var $receiver_1 = LensPictures_getInstance().turn_m1kazt$($receiver_0);
    var $receiver_2 = LensPictures_getInstance().turn_m1kazt$($receiver_1);
    var pSW = LensPictures_getInstance().turn_m1kazt$($receiver_2);
    var $receiver_3 = LensPictures_getInstance().turn_m1kazt$(p);
    var pSE = LensPictures_getInstance().turn_m1kazt$($receiver_3);
    var q = this.quartet_y8zffw$(pNW, pNE, pSW, pSE);
    return qquartet(depth, q);
  };
  Unlimited.prototype.side_n5ozpb$ = function (tt, hueSW, hueSE, n, p) {
    var s = n === 1 ? this.blank : this.side_n5ozpb$(tt, hueSW, hueSE, n - 1 | 0, p);
    var t = tt(p);
    return this.quartet_y8zffw$.call(this, s, s, hueSW(LensPictures_getInstance().turn_m1kazt$(t)), hueSE(t));
  };
  Unlimited.prototype.corner_inr1iv$ = function (ut, sideNE, sideSW, n, p) {
    var tmp$ = n === 1 ? new Triple(this.blank, this.blank, this.blank) : new Triple(this.corner_inr1iv$(ut, sideNE, sideSW, n - 1 | 0, p), sideNE(n - 1 | 0, p), sideSW(n - 1 | 0, p));
    var c = tmp$.component1()
    , ne = tmp$.component2()
    , sw = tmp$.component3();
    var u = ut(p);
    return this.quartet_y8zffw$.call(this, c, ne, LensPictures_getInstance().turn_m1kazt$(sw), u);
  };
  Unlimited.prototype.nonet_wz4und$ = function (p, q, r, s, t, u, v, w, x) {
    return LensPictures_getInstance().aboveRatio_jqh47g$(1, 2, LensPictures_getInstance().besideRatio_jqh47g$(1, 2, p, LensPictures_getInstance().beside(q, r)), LensPictures_getInstance().aboveRatio_jqh47g$(1, 1, LensPictures_getInstance().besideRatio_jqh47g$(1, 2, s, LensPictures_getInstance().beside(t, u)), LensPictures_getInstance().besideRatio_jqh47g$(1, 2, v, LensPictures_getInstance().beside(w, x))));
  };
  Unlimited.prototype.squareLimit_6l2pn1$ = function (n, picture) {
    var cornerNW = this.corner1(n, picture);
    var $receiver = this.corner2(n, picture);
    var cornerSW = LensPictures_getInstance().turn_m1kazt$($receiver);
    var $receiver_0 = LensPictures_getInstance().turn_m1kazt$(cornerNW);
    var cornerSE = LensPictures_getInstance().turn_m1kazt$($receiver_0);
    var $receiver_1 = LensPictures_getInstance().turn_m1kazt$(cornerSW);
    var cornerNE = LensPictures_getInstance().turn_m1kazt$($receiver_1);
    var sideN = this.side1(n, picture);
    var $receiver_2 = this.side2(n, picture);
    var sideW = LensPictures_getInstance().turn_m1kazt$($receiver_2);
    var $receiver_3 = LensPictures_getInstance().turn_m1kazt$(sideN);
    var sideS = LensPictures_getInstance().turn_m1kazt$($receiver_3);
    var $receiver_4 = LensPictures_getInstance().turn_m1kazt$(sideW);
    var sideE = LensPictures_getInstance().turn_m1kazt$($receiver_4);
    var center = this.utile1_m1kazt$(picture);
    return this.nonet_wz4und$(cornerNW, sideN, cornerNE, sideW, center, sideE, cornerSW, sideS, cornerSE);
  };
  function Unlimited$bandify$lambda(closure$combineRatio) {
    return function (item, f) {
      var p = f.component1()
      , ratio = f.component2();
      return new Pair(closure$combineRatio(1, ratio, item, p), ratio + 1 | 0);
    };
  }
  Unlimited.prototype.bandify_1qzbic$ = function (combineRatio, n, first, middle, last) {
    var tmp$ = listOf_0(first);
    var size = n - 2 | 0;
    var list = ArrayList_init(size);
    var tmp$_0;
    tmp$_0 = size - 1 | 0;
    for (var index = 0; index <= tmp$_0; index++) {
      list.add_11rb$(middle);
    }
    var pictures = plus(tmp$, list);
    var operation = Unlimited$bandify$lambda(combineRatio);
    var accumulator = new Pair(last, 1);
    if (!pictures.isEmpty()) {
      var iterator = pictures.listIterator_za3lpa$(pictures.size);
      while (iterator.hasPrevious()) {
        accumulator = operation(iterator.previous(), accumulator);
      }
    }
    var result = accumulator.component1();
    return result;
  };
  Unlimited.prototype.egg_cuzdef$ = function (n, m, p) {
    var sideN = this.side0(n, p);
    var $receiver = LensPictures_getInstance().turn_m1kazt$(sideN);
    var sideS = LensPictures_getInstance().turn_m1kazt$($receiver);
    var center = this.utile0_m1kazt$(p);
    var topband = this.besideBand(m, sideN, sideN, sideN);
    var midband = this.besideBand(m, center, center, center);
    var botband = this.besideBand(m, sideS, sideS, sideS);
    var band = this.aboveBand(3, topband, midband, botband);
    return band;
  };
  function Unlimited$blank$lambda(f) {
    return emptyList();
  }
  function Unlimited$side0$lambda(it) {
    return it;
  }
  function Unlimited$side0$lambda_0(it) {
    return it;
  }
  function Unlimited$side1$lambda(it) {
    return it;
  }
  function Unlimited$side1$lambda_0(it) {
    return LensPictures_getInstance().rehue_m1kazt$(it);
  }
  function Unlimited$side2$lambda(it) {
    var $receiver = LensPictures_getInstance().rehue_m1kazt$(it);
    return LensPictures_getInstance().rehue_m1kazt$($receiver);
  }
  function Unlimited$side2$lambda_0(it) {
    return LensPictures_getInstance().rehue_m1kazt$(it);
  }
  Unlimited.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unlimited',
    interfaces: []
  };
  var Unlimited_instance = null;
  function Unlimited_getInstance() {
    if (Unlimited_instance === null) {
      new Unlimited();
    }
    return Unlimited_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$janbols = package$github.janbols || (package$github.janbols = {});
  var package$funfish = package$janbols.funfish || (package$janbols.funfish = {});
  package$funfish.Box = Box;
  $$importsForInline$$.app = _;
  Object.defineProperty(package$funfish, 'Boxes', {
    get: Boxes_getInstance
  });
  package$funfish.getColor_pg2qv2$ = getColor;
  package$funfish.applyStyle_svkex9$ = applyStyle;
  package$funfish.render_tgz2a6$ = render;
  package$funfish.main_kand9s$ = main;
  package$funfish.Shape = Shape;
  package$funfish.Polygon = Polygon;
  package$funfish.Curve = Curve;
  package$funfish.Bezier = Bezier;
  package$funfish.Path = Path;
  package$funfish.Line = Line;
  package$funfish.Circle = Circle;
  package$funfish.Vector = Vector;
  var package$limited = package$funfish.limited || (package$funfish.limited = {});
  Object.defineProperty(package$limited, 'Fishy', {
    get: Fishy_getInstance
  });
  Object.defineProperty(package$limited, 'Letter', {
    get: Letter_getInstance
  });
  Object.defineProperty(package$limited, 'Limited', {
    get: Limited_getInstance
  });
  Object.defineProperty(package$limited, 'Pictures', {
    get: Pictures_getInstance
  });
  package$limited.mapper_dsjtr2$ = mapper;
  package$limited.mapShape_rvktts$ = mapShape;
  package$limited.getStrokeWidth_es3rdf$ = getStrokeWidth;
  package$limited.getStyle_es3rdf$ = getStyle;
  Object.defineProperty(StyleColor, 'Black', {
    get: StyleColor$Black_getInstance
  });
  Object.defineProperty(StyleColor, 'Grey', {
    get: StyleColor$Grey_getInstance
  });
  Object.defineProperty(StyleColor, 'White', {
    get: StyleColor$White_getInstance
  });
  Object.defineProperty(StyleColor, 'Red', {
    get: StyleColor$Red_getInstance
  });
  Object.defineProperty(StyleColor, 'Brown', {
    get: StyleColor$Brown_getInstance
  });
  Object.defineProperty(StyleColor, 'Beige', {
    get: StyleColor$Beige_getInstance
  });
  Object.defineProperty(StyleColor, 'Green', {
    get: StyleColor$Green_getInstance
  });
  Object.defineProperty(StyleColor, 'Yellow', {
    get: StyleColor$Yellow_getInstance
  });
  package$limited.StyleColor = StyleColor;
  package$limited.StrokeStyle = StrokeStyle;
  package$limited.FillStyle = FillStyle;
  package$limited.Style = Style;
  package$funfish.pipe_96jf0l$ = pipe;
  package$funfish.andThen_oooac9$ = andThen;
  package$funfish.andThen_ay3x68$ = andThen_0;
  package$funfish.andThen_3r6ssh$ = andThen_1;
  package$funfish.invoke_cs64w9$ = invoke;
  package$funfish.invoke_5bvjuc$ = invoke_0;
  package$funfish.invoke_3t2rwe$ = invoke_1;
  package$funfish.invoke_el38gz$ = invoke_2;
  package$funfish.Partial = Partial;
  package$funfish.partial_287e2$ = partial;
  var package$unlimited = package$funfish.unlimited || (package$funfish.unlimited = {});
  Object.defineProperty(package$unlimited, 'Fishier', {
    get: Fishier_getInstance
  });
  Object.defineProperty(Hue, 'Blackish', {
    get: Hue$Blackish_getInstance
  });
  Object.defineProperty(Hue, 'Greyish', {
    get: Hue$Greyish_getInstance
  });
  Object.defineProperty(Hue, 'Whiteish', {
    get: Hue$Whiteish_getInstance
  });
  Object.defineProperty(Hue, 'Hollow', {
    get: Hue$Hollow_getInstance
  });
  Object.defineProperty(Hue, 'Redish', {
    get: Hue$Redish_getInstance
  });
  Object.defineProperty(Hue, 'Brownish', {
    get: Hue$Brownish_getInstance
  });
  Object.defineProperty(Hue, 'Beige', {
    get: Hue$Beige_getInstance
  });
  package$unlimited.Hue = Hue;
  package$unlimited.Lens = Lens;
  Object.defineProperty(package$unlimited, 'Lenses', {
    get: Lenses_getInstance
  });
  Object.defineProperty(package$unlimited, 'LensPictures', {
    get: LensPictures_getInstance
  });
  package$unlimited.getDefaultColor_7kj2lb$ = getDefaultColor;
  package$unlimited.getDefaultStyle_7pj7xt$ = getDefaultStyle;
  package$unlimited.getCircleStyle_7pj7xt$ = getCircleStyle;
  package$unlimited.isInnerEye_61zpoe$ = isInnerEye;
  package$unlimited.isOuterEye_61zpoe$ = isOuterEye;
  package$unlimited.getFillPathColor_7kj2lb$ = getFillPathColor;
  package$unlimited.getPathStyle_7pj7xt$ = getPathStyle;
  package$unlimited.mapNamedShape_44f0pv$ = mapNamedShape;
  Object.defineProperty(package$unlimited, 'Lizard', {
    get: Lizard_getInstance
  });
  Object.defineProperty(package$unlimited, 'Unlimited', {
    get: Unlimited_getInstance
  });
  blackStrokeStyle = new StrokeStyle(1.0, StyleColor$Black_getInstance());
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  defaultWidth = 800;
  defaultHeight = 800;
  var $receiver = withIndex(listOf([draw(getCallableRef('fittedBox', function (width, height) {
    return fittedBox(width, height);
  }), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().f])), draw(getCallableRef('fittedBox', function (width, height) {
    return fittedBox(width, height);
  }), Limited_getInstance().nonet_ydnit3$(Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().h]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().e]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().n]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().d1, Letter_getInstance().d2]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().e]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().r1, Letter_getInstance().r2]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().s]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().o1, Letter_getInstance().o2]), Pictures_getInstance().createPicture_gbxftc$([Letter_getInstance().h]))), draw(getCallableRef('expandedBox', function (width, height) {
    return expandedBox(width, height);
  }), Pictures_getInstance().createPicture_8q43mq$(Fishy_getInstance().hendersonFishShapes)), draw(getCallableRef('expandedBox', function (width, height) {
    return expandedBox(width, height);
  }), Limited_getInstance().ttile_yrm8pt$(Pictures_getInstance().createPicture_8q43mq$(Fishy_getInstance().hendersonFishShapes))), draw(getCallableRef('bandBox', function (width, height) {
    return bandBox(width, height);
  }), Limited_getInstance().egg_8to6zl$(3, 16, Pictures_getInstance().createPicture_8q43mq$(Fishy_getInstance().hendersonFishShapes)), 1200, 800), draw(getCallableRef('fittedBox', function (width, height) {
    return fittedBox(width, height);
  }), Limited_getInstance().squareLimit_jsytn9$(3, Pictures_getInstance().createPicture_8q43mq$(Fishy_getInstance().hendersonFishShapes))), draw_0(getCallableRef('expandedBox', function (width, height) {
    return expandedBox(width, height);
  }), Hue$Blackish_getInstance(), LensPictures_getInstance().createLensPicture_gakodf$(Fishier_getInstance().fishShapes)), draw_0(getCallableRef('expandedBox', function (width, height) {
    return expandedBox(width, height);
  }), Hue$Greyish_getInstance(), LensPictures_getInstance().createLensPicture_gakodf$(Fishier_getInstance().fishShapes)), draw_0(getCallableRef('expandedBox', function (width, height) {
    return expandedBox(width, height);
  }), Hue$Whiteish_getInstance(), LensPictures_getInstance().createLensPicture_gakodf$(Fishier_getInstance().fishShapes)), draw_0(getCallableRef('expandedBox', function (width, height) {
    return expandedBox(width, height);
  }), Hue$Greyish_getInstance(), LensPictures_getInstance().createLensPicture_gakodf$(Lizard_getInstance().lizardShapes)), draw_0(getCallableRef('fittedBox', function (width, height) {
    return fittedBox(width, height);
  }), Hue$Blackish_getInstance(), Unlimited_getInstance().quartet2_6l2pn1$(3, LensPictures_getInstance().createLensPicture_gakodf$(Lizard_getInstance().lizardShapes))), draw_0(getCallableRef('bandBox', function (width, height) {
    return bandBox(width, height);
  }), Hue$Hollow_getInstance(), Unlimited_getInstance().egg_cuzdef$(3, 16, LensPictures_getInstance().createLensPicture_gakodf$(Fishier_getInstance().fishShapes)), 1200, 800), draw_0(getCallableRef('fittedBox', function (width, height) {
    return fittedBox(width, height);
  }), Hue$Greyish_getInstance(), Unlimited_getInstance().squareLimit_6l2pn1$(3, LensPictures_getInstance().createLensPicture_gakodf$(Fishier_getInstance().fishShapes))), draw_0(getCallableRef('fittedBox', function (width, height) {
    return fittedBox(width, height);
  }), Hue$Brownish_getInstance(), Unlimited_getInstance().squareLimit_6l2pn1$(3, LensPictures_getInstance().createLensPicture_gakodf$(Fishier_getInstance().fishShapes)))]));
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    var pair = new Pair(element.index, element.value);
    destination.put_xwzc9p$(pair.first, pair.second);
  }
  pages = destination;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);
