sap.ui.define([], function () {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        numberUnit : function (sValue) {
            if (!sValue) {
                return "";
            }
            return parseFloat(sValue).toFixed(2);
        },
        DateFormat:function(date){
            var newDate;
            if(date !== "" && date !== undefined && date !== null && date !== "00000000"){
                newDate = date.substring(4, 6)+"/"+date.substring(6, 8)+"/"+date.substring(0, 4);               
            }else {
                newDate = "";
            }
            return newDate;
        },
        TimeFormat:function(Time){
            var newTime;
            if(Time !== "" && Time !== undefined && Time !== null && Time !== "000000"){               
                newTime = Time.substring(0, 2)+":"+Time.substring(2, 4)+":"+Time.substring(4,6);                            
            }else {
                newTime = "";
            }
            return newTime;
        },
        FlagFormat:function(Flag){
            var newFlag;
            if(Flag === false){               
                newFlag = "";                           
            }else {
                newFlag = "X";
            }
            return newFlag;
        },
        YearFormat:function(val){
            var newVal;
            if(val === "0000"){
                newVal = "";
            }else{
                newVal = val;
            }
            return newVal;
        }

    };

});