// Algorithm taken from: http://bl.ocks.org/nbremer/df7f87361bb7e297e751
// Formula from http://mathworld.wolfram.com/HeartCurve.html

export default {
    draw: function (context) {

        context.moveTo(0,0);
        
        for (var i = 0; i < 350; i++) {
            var x, y;
            var t = i * 0.1;
            x = 16 * Math.pow(Math.sin(t), 3);
            y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            
            context.lineTo(x, y);
        }
    }
};