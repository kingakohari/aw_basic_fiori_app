sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myfirstproject.controller.View1", {
            onInit: function () {

            }, 
            onButtonPress: function () { 
                var inputValue = this.byId("input1").getValue()
                var welcomeText = this.getView().getModel("i18n").getResourceBundle().getText("welcomeText"); 
                sap.m.MessageToast.show(welcomeText + " " + inputValue + "!"); 
            }
        });
    });
