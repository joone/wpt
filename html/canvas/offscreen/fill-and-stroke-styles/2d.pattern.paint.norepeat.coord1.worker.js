// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.pattern.paint.norepeat.coord1
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 50, 50);
  ctx.fillStyle = '#f00';
  ctx.fillRect(50, 0, 50, 50);

  var response = await fetch('/images/green.png')
  var blob = await response.blob();
  var img = await createImageBitmap(blob);
  var pattern = ctx.createPattern(img, 'no-repeat');
  ctx.fillStyle = pattern;
  ctx.translate(50, 0);
  ctx.fillRect(-50, 0, 100, 50);

  _assertPixel(canvas, 1,1, 0,255,0,255);
  _assertPixel(canvas, 98,1, 0,255,0,255);
  _assertPixel(canvas, 1,48, 0,255,0,255);
  _assertPixel(canvas, 98,48, 0,255,0,255);
  t.done();
}, "");
done();
