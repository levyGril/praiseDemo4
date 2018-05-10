/**
 * Created by levy on 2018/4/30.
 */

module.exports = function (templateParams) {
    var _cssList = ['vendor'];
    var webAssetsHelper = require("./webAssetsHelper")(templateParams, _cssList);

    var _html = ""+
        "{% block content %}"+
        "{% include '../widget/thumb.html' %}"+
        "{% endblock %}"+
        "{% block script %}"+
        webAssetsHelper.scripts+
        "{% endblock %}";
    return _html;
};