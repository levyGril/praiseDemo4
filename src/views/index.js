/**
 * Created by levy on 2018/4/30.
 */

module.exports = function (templateParams) {
    var _cssList = ['vendor'];
    var webAssetsHelper = require("./webAssetsHelper")(templateParams, _cssList);

    var _html = "{% extends './layout.html' %}"+
        "{% block title %}thumb_webpack4{% endblock %}"+
        "{% block styles %}"+
        webAssetsHelper.styles+
        "{% endblock %}"+
        "{% block content %}"+
        "{% include '../widget/index.html' %}"+
        "{% endblock %}"+
        "{% block script %}"+
        webAssetsHelper.scripts+
        "{% endblock %}";
    return _html;
};