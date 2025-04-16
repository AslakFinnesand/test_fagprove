sap.ui.define([
   "./BaseController",
   "sap/m/MessageBox"
], function (BaseController, MessageBox) {
   "use strict";
   
   return BaseController.extend("test.fagprove.controller.LanuchPad", {
      onInit: function () {

      },
      onGenericTilePress: async function (event) {
         this.getRouter().navTo("teamcalendar");
      },

   });
});