/**
*
* WEIO Web Of Things Platform
* Copyright (C) 2013 Nodesign.net, Uros PETREVSKI, Drasko DRASKOVIC
* All rights reserved
*
*               ##      ## ######## ####  #######  
*               ##  ##  ## ##        ##  ##     ## 
*               ##  ##  ## ##        ##  ##     ## 
*               ##  ##  ## ######    ##  ##     ## 
*               ##  ##  ## ##        ##  ##     ## 
*               ##  ##  ## ##        ##  ##     ## 
*                ###  ###  ######## ####  #######
*
*                    Web Of Things Platform
*
* This file is part of WEIO and is published under BSD license.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
* 1. Redistributions of source code must retain the above copyright
*    notice, this list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright
*    notice, this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. All advertising materials mentioning features or use of this software
*    must display the following acknowledgement:
*    This product includes software developed by the WeIO project.
* 4. Neither the name WeIO nor the
*    names of its contributors may be used to endorse or promote products
*    derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY WEIO PROJECT AUTHORS AND CONTRIBUTORS ''AS IS'' AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL WEIO PROJECT AUTHORS AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
* Authors : 
* Uros PETREVSKI <uros@nodesign.net>
* Drasko DRASKOVIC <drasko.draskovic@gmail.com>
*
**/


$( document ).ready(function() {
    // Get country list
    $.getJSON('data/countries.json', function(data) {
            var confFile = data;
            //console.log(confFile[0][1]);
            
            $("#countries").empty();
            for (var i=0; i<confFile.length; i++) {
                $("#countries").append('<option value="'+confFile[i][1]+'">'+confFile[i][0]+'</option>');
            }
    });

    // Get timezone list
    $.getJSON('data/timezones.json', function(data) {
            var confFile = data;
            
            $("#timezones").empty();
            for (var i=0; i<confFile.length; i++) {
                var value2 = '';
                var value3 = '';
                if(confFile[i].value2){
                    value2 =  ','+confFile[i].value2;
                }  
                if(confFile[i].value3){
                    value3 = ','+confFile[i].value3;
                }
                $("#timezones").append('<option value="'
                        +confFile[i].value1+value2+value3+'">'
                        +confFile[i].region+' / '+confFile[i].city+'</option>');
            }

    });

// Inform user about timezone (changes will be applayed after system reboot) when they change selectbox
$('#timezones').on('change', function() {
   $("#timezone-msg").show();
});


});

$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
