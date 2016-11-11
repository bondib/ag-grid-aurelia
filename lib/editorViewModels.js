// ag-grid-aurelia v6.2.0
"use strict";
/**
 * A base editor component for inline editing
 */
var BaseAureliaEditor = (function () {
    function BaseAureliaEditor() {
    }
    BaseAureliaEditor.prototype.getValue = function () {
        return this.params.value;
    };
    BaseAureliaEditor.prototype.isPopup = function () {
        return false;
    };
    return BaseAureliaEditor;
}());
exports.BaseAureliaEditor = BaseAureliaEditor;