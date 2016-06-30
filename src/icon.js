import {path} from "d3-path";
import constant from "./constant";
import heart from "./icon/heart";

export var icons = [
    heart
];

export default function () {
    
    var type = constant(heart),
        context = null;

    function icon() {
        var buffer;
        if (!context) context = buffer = path();
        type.apply(this, arguments).draw(context);
        if (buffer) return context = null, buffer + "" || null;
    }

    icon.type = function (_) {
        return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), icon) : type;
    };


    icon.context = function (_) {
        return arguments.length ? (context = _ == null ? null : _, icon) : context;
    };

    return icon;
}