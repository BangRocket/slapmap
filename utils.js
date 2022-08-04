function constrain(n, low, high) {
	return Math.max(Math.min(n, high), low);
};

function lerp(start, stop, amt) {
	return amt * (stop - start) + start;
};

function map(
	n,
	start1,
	stop1,
	start2,
	stop2,
	withinBounds
) {
	var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
	if (!withinBounds) {
		return newval;
	}
	if (start2 < stop2) {
		return this.constrain(newval, start2, stop2);
	} else {
		return this.constrain(newval, stop2, start2);
	}
};


//=============================================================================
// type detection
//=============================================================================

is = {
	'string': function (obj) { return (typeof obj === 'string'); },
	'number': function (obj) { return (typeof obj === 'number'); },
	'bool': function (obj) { return (typeof obj === 'boolean'); },
	'array': function (obj) { return (obj instanceof Array); },
	'undefined': function (obj) { return (typeof obj === 'undefined'); },
	'func': function (obj) { return (typeof obj === 'function'); },
	'null': function (obj) { return (obj === null); },
	'notNull': function (obj) { return (obj !== null); },
	'invalid': function (obj) { return (is['null'](obj) || is.undefined(obj)); },
	'valid': function (obj) { return (!is['null'](obj) && !is.undefined(obj)); },
	'emptyString': function (obj) { return (is.string(obj) && (obj.length == 0)); },
	'nonEmptyString': function (obj) { return (is.string(obj) && (obj.length > 0)); },
	'emptyArray': function (obj) { return (is.array(obj) && (obj.length == 0)); },
	'nonEmptyArray': function (obj) { return (is.array(obj) && (obj.length > 0)); },
	'document': function (obj) { return (obj === document); },
	'window': function (obj) { return (obj === window); },
	'element': function (obj) { return (obj instanceof HTMLElement); },
	'event': function (obj) { return (obj instanceof Event); },
	'link': function (obj) { return (is.element(obj) && (obj.tagName == 'A')); }
}

//=============================================================================
// type coersion
//=============================================================================

to = {
	'bool': function (obj, def) { if (is.valid(obj)) return ((obj == 1) || (obj == true) || (obj == "1") || (obj == "y") || (obj == "Y") || (obj.toString().toLowerCase() == "true") || (obj.toString().toLowerCase() == 'yes')); else return (is.bool(def) ? def : false); },
	'number': function (obj, def) { if (is.valid(obj)) { var x = parseFloat(obj); if (!isNaN(x)) return x; } return (is.number(def) ? def : 0); },
	'string': function (obj, def) { if (is.valid(obj)) return obj.toString(); return (is.string(def) ? def : ''); }
}


export { lerp, map, is, to };